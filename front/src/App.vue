<template>
  <div id="app">
    <menu-principal></menu-principal>
    <router-view></router-view>
  </div>
</template>

<script>
import MenuPrincipal from "./modulos/menu/MenuPrincipal";
import {routes} from "./routes"
export default {

  name: 'app',
  data() {
    return {
      routes
    }
  },
  components : {
    "menu-principal" : MenuPrincipal
  }
}
</script>

<style lang="scss" scoped>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  color: #2c3e50;

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
