<template>
  <div class="text-white">
    <span v-if="isLoading">Loading</span>
    <span v-if="isError">Error</span>
    <User
      v-for="item in data?.items"
      :key="item.id"
      :username="item.username"
      class="mb-4"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import User from "./User.vue";
import { useListOnlineUsersQuery } from "../api/queries";

export default defineComponent({
  name: "OnlineUsersList",
  components: {
    User,
  },
  setup() {
    return useListOnlineUsersQuery({
      refetchInterval: 10000,
    });
  },
});
</script>
