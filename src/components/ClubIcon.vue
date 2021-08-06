<template>
  <svg
    :width="`${size}px`"
    :height="`${size}px`"
    :viewbox="`0 0 ${size} ${size}`"
  >
    <symbol
      id="club_icon"
      viewBox="-600 -600 1200 1200"
      preserveAspectRatio="xMinYMid"
    >
      <path
        d="M30 150C35 385 85 400 130 500L-130 500C-85 400 -35 385 -30 150A10 10 0 0 0 -50 150A210 210 0 1 1 -124 -51A10 10 0 0 0 -110 -65A230 230 0 1 1 110 -65A10 10 0 0 0 124 -51A210 210 0 1 1 50 150A10 10 0 0 0 30 150Z"
        fill="currentColor"
      />
    </symbol>
    <use xlink:href="#club_icon" :height="size" :width="size" />
  </svg>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

export default defineComponent({
  name: "ClubIcon",
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
