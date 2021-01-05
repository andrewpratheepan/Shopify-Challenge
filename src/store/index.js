import Vuex from 'vuex'
import Vue from 'vue'
import auth from '@/store/modules/auth'
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        auth
    },
    plugins: [createPersistedState()]
})