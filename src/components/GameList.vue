<template>
  <h1>Games</h1>

  <div>
    <p v-for="game in games" :key="game.id">{{ game.name }}</p>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
import { API, graphqlOperation } from "aws-amplify";
import { listGames } from "../graphql/queries";

export default defineComponent({
  name: "GameList",
  data: () => {
    return {
      games: [],
    };
  },
  mounted: async function () {
    const response = (await API.graphql(graphqlOperation(listGames))) as any;
    this.games = response.data.listGames.items;
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