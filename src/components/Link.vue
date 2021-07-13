<template>
  <a
    class="
      transition-all
      text-green-500
      hover:text-green-300
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
