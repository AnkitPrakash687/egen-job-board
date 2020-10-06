<template>
  <div
    app
    color="primary"
    dark
    class="ma-0 bg-primary bottom-left-rounded-sm app-bar-height"
  >
    <v-container class="app-con pa-0">
      <v-row class="pa-0 mr-0">
        <v-col class="mt-2 ml-2">
          <v-row justify="center">
            <div class="text-weight-bold text-h5 secondary--text">devJobs</div>
          </v-row>
        </v-col>
        <v-spacer></v-spacer>
        <v-col class="mr-4">
          <v-row justify="center">

            <v-icon size="14" color="secondary" class="mr-4 mt-6">{{lightIcon}}</v-icon>
            <v-switch
              :input-value="darkMode"
              inset
              :ripple="false"
              color="accent"
              dense
              @change="toggleTheme()"
            >
            </v-switch>
            <v-icon size="14" color="secondary" class="ml-n1 mt-6">{{darkIcon}}</v-icon>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mdiWhiteBalanceSunny, mdiMoonWaningCrescent } from '@mdi/js';
export default {
  data: () => ({
    darkMode: false,
    lightIcon: mdiWhiteBalanceSunny,
    darkIcon: mdiMoonWaningCrescent
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

.app-bar-height{
  height: 120px;
}
.bg-primary {
  background-color: var(--v-primary-base);
}

.app-con {
  max-width: 1050px !important;
}
@media only screen and (min-width: 600px) {
  .bottom-left-rounded-sm {
    border-bottom-left-radius: 60px;
  }
}
</style>
