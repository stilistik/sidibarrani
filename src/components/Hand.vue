<template>
  <div class="absolute bottom-0 left-0">
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
import { computed, defineComponent, reactive, ref, toRef } from "vue";
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

    const roundId = ref(props.round.id);
    const playCardMutation = usePlayCardMutation();

    const { data, isLoading, isError } = useHandQuery(roundId);
    const cards = computed(() => data?.value?.cards);

    console.log(user);

    return reactive({
      cardWidth: 210,
      cardHeight: 300,
      playCardMutation,
      isLoading,
      isError,
      cards,
      user,
    });
  },
  methods: {
    click(card: string) {
      if (this.$props.round.turn === this.user.id)
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
      else Message.error("its not your turn");
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
      }px) translateY(${-this.cardHeight}px)`;
    },
  },
});
</script>
