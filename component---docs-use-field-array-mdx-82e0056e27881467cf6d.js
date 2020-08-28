(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"0446":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return O}));var n=a("Fcif"),b=a("+I+c"),r=a("/FXl"),l=a("TjRS"),i=(a("aD51"),{});void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"docs/useFieldArray.mdx"}});var c={_frontmatter:i},d=l.a;function O(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(r.b)(d,Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"usefieldarray"},"useFieldArray"),Object(r.b)("p",null,"辅助开发嵌套表单的 Hook。"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"import { useFieldArray } from '@sinoui/rx-form-state';\n\nfunction Demo() {\n  const helpers = useFieldArray('contacts');\n\n  return (\n    <div>\n      {helpers.items.map((item) => (\n        <div>\n          <Field as=\"input\" name={helpers.getFieldName('name')} />\n        </div>\n      ))}\n    </div>\n  );\n}\n")),Object(r.b)("h2",{id:"usefieldarray-返回的属性和方法"},"useFieldArray 返回的属性和方法"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"属性、方法"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"类型"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"描述"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"items"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"T[]")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"嵌套表单列表数据。")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"push"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"(item: T) => void")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"添加一条数据。")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"insert"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"(index: number, item: T) => void")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"在指定位置插入一条数据。")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"remove"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"(index: number) => void")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"删除指定位置的数据。")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"move"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"(fromIndex: number, toIndex: number) => void")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"将数据移动到",Object(r.b)("inlineCode",{parentName:"td"},"toIndex"),"位置。")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"swap"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"(indexA: number, indexB: number) => void")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"交换",Object(r.b)("inlineCode",{parentName:"td"},"indexA"),"和",Object(r.b)("inlineCode",{parentName:"td"},"indexB"),"两个位置上的数据。")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"replace"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"(index: number, item: T) => void")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"替换数据项。")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"pop"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"() => void")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"移除数组的最后一个数据项。")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"unshift"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"(item: T) => void")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"在数组的头部添加数据项。")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"getFieldName"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"(index: number, subFieldName?: string) => void")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"获取表单域名称。")))),Object(r.b)("h2",{id:"关联"},"关联"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"api-field-array-component"}),"FieldArray")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"nest-form"}),"嵌套表单教程"))))}void 0!==O&&O&&O===Object(O)&&Object.isExtensible(O)&&!O.hasOwnProperty("__filemeta")&&Object.defineProperty(O,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"docs/useFieldArray.mdx"}}),O.isMDXComponent=!0}}]);
//# sourceMappingURL=component---docs-use-field-array-mdx-82e0056e27881467cf6d.js.map