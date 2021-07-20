<template>
  <div class="rounded-xl p-10 text-3xl font-extrabold">
    <p v-if="isLoading">Loading</p>
    <p v-else-if="isError">Error</p>
    <div v-else class="flex flex-col gap-5">
      <p>{{ data?.name }}</p>
      <User
        v-for="item in data?.TeamUsers?.items"
        :key="item.id"
        :id="item.user.id"
        :username="item.user.username"
      />
      <JoinTeam :teamID="$props.id" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRef } from "vue";
import User from "./User.vue";
import JoinTeam from "./JoinTeam.vue";
import { useTeamQuery } from "../api/queries";

export default defineComponent({
  components: {
    User,
    JoinTeam,
  },
  props: {
    id: String,
  },
  setup(props) {
    const id = toRef(props, "id");
    const query = useTeamQuery(id);
    return query;
  },
});
</script>
