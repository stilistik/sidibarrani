<template>
  <Teleport to="#modal-plane">
    <div
      class="bg-gray-800 text-white absolute rounded-xl p-2 pointer-events-none font-black text-sm bottom-10 left-10 shadow-2xl max-w-xs"
      style="z-index: 1000"
      :style="getStyle()"
    >
      <slot name="tooltip" />
    </div>
  </Teleport>
  <div class="h-full outlet" @mouseenter="show()" @mouseleave="hide()">
    <slot name="outlet" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { spring } from "../spring";

export default defineComponent({
  props: {
    text: String,
  },
  setup() {
    const x = spring(-500, {});

    function show() {
      x.value = 0;
    }

    function hide() {
      x.value = -500;
    }

    function getStyle() {
      return {
        transform: `translate(${x.value}px, 0)`,
      };
    }

    return {
      getStyle,
      show,
      hide,
    };
  },
});
</script>
