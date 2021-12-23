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
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
    @onClick="onClick"
  />
</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref, watchEffect } from "vue";
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
  },
  setup({ round, handType }) {
    const user = useCurrentUser();

    const cardWidth = 210;
    const cardHeight = 300;

    const roundId = computed(() => round.id);
    const playCardMutation = usePlayCardMutation();

    const { data, isLoading, isError } = useHandQuery(roundId, handType);
    const cards = computed(() => data?.value?.cards);

    const yTranslation = ref(0);
    function onMouseEnter() {
      yTranslation.value = -cardHeight / 2;
    }

    function onMouseLeave() {
      yTranslation.value = 0;
    }

    const played = ref(false);

    watchEffect(() => {
      if (round?.turn === user?.value?.id) {
        played.value = false;
      }
    });

    function onClick(card: string) {
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
      const offset = 100;
      const startX =
        window.innerWidth / 2 -
        (Math.floor(cardCount / 2) - (cardCount % 2 === 0 ? 0.5 : 0)) * offset -
        cardWidth / 2;

      return startX + idx * offset;
    }

    function getYPosition() {
      return window.innerHeight - cardHeight / 2;
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
    });
  },
});
</script>
