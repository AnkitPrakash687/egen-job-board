<template>
<v-container>
  <v-row justify="center" class="toolbar ma-0 mt-n7">
        <v-sheet style="width: 70vw; height: auto" rounded elevation="4">
          <v-row>
            
            <v-col sm="4" xs="12" class="pa-0 pt-sm-2 pb-sm-2 pl-4 pr-4">
              <v-row>
                <v-col cols="2" class="mt-1 ml-1 pa-0">
              <v-icon class="ml-6 mt-4 hidden-xs-only" size="24">$vuetify.icons.search</v-icon>
                </v-col>
                <v-col class="ma-0 mt-1 pa-0" xs="6">
              <v-text-field
                solo
                hide-details
                full-width
                flat
                height="40px"
                label="Filter by title, componies, expertise..."
                @input="inputTitle"
              >
              </v-text-field>
                </v-col>
                <v-col cols="2 mr-8" class="d-flex d-sm-none">
                  <v-btn color="primary" small class="my-0 py-5" @click="search">
                    <v-icon >$vuetify.icons.search</v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </v-col>

            <div class="vertical-divider d-none d-sm-flex" />
            <v-col sm="4" xs="12" class="d-none d-sm-flex pa-0 pt-2">
              <v-row>
                <v-col cols="2" class="mt-2">
                  <v-icon class="ml-6 mt-0 hidden-xs-only" size="24">$vuetify.icons.location</v-icon>
                </v-col>
                <v-col cols="10" class="mt-n2">
              <v-text-field
                solo
                hide-details
                full-width
                flat
                label="Filter by location"
                @input="inputLocation"
              >
              </v-text-field>
                </v-col>
              </v-row>
            </v-col>
           
            <div class="vertical-divider d-none d-sm-flex" />
            <v-col class="d-none d-sm-flex pa-0 pt-2 pb-2" xs="12">
              <v-row>
                <v-col cols="12" class="pa-0 pl-2">
                  <v-row justify="center">
                    <v-col cols="6" class="pb-0 pt-0">
                      <v-checkbox label="Full Time Only" :input-value="fullTimeChecked" :ripple="false" @click="$emit('click:fullTimeCheckbox')">
                      </v-checkbox>
                    </v-col>
                    <v-col cols="4" class="pa-0 pt-2">
                      <v-btn color="primary" large @click="search">Search </v-btn>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
          <div class="hidden-sm-and-up">
           <v-divider></v-divider>
           <v-row  justify="center"  class="mx-4 pl-6">
            
                <v-text-field
                solo
                hide-details
                full-width
                flat
                label="Filter by location"
                @input="inputLocation"
               
              >
              </v-text-field>
            </v-row>
             <v-divider></v-divider>
            <v-row class="ml-13">
              <v-checkbox label="Full Time Only" :input-value="fullTimeChecked" :ripple="false" @click="$emit('click:fullTimeCheckbox')">
                      </v-checkbox>
            </v-row>
          </div>
        </v-sheet>
      </v-row>
      </v-container>
</template>

<script>

export default {
  props:{
    fullTimeChecked: {
      type: Boolean,
      default: false
    }
  },
data(){
  return{
    fullTimeValue: false
  }
},
methods:{
  inputTitle(newValue){
    this.$emit('input:title', newValue)
  },
  inputLocation(newValue){
    this.$emit('input:location', newValue)
  },
  search(){
    this.$emit('click:search')
  }
}
}
</script>

<style scoped>
.toolbar {
  margin-top: -20px;
  z-index: 1000;
  bottom: 0;
}

.vertical-divider {
  border-left: 2px solid lightgray;
}
</style>