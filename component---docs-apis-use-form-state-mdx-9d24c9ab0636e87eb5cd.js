(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"58U0":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return O})),a.d(t,"default",(function(){return p}));var n=a("Fcif"),b=a("+I+c"),l=(a("mXGw"),a("/FXl")),r=a("TjRS"),c=a("ZFoC"),i=a("xIpy"),m=a("IUht"),d=a("hh+d"),O=(a("aD51"),{});void 0!==O&&O&&O===Object(O)&&Object.isExtensible(O)&&!O.hasOwnProperty("__filemeta")&&Object.defineProperty(O,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"docs/apis/useFormState.mdx"}});var j={_frontmatter:O},o=r.a;function p(e){var t,a=e.components,p=Object(b.a)(e,["components"]);return Object(l.b)(o,Object(n.a)({},j,p,{components:a,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"useformstate"},"useFormState"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"useFormState"),"是用来创建表单状态管理器对象的自定义 React Hook。通过表单状态管理器对象，我们可以管理与表单相关的状态，包括："),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"表单值"),Object(l.b)("li",{parentName:"ul"},"表单校验状态"),Object(l.b)("li",{parentName:"ul"},"表单提交状态")),Object(l.b)("p",null,"引用："),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"import { useFormState } from '@sinoui/rx-form-state';\n")),Object(l.b)("h2",{id:"使用方式"},"使用方式"),Object(l.b)("p",null,"注意：因为",Object(l.b)("inlineCode",{parentName:"p"},"useFormState"),"是 React Hook，所以必须在 React 函数组件中使用。"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"import { useFormState } from '@sinoui/rx-form-state';\n\nfunction FormDemo() {\n  const initialValue = {}; // 表单默认值\n  const options = {}; // 创建表单状态管理器的配置\n  const formState = useFormState(initialValue, options);\n}\n")),Object(l.b)("p",null,"通过",Object(l.b)("inlineCode",{parentName:"p"},"useFormState()"),"产生的",Object(l.b)("inlineCode",{parentName:"p"},"formState"),"往往会与",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"api-form-state-context-component"}),"FormStateContext"),"结合在一起使用，将",Object(l.b)("inlineCode",{parentName:"p"},"formState"),"通过 React 上下文的方式共享到子组件："),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),'import React from \'react\';\nimport { useFormState, FormStateContext, Field } from \'@sinoui/rx-form-state\';\n\nfunction FormDemo() {\n  const initialValue = {}; // 表单默认值\n  const options = {}; // 创建表单状态管理器的配置\n  const formState = useFormState(initialValue, options);\n\n  return (\n    <FormStateContext.Provider value={formState}>\n      <form>\n        <label>\n          姓名:\n          <Field as="input" name="userName" required />\n        </label>\n        <label>\n          年龄：\n          <Field as="input" name="age" required />\n        </label>\n      </form>\n    </FormStateContext.Provider>\n  );\n}\n')),Object(l.b)("p",null,"看一下演示效果："),Object(l.b)(c.c,{__position:0,__code:'() => {\n  const formState = useFormState()\n  return (\n    <FormStateContext.Provider value={formState}>\n      <form>\n        <div>\n          <label>\n            姓名：\n            <Field as="input" name="userName" required />\n          </label>\n        </div>\n        <div>\n          <label>\n            年龄：\n            <Field as="input" name="age" required />\n          </label>\n        </div>\n      </form>\n    </FormStateContext.Provider>\n  )\n}',__scope:(t={props:p,DefaultLayout:r.a,Playground:c.c,useFormState:i.a,FormStateContext:m.a,Field:d.a},t.DefaultLayout=r.a,t._frontmatter=O,t),mdxType:"Playground"},(function(){var e=Object(i.a)();return Object(l.b)(m.a.Provider,{value:e},Object(l.b)("form",null,Object(l.b)("div",null,Object(l.b)("label",null,"姓名：",Object(l.b)(d.a,{as:"input",name:"userName",required:!0,mdxType:"Field"}))),Object(l.b)("div",null,Object(l.b)("label",null,"年龄：",Object(l.b)(d.a,{as:"input",name:"age",required:!0,mdxType:"Field"})))))})),Object(l.b)("h2",{id:"方法参数"},"方法参数"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"useFormState"),"方法声明如下："),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"useFormState<T>(initialValues: T = {}, options?: FormStateOptions<T>): FormState;\n")),Object(l.b)("p",null,"方法的第一个参数",Object(l.b)("inlineCode",{parentName:"p"},"initialValues"),"是初始的表单值，可以不指定，默认为",Object(l.b)("inlineCode",{parentName:"p"},"{}"),"。方法的第二个参数",Object(l.b)("inlineCode",{parentName:"p"},"options"),"是表单状态管理器的配置，有如下配置选项："),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"配置项"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"类型"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"描述"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"validate"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"`(value:any,values: T) => FormStateErrors"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"undefined`")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"onSubmit"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"`(values: T, formState: FormState) => Promise","<","any",">"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"void`")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"relys"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"RelyRule<T>[]")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"指定表单域值关联逻辑。")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"enableReinitialize"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"boolean")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"是否监听",Object(l.b)("inlineCode",{parentName:"td"},"initialValues"),"值变更，如果发生变更，则重新应用新的表单初始值。默认为",Object(l.b)("inlineCode",{parentName:"td"},"true"),"，表示启用。")))),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"relys"),"是用来指定表单域值关联计算的规则，例如："),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"const relys = [\n  // 规则1：A = B + C\n  [\n    'B',\n    'C',\n    (draft) => {\n      draft.A = draft.B + draft.C;\n    },\n  ],\n  // 规则2：E = D\n  [\n    'D',\n    (draft) => {\n      draft.E = draft.D;\n    },\n  ],\n  // 规则3：F = A * E\n  [\n    'A',\n    'E',\n    (draft) => {\n      draft.F = draft.A * draft.E;\n    },\n  ],\n];\n")),Object(l.b)("p",null,"也可以通过 ",Object(l.b)("inlineCode",{parentName:"p"},"addRelyRule")," 动态添加值关联规则，如下所示："),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"const formState = useFormState();\n\nuseEffect(() => {\n  const remove = formState.addRelyRule(['B', 'C'], (draft) => {\n    draft.A = draft.B + draft.C;\n  });\n\n  return remove; // 返回移除校验规则的函数\n}, [formState]);\n")),Object(l.b)("h2",{id:"表单状态管理器对象formstate"},"表单状态管理器对象",Object(l.b)("inlineCode",{parentName:"h2"},"formState")),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"useFormState()"),"返回",Object(l.b)("inlineCode",{parentName:"p"},"formState"),"表单状态管理器对象。通过",Object(l.b)("inlineCode",{parentName:"p"},"formState"),"，可以获取和更新表单状态。"),Object(l.b)("h2",{id:"获取表单状态"},"获取表单状态"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"formState"),"有以下属性可用来获取不同的表单状态："),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"属性名"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"类型"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"描述"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"values")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"T")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"表单值。")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"errors")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"FormStateErrors")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"表单同步验证错误状态。")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"isTouched")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"FormStateTouched")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"表单域被操作状态。")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"asyncErrors")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"FormStateErrors")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"表单异步校验错误状态。")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"isPending")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"FormStatePending")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"执行异步校验的过程状态。")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"isSubmitting")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"boolean")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"表单提交中状态。")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"isFormPending")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"boolean")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"表单是否有进行中的异步校验。")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"isValid")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"boolean")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"表单验证是否通过。")))),Object(l.b)("p",null,"通过这些属性即可获取到表单值、校验错误等状态。"),Object(l.b)("p",null,"如果你的组件关注表单状态的变更，也就是说当成组件状态使用，那么需要用到下面提供的获取表单状态的 React Hooks："),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"hook"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"类型"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"描述"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"api-use-form-submitting"}),"useFormSubmitting")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"(formState?: FormState) => void")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"获取表单提交中状态的 hook。在表单提交时特别有用。")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"api-use-form-select"}),"useFormSelect")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"<T, M>(formState: FormState<T>, selector: (FormStateModel: FormStateModel<T>) => M): M")," 或者 ",Object(l.b)("inlineCode",{parentName:"td"},"<T, M>(selector: (FormStateModel: FormStateModel<T>) => M): M")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"提取表单状态的 hook。")))),Object(l.b)("p",null,"下面通过两个例子来看一看如何使用这两个 hooks。"),Object(l.b)("h3",{id:"例子-1：在表单中使用的提交按钮"},"例子 1：在表单中使用的提交按钮"),Object(l.b)("p",null,"在表单中使用的提交按钮，我们定义为",Object(l.b)("inlineCode",{parentName:"p"},"SubmitButton"),"组件。在组件内部可以获取到",Object(l.b)("inlineCode",{parentName:"p"},"formState"),"上下文，所以无需将",Object(l.b)("inlineCode",{parentName:"p"},"formState"),"传递给上面介绍的两个 hook。如下所示："),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"function SubmitButton() {\n  const isSubmitting = useFormSubmitting();\n  const submitEnabled = useFormSelect(\n    (formStateModel) =>\n      !formStateModel.isFormPending &&\n      formStateModel.isValid &&\n      !formStateModel.isSubmitting,\n  );\n\n  return (\n    <button type=\"submit\" disabled={!submitEnabled}>\n      {isSubmitting ? '正在提交表单...' : '提交'}\n    </button>\n  );\n}\n")),Object(l.b)("p",null,"使用方式类似如："),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"const formState = useFormState();\n\n<Form formState={formState}>\n  <SubmitButton />\n</Form>;\n")),Object(l.b)("h3",{id:"例子-2：在表单外部使用的提交按钮"},"例子 2：在表单外部使用的提交按钮"),Object(l.b)("p",null,"在表单外部使用提交按钮，那么这个按钮无法从上下文中获取到",Object(l.b)("inlineCode",{parentName:"p"},"formState"),"，则需要通过属性传递给",Object(l.b)("inlineCode",{parentName:"p"},"SubmitButton"),"。代码如下："),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"function SubmitButton({ formState }: { formState: FormState }) {\n  const isSubmitting = useFormSubmitting(formState);\n  const submitEnabled = useFormSelect(\n    formState,\n    (formStateModel) =>\n      !formStateModel.isFormPending &&\n      formStateModel.isValid &&\n      !formStateModel.isSubmitting,\n  );\n\n  return (\n    <button type=\"submit\" disabled={!submitEnabled} onClick={formState.submit}>\n      {isSubmitting ? '正在提交表单...' : '提交'}\n    </button>\n  );\n}\n")),Object(l.b)("p",null,"使用方式类似如："),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"const formState = useFormState();\n\n<div>\n  <Form formState={formState}></Form>\n  <SubmitButton formState={formState} />\n</div>;\n")),Object(l.b)("h2",{id:"获取表单域状态"},"获取表单域状态"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"formState"),"提供了两个方法，用来直接获取表单域状态的："),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"方法"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"类型"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"描述"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"getFieldState")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"(fieldName: string): FieldStateModel")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"获取一个表单域状态的方法。")))),Object(l.b)("p",null,"获取到的状态有："),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"interface FieldStateModel {\n  /**\n   * 表单域名称\n   */\n  name: string;\n  /**\n   * 表单域值\n   */\n  value: any;\n  /**\n   * 表单错误\n   */\n  error?: string | null;\n  /**\n   * 表单异步错误\n   */\n  asyncError?: string | null;\n  /**\n   * 被操作状态\n   */\n  isTouched: boolean;\n  /**\n   * 异步校验过程状态\n   */\n  isPending: boolean;\n}\n")),Object(l.b)("p",null,"我们还可以通过以下自定义 hook，在组件内获取表单域状态："),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"api-use-field-state"}),"useFieldState")," - 获取单个表单域的状态"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"api-use-field-value"}),"useFieldValue")," - 获取单个表单域的值"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"api-use-field-error"}),"useFieldError")," - 获取表单域的验证错误"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"api-use-field-touched"}),"useFieldTouhed")," - 获取表单域是否被点击过的状态")),Object(l.b)("h2",{id:"更新表单状态"},"更新表单状态"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"formState"),"提供了一些方法，用来更新表单状态："),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"方法"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"类型"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"描述"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"updateState"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"(producer: (draft: FormStateModel<T>) => void): FormStateModel<T>")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"更新表单状态。")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"setValues"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"(values: T) => void")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"更新表单值。")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"setInitialValues"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"(initialValues: T) => void")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"更新表单初始值。")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"validate"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"() => boolean")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"验证表单。返回验证结果。如果有校验错误，则返回",Object(l.b)("inlineCode",{parentName:"td"},"false"),"，否则返回",Object(l.b)("inlineCode",{parentName:"td"},"true"),"。")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"setErrors"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"(errors: FormStateErrors) => void")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"设置表单校验错误")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"setTouched"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"(touched: FormStateTouched) => void")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"设置所有表单域的点击状态")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"setAsyncErrors"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"(asyncErrors: FormStateErrors) => void")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"设置异步校验错误")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"setPending"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"(isPending: FormStatePending): void")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"设置表单异步校验的过程状态")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"reset"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"(defaultValues?: T): void")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"重置表单")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"submit"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"(event?: React.FormEvent<HTMLFormElement>): Promise<any>")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"提交表单")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"setSubmitting"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"(submiting: boolean): void")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"设置提交中状态")))),Object(l.b)("p",null,"特别说明一下",Object(l.b)("inlineCode",{parentName:"p"},"updateState()"),"方法。此方法可以设置表单状态的任何地方，采用的是",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/immerjs/immer"}),"immer"),"的方法更新表单状态，例如："),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"formState.updateState((draft) => {\n  draft.values.A = '1';\n  draft.touched.A = true;\n  draft.errors.A = '必须大于2';\n});\n")),Object(l.b)("h2",{id:"更新表单域状态"},"更新表单域状态"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"formState"),"提供了一些直接操作表单域状态的方法："),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"方法"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"类型"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"描述"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"setFieldState"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"(fieldName: string, producer: (draft: FieldStateModel) => void): FieldStateModel")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"设置表单域状态")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"setFieldValue"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"(fieldName: string, value: any): void")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"设置表单域的值。")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"validateField"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"(fieldName: string): void")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"校验表单域")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"validateFields"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"(...fieldNames: string[]): Promise<boolean>")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"同时验证多个表单域")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"setFieldTouched"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"(fieldName: string, isTouched?: boolean): void")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"设置表单域的被操作状态")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"setFieldError"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"(fieldName: string, error?: string): void")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"设置表单域错误")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"setFieldPending"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"(fieldName: string, isPending: boolean): void")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"设置表单域的异步校验过程状态")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"setFieldAsyncError"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"(fieldName: string, asyncError?: string): void")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"设置表单域的异步错误")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"blur"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"(fieldName: string): void")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"处理表单域失去焦点事件")))),Object(l.b)("p",null,"除了这些方法，还可以使用",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"api-use-field"}),"useField"),"来获取一些更新表单域的方法。"),Object(l.b)("h2",{id:"表单域配置"},"表单域配置"),Object(l.b)("p",null,"通过表单域配置，可以为表单域指定校验、异步校验、值关联规则。",Object(l.b)("inlineCode",{parentName:"p"},"formState"),"提供了更新表单域配置的方法："),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"方法"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"类型"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"描述"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"addField"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"(field: FieldConfig): void")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"添加表单域配置")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"removeField"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"(fieldName: string): void")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"删除表单域配置")))),Object(l.b)("p",null,"表单域配置类型",Object(l.b)("inlineCode",{parentName:"p"},"FielConfig"),"如下："),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"export interface FieldConfig {\n  /**\n   * 表单域名称\n   */\n  name: string;\n  /**\n   * 表单域校验方法\n   *\n   * @param {*} value 表单域值\n   * @param {*} values 表单值\n   * @returns {(string | undefined | null)}\n   */\n  validate(value: any, values: any): string | undefined | null;\n  /**\n   * 表单域异步校验方法\n   *\n   * @param {*} value 表单域值\n   * @param {*} values 表单值\n   *\n   * @returns {(string | undefined | null | Promise<string | undefined>} 返回校验结果\n   */\n  asyncValidate?: (\n    value: any,\n    values: any,\n  ) => Promise<string | undefined> | undefined;\n  /**\n   * 关联字段名\n   */\n  relyFields?: string[];\n  /**\n   * 值关联计算方法\n   */\n  relyFn?: (values: any) => any;\n}\n")))}void 0!==p&&p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"docs/apis/useFormState.mdx"}}),p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---docs-apis-use-form-state-mdx-9d24c9ab0636e87eb5cd.js.map