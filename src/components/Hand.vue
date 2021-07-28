<template>
  <Card
    v-for="(card, idx) in cards"
    :key="card"
    :card="card"
    :style="getComputedStyle(idx)"
    :width="cardWidth"
    :height="cardHeight"
    @click="click"
  />
</template>

<script lang="ts">
import { computed, defineComponent, reactive, toRef } from "vue";
import { usePlayCardMutation, useHandQuery } from "../api";
import { Message } from "../utils/Message";
import Card from "./Card.vue";

export default defineComponent({
  name: "Hand",
  components: {
    Card,
  },
  props: {
    roundID: String,
  },
  setup(props) {
    const roundIdRef = toRef(props, "roundID");
    const playCardMutation = usePlayCardMutation();

    const { data, isLoading, isError } = useHandQuery(roundIdRef);

    const cards = computed(() => data?.value?.cards);
    console.log(data, cards);

    return reactive({
      cardWidth: 210,
      cardHeight: 300,
      playCardMutation,
      isLoading,
      isError,
      cards,
    });
  },
  methods: {
    click(card: string) {
      this.playCardMutation.mutate(
        {
          value: card,
          roundID: this.$props.roundID,
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
    },
    getComputedStyle(idx: number) {
      const cardCount = this.cards.length;
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
