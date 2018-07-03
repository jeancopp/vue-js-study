<template>
    <div>
        <b-card-group deck>
            <div v-for="foto in fotos">
                <b-card :title="foto.titulo"
                    :img-src="foto.url"
                    :img-alt="foto.titulo"
                    img-top
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2">
                    <b-button :to="{ name: 'cadastro-foto-alterar', params: {id: foto._id } }" variant="primary">Alterar</b-button>
                    <b-button href="#" variant="primary">Remover</b-button>
                </b-card>
            </div>
        </b-card-group deck>
    </div>
</template>

<script>
    import ListagemFotoService from './ListagemFotoService.js';

    export default {
        data(){
            return { 
                fotos : []
            }
        },
        created() {
            let service = new ListagemFotoService(this.$http);
            service.listar( json => this.fotos = json );
        },
        methods(){
            return {
                gerarLink : f => `/cadastro/foto/${f._id}`
            } 
        }
    }
</script>

<style scoped>
    
</style>