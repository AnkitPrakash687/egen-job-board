<template>
  <v-app  >
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
<style >
.v-application{
 background: var(--v-secondary-base) !important;
}

</style>


