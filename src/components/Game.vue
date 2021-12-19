<template>
  <div
    class="
      w-full
      p-8
      space-y-4
      rounded-xl
      text-white
      flex flex-col
      items-center
      shadow-2xl
    "
  >
    <h3
      class="text-4xl font-black"
      :style="{ textShadow: '2px 2px 10px black' }"
    >
      {{ name }}
    </h3>
    <div
      class="w-full justify-center flex items-center text-2xl font-thin gap-5"
    >
      <div class="flex-1 text-left">
        <span class="font-bold" :style="{ textShadow: '1px 1px 5px black' }">{{
          team1name
        }}</span>
      </div>
      <span class="flex-none text-6xl font-black mix-blend-difference">VS</span>
      <div class="flex-1 text-right">
        <span class="font-bold" :style="{ textShadow: '1px 1px 5px black' }">{{
          team2name
        }}</span>
      </div>
    </div>
    <Button @click="join" class="w-full">Join</Button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import router from "../router";
import Button from "./Button.vue";
import { colors } from "../utils/ColorUtils";

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

    return { color: colors[indexInBounds], join };
  },
});
</script>
