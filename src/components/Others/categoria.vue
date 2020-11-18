<template>
    <div class="col-6 col-md-4 col-lg-3 my-3">
        <a href="">
            <div class="card shadow">
                <div class="card-img-top">
                    <img src="https://images.unsplash.com/photo-1505308144658-03c69861061a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="Categoria" srcset="">
                </div>
                <div class="card-title">
                    Nombre categoria
                </div>
            </div>
        </a>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    a > .card{
        text-decoration: none;
        color: gray;
    }
    a:hover{
        text-decoration: none;
    }
    .card-img-top img {
        width: 100%;
        height: 100%;
    }
    .card-title{
        text-align:center;
        margin: auto 0;
        font-size: 1.1rem;
        padding-top: 15px;
        padding-bottom: 15px;
    }
</style>