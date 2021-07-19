<template>
  <input
    type="checkbox"
    v-bind="$props"
    class="rounded-xl text-3xl shadow-xl"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Checkbox",
});
</script>
