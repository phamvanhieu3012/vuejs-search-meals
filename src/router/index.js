import { createRouter, createWebHashHistory } from "vue-router";
import DefaultLayout from "../components/DefaultLayout.vue";
import GuestLayout from "../components/GuestLayout.vue";
import Home from "../views/Home.vue";
import MealByLetter from "../views/MealByLetter.vue";
import MealByName from "../views/MealByName.vue";
import MealByIngredient from "../views/MealByIngredient.vue";
import MealDetails from "../views/MealDetails.vue";
import Ingredients from "../views/Ingredients.vue";

const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "/",
        name: "home",
        component: Home,
      },
      {
        path: "/by-name/:name?",
        name: "byName",
        component: MealByName,
      },
      {
        path: "/ingredients",
        name: "ingredients",
        component: Ingredients,
      },
      {
        path: "/by-ingredient/:ingredient?",
        name: "byIngredient",
        component: MealByIngredient,
      },
      {
        path: "/by-letter/:letter?",
        name: "byLetter",
        component: MealByLetter,
      },
      {
        path: "/meal/:id",
        name: "mealDetail",
        component: MealDetails,
      },
    ],
  },
  {
    path: "/guest",
    component: GuestLayout,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
