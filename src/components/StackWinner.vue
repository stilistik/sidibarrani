<template>
  <div
    :style="`transform-origin:center; transform: scale(${scale});`"
    class="absolute top-1/3 w-full flex justify-center z-10"
  >
    <h3
      class="
        text-4xl
        font-black
        text-primary
        bg-gray-800
        py-3
        px-5
        rounded-full
        shadow-2xl
      "
    >
      {{ message }}
    </h3>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref, watchEffect } from "vue";
import { useActiveStack } from "../api";
import { spring } from "vue3-spring";
import { useCurrentUser } from "../utils/Auth";

export default defineComponent({
  setup() {
    const activeStack = useActiveStack();
    const user = useCurrentUser();

    const scale = spring(0, { damping: 8 });
    const timeoutRef = ref(null);

    console.log(activeStack);

    const stackWinner = computed(() => activeStack?.value?.winner);
    const hasWinner = computed(() => stackWinner?.value && true);
    const message = computed(() =>
      stackWinner?.value?.id === user?.value?.id
        ? "You win!"
        : `${stackWinner?.value?.username} wins!`
    );

    watchEffect(() => {
      if (hasWinner.value) {
        scale.value = 1;
        timeoutRef.value = setTimeout(() => {
          scale.value = 0;
        }, 3000);
      } else {
        scale.value = 0;
        clearTimeout(timeoutRef.value);
      }
    });

    return reactive({
      message,
      scale,
    });
  },
});
</script>
