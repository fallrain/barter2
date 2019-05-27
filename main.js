import Vue from 'vue';
import App from './App';
import store from './store';
import '@/static/fonts/iconfont.css';
import '@/static/css/base.scss';
import '@/static/css/common.scss';
import {hGet, hPost, hPostForm} from '@/lib/request';
import BValidate from '@/lib/bValidate/BValidate';
import directives from './directive';

const config = require('./config/index.js')['test'];
Vue.prototype.envConfig = config;
Vue.config.productionTip = false;
Vue.prototype.hGet = hGet;
Vue.prototype.hPost = hPost;
Vue.prototype.hPostForm = hGet;
Vue.prototype.BValidate = BValidate;

for (let name in directives) {
  Vue.directive(name, directives[name]);
}
App.mpType = 'app';
const app = new Vue({
  store,
  ...App
});
app.$mount();
