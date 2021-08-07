<template>
  <button
    class="
      transition-all
      text-center
      bg-gray-800
      hover:bg-gray-700
      text-white
      shadow-2xl
      font-bold
      flex
      items-center
      justify-center
    "
    :class="classes"
  >
    <slot />
    <Loading v-if="isLoading" class="ml-2" :color="$props.hoverColor" />
  </button>
</template>

<script lang="ts">
import { computed, defineComponent, reactive } from "vue";
import { Color, colorClasses } from "../utils/ColorUtils";
import Loading from "./Loading.vue";

export default defineComponent({
  name: "Button",
  components: {
    Loading,
  },
  props: {
    size: String,
    active: Boolean,
    isLoading: Boolean,
    hoverColor: String,
  },
  setup(props) {
    const classes = computed(() => {
      const classes = [];
      if (props.active) {
        classes.push(
          "border-2",
          "border-primary",
          "text-primary",
          "shadow-primary"
        );
      } else {
        classes.push("border-2", "border-transparent");
      }

      if (props.size === "large") {
        classes.push("text-4xl", "py-4", "px-10", "rounded-xl");
      } else {
        classes.push("text-xl", "py-2", "px-5", "rounded-lg");
      }

      if (props.hoverColor) {
        classes.push(colorClasses[props.hoverColor as Color].textHover);
      } else {
        classes.push("hover:text-primary");
      }

      return classes;
    });

    return reactive({
      classes,
    });
  },
});
</script>
