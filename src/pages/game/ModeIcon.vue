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
      <div class="relative" v-if="mode === 'SLALOM_TOP'">
        <Icon icon="arrows-alt-v" :style="{ width: size, height: size }" />
        <Icon
          class="absolute"
          icon="long-arrow-alt-down"
          :style="{ width: size / 2, height: size / 2, marginLeft: -size / 4 }"
        />
      </div>
      <div class="relative" v-if="mode === 'SLALOM_BOTTOM'">
        <Icon icon="arrows-alt-v" :style="{ width: size, height: size }" />
        <Icon
          class="absolute"
          icon="long-arrow-alt-up"
          :style="{ width: size / 2, height: size / 2, marginLeft: -size / 4 }"
        />
      </div>
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
    size: {
      type: Number,
      default: 30,
    },
  },
  setup(props) {
    return { size: props.size };
  },
});
</script>
