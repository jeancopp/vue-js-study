<template>
    <div id="cadastro-foto">
        <b-row>
            <b-col md="2" offset="1">
                <b-button to="/cadastro/foto/novo" variant="primary">Nova Foto</b-button>
            </b-col>
            <b-col md="6">
                <b-form-input size="md" class="mr-sm-8" type="text" placeholder="Entre com o título da foto"/>
            </b-col>
        </b-row>
        <b-row id="listagem-foto">
            <listagem />
        </b-row>
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

<style lang="scss" scoped>
    #cadastro-foto {
        margin-top: 10px
    }
    #listagem-foto{
        margin-top: 10px
    }
    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>