<template>
  <div class="relative w-screen h-screen overflow-visible text-white">
    <div class="absolute top-20 flex w-full justify-center gap-3">
      <Button :size="'large'">
        <Icon icon="long-arrow-alt-up" style="width: 38" />
      </Button>
      <Button :size="'large'">
        <Icon icon="long-arrow-alt-down" style="width: 38" />
      </Button>
      <Button :size="'large'">
        <Icon icon="arrows-alt-v" style="width: 38" />
      </Button>
      <Button :size="'large'"><DiamondIcon /></Button>
      <Button :size="'large'"><HeartIcon /></Button>
      <Button :size="'large'"><SpadeIcon /></Button>
      <Button :size="'large'"><ClubIcon /></Button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import Button from "../../components/Button.vue";
import DiamondIcon from "../../components/DiamondIcon.vue";
import HeartIcon from "../../components/HeartIcon.vue";
import SpadeIcon from "../../components/SpadeIcon.vue";
import ClubIcon from "../../components/ClubIcon.vue";

export default defineComponent({
  components: {
    Button,
    DiamondIcon,
    HeartIcon,
    SpadeIcon,
    ClubIcon,
  },
  setup() {
    const mode = ref(null);
    return reactive({
      mode,
    });
  },
});
</script>
