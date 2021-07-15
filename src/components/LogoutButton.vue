<template>
  <button
    class="
      text-white
      bg-green-500
      hover:bg-green-400
      p-5
      h-14
      w-14
      rounded-full
      flex
      items-center
      justify-center
    "
    @click="handleLogout"
  >
    <Icon icon="sign-out-alt" />
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { logout } from "../utils/Auth";

export default defineComponent({
  name: "LogoutButton",
  methods: {
    handleLogout: async function () {
      console.log("test");

      await logout();
      this.$router.push("/login");
    },
  },
});
</script>
