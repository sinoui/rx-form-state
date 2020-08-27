(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{hvsW:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return c})),n.d(t,"default",(function(){return f}));var a=n("Fcif"),o=n("+I+c"),i=n("mXGw"),r=n("/FXl"),l=n("TjRS"),s=n("ZFoC"),m=n("xIpy"),u=n("IUht"),b=n("hh+d"),c=(n("aD51"),{});void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"docs/form-initial-values-and-reset.mdx"}});var p={_frontmatter:c},d=l.a;function f(e){var t,n=e.components,f=Object(o.a)(e,["components"]);return Object(r.b)(d,Object(a.a)({},p,f,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"表单初始值与重置"},"表单初始值与重置"),Object(r.b)("h2",{id:"设置表单初始值"},"设置表单初始值"),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"api-use-form-state"}),Object(r.b)("inlineCode",{parentName:"a"},"useFormState(initialValues, options)")),"的第一个参数是表单初始值，它的基本用法是："),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { useFormState } from '@sinoui/rx-form-state';\n\nfunction FormDemo() {\n  const initialValues = {\n    userName: '张三',\n    favs: ['篮球', '足球'],\n  };\n  const formState = useFormState(initialValues);\n}\n")),Object(r.b)("p",null,"有时应用需要去服务器端加载表单数据，例如："),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"import useRestItemApi from '@sinoui/use-rest-item-api';\nimport { useFormState } from '@sinoui/rx-form-state';\n\nfunction FormDemo() {\n  const restState = useRestItemApi('/users', '1');\n  const formState = useFormState(restState.data);\n}\n")),Object(r.b)("p",null,"默认情况下，",Object(r.b)("inlineCode",{parentName:"p"},"useFormState"),"会监听",Object(r.b)("inlineCode",{parentName:"p"},"initialValues"),"参数的变化，使用深比较的方式判断有变化后，会重新应用表单初始值，所以，下面的代码可能会出现问题："),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { useFormState } from '@sinoui/rx-form-state';\n\nfunction FormDemo() {\n  const initialValues = {\n    day: new Date(), // 😔🔴 每次FormDemo重绘时，day总是一个新的值。\n  };\n  const formState = useFormState(initialValues); // 😔🔴 在FormDemo重绘时，会出现表单值丢失情况\n}\n")),Object(r.b)("p",null,"每次",Object(r.b)("inlineCode",{parentName:"p"},"FormDemo"),"重绘时，",Object(r.b)("inlineCode",{parentName:"p"},"initialValues.day"),"都是一个新的值，这样",Object(r.b)("inlineCode",{parentName:"p"},"formState"),"总是会应用新的",Object(r.b)("inlineCode",{parentName:"p"},"initialValues"),"，将表单值设置为",Object(r.b)("inlineCode",{parentName:"p"},"initialValues"),"。可能我们已经在表单中填写了一些数据，但是由于",Object(r.b)("inlineCode",{parentName:"p"},"FormDemo"),"发生重绘，会导致已填写的数据丢失。"),Object(r.b)("p",null,"这种情况我们可以不监听",Object(r.b)("inlineCode",{parentName:"p"},"initialValues"),"的变化："),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { useFormState } from '@sinoui/rx-form-state';\n\nfunction FormDemo() {\n  const initialValues = {\n    day: new Date(),\n  };\n  const formState = useFormState(initialValues, {\n    enableReinitialize: false, // ✅ 不监听initialValues的变化\n  });\n}\n")),Object(r.b)("p",null,"或者缓存",Object(r.b)("inlineCode",{parentName:"p"},"initialValues"),"："),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { useMemo } from 'react';\nimport { useFormState } from '@sinoui/rx-form-state';\n\nfunction FormDemo() {\n  // ✅ 缓存initialValues\n  const initialValues = useMemo(\n    () => ({\n      day: new Date(),\n    }),\n    [],\n  );\n\n  const formState = useFormState(initialValues);\n}\n")),Object(r.b)("p",null,"与",Object(r.b)("inlineCode",{parentName:"p"},"@sinoui/use-rest-item-api"),"结合使用时，可以这样处理："),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"import useRestItemApi from '@sinoui/use-rest-item-api';\nimport { useFormState } from '@sinoui/rx-form-state';\n\nfunction FormDemo() {\n  const userId = '1';\n  const initialValues = {\n    day: new Date(),\n  };\n  const restState = useRestItemApi('/users', userId, initialValues); // ✅ useRestItemApi不会监听initialValues的变化\n  const formState = useFormState(restState.data);\n}\n")),Object(r.b)("h2",{id:"表单重置"},"表单重置"),Object(r.b)("p",null,"调用",Object(r.b)("inlineCode",{parentName:"p"},"formState.reset"),"方法重置表单。例如："),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),'import React from \'react\';\nimport { useFormState, FormStateContext, Field } from \'@sinoui/rx-form-state\';\n\nfunction FormDemo() {\n  const initialValues = { userName: \'张三\', note: \'这是初始化数据\' };\n  const formState = useFormState(initialValues);\n\n  return (\n    <FormStateContext.Provider value={formState}>\n      <form>\n        <label>用户名</label>\n        <Field as="input" name="userName" />\n\n        <label>密码</label>\n        <Field as="input" name="password" type="password" />\n\n        <label>年龄</label>\n        <Field as="input" name="age" type="number" />\n\n        <label>备注</label>\n        <Field as="input" name="note" />\n      </form>\n      <button onClick={() => formState.reset()}>重置</button>\n    </FormStateContext.Provider>\n  );\n}\n')),Object(r.b)("p",null,"运行效果："),Object(r.b)(s.c,{__position:0,__code:'() => {\n  const initialValues = {\n    userName: \'张三\',\n    note: \'这是初始化数据\',\n    password: \'\',\n    age: \'\',\n  }\n  const formState = useFormState(initialValues)\n  return (\n    <FormStateContext.Provider value={formState}>\n      <>\n        <form>\n          <label>用户名</label>\n          <Field as="input" name="userName" />\n          <label>密码</label>\n          <Field as="input" name="password" type="password" />\n          <label>年龄</label>\n          <Field as="input" name="age" type="number" />\n          <label>备注</label>\n          <Field as="input" name="note" />\n        </form>\n        <button onClick={() => formState.reset()}>重置</button>\n      </>\n    </FormStateContext.Provider>\n  )\n}',__scope:(t={props:f,DefaultLayout:l.a,Playground:s.c,useFormState:m.a,FormStateContext:u.a,Field:b.a},t.DefaultLayout=l.a,t._frontmatter=c,t),mdxType:"Playground"},(function(){var e=Object(m.a)({userName:"张三",note:"这是初始化数据",password:"",age:""});return Object(r.b)(u.a.Provider,{value:e},Object(r.b)(i.Fragment,null,Object(r.b)("form",null,Object(r.b)("label",null,"用户名"),Object(r.b)(b.a,{as:"input",name:"userName",mdxType:"Field"}),Object(r.b)("label",null,"密码"),Object(r.b)(b.a,{as:"input",name:"password",type:"password",mdxType:"Field"}),Object(r.b)("label",null,"年龄"),Object(r.b)(b.a,{as:"input",name:"age",type:"number",mdxType:"Field"}),Object(r.b)("label",null,"备注"),Object(r.b)(b.a,{as:"input",name:"note",mdxType:"Field"})),Object(r.b)("button",{onClick:function(){return e.reset()}},"重置")))})))}void 0!==f&&f&&f===Object(f)&&Object.isExtensible(f)&&!f.hasOwnProperty("__filemeta")&&Object.defineProperty(f,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"docs/form-initial-values-and-reset.mdx"}}),f.isMDXComponent=!0}}]);
//# sourceMappingURL=component---docs-form-initial-values-and-reset-mdx-cd5c5573d61493cb21a5.js.map