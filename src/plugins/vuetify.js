import Vue from 'vue';
import Vuetify from 'vuetify/lib';
// eslint-disable-next-line no-unused-vars
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
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
