<template>
  <button
    class="
      bg-gray-800
      hover:bg-gray-700
      text-white
      font-bold
      px-4
      py-2
      text-3xl
      rounded-lg
      transition-all
    "
    @click="join"
  >
    Join
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useJoinTeamMutation } from "../api/mutations";
import { useQueryClient } from "vue-query";

export default defineComponent({
  props: {
    teamID: String,
  },
  setup() {
    const joinTeamMutation = useJoinTeamMutation();
    const qclient = useQueryClient();
    return { joinTeamMutation, qclient };
  },
  methods: {
    join() {
      this.joinTeamMutation.mutate(
        {
          input: {
            teamID: this.$props.teamID,
          },
        },
        {
          onSuccess: () => {
            this.qclient.invalidateQueries("team");
          },
        }
      );
    },
  },
});
</script>
