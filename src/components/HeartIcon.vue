<template>
  <svg
    :width="`${size}px`"
    :height="`${size}px`"
    :viewbox="`0 0 ${size} ${size}`"
  >
    <symbol
      id="heard_icon"
      viewBox="-600 -600 1200 1200"
      preserveAspectRatio="xMinYMid"
    >
      <path
        d="M0 -300C0 -400 100 -500 200 -500C300 -500 400 -400 400 -250C400 0 0 400 0 500C0 400 -400 0 -400 -250C-400 -400 -300 -500 -200 -500C-100 -500 0 -400 -0 -300Z"
        fill="currentColor"
      />
    </symbol>
    <use xlink:href="#heard_icon" :height="size" :width="size" />
  </svg>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

export default defineComponent({
  name: "HeartIcon",
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
