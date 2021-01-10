import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Contact from "../views/Contact.vue";
import Projects from "../views/Projects.vue";
import NotFound from "../components/NotFound/NotFound.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects
  },
  {
    path: '/*',
    name: "404",
    component: NotFound
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
