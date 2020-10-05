<template>
  <v-container class="job-container">
    <v-sheet height="130" rounded class="mt-n12 d-none d-lg-block">
      <v-row>
        <v-card width="130" height="130" class="elevation-0">
          <img width="130" height="130" :src="position.company_logo" />
        </v-card>
        <v-row class="ml-sm-8 mt-sm-8">
          <v-col cols="6">
            <span class="text-h6 font-weight-bold">
              {{ position.company }}
            </span>
          </v-col>
          <v-col cols="6">
            <v-row justify="center">
              <v-btn
                color="primary"
                large
                text
                class="text-capitalize secondary font-weight-bold"
                ><a
                  :href="position.company_url"
                  target="_blank"
                  class="text-decoration-none"
                  >Company Site</a
                ></v-btn
              >
            </v-row>
          </v-col>
        </v-row>
      </v-row>
    </v-sheet>
    <v-sheet class="pa-sm-8 mt-8">
      <v-row>
        <v-col sm="8" cols="12">
          <v-row class="ml-4 mb-1 pt-4">
            <span class="text-caption grey--text mr-1">
              {{ position.ago }}
            </span>
            <span class="text-caption grey--text"> &#x2022; </span>
            <span class="text-caption grey--text ml-1">{{
              position.type
            }}</span>
          </v-row>
          <v-row class="ml-4 mb-1">
            <span class="text-h5 font-weight-bold">{{ position.title }} </span>
          </v-row>
          <v-row class="ml-4">
            <span class="text-caption font-weight-bold primary--text">
              {{ position.location }}
            </span>
          </v-row>
        </v-col>
        <v-col sm="4" cols="12">
          <v-row justify-sm="center">
            <v-btn class="ml-6  mt-sm-6" large color="primary"
              ><a
                class="secondary--text text-capitalize font-weight-bold text-decoration-none"
                :href="position.url"
                target="_blank"
                >Apply Now</a
              >
            </v-btn>
          </v-row>
        </v-col>
      </v-row>
      <v-row class="ml-2 mr-2">
        <v-col cols="12">
        <span v-html="position.description"></span>
        </v-col>
      </v-row>
    </v-sheet>
    <v-sheet color="primary" class="pa-16 mt-4 rounded-lg">
      <v-row class="secondary--text font-weight-bold text-body-1">
        How to Apply
      </v-row>
      <v-row class="mt-4" id="apply">
        <div
          v-html="position.how_to_apply"
          class="secondary--text text-body-2 desc"
        ></div>
      </v-row>
    </v-sheet>
  </v-container>
</template>

<script>
export default {
  data() {
    return { position: null };
  },
  created() {
    this.position = this.$route.params.pos;
    if (!this.position) {
      this.$router.push({ name: 'home' });
    } else {
      console.log('position', this.position);
    }
  },
};
</script>

<style>
.job-container {
  max-width: 800px;
}
p > a {
  color: var(--v-secondary-base) !important;
  font-weight: bold;
}

.desc{
  
}
</style>
