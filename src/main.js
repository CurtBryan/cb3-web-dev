import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

import 'vue-awesome/icons/laptop-code';

import Icon from 'vue-awesome/components/Icon';

Vue.component('v-icon', Icon);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
