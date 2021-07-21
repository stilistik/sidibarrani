<template>
  <div class="flex flex-col items-start gap-5">
    <div class="flex flex-col items-start gap-2">
      <Input v-model="name" type="text" placeholder="Game Name" />
      <Input v-model="team1name" type="text" placeholder="Team 1 Name" />
      <Input v-model="team2name" type="text" placeholder="Team 2 Name" />
      <Checkbox name="private" label="Private" />
    </div>
    <div class="flex">
      <Button @click="create" size="large">Create</Button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Checkbox from "./Checkbox.vue";
import Input from "./Input.vue";
import Button from "./Button.vue";
import IconButton from "./IconButton.vue";
import { Message } from "../utils/Message";
import { useCreateNewGameMutation } from "../api";
import { useQueryClient } from "vue-query";

export default defineComponent({
  name: "CreateGame",
  components: {
    Checkbox,
    Input,
    Button,
    IconButton,
  },
  setup() {
    const createGameMutation = useCreateNewGameMutation();
    const qclient = useQueryClient();
    return {
      createGameMutation,
      qclient,
      private: false,
      name: "",
      team1name: "",
      team2name: "",
    };
  },
  methods: {
    create: function () {
      this.createGameMutation.mutate(
        {
          input: {
            name: this.name || undefined,
            team1name: this.team1name || undefined,
            team2name: this.team2name || undefined,
            private: this.private,
          },
        },
        {
          onSuccess: (game) => {
            this.qclient.invalidateQueries("listGames");
            Message.success("Game created!");
            this.$router.push({ path: "/lobby", query: { gameId: game.id } });
          },
          onError: () => {
            Message.error("Error creating game");
          },
        }
      );
    },
  },
});
</script>
