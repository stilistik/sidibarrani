<template>
  <Input placeholder="Search Game" type="text" v-model="searchTerm" />
  <Loading v-if="isLoading">Loading</Loading>
  <div v-else-if="isError">Error</div>
  <div v-else-if="games.length > 0" class="w-full flex flex-col gap-10 pb-20">
    <Game
      v-for="(game, index) in games"
      :key="game.id"
      :name="game.name"
      :index="index"
      :id="game.id"
      :team1name="game?.team1name"
      :team2name="game?.team2name"
      :team1color="game?.team1color"
      :team2color="game?.team2color"
    />
  </div>
  <div v-else class="p-5 text-white font-thin text-2xl flex justify-center">
    No games found
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

    const { isLoading, isError, data } = useListGamesQuery(searchTerm, token);

    const games = computed(() => {
      return data.value?.items.map((game: any) => {
        return {
          name: game.name,
          id: game.id,
          team1name: game.Teams.items[0].name,
          team2name: game.Teams.items[1].name,
          team1color: game.Teams.items[0].color,
          team2color: game.Teams.items[1].color,
          index: game.index,
        };
      });
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
      return Boolean(data.value?.nextToken);
    });
    const hasPrev = computed(() => prevToken.length > 0);

    return reactive({
      isLoading,
      isError,
      games,
      searchTerm,
      next,
      prev,
      hasNext,
      hasPrev,
    });
  },
});
</script>
