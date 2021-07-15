<template>
  <div class="flex items-center gap-5">
    <div
      class="
        p-5
        w-20
        h-20
        flex
        items-center
        justify-center
        rounded-full
        text-white text-4xl
      "
      :class="gradient"
    >
      {{ firstLetter }}
    </div>
    <span class="text-3xl">{{ username }}</span>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

const gradients: string[] = [
  "bg-gradient-to-br from-green-400 to-blue-500",
  "bg-gradient-to-br from-yellow-400 to-red-500",
  "bg-gradient-to-br from-purple-400 to-indigo-500",
  "bg-gradient-to-br from-pink-400 to-red-500",
  "bg-gradient-to-br from-blue-400 to-red-500",
  "bg-gradient-to-br from-green-400 to-yellow-500",
  "bg-gradient-to-br from-red-400 to-green-500",
];

export default defineComponent({
  name: "User",
  props: {
    id: String,
    username: String,
  },
  setup(props) {
    const firstLetter = computed(() => props.username.charAt(0).toUpperCase());
    const gradient = computed(() => {
      const idx = props.username.charCodeAt(0) % gradients.length;
      return gradients[idx];
    });
    return { firstLetter, gradient };
  },
});
</script>
