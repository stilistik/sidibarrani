<template>
  <div v-show="false">
    <Input v-model="name" type="text" placeholder="Game Name" />
    <Input v-model="team1name" type="text" placeholder="Team 1 Name" />
    <Input v-model="team2name" type="text" placeholder="Team 2 Name" />
    <Checkbox name="private" />
  </div>

  <Button @click="create">Create Game</Button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Checkbox from "./Checkbox.vue";
import Input from "./Input.vue";
import Button from "./Button.vue";
import { Message } from "../utils/Message";
import { useCreateNewGameMutation } from "../api/mutations";

export default defineComponent({
  name: "CreateGame",
  components: {
    Checkbox,
    Input,
    Button,
  },
  setup() {
    const createGameMutation = useCreateNewGameMutation();
    return {
      createGameMutation,
      name: undefined,
      team1name: undefined,
      team2name: undefined,
      private: false,
    };
  },
  methods: {
    create: function () {
      this.createGameMutation.mutate(
        {
          input: {
            name: this.name,
            team1name: this.team1name,
            team2name: this.team2name,
            private: this.private,
          },
        },
        {
          onSuccess: () => {
            console.log(Message);

            Message.success("Game created!");
          },
          onError: () => {
            console.log(Message);

            Message.error("Error creating game");
          },
        }
      );
    },
  },
});
</script>
