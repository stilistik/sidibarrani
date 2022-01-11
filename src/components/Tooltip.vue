<template>
  <Teleport to="#modal-plane">
    <div
      v-if="show"
      v-bind="$attrs"
      ref="tooltipRef"
      class="absolute pointer-events-none"
      :style="getTooltipStyle()"
    >
      <div
        class="bg-gray-800 text-white rounded-xl p-2 font-black text-sm shadow-2xl border-2 border-primary"
        :style="getInnerStyle()"
      >
        <slot name="tooltip" />
      </div>
    </div>
  </Teleport>
  <div
    ref="outletRef"
    class="outlet h-full"
    @mouseenter="show"
    @mouseleave="hide"
  >
    <slot name="outlet" />
  </div>
</template>

<script lang="ts">
import { CSSProperties, defineComponent, onMounted, PropType, ref } from "vue";
import { spring } from "../spring";

export default defineComponent({
  inheritAttrs: false,
  props: {
    text: String,
    delay: {
      type: Number,
      default: 400,
    },
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
    const s = spring(0, {});

    onMounted(() => {
      elemRef.value = outletRef.value.querySelector(".outlet > *");
    });

    function getTooltipStyle() {
      if (!elemRef.value || !tooltipRef.value) return {};
      const elemRect: DOMRect = elemRef.value.getBoundingClientRect();
      const tooltipRect: DOMRect = tooltipRef.value.getBoundingClientRect();
      const style: CSSProperties = { zIndex: 1000, maxWidth: "250px" };

      const margin = 10;
      let x, y;
      if (props.placement === "bottom") {
        x = elemRect.x + elemRect.width / 2 - tooltipRect.width / 2;
        y = elemRect.y + elemRect.height + margin;
      } else if (props.placement === "top") {
        x = elemRect.x + elemRect.width / 2 - tooltipRect.width / 2;
        y = elemRect.y - margin - tooltipRect.height;
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

    function getInnerStyle() {
      const style: CSSProperties = {
        transform: `scale(${s.value})`,
        opacity: s.value,
      };

      if (props.placement === "bottom") {
        style.transformOrigin = "top center";
      } else if (props.placement === "top") {
        style.transformOrigin = "bottom center";
      } else if (props.placement === "left") {
        style.transformOrigin = "center right";
      }

      return style;
    }

    let timeout: ReturnType<typeof setTimeout> = null;
    function show() {
      timeout = setTimeout(() => {
        s.value = 1;
      }, props.delay);
    }

    function hide() {
      clearTimeout(timeout);
      s.value = 0;
    }

    return {
      show,
      hide,
      tooltipRef,
      outletRef,
      getTooltipStyle,
      getInnerStyle,
    };
  },
});
</script>
