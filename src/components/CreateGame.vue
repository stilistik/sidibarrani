<template>
  <div class="flex flex-col items-start gap-5">
    <div class="flex flex-col items-start gap-2">
      <Input v-model="name" type="text" placeholder="Game Name" />
      <Input v-model="team1name" type="text" placeholder="Team 1 Name" />
      <Input v-model="team2name" type="text" placeholder="Team 2 Name" />
      <Checkbox name="private" label="Private" />
    </div>
    <div class="flex">
      <Button @click="create" size="large">Create Game</Button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import Checkbox from "./Checkbox.vue";
import Input from "./Input.vue";
import Button from "./Button.vue";
import IconButton from "./IconButton.vue";
import { Message } from "../utils/Message";
import { useCreateNewGameMutation } from "../api/mutations";

export default defineComponent({
  name: "CreateGame",
  components: {
    Checkbox,
    Input,
    Button,
    IconButton,
  },
  setup() {
    const state = reactive({
      show: false,
    });
    const createGameMutation = useCreateNewGameMutation();
    return {
      state,
      createGameMutation,
      name: undefined,
      team1name: undefined,
      team2name: undefined,
      private: false,
    };
  },
  methods: {
    toggle: function () {
      this.state.show = !this.state.show;
    },
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
