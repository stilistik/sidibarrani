<template>
  <input
    v-bind="$props"
    class="
      rounded-xl
      text-3xl
      font-bold
      shadow-xl
      focus:outline-none focus:ring-teal-400 focus:border-teal-400
    "
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Input",
});
</script>
