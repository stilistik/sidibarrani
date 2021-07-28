<template>
  <div class="absolute top-0 left-0">
    <Card
      v-for="(action, idx) in stack?.actions?.items"
      :key="action.value"
      :card="action.value"
      :width="210"
      :height="300"
      :style="getComputedStyle(idx)"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Card from "./Card.vue";

export default defineComponent({
  components: {
    Card,
  },
  props: {
    stack: Object,
  },
  setup() {},
  methods: {
    getComputedStyle(idx: number) {
      const cardCount = this.$props.stack.actions.items.length;
      const offset = 100;
      const startX =
        window.innerWidth / 2 - Math.floor(cardCount / 2) * offset - 210 / 2;
      return `transform: translateX(${startX + idx * offset}px)`;
    },
  },
});
</script>
