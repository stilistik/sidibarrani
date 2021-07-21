<template>
  <div class="flex items-center gap-5">
    <div
      class="
        p-5
        w-14
        h-14
        flex
        items-center
        justify-center
        rounded-full
        font-thin
        text-2xl text-white
      "
      :class="color"
    >
      {{ firstLetter }}
    </div>
    <span class="text-xl font-thin text-white">{{ username }}</span>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

const colors: string[] = [
  "bg-green-400",
  "bg-red-400",
  "bg-purple-400",
  "bg-pink-400",
  "bg-blue-400",
  "bg-yellow-400",
  "bg-indigo-400",
  "bg-teal-400",
  "bg-orange-400",
  "bg-cyan-400",
];

export default defineComponent({
  name: "User",
  props: {
    id: String,
    username: String,
  },
  setup(props) {
    const firstLetter = computed(() => props.username.charAt(0).toUpperCase());
    const color = computed(() => {
      const idx = props.username.charCodeAt(0) % colors.length;
      return colors[idx];
    });
    return { firstLetter, color };
  },
});
</script>
