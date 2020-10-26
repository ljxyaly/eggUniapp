import Vue from 'vue'
import App from './App'
import api from './api'

// 将api挂载在vue的原型上
Vue.prototype.$api = api;

import uView from "uview-ui";
Vue.use(uView);

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()

// 小程序端重写console.error监听promise未捕获的错误
// #ifdef MP
// console.error = function(){
//   [...arguments].map(item => {
// 	  let str = item.replace(/\n/g,' ');
// 	  if(str.indexOf('(in promise) MiniProgramError') !== -1){
// 		  console.log(`UNHANDLED PROMISE REJECTION: ${str.toString().substr(29)}`);
// 	  }else{
// 		  console.error(...arguments);
// 	  }
//   })
// }
// #endif

// 非小程序端全局监测promise未捕获的错误
// #ifndef MP
window.addEventListener("unhandledrejection", event => {
  console.log(`UNHANDLED PROMISE REJECTION: ${JSON.stringify(event.reason)}`);
  event.preventDefault();
},false);
// #endif