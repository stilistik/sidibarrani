<template>
  <div
    class="
      absolute
      w-full
      h-20
      flex
      items-center
      justify-between
      px-5
      shadow-2xl
      bg-gray-900
    "
  >
    <User :username="'Stilistik'" />
    <LogoutButton />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import User from "./User.vue";
import LogoutButton from "./LogoutButton.vue";

export default defineComponent({
  name: "AppHeader",
  components: {
    User,
    LogoutButton,
  },
});
</script>
