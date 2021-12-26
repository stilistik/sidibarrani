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
  toRef,
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
    userId: String,
    shiftOnHover: Boolean,
    interactive: Boolean,
  },
  setup(props) {
    const user = useCurrentUser();
    const userId = computed(() => props.userId);
    const roundId = computed(() => props.round.id);
    const playCardMutation = usePlayCardMutation();

    const { data, isLoading, isError } = useHandQuery(
      roundId,
      userId,
      props.handType
    );

    const cards = computed(() => data.value);

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

    const played = ref(false);

    watchEffect(() => {
      if (props.round?.turn === user?.value?.id) {
        played.value = false;
      }
    });

    function onClick(card: string) {
      if (!props.interactive) return;
      if (!played.value) {
        played.value = true;
        playCardMutation.mutate(
          {
            value: card,
            roundID: props.round.id,
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
        props.position[0] -
        (Math.floor(cardCount / 2) - (cardCount % 2 === 0 ? 0.5 : 0)) *
          props.interCardDistance -
        props.cardWidth / 2;

      return startX + idx * props.interCardDistance;
    }

    function getYPosition() {
      return props.position[1] - cardHeight / 2;
    }

    return reactive({
      cardWidth: props.cardWidth,
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
      interactive: props.interactive,
    });
  },
});
</script>
