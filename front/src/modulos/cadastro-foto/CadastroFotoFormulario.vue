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
      <b-button type="reset" variant="danger">Limpar</b-button>
    </b-form>
  </div>
</template>

<script>
import FotoModel from "./FotoModel.js";

export default {
  data () {
    return {
      foto: new FotoModel({ nome : "", url :""}),
      show: true
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.foto));
    },
    onReset (evt) {
      this.foto = new FotoModel({ nome : "", url :""});
      this.show = false;
      this.$nextTick(() => { this.show = true });
    }
  }
}
</script>

<style scoped lang="scss">
    #cadastro {
       margin: 20px 40px 80px 15px;
    }
</style>