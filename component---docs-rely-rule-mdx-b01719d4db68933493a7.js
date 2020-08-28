(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"/eDX":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return d})),n.d(t,"default",(function(){return u}));var a=n("Fcif"),r=n("+I+c"),l=n("/FXl"),c=n("TjRS"),o=n("ZFoC"),b=n("/Jqd"),d=(n("aD51"),{});void 0!==d&&d&&d===Object(d)&&Object.isExtensible(d)&&!d.hasOwnProperty("__filemeta")&&Object.defineProperty(d,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"docs/RelyRule.mdx"}});var f={_frontmatter:d},m=c.a;function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)(m,Object(a.a)({},f,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"relyrule"},"RelyRule"),Object(l.b)("p",null,"添加值关联计算规则的组件。"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { RelyRule } from '@sinoui/rx-form-state';\n")),Object(l.b)("h2",{id:"基本用法"},"基本用法"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"<RelyRule\n  relyFields={['B', 'C']}\n  relyFn={(draft) => {\n    draft.A = draft.B + draft.C + 3;\n  }}\n/>\n")),Object(l.b)("p",null,"注意，此组件只能在表单上下文中使用。如："),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"<Form state={formState}>\n  <RelyRule\n    relyFields={['B', 'C']}\n    relyFn={(draft) => {\n      draft.A = draft.B + draft.C + 3;\n    }}\n  />\n</Form>\n")),Object(l.b)("p",null,"或者："),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"<FormStateContext.Provider value={formState}>\n  <RelyRule\n    relyFields={['B', 'C']}\n    relyFn={(draft) => {\n      draft.A = draft.B + draft.C + 3;\n    }}\n  />\n</FormStateContext.Provider>\n")),Object(l.b)("h2",{id:"本质"},"本质"),Object(l.b)("p",null,"此组件只是简单封装了一下 ",Object(l.b)("inlineCode",{parentName:"p"},"formState.addRelyRule")," 方法，相当于："),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"function FormDemo() {\n  const formState = useFormState();\n\n  useEffect(() => {\n    return formState.addRelyRule(['B', 'C'], (draft) => {\n      draft.A = draft.B + draft.C;\n    });\n  }, [formState]);\n}\n")),Object(l.b)("h2",{id:"属性"},"属性"),Object(l.b)(o.d,{of:b.a,mdxType:"Props"}))}void 0!==u&&u&&u===Object(u)&&Object.isExtensible(u)&&!u.hasOwnProperty("__filemeta")&&Object.defineProperty(u,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"docs/RelyRule.mdx"}}),u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---docs-rely-rule-mdx-b01719d4db68933493a7.js.map