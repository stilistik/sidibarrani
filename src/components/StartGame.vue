<template>
  <Button size="large" @click="start"
    >Start
    <Loading v-if="isLoading" />
  </Button>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useStartGameMutation } from "../api";
import { Message } from "../utils/Message";
import Button from "./Button.vue";
import Loading from "./Loading.vue";
import router from "../router";

export default defineComponent({
  name: "StartGame",
  props: {
    id: String!,
  },
  components: {
    Button,
    Loading,
  },
  setup(props) {
    const startGameMutation = useStartGameMutation();
    const isLoading = ref(false);

    function start() {
      isLoading.value = true;
      startGameMutation.mutate(
        {
          gameID: props.id,
        },
        {
          onSuccess: () => {
            Message.success("Game started");
            router.push({
              path: "/game/play",
              query: { gameId: props.id },
            });
          },
          onError: ({ errors }: any) => {
            Message.error("Error starting game: " + errors[0].message);
          },
          onSettled: () => {
            isLoading.value = false;
          },
        }
      );
    }

    return { start, isLoading };
  },
});
</script>
