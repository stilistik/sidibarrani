<template>
  <button
    v-bind="$props"
    class="
      transition-all
      text-center
      bg-gray-800
      hover:bg-gray-700
      text-white
      hover:text-primary
      shadow-2xl
      font-bold
      flex
    "
    :class="classes"
  >
    <slot />
    <Loading v-if="isLoading" class="ml-2" />
  </button>
</template>

<script lang="ts">
import { computed, defineComponent, reactive } from "vue";
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
  },
  setup(props) {
    const classes = computed(() => {
      let classes = props.active
        ? "border-2 border-primary text-primary shadow-primary "
        : "border-2 border-transparent ";

      if (props.size === "large") {
        classes += "text-4xl py-4 px-10 rounded-xl";
      } else {
        classes += "text-xl py-2 px-5 rounded-lg";
      }
      return classes;
    });

    return reactive({
      classes,
    });
  },
});
</script>
