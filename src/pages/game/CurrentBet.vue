<template>
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
    <div class="text-4xl">
      <DiamondIcon v-if="mode === 'TRUMP_D'" />
      <SpadeIcon v-if="mode === 'TRUMP_S'" />
      <HeartIcon v-if="mode === 'TRUMP_H'" />
      <ClubIcon v-if="mode === 'TRUMP_C'" />
      <Icon
        v-if="mode === 'BOTTOM_UP'"
        icon="long-arrow-alt-up"
        style="width: 38"
      />
      <Icon
        v-if="mode === 'TOP_DOWN'"
        icon="long-arrow-alt-down"
        style="width: 38"
      />
      <Icon v-if="mode === 'SLALOM'" icon="arrows-alt-v" style="width: 38" />
    </div>
    <div>
      <span class="text-3xl">{{ value }}</span>
      <div class="flex justify-center">by {{ action?.user?.username }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref, watchEffect } from "vue";
import DiamondIcon from "../../components/DiamondIcon.vue";
import HeartIcon from "../../components/HeartIcon.vue";
import SpadeIcon from "../../components/SpadeIcon.vue";
import ClubIcon from "../../components/ClubIcon.vue";
import { spring } from "../../spring";

export default defineComponent({
  components: {
    DiamondIcon,
    HeartIcon,
    SpadeIcon,
    ClubIcon,
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
