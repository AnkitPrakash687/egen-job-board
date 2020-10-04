<template>

  <v-app class="app">
   
      <v-app-bar
        app
        color="primary"
        dark
        class="pr-sm-16 pl-sm-16 pb-sm-16 pr-xs-0 pl-xs-0 rounded-bl-xl"
        height="100"
        absolute
      >
        <div class="d-flex ">
          <div class="text-weight-bold text-h6  ">devJobs</div>
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
      
  
        <v-row justify="center"  >
          
        <v-row class="toolbar">
          <v-sheet style="width: 70vw; height: auto" rounded elevation="4">
            <v-row>
              <v-col sm="4" xs="12" class="pa-0 pt-sm-2 pb-sm-2 pl-4 pr-4">
                <v-text-field solo hide-details full-width flat height="40px"  label="Filter by title, componies, expertise..."> </v-text-field>
              </v-col>
       
              <div class="vertical-divider d-none d-sm-flex" />
              <v-col sm="4" xs="12" class="d-none d-sm-flex pa-0 pt-2">
                <v-text-field solo hide-details full-width flat label="Filter by location"> </v-text-field>
              </v-col>
               <div class="vertical-divider d-none d-sm-flex" />
              <v-col class="d-none d-sm-flex pa-0 pt-2 pb-2" xs="12">
                <v-row>
                  <v-col cols="12" class="pa-0 pl-2">
                    <v-row justify="center">
                      <v-col cols="6" class="pb-0 pt-0">
                <v-checkbox
                label="Full Time Only"
                :ripple="false"
                >
                </v-checkbox>
                      </v-col>
                      <v-col cols="4" class="pa-0 pt-2">
                  <v-btn color="primary" large>Search
                </v-btn>
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
              </v-col>
  
            </v-row>
          </v-sheet>
        </v-row>
      </v-row>
       <v-main class="main">
        <HelloWorld />
   </v-main>
 
  </v-app>

</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

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

<style scoped>


.toolbar {
  position: absolute;
  z-index: 1000;
  top: 7%;
}

.vertical-divider {
  border-left: 2px solid lightgray;
}
</style>
