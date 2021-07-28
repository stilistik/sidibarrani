<template>
  <Card
    v-for="(action, idx) in stack?.actions?.items"
    :key="action.value"
    :card="action.value"
    :width="210"
    :height="300"
    :x="getXPosition(idx)"
    :y="getYPosition()"
  />
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import Card from "./Card.vue";

export default defineComponent({
  components: {
    Card,
  },
  props: {
    stack: Object,
  },
  setup(props) {
    function getXPosition(index: number) {
      const cardCount = props.stack.actions.items.length;
      const offset = 100;
      const startX =
        window.innerWidth / 2 - Math.floor(cardCount / 2) * offset - 210 / 2;
      return startX + index * offset;
    }

    function getYPosition() {
      return 200;
    }

    return reactive({
      getXPosition,
      getYPosition,
    });
  },
});
</script>
