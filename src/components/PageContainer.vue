<template>
  <div class="container mx-auto px-20 pt-20">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "PageContainer",
});
</script>
