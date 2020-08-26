(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{kOAN:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return j}));var n=a("Fcif"),b=a("+I+c"),l=a("/FXl"),r=a("TjRS"),c=(a("aD51"),{});void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"docs/apis/useField.mdx"}});var i={_frontmatter:c},O=r.a;function j(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(l.b)(O,Object(n.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"usefield"},"useField"),Object(l.b)("p",null,"获取表单域状态和设置表单域状态方法的 hook。"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"imoprt { useField } from '@sinoui/rx-form-state';\n\nfunction FieldDemo() {\n  const field = useField('userName');\n\n  // ...\n}\n")),Object(l.b)("h2",{id:"usefield-返回的属性和方法"},"useField 返回的属性和方法"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"属性或方法"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"类型"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"描述"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"name"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"string")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"表单域名称")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"value"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"T")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"表单域的值")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"error"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"`string"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"null`")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"asyncError"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"`string"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"null`")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"isTouched"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"boolean")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"表单域被操作过的状态")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"isPending"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"boolean")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"异步校验中状态")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"formState"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"FormState")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"表单状态管理器对象")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"addField"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"(fieldConfig: fieldConfig) => void")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"向 formState 添加表单域配置")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"removeField"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"() => void")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"从 formState 中移除表单域配置")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"setFieldValue"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"(value: T) => void")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"设置表单域的值。")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"blur"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"() => void")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"表单域失去焦点的回调函数。")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"validateField"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"() => void")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"验证表单域。")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"setFieldState"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"(producer: (draft: FieldStateModel<T>) => void) => FieldStateModel<T>")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"设置表单域的状态。")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"setFieldTouched"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"(isTouched?: boolean) => void")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"设置表单域的被操作状态。")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"setError"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"(error?: string) => void")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"设置表单域的验证错误。")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"setAsyncError"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"(asyncError?: string) => void")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"设置异步校验错误。")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"setFieldPending"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"(isPending: boolean) => void")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"设置表单域异步校验中状态。")))),Object(l.b)("h2",{id:"关联"},"关联"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"api-use-field-state"}),"useFieldState")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"api-field-component"}),"Field")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"api-use-field-error"}),"useFieldError")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"api-use-field-value"}),"useFieldValue")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"api-use-field-touched"}),"api-use-field-touched"))))}void 0!==j&&j&&j===Object(j)&&Object.isExtensible(j)&&!j.hasOwnProperty("__filemeta")&&Object.defineProperty(j,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"docs/apis/useField.mdx"}}),j.isMDXComponent=!0}}]);
//# sourceMappingURL=component---docs-apis-use-field-mdx-126f79a09b0e904203a0.js.map