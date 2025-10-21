import{j as l}from"./jsx-runtime-CMwMLBeS.js";import"./iframe-Dpx-A5y6.js";import"./preload-helper-PPVm8Dsz.js";const _="_button_1a3wq_3",g="_primary_1a3wq_16",x="_secondary_1a3wq_21",b="_tertiary_1a3wq_26",v="_disabled_1a3wq_31",q="_outlined_1a3wq_36",w="_small_1a3wq_42",h="_medium_1a3wq_49",O="_large_1a3wq_56",$="_extraLarge_1a3wq_63",f="_icon_1a3wq_70",T="_textOnly_1a3wq_77",e={button:_,primary:g,secondary:x,tertiary:b,disabled:v,outlined:q,small:w,medium:h,large:O,extraLarge:$,icon:f,textOnly:T};function u({children:d,variant:a,size:r,disabled:c,className:p,onClick:y,icon:m}){return l.jsxs("button",{className:`${e.button} ${p||""} ${a==="secondary"?e.secondary:""} ${a==="tertiary"?e.tertiary:""} ${a==="primary"?e.primary:""} ${r==="small"?e.small:""} ${r==="medium"?e.medium:""} ${r==="large"?e.large:""} ${r==="extraLarge"?e.extraLarge:""} ${a==="disabled"?e.disabled:""} ${a==="outlined"?e.outlined:""} ${a==="textOnly"?e.textOnly:""}
      } ${c?e.disabled:""}
        `,onClick:y,disabled:c,children:[d&&l.jsx("span",{children:d}),m&&l.jsx("div",{className:e.icon,children:m})]})}u.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{required:!1,tsType:{name:"union",raw:`| "primary"
| "secondary"
| "tertiary"
| "disabled"
| "outlined"
| "textOnly"`,elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"tertiary"'},{name:"literal",value:'"disabled"'},{name:"literal",value:'"outlined"'},{name:"literal",value:'"textOnly"'}]},description:""},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large" | "extraLarge"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'},{name:"literal",value:'"extraLarge"'}]},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const R={title:"Components/Button",component:u,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:{type:"radio"},options:["primary","secondary","tertiary","disabled","outlined","textOnly"],description:"버튼의 스타일을 지정합니다."},size:{control:{type:"select"},options:["small","medium","large","extraLarge"],description:"버튼의 크기를 지정합니다."},onClick:{action:"clicked"},className:{control:{type:"text"}}}},t={args:{variant:"primary",size:"medium",children:"Primary Button"}},n={args:{variant:"secondary",size:"medium",children:"Secondary Button"}},i={args:{variant:"tertiary",size:"medium",children:"Tertiary Button"}},s={args:{variant:"outlined",size:"medium",children:"Outlined Button"}},o={args:{variant:"primary",size:"medium",disabled:!0,children:"Disabled"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: "medium",
    children: "Primary Button"
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "secondary",
    size: "medium",
    children: "Secondary Button"
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "tertiary",
    size: "medium",
    children: "Tertiary Button"
  }
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "outlined",
    size: "medium",
    children: "Outlined Button"
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: "medium",
    disabled: true,
    children: "Disabled"
  }
}`,...o.parameters?.docs?.source}}};const S=["Primary","Secondary","Tertiary","Outlined","Disabled"];export{o as Disabled,s as Outlined,t as Primary,n as Secondary,i as Tertiary,S as __namedExportsOrder,R as default};
