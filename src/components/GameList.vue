<template>
  <div v-if="isLoading">Loading</div>
  <div v-else-if="isError">Error</div>
  <div v-else class="flex flex-col gap-5">
    <Game
      v-for="(game, index) in data?.items"
      :key="game.id"
      :name="game.name"
      :index="index"
      :id="game.id"
      :team1name="game?.Teams?.items[0].name"
      :team2name="game?.Teams?.items[1].name"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Game from "./Game.vue";
import { useListGamesQuery } from "../api/queries";

export default defineComponent({
  components: {
    Game,
  },
  setup() {
    return useListGamesQuery();
  },
});
</script>
