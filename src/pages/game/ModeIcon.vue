<template>
  <div class="text-4xl flex items-center justify-center">
    <DiamondIcon v-if="mode === 'TRUMP_D'" :size="size" />
    <SpadeIcon v-if="mode === 'TRUMP_S'" :size="size" />
    <HeartIcon v-if="mode === 'TRUMP_H'" :size="size" />
    <ClubIcon v-if="mode === 'TRUMP_C'" :size="size" />
    <div class="flex items-center">
      <Icon
        v-if="mode === 'BOTTOM_UP'"
        icon="long-arrow-alt-up"
        :style="{ width: size, height: size }"
      />
      <Icon
        v-if="mode === 'TOP_DOWN'"
        icon="long-arrow-alt-down"
        :style="{ width: size, height: size }"
      />
      <Icon
        v-if="mode === 'SLALOM'"
        icon="arrows-alt-v"
        :style="{ width: size, height: size }"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
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
    mode: String,
    size: Number,
  },
  setup() {},
});
</script>
