<template>
  <div
    class="
      absolute
      top-1/3
      w-full
      flex
      justify-center
      z-hud
      pointer-events-none
    "
  >
    <div
      :style="`transform-origin:center; transform: scale(${scale});`"
      class="
        flex
        items-center
        gap-3
        bg-gray-800
        py-3
        px-5
        rounded-full
        shadow-2xl
      "
    >
      <span
        style="width: 30px; height: 30px"
        class="rounded-full"
        :class="`bg-${winnerColor}-400`"
      />

      <h3 class="text-4xl font-black text-primary">
        {{ message }}
      </h3>
    </div>
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
      stackWinner?.value?.user?.id === user?.value?.id
        ? "You win!"
        : `${stackWinner?.value?.user?.username} wins!`
    );
    const winnerColor = computed(() => {
      return stackWinner?.value?.team?.color;
    });

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
      winnerColor,
      scale,
    });
  },
});
</script>
