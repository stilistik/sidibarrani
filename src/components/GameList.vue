<template>
  <Loading v-if="isLoading">Loading</Loading>
  <div v-else-if="isError">Error</div>
  <div v-else class="w-full flex flex-col gap-10 pb-20">
    <Game
      v-for="(game, index) in data?.items"
      :key="game.id"
      :name="game.name"
      :index="index"
      :id="game.id"
      :team1name="game?.Teams?.items[0].name"
      :team2name="game?.Teams?.items[1].name"
      :style="getStyle(index)"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Game from "./Game.vue";
import { useListGamesQuery } from "../api";
import Loading from "./Loading.vue";

const images = [
  "assets/bg-1.jpeg",
  "assets/bg-2.jpeg",
  "assets/bg-3.jpeg",
  "assets/bg-4.jpeg",
];

export default defineComponent({
  components: {
    Game,
    Loading,
  },
  setup() {
    function getStyle(index: number) {
      const img = images[index % images.length];
      return {
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
      };
    }

    return { ...useListGamesQuery(), getStyle };
  },
});
</script>
