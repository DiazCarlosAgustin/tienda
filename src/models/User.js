import axios from "axios"
import cookies from 'vue-cookies'

export default {
    namespaced: true,
    state: {
        auth: false,
        user:null
    },
    getters: {
        GET_USER(state){
            return state.user
        }
    },
    mutations: {
        SET_USER(state, params){
            state.user = params
            state.auth = Boolean(state.user)
        },
        SET_TOKEN(state,token){
            cookies.set('userToken',token, '7d')
        }
    },
    actions: {
        async getUser({commit}){
            const res = await axios.get('http://127.0.0.1:3000/user/mainUser',{
                headers:{
                    'user_token': cookies.get('userToken')
                }
            })
            if(res.data.user){
                commit('SET_USER', res.data)
            }
        },
        deleteSession({commit}){
            cookies.remove('userToken', 'localhost')
            commit('SET_USER', null)
            window.location.href = '/'
        }
    }    
}
