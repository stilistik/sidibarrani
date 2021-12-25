<template>
  <Button @click="join" :hoverColor="color" :isLoading="isLoading">Join</Button>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
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
  setup(props) {
    const joinTeamMutation = useJoinTeamMutation();
    const qclient = useQueryClient();

    const isLoading = ref(false);

    function join() {
      isLoading.value = true;
      console.log(props);

      joinTeamMutation.mutate(
        {
          teamID: props.teamID,
        },
        {
          onSuccess: () => {
            qclient.invalidateQueries("team");
          },
          onSettled: () => {
            isLoading.value = false;
          },
        }
      );
    }

    return reactive({ join, isLoading });
  },
});
</script>
