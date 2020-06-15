import Vue from "vue";
import App from "./App.vue";
import VueWorker from "vue-worker";
import VueRouter from "vue-router";
import "./assets/styles/index.css";
import HomePage from "./pages/HomePage";
import FrontendFilteringPage from "./pages/FrontendFilteringPage";
import WebWorkerPage from "./pages/WebWorkerPage";

Vue.use(VueWorker);
Vue.use(VueRouter);

Vue.config.productionTip = false;

const routes = [
  { path: "/", component: HomePage },
  { path: "/mrs-frontend-filtering", component: FrontendFilteringPage },
  { path: "/ms-web-worker", component: WebWorkerPage }
];

const router = new VueRouter({ routes });

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
