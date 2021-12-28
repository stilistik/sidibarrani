<template>
  <div>
    <div
      :style="`transform-origin:center; transform: scale(${scale});`"
      class="
        font-black
        text-primary
        bg-gray-800
        py-3
        px-8
        rounded-full
        shadow-2xl
        flex
        items-center
        gap-3
      "
    >
      <ModeIcon :mode="mode" />
      <div>
        <span class="text-3xl">{{ value }}</span>
        <div class="flex justify-center">by {{ action?.user?.username }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref, watchEffect } from "vue";
import ModeIcon from "./ModeIcon.vue";
import { spring } from "../../spring";

export default defineComponent({
  components: {
    ModeIcon,
  },
  props: {
    action: Object,
  },
  setup(props) {
    const value = computed(() => props.action.value.split(":")[1]);
    const mode = computed(() => props.action.value.split(":")[0]);

    const springProps = reactive({ damping: 8, stiffness: 170 });
    const scale = spring(1, springProps);

    const prevValue = ref(null);

    watchEffect(() => {
      if (value.value !== prevValue.value) scale.value = 0.5;
      setTimeout(() => {
        scale.value = 1;
      }, 300);
    });

    return reactive({
      value,
      mode,
      scale,
    });
  },
});
</script>
