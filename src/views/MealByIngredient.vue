<template>
  <Meals :meals="meals" />
</template>

<script setup>
import { computed, onMounted, watch } from "vue";
import Meals from "../components/Meals.vue";
import store from "../store";
import { useRoute } from "vue-router";

const route = useRoute();
const meals = computed(() => store.state.mealsByIngredient);

watch(route, () => store.dispatch("searchMealsByLetter", route.params.letter));

onMounted(() => {
  store.dispatch("searchMealsByIngredient", route.params.ingredient);
});
</script>
