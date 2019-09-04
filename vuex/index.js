import Vue from 'vue'
import Vuex from 'vuex';

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
        
    }
})

export default store;