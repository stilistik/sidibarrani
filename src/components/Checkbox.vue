<template>
  <div class="flex items-center gap-4">
    <input
      :id="id"
      type="checkbox"
      v-bind="$props"
      :checked="modelValue"
      @input="$emit('update:modelValue', $event.target.checked)"
      class="
        rounded-lg
        text-3xl
        shadow-xl
        h-8
        w-8
        text-primary
        focus:outline-none focus:ring-inset focus:ring-primary focus:border-none
        cursor-pointer
      "
    />
    <label
      :for="id"
      class="text-white text-3xl font-thin cursor-pointer select-none"
      >{{ label }}</label
    >
  </div>
</template>

<script lang="ts">
import { v4 as uuid } from "uuid";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Checkbox",
  props: { label: String, modelValue: String },
  emits: ["update:modelValue"],
  setup() {
    return {
      id: uuid(),
    };
  },
});
</script>
