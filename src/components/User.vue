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
        font-black
        border-2 border-white
        text-2xl text-white
      "
      :class="color"
    >
      {{ firstLetter }}
    </div>
    <span class="text-xl font-black text-white">{{ username }}</span>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { colorClasses, colors } from "../utils/ColorUtils";

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
      const color = colors[idx];
      return colorClasses[color].bg;
    });
    return { firstLetter, color };
  },
});
</script>
