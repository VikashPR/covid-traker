import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader
import vSelect from 'vue-select'

Vue.component('v-select', vSelect)

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'md',
    },
})