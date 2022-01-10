<template>
  <Teleport to="#modal-plane">
    <div
      v-if="show"
      v-bind="$attrs"
      ref="tooltipRef"
      class="bg-gray-800 text-white absolute rounded-xl p-2 pointer-events-none font-black text-sm"
      style="max-width: 200px"
      :style="getTooltipStyle()"
    >
      {{ $props.text }}
    </div>
  </Teleport>
  <div
    ref="outletRef"
    class="outlet"
    @mouseenter="show = true"
    @mouseleave="show = false"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import { CSSProperties, defineComponent, onMounted, PropType, ref } from "vue";

export default defineComponent({
  inheritAttrs: false,
  props: {
    text: String,
    screenMargin: {
      type: Number,
      default: 20,
    },
    placement: {
      type: String as PropType<"left" | "right" | "top" | "bottom">,
      default: "bottom",
    },
  },
  setup(props) {
    const elemRef = ref(null);
    const tooltipRef = ref(null);
    const outletRef = ref(null);
    const show = ref(false);

    onMounted(() => {
      elemRef.value = outletRef.value.querySelector(".outlet > *");
    });

    function getTooltipStyle() {
      if (!elemRef.value || !tooltipRef.value) return {};
      const elemRect: DOMRect = elemRef.value.getBoundingClientRect();
      const tooltipRect: DOMRect = tooltipRef.value.getBoundingClientRect();
      const style: CSSProperties = { zIndex: 1000 };

      const margin = 10;
      let x, y;
      if (props.placement === "bottom") {
        x = elemRect.x + elemRect.width / 2 - tooltipRect.width / 2;
        y = elemRect.y + elemRect.height + margin;
      } else if (props.placement === "left") {
        x = elemRect.x - tooltipRect.width - margin;
        y = elemRect.y + elemRect.height / 2 - tooltipRect.height / 2;
      }

      const diff =
        x + tooltipRect.width + props.screenMargin - window.innerWidth;

      if (diff > 0) x -= diff;

      style.left = x + "px";
      style.top = y + "px";

      return style;
    }

    return {
      show,
      tooltipRef,
      outletRef,
      getTooltipStyle,
    };
  },
});
</script>
