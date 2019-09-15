import Vue from 'vue'
import Vuex from 'vuex';
import home from './modules/home';

Vue.use(Vuex);

const store=new Vuex.Store({
    state:{
        name:'maxiao'
    },
    actions:{
        
    },
    mutations:{
        updateState(state,payload){
            return {...state,...payload}
        }
    },
    modules:{
        home,
    }
})

export default store;