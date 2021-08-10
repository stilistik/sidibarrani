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
  <div class="flex">
    <Button v-if="hasPrev" @click="prev()">Prev</Button>
    <Button v-if="hasNext" @click="next()">Next</Button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref } from "vue";
import Game from "./Game.vue";
import Input from "./Input.vue";
import Button from "./Button.vue";
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
    Button,
  },
  setup() {
    const searchTerm = useDebouncedRef("", 500);
    const nextToken = reactive([]);
    const prevToken = reactive([]);
    const token = ref(null);

    function getStyle(index: number) {
      const img = images[index % images.length];
      return {
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
      };
    }

    const { isLoading, isError, data } = useListGamesQuery(searchTerm, token);

    const games = computed(() => {
      return data.value?.items.map((game: any) => ({
        name: game.name,
        id: game.id,
        team1name: game.Teams.items[0].name,
        team2name: game.Teams.items[1].name,
      }));
    });

    function next() {
      const t = data?.value?.nextToken;
      prevToken.push(token.value);
      token.value = t;
    }

    function prev() {
      const t = prevToken.pop();
      token.value = t;
    }

    const hasNext = computed(() => {
      console.log(data.value?.nextToken);

      return Boolean(data.value?.nextToken);
    });
    const hasPrev = computed(() => prevToken.length > 0);

    return reactive({
      isLoading,
      isError,
      games,
      getStyle,
      searchTerm,
      next,
      prev,
      hasNext,
      hasPrev,
    });
  },
});
</script>
