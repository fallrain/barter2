import Vue from 'vue'
import App from './App'
import store from './store'
import '@/static/fonts/iconfont.css';
import '@/static/css/base.scss';
import '@/static/css/common.scss';
import {hGet, hPost, hPostForm} from '@/lib/request';

const config = require('./config/index.js')['dev'];
Vue.prototype.envConfig = config;
Vue.config.productionTip = false;
Vue.prototype.hGet = hGet;
Vue.prototype.hPost = hGet;
Vue.prototype.hPostForm = hGet;

App.mpType = 'app';
const app = new Vue({
  store,
  ...App
});
app.$mount();
