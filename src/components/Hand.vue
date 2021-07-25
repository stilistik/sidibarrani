<template>
  <Card
    v-for="(card, idx) in cards"
    :key="card"
    :card="card"
    :style="getComputedStyle(idx)"
    :width="cardWidth"
    :height="cardHeight"
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
  data() {
    return {
      cardWidth: 210,
      cardHeight: 300,
    };
  },
  methods: {
    getComputedStyle(idx: number) {
      const cardCount = this.$props.cards.length;
      const offset = 100;
      const startX =
        window.innerWidth / 2 -
        Math.floor(cardCount / 2) * offset -
        this.cardWidth / 2;
      return `transform: translateX(${
        startX + idx * offset
      }px) translateY(100vh)`;
    },
  },
});
</script>
