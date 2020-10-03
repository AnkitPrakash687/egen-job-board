import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
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
