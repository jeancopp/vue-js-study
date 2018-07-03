<template>
  <div>

  <b-navbar type="dark" variant="primary" toggleable>
    <b-navbar-toggle target="nav_dropdown_collapse"></b-navbar-toggle>
      <b-collapse is-nav id="nav_dropdown_collapse">
        <b-navbar-nav>
          <div v-for="route in routes">
            <b-nav-item :to="route.path">{{route.desc}}</b-nav-item>
          </div>   
        </b-navbar-nav>
      </b-collapse>
  </b-navbar>
  </div>

</template>

<script>
  import { routes } from "./../../routes.js";
  
  export default {
    name : "menu-principal",
    data(){
      return {
        "routes" : routes.filter( r => r.show )
      }
    }
  }
</script>

<style scoped>
    
</style>