<template>
  <div class="flex items-center gap-4">
    <input
      :id="id"
      type="checkbox"
      v-bind="$props"
      class="
        rounded-xl
        text-3xl
        shadow-xl
        h-12
        w-12
        text-teal-400
        focus:outline-none
        focus:ring-inset
        focus:ring-teal-400
        focus:border-none
        cursor-pointer
      "
    />
    <label
      :for="id"
      class="text-white text-3xl font-bold cursor-pointer select-none"
      >{{ label }}</label
    >
  </div>
</template>

<script lang="ts">
import { v4 as uuid } from "uuid";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Checkbox",
  props: { label: String },
  setup() {
    return {
      id: uuid(),
    };
  },
});
</script>
