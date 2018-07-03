<template>
    <div>
        <div class="menu">
            <b-navbar toggleable="md">
                <b-button to="/cadastro/foto/novo" variant="primary">Nova Foto</b-button>
                <b-form-input size="md" class="mr-sm-8" type="text" placeholder="Entre com o título da foto"/>
            </b-navbar>
        </div>
        <div class="listagem">
            <listagem />
        </div>
    </div>
</template>

<script>
    import ListagemFoto from './ListagemFoto'
    export default {
        
        components : {
            "listagem" : ListagemFoto
        }
    }
</script>

<style scoped>
    
</style>