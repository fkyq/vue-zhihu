import Vue from "vue";
import Vuex from "vuex";
import state from "./state";
import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";
Vue.use(Vuex);
console.log(getters);

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
});
