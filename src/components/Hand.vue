<template>
  <Card
    v-for="(card, idx) in cards"
    class="absolute"
    :key="card"
    :card="card"
    :width="cardWidth"
    :height="cardHeight"
    :x="getXPosition(idx)"
    :y="getYPosition() + yTranslation"
    :initX="getXPosition(idx)"
    :initY="1000"
    :interactive="interactive"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
    @onClick="onClick"
  />
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  PropType,
  reactive,
  ref,
  watchEffect,
} from "vue";
import { usePlayCardMutation, useHandQuery } from "../api";
import { useCurrentUser } from "../utils/Auth";
import { Message } from "../utils/Message";
import Card from "./Card.vue";

export default defineComponent({
  name: "Hand",
  components: {
    Card,
  },
  props: {
    round: Object,
    handType: String,
    interCardDistance: Number,
    cardWidth: Number,
    position: {
      type: Array as PropType<Array<number>>,
    },
    shiftOnHover: Boolean,
    interactive: Boolean,
  },
  setup({
    round,
    handType,
    interCardDistance,
    cardWidth,
    position,
    shiftOnHover,
    interactive,
  }) {
    const user = useCurrentUser();

    const roundId = computed(() => round.id);
    const playCardMutation = usePlayCardMutation();

    const { data, isLoading, isError } = useHandQuery(roundId, handType);
    const cards = computed(() => data?.value?.cards);

    const cardHeight = cardWidth * 1.4;

    const yTranslation = ref(0);
    function onMouseEnter() {
      if (!shiftOnHover || !interactive) return;
      yTranslation.value = -cardHeight / 2;
    }

    function onMouseLeave() {
      if (!shiftOnHover || !interactive) return;
      yTranslation.value = 0;
    }

    const played = ref(false);

    watchEffect(() => {
      if (round?.turn === user?.value?.id) {
        played.value = false;
      }
    });

    function onClick(card: string) {
      if (!interactive) return;
      if (!played.value) {
        played.value = true;
        playCardMutation.mutate(
          {
            value: card,
            roundID: round.id,
          },
          {
            onError: ({ errors }: any) => {
              Message.error(errors[0].message);
              played.value = false;
            },
          }
        );
      } else {
        Message.error("It's not your turn");
      }
    }

    function getXPosition(idx: number) {
      const cardCount = cards.value.length;
      const startX =
        position[0] -
        (Math.floor(cardCount / 2) - (cardCount % 2 === 0 ? 0.5 : 0)) *
          interCardDistance -
        cardWidth / 2;

      return startX + idx * interCardDistance;
    }

    function getYPosition() {
      return position[1] - cardHeight / 2;
    }

    return reactive({
      cardWidth,
      cardHeight,
      isLoading,
      isError,
      cards,
      user,
      onClick,
      onMouseEnter,
      onMouseLeave,
      yTranslation,
      getXPosition,
      getYPosition,
      interactive,
    });
  },
});
</script>
