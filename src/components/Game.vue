<template>
  <div class="relative p-8 space-y-4 shadow-xl rounded-xl h-48" :class="color">
    <h3 class="text-3xl font-bold leading-tight">{{ name }}</h3>
    <button
      class="
        absolute
        bottom-2
        right-2
        bg-gray-800
        text-white
        font-bold
        px-4
        py-2
        text-3xl
        rounded-lg
        hover:bg-gray-700
        transition-all
      "
    >
      Join
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Game",
  props: ["name", "id", "index"],
  computed: {
    color(): string {
      const gradients: string[] = [
        "bg-gradient-to-r from-green-400 to-blue-500",
        "bg-gradient-to-r from-yellow-400 to-red-500",
        "bg-gradient-to-r from-purple-400 to-indigo-500",
        "bg-gradient-to-r from-pink-400 to-red-500",
        "bg-gradient-to-r from-blue-400 to-red-500",
        "bg-gradient-to-r from-green-400 to-yellow-500",
        "bg-gradient-to-r from-red-400 to-green-500",
      ];
      const indexInBounds = this.$props.index % gradients.length;
      return gradients[indexInBounds];
    },
  },
});
</script>