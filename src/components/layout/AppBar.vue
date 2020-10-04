<template>
  <v-app-bar
      app
      color="primary"
      dark
      class="pr-sm-16 pl-sm-16 pb-sm-16 pr-xs-0 pl-xs-0 rounded-bl-xl"
      height="100"
      absolute
    >
      <div class="d-flex">
        <div class="text-weight-bold text-h6">devJobs</div>
      </div>

      <v-spacer></v-spacer>

      <v-switch
        :input-value="darkMode"
        inset
        :ripple="false"
        color="accent"
        dense
        @change="toggleTheme()"
      >
      </v-switch>
    </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    darkMode: false,
  }),

  methods: {
    toggleTheme() {
      this.darkMode = !this.darkMode;
      this.$vuetify.theme.dark = this.darkMode;
    },
  },
}
</script>

<style>

</style>