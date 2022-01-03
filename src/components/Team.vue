<template>
  <div class="rounded-xl p-10 text-3xl font-black z-10">
    <div class="flex flex-col gap-5">
      <div class="flex items-center gap-5">
        <ColorPicker
          :modelValue="$props.color"
          @update:modelValue="handleColorChange"
          :style="{ order: teamKey === 'A' ? 0 : 1 }"
        />
        <p :style="{ order: teamKey === 'A' ? 1 : 0 }">
          Team {{ $props.teamKey }}
        </p>
      </div>
      <User
        v-for="item in team?.TeamUsers?.items"
        :key="item.id"
        :id="item.user.id"
        :username="item.user.username"
      />
      <JoinTeam
        :gameID="game.id"
        :teamKey="$props.teamKey"
        :color="$props.color"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, reactive } from "vue";
import User from "./User.vue";
import JoinTeam from "./JoinTeam.vue";
import ColorPicker from "./ColorPicker.vue";
import { colorClasses } from "../utils/ColorUtils";
import { useUpdateGameMutation } from "../api";
import { Game } from "../graphql/types";

export default defineComponent({
  components: {
    User,
    JoinTeam,
    ColorPicker,
  },
  props: {
    game: Object as PropType<Game>,
    teamKey: String as PropType<"A" | "B">,
  },
  setup(props) {
    const updateGameMutation = useUpdateGameMutation();

    const team = computed(() => {
      if (props.teamKey === "A") return props.game?.TeamA;
      else if (props.teamKey === "B") return props.game?.TeamB;
    });

    const color = computed(() => {
      if (props.teamKey === "A") return props.game.teamAColor;
      else if (props.teamKey === "B") return props.game.teamBColor;
    });

    function getClass() {
      return [colorClasses[color.value]?.bg];
    }

    function handleColorChange(color: string) {
      const attribute = `team${props.teamKey}Color`;
      updateGameMutation.mutate({
        input: {
          id: props.game.id,
          [attribute]: color,
        },
      });
    }

    return reactive({
      team,
      getClass,
      handleColorChange,
    });
  },
});
</script>
