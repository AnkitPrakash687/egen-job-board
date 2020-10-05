<template>
  <div
    app
    color="primary"
    dark
    height="100"
    class="ma-0 bg-primary bottom-left-rounded-sm"
  >
    <v-container class="app-con">
      <v-row>
        <v-col class="mt-2">
          <v-row justify="center">
            <div class="text-weight-bold text-h6">devJobs</div>
          </v-row>
        </v-col>
        <v-spacer></v-spacer>
        <v-col>
          <v-row justify="center">
            <v-switch
              :input-value="darkMode"
              inset
              :ripple="false"
              color="accent"
              dense
              @change="toggleTheme()"
            >
            </v-switch>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
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
};
</script>

<style>
.bg-primary {
  background-color: var(--v-primary-base);
}

.app-con {
  max-width: 1200px !important;
}
@media only screen and (min-width: 600px) {
  .bottom-left-rounded-sm {
    border-bottom-left-radius: 60px;
  }
}
</style>
