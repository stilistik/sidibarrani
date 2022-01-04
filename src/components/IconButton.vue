<template>
  <button
    v-bind="$props"
    :style="getButtonStyle()"
    class="
      transition-all
      flex
      items-center
      justify-center
      bg-gray-800
      hover:bg-gray-700
      text-white text-xl
      hover:text-primary
      rounded-full
      shadow-2xl
      p-4
      overflow-hidden
    "
  >
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
export default defineComponent({
  name: "Button",
  props: {
    size: {
      type: String as PropType<"large" | "medium" | "small">,
      default: "medium",
    },
  },
  setup(props) {
    function getButtonStyle() {
      console.log(props.size);

      if (props.size === "large") {
        return { width: "80px", height: "80px" };
      } else if (props.size === "medium") {
        return { width: "60px", height: "60px" };
      } else {
        return { width: "40px", height: "40px" };
      }
    }
    return {
      getButtonStyle,
    };
  },
});
</script>
