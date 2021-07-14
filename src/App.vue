<template>
  <div class="h-screen w-screen">
    <NotificationHub />
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Amplify, { Auth } from "aws-amplify";
import awsconfig from "./aws-exports";
import { useActions } from "./store/Store";
import NotificationHub from "./components/NotificationHub.vue";
Amplify.configure(awsconfig);

export default defineComponent({
  components: { NotificationHub },
  name: "App",
  setup() {
    const { setIsAuthenticated } = useActions();
    Auth.currentAuthenticatedUser().then((user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    });
  },
});
</script>
