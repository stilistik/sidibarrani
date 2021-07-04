<template>
  <h1>Games</h1>

  <input type="text" placeholder="Create Game" v-on:keydown="handleKeyDown" />

  <Game v-for="game in games" :key="game.id" :name="game.name" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { API, graphqlOperation } from "aws-amplify";
import { listGames } from "../graphql/queries";
import { createGame } from "../graphql/mutations";
import Game from "./Game.vue";

export default defineComponent({
  name: "GameList",
  components: {
    Game,
  },
  data: () => {
    return {
      games: [] as any[],
    };
  },
  mounted: async function () {
    const response = (await API.graphql(graphqlOperation(listGames))) as any;
    this.games = response.data.listGames.items;
  },
  methods: {
    handleKeyDown: async function (event: any) {
      if (event.key === "Enter") {
        const res = (await API.graphql(
          graphqlOperation(createGame, {
            input: {
              name: event.target.value,
            },
          })
        )) as any;
        this.games.push(res.data.createGame);
      }
    },
  },
});
</script>

<style scoped>
a {
  color: #42b983;
}
label {
  margin: 0 0.5em;
  font-weight: bold;
}
code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>