import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        product_list: []
    },

    mutations:{
        SET_PRODUCT_LIST (state, product_list) {
            state.product_list = product_list;
        }
    },

    actions: {
        
    },

    getters: {
        
    }
})