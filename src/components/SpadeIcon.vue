<template>
  <svg
    :width="`${size}px`"
    :height="`${size}px`"
    :viewbox="`0 0 ${size} ${size}`"
  >
    <symbol
      id="spade_icon"
      viewBox="-600 -600 1200 1200"
      preserveAspectRatio="xMinYMid"
    >
      <path
        d="M0 -500C100 -250 355 -100 355 185A150 150 0 0 1 55 185A10 10 0 0 0 35 185C35 385 85 400 130 500L-130 500C-85 400 -35 385 -35 185A10 10 0 0 0 -55 185A150 150 0 0 1 -355 185C-355 -100 -100 -250 0 -500Z"
        fill="currentColor"
      />
    </symbol>
    <use xlink:href="#spade_icon" :height="size" :width="size" />
  </svg>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

export default defineComponent({
  name: "SpadeIcon",
  props: {
    size: Number,
  },
  setup(props) {
    return reactive({
      size: props.size || 38,
    });
  },
});
</script>
