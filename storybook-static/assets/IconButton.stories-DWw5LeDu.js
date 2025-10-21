import{j as r}from"./jsx-runtime-uHNn0Cvc.js";import"./iframe-mQwHA9vC.js";import"./preload-helper-PPVm8Dsz.js";const y="_iconButton_1rapx_3",g="_primary_1rapx_11",k="_secondary_1rapx_16",_="_disabled_1rapx_21",x="_opacity_1rapx_26",f="_small_1rapx_31",B="_medium_1rapx_36",v="_large_1rapx_41",b="_extraLarge_1rapx_46",e={iconButton:y,primary:g,secondary:k,disabled:_,opacity:x,small:f,medium:B,large:v,extraLarge:b};function l({variant:o,size:a,disabled:m,icon:d,onClick:p,className:u}){return r.jsx("button",{className:`${e.iconButton} ${u||""} ${o==="primary"?e.primary:""} ${o==="secondary"?e.secondary:""} ${o==="disabled"?e.disabled:""} ${o==="opacity"?e.opacity:""}
      } ${a==="small"?e.small:""} ${a==="medium"?e.medium:""} ${a==="large"?e.large:""} ${a==="extraLarge"?e.extraLarge:""} ${m?e.disabled:""}
      `,onClick:p,disabled:m,children:d})}l.__docgenInfo={description:"",methods:[],displayName:"IconButton",props:{variant:{required:!0,tsType:{name:"union",raw:'"primary" | "secondary" | "disabled" | "opacity"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"disabled"'},{name:"literal",value:'"opacity"'}]},description:""},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large" | "extraLarge"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'},{name:"literal",value:'"extraLarge"'}]},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},icon:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"e"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const s=({className:o,isBookmarked:a=!1})=>r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",className:o,children:r.jsx("path",{d:"M5 20.6445V4.2C5 4.08954 5.08954 4 5.2 4H18.8C18.9105 4 19 4.08954 19 4.2V20.6445C19 20.8004 18.8294 20.8964 18.6961 20.8154L12.1039 16.81C12.04 16.7712 11.96 16.7712 11.8961 16.81L5.30385 20.8154C5.17057 20.8964 5 20.8004 5 20.6445Z",stroke:a?"black":"white",fill:a?"black":"none"})});s.__docgenInfo={description:"",methods:[],displayName:"BookmarkIcon",props:{className:{required:!1,tsType:{name:"string"},description:""},isBookmarked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const I={title:"Components/IconButton",component:l,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["primary","secondary","disabled","opacity"],description:"버튼의 스타일을 지정합니다."},size:{control:{type:"select"},options:["small","medium","large","extraLarge"],description:"버튼의 크기를 지정합니다."},disabled:{control:{type:"boolean"}},onClick:{action:"clicked"},className:{control:{type:"text"}}}},t={args:{icon:r.jsx(s,{isBookmarked:!1}),variant:"primary",size:"medium"}},n={args:{icon:r.jsx(s,{isBookmarked:!1}),variant:"opacity",size:"medium"}},i={args:{icon:r.jsx(s,{isBookmarked:!1}),variant:"secondary",size:"medium"}},c={args:{icon:r.jsx(s,{isBookmarked:!1}),variant:"disabled",size:"medium"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    icon: <BookmarkIcon isBookmarked={false} />,
    variant: "primary",
    size: "medium"
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    icon: <BookmarkIcon isBookmarked={false} />,
    variant: "opacity",
    size: "medium"
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    icon: <BookmarkIcon isBookmarked={false} />,
    variant: "secondary",
    size: "medium"
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    icon: <BookmarkIcon isBookmarked={false} />,
    variant: "disabled",
    size: "medium"
  }
}`,...c.parameters?.docs?.source}}};const $=["Primary","Opacity","Secondary","Disabled"];export{c as Disabled,n as Opacity,t as Primary,i as Secondary,$ as __namedExportsOrder,I as default};
