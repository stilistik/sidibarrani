<template>
  <button
    @click="join"
    @mouseenter="hovered = true"
    @mouseleave="hovered = false"
    class="
      relative
      w-full
      text-white
      shadow-2xl
      overflow-hidden
      flex
      items-center
      rounded-xl
      bg-gray-800
    "
    :style="{ height: '150px', maxWidth: '1000px' }"
  >
    <div
      class="
        bg-gray-800
        text-white
        flex flex-col
        items-center
        justify-start
        gap-5
        py-5
      "
      :style="{ width: '100px' }"
    >
      <span
        class="
          bg-gray-700
          rounded-full
          flex flex-col
          items-center
          justify-center
          p-1
          text-xs
          font-black
        "
        :style="{ width: '50px', height: '50px' }"
      >
        <Icon icon="dice" />
        {{ game?.mode }}
      </span>
      <span
        class="
          bg-gray-700
          rounded-full
          flex flex-col
          items-center
          justify-center
          p-1
          text-xs
          font-black
        "
        :style="{ width: '50px', height: '50px' }"
      >
        <Icon icon="trophy" />
        {{ game?.winCondition }}</span
      >
    </div>
    <div
      class="relative overflow-hidden"
      :style="{ height: '100%', width: '100%' }"
    >
      <SplitBackground
        :color1="game?.TeamA ? game?.teamAColor : 'gray'"
        :color2="game?.TeamB ? game?.teamBColor : 'gray'"
        :size="50"
        :hovered="hovered"
        :animationDelay="index * 100"
      />
      <div class="relative z-10 w-full h-full flex p-8">
        <div
          class="
            w-full
            h-full
            justify-between
            flex
            items-center
            text-2xl
            font-thin
          "
        >
          <span v-if="teamA?.name" class="font-black">{{ teamA?.name }}</span>
          <Icon v-else icon="question" />

          <span v-if="teamB?.name" class="font-black">{{ teamB?.name }}</span>
          <Icon v-else icon="question" />
        </div>
      </div>
    </div>
  </button>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, reactive, ref } from "vue";
import { Game } from "../graphql/types";
import router from "../router";
import Button from "./Button.vue";
import SplitBackground from "./SplitBackground.vue";

export default defineComponent({
  name: "Game",
  components: {
    Button,
    SplitBackground,
  },
  props: {
    game: Object as PropType<Game>,
    index: Number,
    animationDelay: Number,
  },
  setup(props) {
    function join() {
      router.push({ path: "/game/lobby", query: { gameId: props.game.id } });
    }

    const hovered = ref(false);

    const teamA = computed(() => props.game.TeamA);
    const teamB = computed(() => props.game.TeamB);

    return reactive({
      join,
      hovered,
      index: props.index,
      teamA: teamA.value,
      teamB: teamB.value,
    });
  },
});
</script>
