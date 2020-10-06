<template>
<v-container>
  <v-row justify="center" class="toolbar ma-0 mt-n7">
        <v-sheet style="width: 70vw; height: auto" rounded elevation="4">
          <v-row>
            <v-col sm="4" xs="12" class="pa-0 pt-sm-2 pb-sm-2 pl-4 pr-4">
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

            <div class="vertical-divider d-none d-sm-flex" />
            <v-col sm="4" xs="12" class="d-none d-sm-flex pa-0 pt-2">
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
                      <v-btn color="primary" large @click="$emit('click:search')">Search </v-btn>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
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