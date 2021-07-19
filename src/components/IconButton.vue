<template>
  <button
    v-bind="$props"
    style="width: 60px; height: 60px"
    class="
      transition-all
      flex
      items-center
      justify-center
      bg-teal-400
      hover:bg-pink-400
      text-xl
      rounded-full
      shadow-2xl
      p-4
      overflow-hidden
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
