import{r as m,a as A,b as c,c as E,d as _,e as y,f as g}from"./form.76809a74.js";import{d as h,y as C,l as u,r as i,o as k,c as D,w as t,a as r,k as d,a6 as w,a7 as I,G as p}from"./vendor.66b1fd00.js";var b=h({name:"BaseFormView",setup(){const a=C(),o=u(null);function v(){var e;((e=o.value)==null?void 0:e.validator())&&(n.value=!0,setTimeout(()=>{var l;n.value=!1,a.success("\u63D0\u4EA4\u6210\u529F\uFF0C\u53C2\u6570\u4E3A\uFF1A"+JSON.stringify((l=o.value)==null?void 0:l.generatorParams()))},3e3))}const B=[{label:"\u4F1A\u8BAE\u540D\u79F0",key:"name",required:!0,value:u(null),render:e=>m(e.value,{placeholder:"\u8BF7\u8F93\u5165\u4F1A\u8BAE\u540D\u79F0",clearable:!0}),validator:(e,l)=>e.value.value?!0:(l.error("\u8BF7\u8F93\u5165\u4F1A\u8BAE\u540D\u79F0"),!1)},{label:"\u4E0E\u4F1A\u9886\u5BFC",key:"leader",value:u(null),render:e=>A(e.value,[{label:"\u5F20\u603B",value:"\u5F20\u603B"},{label:"\u738B\u603B",value:"\u738B\u603B"},{label:"\u5404\u79CD\u603B",value:"\u5404\u79CD\u603B"}])},{label:"\u4F1A\u8BAE\u7C7B\u578B",key:"meetType",required:!0,value:u(null),optionItems:[{label:"\u666E\u901A",value:"0"},{label:"\u7D27\u6025",value:"1"}],render:e=>c(e.value,e.optionItems,{placeholder:"\u8BF7\u9009\u62E9\u4F1A\u8BAE\u7C7B\u578B",clearable:!0})},{label:"\u662F\u5426\u8FDC\u7A0B",key:"remote",value:u(null),render:e=>E(e.value,"\u4E0D\u9700\u8981")},{label:"\u6240\u9700\u8BBE\u5907",key:"equipment",value:u(["tv"]),render:e=>_(e.value,[{label:"\u7535\u89C6",value:"tv"},{label:"\u6295\u5F71\u4EEA",value:"touying"},{label:"\u7535\u8111",value:"compute"}])},{label:"\u4F1A\u8BAE\u5185\u5BB9",key:"content",value:u(null),render:e=>m(e.value,{placeholder:"\u8BF7\u8F93\u5165\u4F1A\u8BAE\u5185\u5BB9",maxlength:10})},{label:"\u8D77\u6B62\u65E5\u671F",key:"startEndDate",value:u([Date.now(),Date.now()]),render:e=>y(e.value,{type:"daterange",style:"width: 100%"})},{label:"\u5F00\u59CB\u65F6\u95F4",key:"startTime",value:u(null),render:e=>g(e.value)},{label:"\u8D77\u6B62\u5730\u70B9",key:"address",value:u(null),optionItems:[{label:"\u4F1A\u8BAE\u4E00\u5BA4",value:1},{label:"\u4F1A\u8BAE\u4E8C\u5BA4",value:2},{label:"\u4F1A\u8BAE\u4E09\u5BA4",value:3},{label:"\u4F1A\u8BAE\u56DB\u5BA4",value:4}],render:e=>c(e.value,e.optionItems,{placeholder:"\u8BF7\u9009\u62E9\u4F1A\u8BAE\u5730\u70B9",clearable:!0})},{label:"\u4E0E\u4F1A\u4EBA\u5458",key:"joinMemeber",value:u(null),optionItems:[{label:"\u5F20\u4E09",value:1},{label:"\u674E\u56DB",value:2},{label:"\u738B\u4E94",value:3},{label:"\u8D75\u516D",value:4}],render:e=>c(e.value,e.optionItems,{placeholder:"\u8BF7\u9009\u62E9\u4E0E\u4F1A\u4EBA\u5458",clearable:!0})},{label:"\u4F1A\u8BAE\u5907\u6CE8",key:"remark",value:u(null),render:e=>m(e.value,{placeholder:"\u8BF7\u8F93\u5165\u4F1A\u8BAE\u5907\u6CE8",type:"textarea",rows:3})}],F={labelWidth:100,size:"medium",labelAlign:"right"},n=u(!1),s=u(!0);return{dataForm:o,formConfig:F,formItems:B,submitLoading:n,submit:v,show:s}}});const j={class:"form-wrapper",style:{width:"95%"}},x={class:"flex justify-end"},T=p(" \u63D0\u4EA4 "),V=p(" \u9690\u85CF "),$={class:"form-wrapper"},z={class:"flex justify-end"},N=p(" \u63D0\u4EA4 ");function P(a,o,v,B,F,n){const s=i("DataForm"),e=i("n-button"),l=i("n-card"),f=i("n-space");return k(),D(f,{vertical:""},{default:t(()=>[r(l,{title:"\u8BF7\u586B\u5199\u4F1A\u8BAE\u57FA\u672C\u4FE1\u606F\uFF08\u9884\u8BBE\uFF1Agrid-item\uFF09\uFF0C\uFF08\u4EE5\u4E0B\u8868\u5355\u4FE1\u606F\u662F\u52A8\u6001\u751F\u6210\uFF09","content-style":{padding:"10px"},"header-style":{padding:"10px"},segmented:!0},{default:t(()=>[d("div",j,[r(s,{ref:"dataForm",preset:"grid-item",options:a.formItems,"form-config":a.formConfig},null,8,["options","form-config"]),d("div",x,[r(e,{loading:a.submitLoading,type:"primary",size:"small",onClick:a.submit},{default:t(()=>[T]),_:1},8,["loading","onClick"])])])]),_:1}),r(l,{title:"\u8BF7\u586B\u5199\u4F1A\u8BAE\u57FA\u672C\u4FE1\u606F\uFF08\u9884\u8BBE\uFF1Aform-item\uFF09\uFF0C\uFF08\u4EE5\u4E0B\u8868\u5355\u4FE1\u606F\u662F\u52A8\u6001\u751F\u6210\uFF09","content-style":{padding:"10px"},"header-style":{padding:"10px"},segmented:!0},{"header-extra":t(()=>[r(e,{type:"primary",size:"small",onClick:o[0]||(o[0]=S=>a.show=!a.show)},{default:t(()=>[V]),_:1})]),default:t(()=>[w(d("div",$,[r(s,{ref:"dataForm",options:a.formItems,"form-config":a.formConfig},null,8,["options","form-config"]),d("div",z,[r(e,{loading:a.submitLoading,type:"primary",size:"small",onClick:a.submit},{default:t(()=>[N]),_:1},8,["loading","onClick"])])],512),[[I,a.show]])]),_:1})]),_:1})}b.render=P;b.__scopeId="data-v-132fbadc";export{b as default};