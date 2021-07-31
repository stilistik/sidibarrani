<template>
  <div class="relative w-screen h-screen overflow-visible text-white">
    <div class="flex w-full justify-center gap-3 pt-40">
      <Button
        :size="'large'"
        @click="onClickMode('BOTTOM_UP')"
        :active="mode === 'BOTTOM_UP'"
      >
        <Icon icon="long-arrow-alt-up" style="width: 38" />
      </Button>
      <Button
        :size="'large'"
        @click="onClickMode('TOP_DOWN')"
        :active="mode === 'TOP_DOWN'"
      >
        <Icon icon="long-arrow-alt-down" style="width: 38" />
      </Button>
      <Button
        :size="'large'"
        @click="onClickMode('SLALOM')"
        :active="mode === 'SLALOM'"
      >
        <Icon icon="arrows-alt-v" style="width: 38" />
      </Button>
      <Button
        :size="'large'"
        @click="onClickMode('TRUMP_D')"
        :active="mode === 'TRUMP_D'"
      >
        <DiamondIcon />
      </Button>
      <Button
        :size="'large'"
        @click="onClickMode('TRUMP_H')"
        :active="mode === 'TRUMP_H'"
      >
        <HeartIcon />
      </Button>
      <Button
        :size="'large'"
        @click="onClickMode('TRUMP_S')"
        :active="mode === 'TRUMP_S'"
      >
        <SpadeIcon />
      </Button>
      <Button
        :size="'large'"
        @click="onClickMode('TRUMP_C')"
        :active="mode === 'TRUMP_C'"
      >
        <ClubIcon />
      </Button>
    </div>
    <div class="flex w-full justify-center gap-3 pt-60">
      <Button :size="'large'">Skip</Button>
      <Button :size="'large'">+10</Button>
      <Button :size="'large'">+20</Button>
    </div>
    <div class="absolute top-0 left-0">
      <Hand v-if="Boolean(activeRound)" :round="activeRound" />
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
import Hand from "../../components/Hand.vue";
import { useActiveRound } from "../../api";

export default defineComponent({
  components: {
    Button,
    DiamondIcon,
    HeartIcon,
    SpadeIcon,
    ClubIcon,
    Hand,
  },
  setup() {
    const activeRound = useActiveRound();

    const mode = ref(null);

    function onClickMode(value: string) {
      mode.value = value;
    }

    return reactive({
      mode,
      onClickMode,
      activeRound,
    });
  },
});
</script>
