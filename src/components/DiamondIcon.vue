<template>
  <svg
    :width="`${size}px`"
    :height="`${size}px`"
    :viewbox="`0 0 ${size} ${size}`"
  >
    <symbol
      id="diamond_icon"
      viewBox="-600 -600 1200 1200"
      preserveAspectRatio="xMinYMid"
    >
      <path
        d="M-400 0C-350 0 0 -450 0 -500C0 -450 350 0 400 0C350 0 0 450 0 500C0 450 -350 0 -400 0Z"
        fill="currentColor"
      />
    </symbol>
    <use xlink:href="#diamond_icon" :height="size" :width="size" />
  </svg>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

export default defineComponent({
  name: "DiamondIcon",
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
