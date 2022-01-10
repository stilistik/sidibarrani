<template>
  <Teleport to="#modal-plane">
    <div
      v-if="show"
      class="bg-gray-800 text-white absolute rounded-xl p-2 pointer-events-none font-black text-sm bottom-10 left-10 shadow-2xl max-w-xs"
      style="z-index: 1000"
    >
      <slot name="tooltip" />
    </div>
  </Teleport>
  <div
    class="h-full outlet"
    @mouseenter="show = true"
    @mouseleave="show = false"
  >
    <slot name="outlet" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  props: {
    text: String,
  },
  setup() {
    const show = ref(false);

    return {
      show,
    };
  },
});
</script>
