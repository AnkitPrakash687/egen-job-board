import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import { mdiMagnify } from '@mdi/js';
import { mdiMapMarker } from '@mdi/js';
Vue.use(Vuetify);

const MY_ICONS = {
  search: mdiMagnify,
  location: mdiMapMarker
}
export default new Vuetify({
  icons:{
    values: MY_ICONS,
  },
    theme: {
      options: { customProperties: true },
        themes: {
          light: {
            primary: "#5865E0",
            secondary: "#F5F6F8",
            accent: "#FFFFFF",
          },
          dark: {
            primary: "#5865E0",
            secondary: "#131822",
            accent: "#19212D"
          },
        },
      },
});
