import Vue from 'vue';
import Vuex from 'vuex';
import haierHouse from './haierHouse';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    haierHouse
  }
});

export default store
