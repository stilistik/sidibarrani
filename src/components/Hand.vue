<template>
  <Card
    v-for="(card, idx) in cards"
    class="absolute"
    :key="card"
    :card="card"
    :width="cardWidth"
    :height="cardHeight"
    :x="getXPosition(idx, card)"
    :y="getYPosition(card)"
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
import { usePlayCardMutation, useActiveRound } from "../api";
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
    userId: String,
    shiftOnHover: Boolean,
    interactive: Boolean,
    filterPlayed: Boolean,
  },
  setup(props) {
    const user = useCurrentUser();
    const activeRound = useActiveRound();
    const playCardMutation = usePlayCardMutation();

    const cards = computed(() => {
      const hand = activeRound.value.hands.items.find((hand: any) => {
        return hand.type === props.handType && hand.userID == props.userId;
      });

      const cards = hand?.cards || [];

      if (props.filterPlayed) {
        return cards.filter((el: string) => el !== "__played__");
      } else {
        return cards;
      }
    });

    const cardHeight = props.cardWidth * 1.4;

    const yTranslation = ref(0);
    function onMouseEnter() {
      if (!props.shiftOnHover || !props.interactive) return;
      yTranslation.value = -cardHeight / 2;
    }

    function onMouseLeave() {
      if (!props.shiftOnHover || !props.interactive) return;
      yTranslation.value = 0;
    }

    const playedCard = ref(null);

    watchEffect(() => {
      if (props.round?.turn === user?.value?.id) {
        playedCard.value = null;
      }
    });

    function onClick(card: string) {
      if (!props.interactive) return;
      if (!playedCard.value) {
        playedCard.value = card;
        playCardMutation.mutate(
          {
            value: card,
            roundID: props.round.id,
          },
          {
            onError: ({ errors }: any) => {
              Message.error(errors[0].message);
              playedCard.value = null;
            },
          }
        );
      } else {
        Message.error("It's not your turn");
      }
    }

    function getXPosition(idx: number, card: string) {
      if (card === playedCard.value) {
        return window.innerWidth / 2 - props.cardWidth / 2;
      } else {
        const cardCount = cards.value.length;
        const startX =
          props.position[0] -
          (Math.floor(cardCount / 2) - (cardCount % 2 === 0 ? 0.5 : 0)) *
            props.interCardDistance -
          props.cardWidth / 2;

        return startX + idx * props.interCardDistance;
      }
    }

    function getYPosition(card: string) {
      if (card === playedCard.value) {
        return window.innerHeight / 2 - cardHeight / 2;
      } else {
        return props.position[1] - cardHeight / 2 + yTranslation.value;
      }
    }

    return reactive({
      cardWidth: props.cardWidth,
      cardHeight,
      cards,
      user,
      onClick,
      onMouseEnter,
      onMouseLeave,
      getXPosition,
      getYPosition,
      interactive: props.interactive,
    });
  },
});
</script>
