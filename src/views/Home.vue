<template>
<div>
      <v-row justify="center">
      <e-toolbar />
    </v-row>
  
    <HelloWorld />

</div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld";
import Toolbar from "@/components/Toolbar"
export default {
components:{
    EToolbar: Toolbar,
    HelloWorld
}
}
</script>

<style>

</style>