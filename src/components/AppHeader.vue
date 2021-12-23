<template>
  <div
    class="
      absolute
      top-0
      w-full
      h-20
      flex
      items-center
      justify-between
      px-5
      shadow-2xl
      bg-gray-900
      z-40
    "
  >
    <User :username="data?.username || ''" />
    <div class="flex gap-3">
      <ClearDataButton />
      <LogoutButton />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import User from "./User.vue";
import LogoutButton from "./LogoutButton.vue";
import ClearDataButton from "./ClearDataButton.vue";
import { useCurrentUserQuery } from "../api";

export default defineComponent({
  name: "AppHeader",
  components: {
    User,
    LogoutButton,
    ClearDataButton,
  },
  setup() {
    return useCurrentUserQuery();
  },
});
</script>
