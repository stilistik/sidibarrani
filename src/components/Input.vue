<template>
  <input v-bind="$props" class="rounded-xl text-3xl font-bold shadow-xl" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Input",
});
</script>
