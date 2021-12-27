<template></template>

<script lang="ts">
import { computed, defineComponent, PropType, watchEffect } from "vue";
import { useCardManager } from "../pages/game/CardManager.vue";
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
    const { setCardState, resetCardState } = useCardManager();

    const cards = computed(() =>
      props.stack.actions.items.map((action: any) => action.value)
    );

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

    let prevCards: any[] = [];
    watchEffect(() => {
      prevCards.forEach((card) => {
        setCardState(card, "position", {
          x: window.innerWidth + 100,
          y: getYPosition(),
        });
      });
      cards.value.forEach((card: string, index: number) => {
        setCardState(card, "position", {
          x: getXPosition(index),
          y: getYPosition(),
        });
        setCardState(card, "visible", true);
        setCardState(card, "width", props.cardWidth);
      });

      prevCards = cards.value;
    });
  },
});
</script>
