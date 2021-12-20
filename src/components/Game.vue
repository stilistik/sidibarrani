<template>
  <button
    @click="join"
    class="
      relative
      w-full
      text-white
      flex
      items-center
      shadow-2xl
      rounded-xl
      overflow-hidden
    "
  >
    <div class="z-0 absolute w-full h-full">
      <div
        :class="[`bg-${color1}-400`, 'absolute']"
        :style="{
          transform: 'rotate(120deg)',
          width: '400px',
          height: '400px',
          left: '-130px',
          top: '-200px',
        }"
      />
      <div
        :class="[`bg-${color2}-400`, 'absolute']"
        :style="{
          transform: 'rotate(120deg)',
          width: '400px',
          height: '400px',
          left: '280px',
          top: '-100px',
        }"
      />
    </div>
    <div class="z-10 w-full flex p-8">
      <div class="w-full justify-between flex items-center text-2xl font-thin">
        <div class="">
          <span class="font-black">{{ team1name }}</span>
        </div>
        <span class="font-black text-5xl ring-black">VS</span>
        <div class="">
          <span class="font-black">{{ team2name }}</span>
        </div>
      </div>
    </div>
  </button>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import router from "../router";
import Button from "./Button.vue";
import { colors } from "../utils/ColorUtils";

export default defineComponent({
  name: "Game",
  components: {
    Button,
  },
  props: [
    "name",
    "id",
    "index",
    "team1name",
    "team2name",
    "team1color",
    "team2color",
  ],
  setup(props) {
    console.log(props);

    const indexInBounds = props.index % colors.length;

    function join() {
      router.push({ path: "/lobby", query: { gameId: props.id } });
    }

    return reactive({
      color: colors[indexInBounds],
      join,
      color1: props.team1color,
      color2: props.team2color,
    });
  },
});
</script>
