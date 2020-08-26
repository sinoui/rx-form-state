import { BehaviorSubject } from 'rxjs';
import { useState, useEffect, useRef, useDebugValue } from 'react';
import { get } from 'lodash';
import shallowequal from 'shallowequal';

function getValue<State, Value>(
  valueState: State,
  selector?: string | ((state: State) => Value),
) {
  if (!selector) {
    return valueState;
  }
  if (typeof selector === 'string') {
    return get(valueState, selector);
  }
  return selector(valueState);
}

/**
 * 从BehaviorSubject中提取数据
 *
 * @template State 主题中存储数据的接口
 * @template Value 返回值数据接口
 * @param {BehaviorSubject<State>} subject 主题
 * @param {(string | ((state: State) => Value))} [selector] 数据路径或者数据提取器（选择器）。可以为undefined，表示返回整个主题数据。
 * @param {(itemA: Value, itemB: Value) => boolean} [isEqual] 值相等性比较。默认为浅比较。
 * @returns {Value} 返回提取到的数据
 *
 * 参考：https://github.com/facebook/react/tree/master/packages/use-subscription
 */
function useBehaviorSubject<State, Value>(
  subject: BehaviorSubject<State>,
  selector?: string | ((state: State) => Value),
  isEqual: (itemA: Value, itemB: Value) => boolean = shallowequal,
): Value {
  const [state, setState] = useState(() => ({
    value: getValue(subject.value, selector),
    subject,
    selector,
  }));

  let valueToReturn = state.value;
  if (state.subject !== subject || state.selector !== selector) {
    valueToReturn = getValue(subject.value, selector);

    setState({
      value: valueToReturn,
      subject,
      selector,
    });
  }

  useDebugValue(valueToReturn);

  const isEqualRef = useRef(isEqual);

  if (isEqualRef.current !== isEqual) {
    isEqualRef.current = isEqual;
  }

  useEffect(() => {
    let didUnsubscribe = false;
    const subscription = subject.subscribe((valueState) => {
      if (didUnsubscribe) {
        return;
      }
      const value = getValue(valueState, selector);

      setState((prevState) => {
        if (prevState.selector !== selector || prevState.subject !== subject) {
          return prevState;
        }

        if (isEqualRef.current(prevState.value, value)) {
          return prevState;
        }

        return { ...prevState, value };
      });
    });

    return () => {
      didUnsubscribe = true;
      subscription.unsubscribe();
    };
  }, [subject, selector]);

  return valueToReturn;
}

export default useBehaviorSubject;
