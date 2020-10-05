<template>
  <div app color="primary" dark height="100" class="ma-0 appbar">
    <v-container>
      <v-row>
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
.appbar {
  background-color: var(--v-primary-base);
  border-bottom-left-radius: 60px;
}
</style>