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
      flex
      items-center
      rounded-xl
      overflow-hidden
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
      <div class="relative z-10 w-full flex p-8">
        <div
          class="w-full justify-between flex items-center text-2xl font-thin"
        >
          <div class="">
            <span class="font-black">{{ team1name }}</span>
          </div>
          <div class="">
            <span class="font-black">{{ team2name }}</span>
          </div>
        </div>
      </div>
    </div>
  </button>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import router from "../router";
import Button from "./Button.vue";
import SplitBackground from "./SplitBackground.vue";

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
    "animationDelay",
  ],
  setup(props) {
    function join() {
      router.push({ path: "/game/lobby", query: { gameId: props.id } });
    }

    const hovered = ref(false);

    return reactive({
      join,
      hovered,
      index: props.index,
      color1: props.team1color,
      color2: props.team2color,
    });
  },
});
</script>
