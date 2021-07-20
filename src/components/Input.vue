<template>
  <input
    v-bind="$props"
    class="
      rounded-xl
      text-3xl
      font-thin
      shadow-xl
      focus:outline-none focus:ring-primary focus:border-primary
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
