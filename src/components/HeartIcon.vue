<template>
  <svg width="38px" height="38px" viewbox="0 0 38 38">
    <symbol id="H" viewBox="-600 -600 1200 1200" preserveAspectRatio="xMinYMid">
      <path
        d="M0 -300C0 -400 100 -500 200 -500C300 -500 400 -400 400 -250C400 0 0 400 0 500C0 400 -400 0 -400 -250C-400 -400 -300 -500 -200 -500C-100 -500 0 -400 -0 -300Z"
        fill="currentColor"
      />
    </symbol>
    <g transform="scale(0.6)">
      <use xlink:href="#H" height="70" width="70" x="-3" y="-4" />
    </g>
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "DiamondIcon",
});
</script>
