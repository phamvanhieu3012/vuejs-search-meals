<template>
  <div class="flex flex-wrap justify-center gap-3 px-8 mt-2 mb-6">
    <router-link
      v-for="letter in letters"
      :key="letter"
      :to="{
        name: 'byLetter',
        params: {
          letter,
        },
      }"
      class="w-2 h-2 flex items-center justify-center hover:text-orange-500 hover:scale-150 transition-all"
    >
      {{ letter }}
    </router-link>
  </div>
  <Meals :meals="meals" />
</template>

<script setup>
import { computed, onMounted, watch } from "vue";
import store from "../store";
import { useRoute } from "vue-router";
import Meals from "../components/Meals.vue";

const route = useRoute();
const letters = "ABCDEFGHIJKLMNOPQRSTUWXYZ".split("");
const meals = computed(() => store.state.mealsByLetter);

watch(route, () => store.dispatch("searchMealsByLetter", route.params.letter));

onMounted(() => {
  store.dispatch("searchMealsByLetter", route.params.letter);
});
</script>
