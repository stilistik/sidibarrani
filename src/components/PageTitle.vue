<template>
  <div class="text-center">
    <h1 class="text-9xl font-black text-white"><slot /></h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "PageTitle",
});
</script>
