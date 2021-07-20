<template>
  <a
    class="
      transition-all
      text-white
      hover:text-primary
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
