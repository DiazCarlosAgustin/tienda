<template>
    <b-navbar toggleable="lg" variant="faded" type="light">
        <b-navbar-brand>
            Shop!
        </b-navbar-brand>
        <div class="d-lg-none d-flex">
            <div class="px-2 my-auto nav-item">
                <b-icon icon="search"></b-icon>
            </div>
            <div class="px-3 my-auto nav-item">
                <b-icon icon="bag"></b-icon>
            </div>
            <b-navbar-toggle target="navbar-collapse">
                <b-icon  icon="list"></b-icon>
            </b-navbar-toggle>
        </div>
        <b-collapse id="navbar-collapse" is-nav>
            <b-navbar-nav class="text-center">
                <router-link class="nav-link nav-item" to="/">Inicio</router-link>
                <router-link class="nav-link nav-item" to="/tienda">Tienda</router-link>
                <router-link class="nav-link nav-item" to="/contacto">Contacto</router-link>
                <div v-if="user != null" class="d-flex d-lg-none justify-content-center">
                    <span class="nav-link nav-item" v-b-toggle.sidebar-user>{{user.nombre}}</span>
                </div>
                <router-link v-else class="d-flex d-lg-none nav-item nav-link justify-content-center" to="/acceder">Acceder</router-link>
            </b-navbar-nav>
            <b-navbar-nav class="ml-auto d-none d-lg-flex">
                <div class="px-2 my-auto nav-item">
                    <b-icon icon="search"></b-icon>
                </div>
                <div class="px-3 my-auto nav-item">
                    <b-icon icon="bag"></b-icon>
                </div>
                <div v-if="user != null">
                    <span class="nav-link nav-item" v-b-toggle.sidebar-user>{{user.nombre}}</span>
                </div>
                <router-link v-else to="/acceder" class="nav-link nav-item">Acceder</router-link>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>
<script>
import {mapState} from 'vuex'
export default {
    data() {
        return {
        }
    },
    computed: {
        ...mapState({
            user: state => state.user.user,
        }),
    },
    methods: {

    },
}
</script>
<style lang="scss" scoped>
nav{
    background-color: white;
    box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1);
}
</style>