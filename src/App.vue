<template>
  <div class="h-screen w-screen">
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Amplify, { Auth } from "aws-amplify";
import awsconfig from "./aws-exports";
import { useActions } from "./store/Store";
Amplify.configure(awsconfig);

export default defineComponent({
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
