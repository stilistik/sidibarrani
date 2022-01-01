<template>
  <div class="relative">
    <button
      class="rounded-full p-2 border-4 border-white bg-gray-700"
      @click.stop="openPicker"
      style="width: 60px; height: 60px"
    >
      <Icon icon="palette" />
    </button>
    <div
      class="
        absolute
        top-0
        left-0
        shadow-2xl
        rounded-xl
        p-4
        flex flex-wrap
        justify-between
        bg-gray-800
        z-10
      "
      style="width: 300px"
      v-show="state.open"
    >
      <button
        v-for="color in colors"
        :key="color"
        :class="[`bg-${color}-400`, `hover:bg-${color}-300`]"
        class="rounded-full p-6 my-1"
        @click.stop="changeColor(color)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { colors } from "../utils/ColorUtils";

export default defineComponent({
  name: "ColorPicker",
  props: {
    modelValue: String,
  },
  emits: ["update:modelValue"],
  setup() {
    const state = reactive({
      open: false,
    });

    window.addEventListener("click", function () {
      state.open = false;
    });

    return { colors, state };
  },
  methods: {
    changeColor(color: string) {
      this.$emit("update:modelValue", color);
      this.state.open = false;
    },
    openPicker() {
      this.state.open = true;
    },
  },
});
</script>
