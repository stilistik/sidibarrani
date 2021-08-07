<template>
  <div
    class="
      w-full
      p-8
      space-y-4
      shadow-xl
      rounded-xl
      text-white
      flex flex-col
      items-center
    "
    :class="`border-2 ${getBorder(color)} ${getShadow(color)}`"
  >
    <h3 class="text-4xl font-black">{{ name }}</h3>
    <div
      class="w-full justify-center flex items-center text-2xl font-thin gap-5"
    >
      <span>{{ team1name }}</span>
      <span class="text-4xl font-black">VS</span>
      <span>{{ team2name }}</span>
    </div>
    <Button @click="join" :hoverColor="color" class="w-full">Join</Button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import router from "../router";
import Button from "./Button.vue";
import { colors, colorClasses, Color } from "../utils/ColorUtils";

export default defineComponent({
  name: "Game",
  components: {
    Button,
  },
  props: ["name", "id", "index", "team1name", "team2name"],
  setup(props) {
    const indexInBounds = props.index % colors.length;

    function join() {
      router.push({ path: "/lobby", query: { gameId: props.id } });
    }

    function getBorder(color: Color) {
      return colorClasses[color].border;
    }

    function getShadow(color: Color) {
      return colorClasses[color].shadow;
    }

    return { color: colors[indexInBounds], join, getBorder, getShadow };
  },
});
</script>
