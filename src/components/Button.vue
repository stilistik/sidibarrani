<template>
  <button
    v-bind="$props"
    class="
      transition-all
      text-center
      bg-gray-800
      hover:bg-gray-700
      text-white
      hover:text-primary
      shadow-2xl
      font-bold
    "
    :class="classes"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Button",
  props: {
    size: String,
  },
  computed: {
    classes: function () {
      if (this.$props.size === "large") {
        return "text-4xl py-4 px-10 rounded-xl";
      } else {
        return "text-xl py-2 px-5 rounded-lg";
      }
    },
  },
});
</script>
