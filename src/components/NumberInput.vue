<template>
  <div
    class="
      rounded-xl
      text-xl
      font-black
      shadow-xl
      bg-gray-700
      text-white
      placeholder-gray-400
      overflow-hidden
    "
  >
    <button class="h-full px-3 hover:bg-gray-600" @click="decrement">
      <Icon icon="minus" />
    </button>
    <slot />
    <span
      class="
        h-full
        bg-gray-700
        border-none
        font-black
        mx-2
        focus:outline-none focus:ring-transparent
      "
      style="width: 80px"
    >
      {{ $props.value || 0 }}
    </span>
    <button class="h-full px-3 hover:bg-gray-600" @click="increment">
      <Icon icon="plus" />
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    defaultValue: Number,
    step: Number,
    min: Number,
    max: Number,
    value: Number,
  },
  emits: ["onChange"],
  setup(props, context) {
    function increment() {
      let newValue = props.value + props.step;
      if (props.max != null && newValue > props.max) {
        newValue = props.max;
      }
      context.emit("onChange", newValue);
    }

    function decrement() {
      let newValue = props.value - props.step;
      if (props.min != null && newValue < props.min) {
        newValue = props.min;
      }
      context.emit("onChange", newValue);
    }

    function handleChange(e: any) {
      let value = parseInt(e.target.value);
      if (value < props.min) value = props.min;
      if (value > props.max) value = props.max;

      context.emit("onChange", value);
    }

    return {
      increment,
      decrement,
      handleChange,
    };
  },
});
</script>
