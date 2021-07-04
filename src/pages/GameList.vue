<template>
  <div class="w-full h-full overflow-auto p-10 bg-gray-900">
    <div class="container mx-auto px-20">
      <div class="text-center my-20">
        <h1 class="text-9xl font-extrabold mb-5 text-white">Games</h1>
      </div>
      <div class="grid grid-cols-3 gap-5">
        <Game
          v-for="(game, index) in games"
          :key="game.id"
          :name="game.name"
          :index="index"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { API, graphqlOperation } from "aws-amplify";
import { listGames } from "../graphql/queries";
import { createGame } from "../graphql/mutations";
import Game from "../components/Game.vue";

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
