<template>
  <button
    v-bind="$props"
    class="
      transition-all
      text-center
      bg-green-400
      hover:bg-pink-400
      text-4xl
      font-extrabold
      rounded-xl
      shadow-2xl
      py-4
      px-10
      mx-2
    "
  >
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Button",
});
</script>
