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
            console.log(params)
            state.user = params
            state.auth = Boolean(state.user)
        },
        SET_TOKEN(state,token){
            cookies.set('usertoken',token, '7d')
        }
    },
    actions: {
        getUser({commit}){
            axios.get('http://127.0.0.1:3000/user/main',{
                headers:{
                    'usertoken': cookies.get('usertoken')
                }
            }).then(res => {
                if(res.data.user){
                    commit('SET_USER', res.data.user)
                }
            }).catch(err => {
                console.log(err)
            })
            
        },
        deleteSession({commit}){
            cookies.remove('usertoken', 'localhost')
            commit('SET_USER', null)
            window.location.href = '/'
        }
    }    
}
