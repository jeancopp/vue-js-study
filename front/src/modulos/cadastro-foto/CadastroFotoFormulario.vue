<template>
  <div id="cadastro">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group label="Titulo:"
                    label-for="txtFotoTitulo"
                    description="Entre com o título desejado para sua foto.">
        <b-form-input id="txtFotoTitulo"
                      type="text"
                      v-model="foto.titulo"
                      required
                      placeholder="Entre com o título">
        </b-form-input>
      </b-form-group>
      <b-form-group label="Url da foto:"
                    label-for="txtFotoUrl">
        <b-form-input id="txtFotoUrl"
                      type="url"
                      v-model="foto.url"
                      required
                      placeholder="Entre com a Url da Imagem">
        </b-form-input>
      </b-form-group>
     
      <b-button type="submit" variant="primary">Enviar</b-button>
      <b-button type="reset" variant="danger" v-if="!foto._id">Limpar</b-button>
    </b-form>
    <b-alert v-if="msg" show variant="primary">{{msg}}</b-alert>
  </div>
</template>

<script>
import FotoModel from "./FotoModel.js";
import CasdastroFotoService from "./CasdastroFotoService.js";
import ListagemFotoService from './ListagemFotoService.js';

export default {
  data () {
    return {
      foto: new FotoModel({ titulo : "", url :"", _id : ""}),
      show: true,
      param : "",
      msg : "",
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault();
      this.service.salvar(this.foto).then(
        r => {
          this.msg = `${ r.status == 200 ? "Registro salvo com sucesso!" : " Não foi possível processar"}`;
          return r.json();
        }
      ).then( f => this.foto = new FotoModel(f) )
      .catch( r => console.log(r) )
    },
    onReset (evt) {
      this.foto = new FotoModel({ titulo : "", url :"", _id:""});
      this.show = false;
      this.$nextTick(() => { this.show = true });
    },
  },
  created() {
    this.service = new CasdastroFotoService({
      foto : this.$route.params,
      listagem : new ListagemFotoService(this.$http)
    });
    this.service.init(this);
  },
}
</script>

<style scoped lang="scss">
    #cadastro {
       margin: 20px 40px 80px 15px;
    }
</style>