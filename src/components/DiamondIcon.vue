<template>
  <svg width="38px" height="38px" viewbox="0 0 38 38">
    <symbol id="D" viewBox="-600 -600 1200 1200" preserveAspectRatio="xMinYMid">
      <path
        d="M-400 0C-350 0 0 -450 0 -500C0 -450 350 0 400 0C350 0 0 450 0 500C0 450 -350 0 -400 0Z"
        fill="currentColor"
      />
    </symbol>
    <g transform="scale(0.6)">
      <use xlink:href="#D" height="70" width="70" x="-3" y="-4" />
    </g>
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "DiamondIcon",
});
</script>
