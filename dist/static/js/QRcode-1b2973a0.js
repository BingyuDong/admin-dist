import{Q as o,n as e}from"./element-plus-4fb390ec.js";import{_ as r}from"./form.vue_vue_type_script_setup_true_lang-545330d1.js";import{Q as t}from"./qrcode.vue-a29e50ab.js";import{d as l,o as s,c as n,V as i,r as p,P as a,u as m}from"./@vue-a87a2c7f.js";import"./lodash-es-3d6dbac5.js";import"./@element-plus-4fb40093.js";import"./@popperjs-b78c3215.js";import"./@ctrl-91de2ec7.js";import"./dayjs-53faf157.js";import"./async-validator-cf877c1f.js";import"./memoize-one-63ab667a.js";import"./escape-html-d8f7a771.js";import"./normalize-wheel-es-3222b0a2.js";import"./@floating-ui-24fcdcc4.js";const c={class:"qr_code"},d=l({__name:"index",props:{QRcodeOptions:{}},setup(o){const e=o;return(o,r)=>(s(),n("div",c,[i(t,{level:"H",value:e.QRcodeOptions.value,size:e.QRcodeOptions.size,margin:e.QRcodeOptions.margin,foreground:e.QRcodeOptions.fontcolor,background:e.QRcodeOptions.bgcolor},null,8,["value","size","margin","foreground","background"])]))}}),u={class:""},f=l({__name:"QRcode",setup(t){let l=p({model:{value:"QRcode",margin:1,size:200,bgcolor:"#fff",fontcolor:"#000"},"label-position":"top",rules:{}}),c=p([{label:"内容",prop:"value",controlName:"input",bindControlOptions:{placeholder:"请输入内容",type:"textarea"}},{label:"边距",prop:"margin",controlName:"input-number",bindControlOptions:{placeholder:"请输入边距",min:0}},{label:"宽度",prop:"size",controlName:"input-number",bindControlOptions:{placeholder:"请输入宽度",step:10,min:100,max:400}},{label:"颜色",prop:"fontcolor",controlName:"color-picker",bindControlOptions:{placeholder:"请选择颜色"}},{label:"背景色",prop:"bgcolor",controlName:"color-picker",bindControlOptions:{placeholder:"请选择背景色"}}]);return(t,p)=>{const f=o,b=e;return s(),n("div",u,[i(b,{class:"mb-2"},{default:a((()=>[i(f,{title:"基于qrcode.vue实现",type:"warning",closable:!1})])),_:1}),i(b,null,{default:a((()=>[i(d,{QRcodeOptions:m(l).model},null,8,["QRcodeOptions"])])),_:1}),i(b,{class:"mt-2"},{default:a((()=>[i(r,{"form-options":m(l),"form-item-options-list":m(c)},null,8,["form-options","form-item-options-list"])])),_:1})])}}});export{f as default};
