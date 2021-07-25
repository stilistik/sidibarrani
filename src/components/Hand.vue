<template>
  <Card
    v-for="(card, idx) in cards"
    :key="card"
    :card="card"
    :style="`transform: translateX(${idx * 100}px) translateY(800px)`"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Card from "./Card.vue";

export default defineComponent({
  name: "Hand",
  components: {
    Card,
  },
  props: {
    cards: Array,
  },
});
</script>
