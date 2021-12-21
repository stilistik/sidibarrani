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
    <SplitBackground :color1="color1" :color2="color2" :size="50" />
    <div class="z-10 w-full flex p-8">
      <div class="w-full justify-between flex items-center text-2xl font-thin">
        <div class="">
          <span class="font-black">{{ team1name }}</span>
        </div>
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
import SplitBackground from "./SplitBackground.vue";
import { colors } from "../utils/ColorUtils";

export default defineComponent({
  name: "Game",
  components: {
    Button,
    SplitBackground,
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
