<template>
  <div class="w-screen h-screen overflow-y-auto">
    <div class="container mx-auto p-20">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "PageContainer",
});
</script>
