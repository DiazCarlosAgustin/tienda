<template>
    <div class="container h-100 w-100 d-flex justify-content-center">
        <div class="row d-flex justify-content-center w-100 mt-5">
        <div class="col-12 col-md-6 col-lg-4">
            <b-form @submit.prevent="login">
                <b-form-group id="labelEmail" label="Email" label-for="Email"> 
                    <b-form-input id="Email" v-model="user.email" type="email" required placeholder="Email"></b-form-input>
                </b-form-group>
                <b-form-group id="labelPassword" label="Password" label-for="Password"> 
                    <b-form-input id="Password" v-model="user.password" type="password" required placeholder="Password"></b-form-input>
                </b-form-group>
                <b-form-group> 
                    <router-link to="/olvide_mi_clave">Olvide mi contraseña</router-link>
                </b-form-group>
                <b-form-group class="w-100 text-center"> 
                    <router-link class="btn btn-light w-100 btn-md"  to="/registrarse">No tengo una cuenta</router-link>
                </b-form-group>
                <b-form-group class="w-100 text-center">
                    <b-button type="submit" class="btn btn-md w-100"  variant="primary">Aceptar</b-button>
                </b-form-group>
            </b-form>
        </div>
    </div>
    </div>
</template>
<script>
import axios from 'axios'
import vue from 'vue'
var bus = new vue()
import { mapMutations, mapActions  } from 'vuex'
export default {
    data() {
        return {
            user:{
                email:'',
                password:''
            },
            alert:{
                msg:'',
                variant:'',
                dismissSecs: 5,
                dismissCountDown: 0
            }
        }
    },
    methods:{
        ...mapMutations({
            SET_TOKEN:'user/SET_TOKEN'
            }),
        ...mapActions({
            getUser: 'user/getUser',
            newAlert: 'alert/newAlert'
        }),
        async login(){
            const res = await axios.post('http://127.0.0.1:3000/auth/login', this.user)
            if(res.data.token){
                this.alert.msg = res.data.msg
                this.alert.variant = 'success'
                bus.$emit('showAlert', this.alert)
                this.SET_TOKEN(res.data.token)
                this.getUser()
                this.$router.replace('/')
            }
        },
    }
}
</script>