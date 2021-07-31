<template>
  <svg width="38px" height="38px" viewbox="0 0 38 38">
    <symbol id="S" viewBox="-600 -600 1200 1200" preserveAspectRatio="xMinYMid">
      <path
        d="M0 -500C100 -250 355 -100 355 185A150 150 0 0 1 55 185A10 10 0 0 0 35 185C35 385 85 400 130 500L-130 500C-85 400 -35 385 -35 185A10 10 0 0 0 -55 185A150 150 0 0 1 -355 185C-355 -100 -100 -250 0 -500Z"
        fill="currentColor"
      />
    </symbol>
    <g transform="scale(0.6)">
      <use xlink:href="#S" height="70" width="70" x="-3" y="-4" />
    </g>
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "DiamondIcon",
});
</script>
