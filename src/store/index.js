import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state = {
  isLogin:true,
  changeableNum:0
};

const getters = {   //实时监听state值的变化(最新状态)
  isShow(state){    //方法名随意,主要是来承载变化的showFooter的值
    return state.show
  },
  getChangedNum(){  //方法名随意,主要是用来承载变化的changableNum的值
    return state.changeableNum
  }
};

//对象字面量表示https://www.cnblogs.com/zhuzhenwei918/p/6013363.html

const mutations = {
  logined(state) {   //自定义改变state初始值的方法，这里面的参数除了state之外还可以再传额外的参数(变量或对象);
    state.show = true;
  },
  notLogin(state) {  //同上
    state.show = false;
  },
  newNum(state,sum){ //同上，这里面的参数除了state之外还传了需要增加的值sum
    state.changableNum+=sum;
  }
};

const actions = {
  notLogin(context){
    context.commit('hide');
  },
  logined(context){
    context.commit('show')
  },
  getNewNum(context,num){
    context.commit('newNum',num)
  }
};
const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});
export default store;
