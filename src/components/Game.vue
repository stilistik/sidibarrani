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
        2er
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
        1000</span
      >
    </div>
    <div
      class="relative overflow-hidden"
      :style="{ height: '100%', width: '100%' }"
    >
      <SplitBackground
        :color1="color1"
        :color2="color2"
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
          <span class="font-black">{{ team1name }}</span>
          <span class="font-black">{{ team2name }}</span>
        </div>
      </div>
    </div>
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive, ref } from "vue";
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

    const color1 = props.game.Teams.items[0].color;
    const color2 = props.game.Teams.items[1].color;
    const team1name = props.game.Teams.items[0].name;
    const team2name = props.game.Teams.items[1].name;

    return reactive({
      join,
      hovered,
      index: props.index,
      color1,
      color2,
      team1name,
      team2name,
    });
  },
});
</script>
