<template>
  <v-app class="app">
    <e-app-bar />
       <router-view />
  </v-app>
</template>

<script>

import AppBar from "@/components/layout/AppBar";

export default {
  name: "App",

  components: {

    EAppBar: AppBar,

  },


};
</script>


