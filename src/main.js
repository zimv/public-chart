import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import "element-ui/lib/theme-chalk/index.css";
import ElementUI from "element-ui";
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';

Vue.use(ElementUI);
Vue.config.productionTip = false


Vue.prototype.$prismJs = (js)=>{
  return Prism.highlight(
    js,
    Prism.languages.javascript,
    'javascript'
  );
};
Vue.prototype.$prismDom = (js)=>{
  return Prism.highlight(
    js,
    Prism.languages.html,
    'html'
  );
};

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
