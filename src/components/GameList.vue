<template>
  <Input placeholder="Search Game" type="text" v-model="searchTerm" />
  <Loading v-if="isLoading">Loading</Loading>
  <div v-else-if="isError">Error</div>
  <div v-else class="w-full flex flex-col gap-10 pb-20">
    <Game
      v-for="(game, index) in games"
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
import { computed, defineComponent, reactive, ref } from "vue";
import Game from "./Game.vue";
import Input from "./Input.vue";
import { useListGamesQuery } from "../api";
import { useDebouncedRef } from "../utils/UseDebouncedRef";
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
    Input,
  },
  setup() {
    const searchTerm = useDebouncedRef("", 500);

    function getStyle(index: number) {
      const img = images[index % images.length];
      return {
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
      };
    }

    const { isLoading, isError, data } = useListGamesQuery(searchTerm);

    const games = computed(() => {
      return data.value?.items.map((game: any) => ({
        name: game.name,
        id: game.id,
        team1name: game.Teams.items[0].name,
        team2name: game.Teams.items[1].name,
      }));
    });

    return reactive({ isLoading, isError, games, getStyle, searchTerm });
  },
});
</script>
