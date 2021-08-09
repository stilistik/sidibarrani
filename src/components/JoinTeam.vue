<template>
  <Button @click="join" :hoverColor="color">Join</Button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useJoinTeamMutation } from "../api";
import { useQueryClient } from "vue-query";
import Button from "./Button.vue";

export default defineComponent({
  components: {
    Button,
  },
  props: {
    teamID: String,
    color: String,
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
