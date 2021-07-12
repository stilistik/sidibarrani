<template>
  <div class="w-full h-full p-10 bg-gray-900">
    <div class="container mx-auto px-20">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "page-container",
});
</script>
