<template>
  <div class="relative">
    <button
      @click.stop="handleOpen"
      class="
        rounded-xl
        text-xl
        font-black
        shadow-xl
        bg-gray-700
        text-white
        placeholder-gray-400
        border-none
        focus:outline-none
        focus:ring-primary
        focus:border-primary
        focus:border-2
        py-1
        px-3
      "
      style="min-width: 150px; height: 40px"
      :disabled="$props.disabled"
    >
      <slot />
      {{ $props.value ? $props.value : $props.placeholder || "Select" }}
    </button>

    <div
      v-show="open"
      class="
        absolute
        top-0
        left-0
        w-full
        shadow-2xl
        rounded-xl
        z-10
        bg-gray-700
        mt-12
        flex flex-col
        overflow-hidden
      "
    >
      <button
        v-for="option in options"
        :key="option.value"
        @click.stop="handleSelect(option)"
        class="hover:bg-gray-600 p-3 font-black"
      >
        {{ option }}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive, ref } from "vue";

export default defineComponent({
  props: {
    placeholder: String,
    value: String,
    options: Array as PropType<string[]>,
    disabled: Boolean,
  },
  emits: ["onSelect"],
  setup(props, context) {
    const open = ref(false);

    function handleSelect(option: string) {
      context.emit("onSelect", option);
      open.value = false;
    }

    function handleOpen() {
      open.value = true;
    }

    window.addEventListener("click", function () {
      open.value = false;
    });

    return reactive({
      open,
      options: props.options,
      value: props.value,
      handleSelect,
      handleOpen,
    });
  },
});
</script>
