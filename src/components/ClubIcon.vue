<template>
  <svg width="38px" height="38px" viewbox="0 0 38 38">
    <symbol id="C" viewBox="-600 -600 1200 1200" preserveAspectRatio="xMinYMid">
      <path
        d="M30 150C35 385 85 400 130 500L-130 500C-85 400 -35 385 -30 150A10 10 0 0 0 -50 150A210 210 0 1 1 -124 -51A10 10 0 0 0 -110 -65A230 230 0 1 1 110 -65A10 10 0 0 0 124 -51A210 210 0 1 1 50 150A10 10 0 0 0 30 150Z"
        fill="currentColor"
      />
    </symbol>
    <g transform="scale(0.6)">
      <use xlink:href="#C" height="70" width="70" x="-3" y="-4" />
    </g>
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "DiamondIcon",
});
</script>
