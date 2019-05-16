import Vue from 'vue'
import App from './App'
import '@/static/css/base.scss';
import '@/static/css/common.scss';
import {hGet, hPost, hPostForm} from '@/lib/request';

Vue.config.productionTip = false
Vue.prototype.hGet = hGet;
Vue.prototype.hPost = hGet;
Vue.prototype.hPostForm = hGet;

App.mpType = 'app';
const app = new Vue({
  ...App
});
app.$mount();
