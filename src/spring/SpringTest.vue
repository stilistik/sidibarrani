<template>
  <div class="w-screen h-screen relative">
    <div
      class="absolute bg-red-400"
      :style="{ width: '200px', height: '200px', left: s + '%' }"
    />
    <div class="flex gap-5 absolute top-60 text-white">
      <button @click="s = 0">left</button>
      <button @click="s = 100">right</button>
      <button @click="options.damping = 0">nodamp</button>
      <button @click="options.damping = 12">damp</button>
      <button @click="options.immediateValue = 0">val 0</button>
      <button @click="options.immediateValue = 100">val 100</button>
      <button @click="options.immediateValue = 0">val 0</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { spring } from "./spring";

export default defineComponent({
  setup() {
    const options = reactive({ immediateValue: 0, damping: 12, stiffness: 20 });
    const s = spring(0, options);
    return reactive({
      s,
      options,
    });
  },
});
</script>
