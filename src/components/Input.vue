<template>
  <input
    v-bind="$props"
    class="
      rounded-xl
      text-3xl
      font-thin
      shadow-xl
      bg-gray-800
      text-white
      placeholder-gray-400
      border-none
      focus:outline-none focus:ring-primary focus:border-primary focus:border-2
    "
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Input",
  props: {
    modelValue: String,
  },
  emits: ["update:modelValue"],
});
</script>
