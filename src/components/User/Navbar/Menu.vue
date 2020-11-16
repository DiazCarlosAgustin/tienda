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
                <div v-if="auth" class="d-flex d-lg-none justify-content-center">
                    <b-nav-item-dropdown text="Usuario" class="text-center w-100" right>
                        <router-link class="nav-link nav-item" to="/perfil">Perfil</router-link>
                        <router-link class="nav-link nav-item" to="/favoritos">Favoritos</router-link>
                        <router-link class="nav-link nav-item" to="/mis_compras">Mis compras</router-link>
                        <router-link class="nav-link nav-item" to="/mis_compras" @click="logOut">Cerrar session</router-link>
                    </b-nav-item-dropdown>
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
                <div v-if="auth">
                    <b-nav-item-dropdown text="Usuario" right>
                        <router-link class="nav-link nav-item" to="/perfil">Perfil</router-link>
                        <router-link class="nav-link nav-item" to="/favoritos">Favoritos</router-link>
                        <router-link class="nav-link nav-item" to="/mis_compras">Mis compras</router-link>
                        <span class="nav-link nav-item" @click="logOut">Cerrar session</span>
                    </b-nav-item-dropdown>
                </div>
                <router-link v-else to="/acceder" class="nav-link nav-item">Acceder</router-link>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>
<script>
import {mapState, mapActions} from 'vuex'
export default {
    data() {
        return {
        }
    },
    computed: {
        ...mapState({
            auth: state => state.user.auth,
            user: state => state.user.user,
        }),
    },
    methods: {
        ...mapActions({
            logOut: 'user/deleteSession'
        })

    },
}
</script>