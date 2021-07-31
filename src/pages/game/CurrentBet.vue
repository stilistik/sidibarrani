<template>
  <div
    class="
      font-black
      text-primary
      bg-gray-800
      py-3
      px-8
      rounded-full
      shadow-2xl
    "
  >
    <div class="flex gap-3 text-4xl">
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
      <span>{{ value }}</span>
    </div>
    <div class="flex justify-center">by {{ action?.user?.username }}</div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive } from "vue";
import DiamondIcon from "../../components/DiamondIcon.vue";
import HeartIcon from "../../components/HeartIcon.vue";
import SpadeIcon from "../../components/SpadeIcon.vue";
import ClubIcon from "../../components/ClubIcon.vue";

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

    return reactive({
      value,
      mode,
    });
  },
});
</script>
