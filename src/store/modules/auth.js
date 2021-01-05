// import qs from 'qs'
import api from '@/api'
import router from '@/router'
const state = {
    token: ""
}

const getters = {
    hasToken: state => {
        return state.token != ""
    }
}

const actions = {
    login:() => {
        api.login()
    },
    handleCallback: ({commit}) => {
        commit('setToken', "tokenValue")
        console.log('test')
        router.push({name: 'Home'})
    },
    logout: ({commit}) => {
        commit('setToken', "")
    }
}

const mutations = {
    setToken: (state, token) => {
        state.token = token
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
