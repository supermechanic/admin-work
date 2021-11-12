import{d as e,bq as a,br as s,bs as l,bt as o,bu as i,m as n,u as c,b as r,A as t,f as d,t as u,v as p,r as g,o as v,c as m,a as f,j as h,k as b,I as w}from"./vendor.9a8d1981.js";import{a as y,u as _,p as k,l as x,D as L,b as I}from"./index.2fde549f.js";var j=e({name:"Login",components:{PhoneIcon:a,PasswordIcon:s,LogoGithub:l,LogoAlipay:o,LogoWechat:i},setup(){const e=n("admin"),a=n("123456"),s=n(!0),l=n(!1),o=c(),i=r(),u=y(),p=t(),g=_();return{isMobileScreen:d((()=>g.state.device===L.MOBILE)),username:e,password:a,autoLogin:s,loading:l,onLogin:()=>{l.value=!0,k({url:x,data:{username:e.value,password:a.value}}).then((({data:e})=>{u.dispatch("user/saveUser",e).then((()=>{o.replace({path:i.query.redirect?i.query.redirect:"/"}).then((()=>{l.value=!1}))}))})).catch((e=>{l.value=!1,p.error(e.message)}))},ImageBg1:"/admin-work/assets/img_login_bg_01.09036cb6.jpg",ImageMobileBg1:"/admin-work/assets/img_login_mobile_bg_01.13a089ee.jpg"}}});const U=b();u("data-v-6da603b6");const z={key:0,class:"login-container"},A={class:"login-bg-wrapper"},P={class:"flex form-wrapper"},B=f("div",{class:"left"},null,-1),C={class:"right"},M=f("div",{class:"flex justify-center my-width flex-sub align-center"},[f("div",{class:"logo-wrapper"},[f("img",{src:I})]),f("div",{class:"title margin-left"},"Admin Work")],-1),W={class:"mt-8 form-container"},q={class:"item-wrapper"},S={class:"mt-4 item-wrapper"},V=f("div",{class:"flex-sub"},null,-1),G={class:"mt-4"},D=w(" 登录 "),E={class:"mt-4 my-width flex-sub"},O={class:"flex justify-between"},F=w("自动登录"),H=f("a",{underline:!1,type:"primary"},"忘记密码？",-1),J={key:1,class:"m-login-container"},K=f("div",{class:"header"},[f("div",{class:"the-p"}," P "),f("div",{class:"mt-4 text-lg font-bold text-white"}," Admin Work ")],-1),N={class:"content"},Q=w(" 登录 "),R={class:"flex justify-between mt-4"},T=w("自动登录"),X=f("a",{class:"text-white",type:"primary"},"忘记密码？",-1),Y={class:"footer"},Z=w("第三方登录"),$={class:"flex justify-evenly"};p();const ee=U(((e,a,s,l,o,i)=>{const n=g("n-input"),c=g("n-button"),r=g("n-checkbox"),t=g("PhoneIcon"),d=g("n-icon"),u=g("PasswordIcon"),p=g("n-divider"),b=g("LogoAlipay"),w=g("LogoGithub"),y=g("LogoWechat");return v(),m("div",null,[e.isMobileScreen?(v(),m("div",J,[K,f("div",N,[f(n,{round:"",placeholder:"请输入用户名/手机号",size:"large",value:e.username,"onUpdate:value":a[4]||(a[4]=a=>e.username=a)},{prefix:U((()=>[f(d,null,{default:U((()=>[f(t)])),_:1})])),_:1},8,["value"]),f(n,{class:"mt-10",round:"",placeholder:"请输入密码",size:"large",value:e.password,"onUpdate:value":a[5]||(a[5]=a=>e.password=a),type:"password","show-password-toggle":"",maxlength:8},{prefix:U((()=>[f(d,null,{default:U((()=>[f(u)])),_:1})])),_:1},8,["value"]),f(c,{class:"mt-20",round:"",type:"primary",block:"",loading:e.loading,onClick:e.onLogin},{default:U((()=>[Q])),_:1},8,["loading","onClick"]),f("div",R,[f(r,{checked:e.autoLogin,"onUpdate:checked":a[6]||(a[6]=a=>e.autoLogin=a),color:"#fff"},{default:U((()=>[T])),_:1},8,["checked"]),X])]),f("div",Y,[f(p,null,{default:U((()=>[Z])),_:1}),f("div",$,[f(d,{color:"#c3c3c3",size:"30"},{default:U((()=>[f(b)])),_:1}),f(d,{color:"#c3c3c3",size:"30"},{default:U((()=>[f(w)])),_:1}),f(d,{color:"#c3c3c3",size:"30"},{default:U((()=>[f(y)])),_:1})])])])):(v(),m("div",z,[f("div",A,[f("img",{src:e.ImageBg1},null,8,["src"])]),f("div",P,[B,f("div",C,[M,f("div",W,[f("div",q,[f(n,{value:e.username,"onUpdate:value":a[1]||(a[1]=a=>e.username=a),placeholder:"请输入用户名/手机号","prefix-icon":"el-icon-user",clearable:""},null,8,["value"])]),f("div",S,[f(n,{value:e.password,"onUpdate:value":a[2]||(a[2]=a=>e.password=a),placeholder:"请输入密码",type:"password",clearable:"","prefix-icon":"el-icon-lock"},null,8,["value"])]),h(' <div class="item-wrapper">\n            <VawVerify class="mt-4" @verify-success="onVerifySuccess" />\n          </div> '),V,f("div",G,[f(c,{type:"primary",class:"login",loading:e.loading,onClick:e.onLogin},{default:U((()=>[D])),_:1},8,["loading","onClick"])])]),f("div",E,[f("div",O,[f(r,{checked:e.autoLogin,"onUpdate:checked":a[3]||(a[3]=a=>e.autoLogin=a)},{default:U((()=>[F])),_:1},8,["checked"]),H])])])])]))])}));j.render=ee,j.__scopeId="data-v-6da603b6";export default j;