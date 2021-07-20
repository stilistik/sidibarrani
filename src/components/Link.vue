<template>
  <a
    class="
      transition-all
      text-white
      hover:text-teal-400
      font-bold
      text-xl
      cursor-pointer
    "
  >
    <slot />
  </a>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Link",
});
</script>
