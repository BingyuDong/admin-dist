import{d as e}from"./pinia-4b2ef30a.js";import{a as r}from"./axios-9048dd51.js";import{r as s}from"./index-ef1c5e6c.js";import{E as t}from"./element-plus-4fb390ec.js";import{r as o}from"./@vue-a87a2c7f.js";const a=r.create({withCredentials:!0,timeout:1e4,baseURL:"/api"});a.interceptors.request.use((e=>{let r=n().token;return r&&(e.headers[""]=r),e}),(e=>Promise.reject(e))),a.interceptors.response.use((e=>200===e.status?0==e.data.code?Promise.resolve(e.data):(t.error(e.data.msg||"请求错误"),Promise.reject(e)):Promise.reject(e)),(e=>{const{response:r}=e;if(r)return((e,r)=>{switch(e){case 500:t.error("服务器异常");break;case 400:t.error("信息校验失败");break;case 401:t.error("认证失败");break;case 403:t.error("token校验失败");break;case 404:t.error("请求的资源不存在");break;default:t.error(r)}})(r.status,r.data),Promise.reject(r);t.error("请求失败")}));const i={login:async e=>{const{data:r}=await a.post("/user/login",e);return r}},n=e("userStore",(()=>{let e=o(""),r=o(""),a=o();return{token:e,userInfo:a,login:async o=>{const a=await i.login(o);e.value=a.token,r.value=a.userId,t.success("登陆成功！"),s.push("/")},logOut:()=>{e.value="",r.value="",t.success("退出成功！"),s.push("/login")}}}),{persist:{enabled:!0,strategies:[{key:"userStore",storage:localStorage}]}});export{n as u};
