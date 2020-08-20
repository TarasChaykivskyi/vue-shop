import Vue from 'vue'
import Vuex from 'vuex'
import navigation from './modules/navigation'
import products from './modules/products'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        navigation,
        products
    },
    state: {
        title: 'Site Title',
    },
    getters: {
        title(state) {
            return state.title
        }
    }
})
