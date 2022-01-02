<template>
  <Button @click="createGame" size="medium">
    <Icon icon="plus" />
    Create Game
  </Button>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import Checkbox from "./Checkbox.vue";
import Input from "./Input.vue";
import Button from "./Button.vue";
import ColorPicker from "./ColorPicker.vue";
import IconButton from "./IconButton.vue";
import { Message } from "../utils/Message";
import { useCreateNewGameMutation } from "../api";
import { useQueryClient } from "vue-query";
import router from "../router";

export default defineComponent({
  name: "CreateGame",
  components: {
    Checkbox,
    Input,
    Button,
    IconButton,
    ColorPicker,
  },
  setup() {
    const createGameMutation = useCreateNewGameMutation();
    const qclient = useQueryClient();

    const state = reactive({
      team1color: "red",
      team2color: "blue",
      private: false,
    });

    function createGame() {
      createGameMutation.mutate(
        { input: state },
        {
          onSuccess: (game) => {
            qclient.invalidateQueries("listGames");
            Message.success("Game created!");
            router.push({
              path: "/game/lobby",
              query: { gameId: game.id },
            });
          },
          onError: () => {
            Message.error("Error creating game");
          },
        }
      );
    }

    return reactive({
      createGame,
      ...state,
    });
  },
});
</script>
