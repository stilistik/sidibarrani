<template>
  <div class="flex flex-col items-start gap-5">
    <div class="flex flex-col items-start gap-2">
      <Input v-model="name" type="text" placeholder="Game Name" />
      <div class="flex items-center gap-3">
        <Input v-model="team1name" type="text" placeholder="Team 1 Name" />
        <ColorPicker v-model="team1color" />
      </div>
      <div class="flex items-center gap-3">
        <Input v-model="team2name" type="text" placeholder="Team 2 Name" />
        <ColorPicker v-model="team2color" />
      </div>
      <Checkbox v-model="isPrivate" name="private" label="Private" />
    </div>
    <div class="flex">
      <Button @click="create" size="large">Create</Button>
    </div>
  </div>
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
    return reactive({
      createGameMutation,
      qclient,
      isPrivate: false,
      name: "",
      team1name: "",
      team2name: "",
      team1color: "red",
      team2color: "blue",
    });
  },
  methods: {
    create: function () {
      const input = {
        name: this.name || undefined,
        team1name: this.team1name || undefined,
        team2name: this.team2name || undefined,
        team1color: this.team1color || undefined,
        team2color: this.team2color || undefined,
        private: this.isPrivate || false,
      };
      this.createGameMutation.mutate(
        { input },
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
