<template>
  <div class="relative">
    <button
      class="rounded-full p-2 border-4 border-white bg-gray-700"
      @click.stop="openPicker"
      style="width: 60px; height: 60px"
    >
      <Icon icon="palette" />
    </button>
    <Teleport to="#modal-plane">
      <div
        class="
          shadow-2xl
          rounded-xl
          p-4
          flex flex-wrap
          justify-between
          bg-gray-800
          z-10
        "
        :style="getStyle()"
        v-show="open"
      >
        <button
          v-for="color in colors"
          :key="color"
          :class="getButtonClasses(color)"
          class="rounded-full p-6 my-1"
          @click.stop="changeColor(color)"
        />
      </div>
    </Teleport>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref } from "vue";
import { Color, colorClasses, colors } from "../utils/ColorUtils";

export default defineComponent({
  name: "ColorPicker",
  props: {
    modelValue: String,
  },
  emits: ["update:modelValue"],
  setup(props, context) {
    const anchorRef = ref(null);

    function openPicker(e: any) {
      anchorRef.value = e.currentTarget;
    }

    function changeColor(color: string) {
      context.emit("update:modelValue", color);
      anchorRef.value = null;
    }

    function getStyle() {
      if (!anchorRef.value) return {};
      const pickerWidth = 300;
      const screenMargin = 50;
      const anchorRect = anchorRef.value.getBoundingClientRect();

      let x = anchorRect.x;
      let y = anchorRect.y;

      const xmax = x + pickerWidth + screenMargin;

      const diff = xmax - window.innerWidth;
      if (diff > 0) {
        x -= diff;
      }

      return {
        position: "absolute",
        zIndex: 1000,
        top: y + "px",
        left: x + "px",
        width: pickerWidth + "px",
      };
    }

    function getButtonClasses(color: Color) {
      return [colorClasses[color].bg, colorClasses[color].bgHover];
    }

    window.addEventListener("click", function () {
      anchorRef.value = false;
    });

    const open = computed(() => Boolean(anchorRef.value));

    return {
      colors,
      open,
      openPicker,
      changeColor,
      getStyle,
      getButtonClasses,
    };
  },
});
</script>
