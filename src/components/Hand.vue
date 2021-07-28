<template>
  <div
    class="absolute bottom-0 left-0 h-40 w-screen"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
  >
    <Card
      v-for="(card, idx) in cards"
      :key="card"
      :card="card"
      :style="getComputedStyle(idx)"
      :width="cardWidth"
      :height="cardHeight"
      @click="click"
    />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive } from "vue";
import { spring } from "vue3-spring";
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
  },
  setup(props) {
    const user = useCurrentUser();

    const cardWidth = 210;
    const cardHeight = 300;

    const roundId = computed(() => props.round.id);
    const playCardMutation = usePlayCardMutation();

    const { data, isLoading, isError } = useHandQuery(roundId);
    const cards = computed(() => data?.value?.cards);

    const yTranslation = spring(0);

    function onMouseEnter() {
      yTranslation.value = -cardHeight / 2;
    }

    function onMouseLeave() {
      yTranslation.value = 0;
    }

    return reactive({
      cardWidth: 210,
      cardHeight: 300,
      playCardMutation,
      isLoading,
      isError,
      cards,
      user,
      onMouseEnter,
      onMouseLeave,
      yTranslation,
    });
  },
  methods: {
    click(card: string) {
      if (this.$props.round.turn === this.user.id) {
        this.playCardMutation.mutate(
          {
            value: card,
            roundID: this.$props.round.id,
          },
          {
            onSuccess: () => {
              console.log("success");
            },
            onError: ({ errors }: any) => {
              Message.error(errors[0].message);
            },
          }
        );
      } else {
        Message.error("It's not your turn");
      }
    },
    getComputedStyle(idx: number) {
      const cardCount = this.cards.length;
      const offset = 100;
      const startX =
        window.innerWidth / 2 -
        Math.floor(cardCount / 2) * offset -
        this.cardWidth / 2;
      return `transform: translateX(${startX + idx * offset}px) translateY(${
        this.yTranslation
      }px)`;
    },
  },
});
</script>
