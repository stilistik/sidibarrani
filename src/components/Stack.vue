<template>
  <Card
    v-for="(action, idx) in stack?.actions?.items"
    class="absolute"
    :key="action.value"
    :card="action.value"
    :width="cardWidth"
    :height="cardHeight"
    :x="getXPosition(idx)"
    :y="getYPosition()"
    :initY="-100"
  />
</template>

<script lang="ts">
import { defineComponent, PropType, reactive } from "vue";
import Card from "./Card.vue";

export default defineComponent({
  components: {
    Card,
  },
  props: {
    stack: Object,
    position: {
      type: Array as PropType<Array<number>>,
    },
    cardWidth: Number,
    interCardDistance: Number,
  },
  setup(props) {
    function getXPosition(idx: number) {
      const cardCount = props.stack.actions.items.length;
      const startX =
        props.position[0] -
        (Math.floor(cardCount / 2) - (cardCount % 2 === 0 ? 0.5 : 0)) *
          props.interCardDistance -
        props.cardWidth / 2;

      return startX + idx * props.interCardDistance;
    }

    function getYPosition() {
      return props.position[1] - cardHeight / 2;
    }

    const cardHeight = props.cardWidth * 1.4;

    return reactive({
      getXPosition,
      getYPosition,
      cardWidth: props.cardWidth,
      cardHeight,
    });
  },
});
</script>
