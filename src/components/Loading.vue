<template>
  <div
    class="relative inline-block"
    :style="{ width: `${size}px`, height: `${size}px` }"
  >
    <div
      v-for="i in Math.pow(count, 2)"
      :key="i"
      class="animated"
      :class="getClass()"
      :style="getStyle(i - 1)"
    />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive } from "vue";
import { Color, colorClasses } from "../utils/ColorUtils";

export default defineComponent({
  name: "Loading",
  props: {
    size: Number,
    count: Number,
    gap: Number,
    color: String,
  },
  setup(props) {
    const count = computed(() => props.count || 3);
    const size = computed(() => props.size || 40);
    const gap = computed(() => props.gap || 3);

    function getClass() {
      if (props.color) return colorClasses[props.color as Color].bg;
      else return "bg-primary";
    }

    function getStyle(childIndex: number) {
      const dotSize = Math.floor(size.value / count.value - gap.value);
      const yIndex = Math.floor(childIndex / count.value);
      const xIndex = childIndex % count.value;
      return {
        position: "absolute",
        width: `${dotSize}px`,
        height: `${dotSize}px`,
        borderRadius: "50%",
        top: `${gap.value * 0.5 + yIndex * dotSize + yIndex * gap.value}px`,
        left: `${gap.value * 0.5 + xIndex * dotSize + xIndex * gap.value}px`,
        animationDelay: `${-0.2 * childIndex}s`,
      };
    }

    return reactive({
      getStyle,
      getClass,
      count,
      size,
    });
  },
});
</script>

<style scoped>
.animated {
  animation: lds-grid 1.2s linear infinite;
}

@keyframes lds-grid {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}
</style>
