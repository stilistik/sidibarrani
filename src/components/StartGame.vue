<template>
  <Button size="large" @click="start">Start</Button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStartGameMutation } from "../api";
import { Message } from "../utils/Message";
import Button from "./Button.vue";

export default defineComponent({
  name: "StartGame",
  props: {
    id: String!,
  },
  components: {
    Button,
  },
  setup() {
    const startGameMutation = useStartGameMutation();
    return { startGameMutation };
  },
  methods: {
    start() {
      this.startGameMutation.mutate(
        {
          gameID: this.$props.id,
        },
        {
          onSuccess: () => {
            Message.success("Game started");
            this.$router.push({
              path: "/game",
              query: { gameId: this.$props.id },
            });
          },
          onError: ({ errors }: any) => {
            Message.error("Error starting game: " + errors[0].message);
          },
        }
      );
    },
  },
});
</script>
