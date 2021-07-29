<template>
  <div
    :style="`transform-origin:center; transform: scale(${scale});`"
    class="absolute top-1/3 w-full flex justify-center z-10 pointer-events-none"
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
import { spring } from "../spring";
import { useCurrentUser } from "../utils/Auth";

export default defineComponent({
  setup() {
    const activeStack = useActiveStack();
    const user = useCurrentUser();

    const springProps = reactive({ damping: 8, mass: 1, stiffness: 170 });
    const scale = spring(0, springProps);
    const timeoutRef = ref(null);

    const stackWinner = computed(() => activeStack?.value?.winner);
    const hasWinner = computed(() => stackWinner?.value && true);
    const message = computed(() =>
      stackWinner?.value?.id === user?.value?.id
        ? "You win!"
        : `${stackWinner?.value?.username} wins!`
    );

    watchEffect(() => {
      if (hasWinner.value) {
        springProps.stiffness = 170;
        springProps.damping = 8;
        scale.value = 1;
        timeoutRef.value = setTimeout(() => {
          springProps.damping = 100;
          springProps.stiffness = 1000;
          scale.value = 0;
        }, 2000);
      }
    });

    return reactive({
      message,
      scale,
    });
  },
});
</script>
