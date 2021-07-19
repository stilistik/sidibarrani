<template>
  <IconButton @click="handleLogout">
    <Icon icon="sign-out-alt" />
  </IconButton>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import IconButton from "./IconButton.vue";
import { logout } from "../utils/Auth";

export default defineComponent({
  name: "LogoutButton",
  components: {
    IconButton,
  },
  methods: {
    handleLogout: async function () {
      console.log("test");

      await logout();
      this.$router.push("/login");
    },
  },
});
</script>
