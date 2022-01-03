<template>
  <Button @click="join" :hoverColor="color" :isLoading="isLoading">Join</Button>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import { useJoinTeamMutation } from "../api";
import { useQueryClient } from "vue-query";
import Button from "./Button.vue";
import { Message } from "../utils/Message";

export default defineComponent({
  components: {
    Button,
  },
  props: {
    gameID: String,
    teamKey: String,
    color: String,
  },
  setup(props) {
    const joinTeamMutation = useJoinTeamMutation();
    const qclient = useQueryClient();

    const isLoading = ref(false);

    function join() {
      isLoading.value = true;

      joinTeamMutation.mutate(
        {
          gameID: props.gameID,
          teamKey: props.teamKey,
        },
        {
          onSuccess: () => {
            qclient.invalidateQueries("team");
          },
          onError: ({ errors }: any) => {
            Message.error(errors[0].message);
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
