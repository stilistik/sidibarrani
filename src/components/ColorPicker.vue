<template>
  <div class="relative">
    <button
      class="rounded-full p-6"
      :class="`bg-${modelValue}-400`"
      @click.stop="openPicker"
    />
    <div
      class="
        absolute
        top-0
        left-0
        shadow-primary
        rounded-xl
        p-4
        flex flex-wrap
        justify-between
        bg-gray-900
        z-10
      "
      style="width: 300px"
      v-show="state.open"
    >
      <button
        v-for="color in colors"
        :key="color"
        :class="`bg-${color}-400`"
        class="rounded-full p-6 my-1"
        @click.stop="changeColor(color)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

const colors: string[] = [
  "green",
  "red",
  "purple",
  "pink",
  "blue",
  "yellow",
  "indigo",
  "teal",
  "orange",
  "cyan",
];

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
