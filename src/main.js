import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import BootstrapVue from "bootstrap-vue";
import VModal from "vue-js-modal";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import Carousel from "bootstrap-vue/es/components/carousel";
import BCarousel from "bootstrap-vue/es/components/carousel/carousel";

Vue.component("b-carousel", BCarousel);
Vue.use(Carousel);
Vue.use(BootstrapVue);
Vue.use(VModal);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
