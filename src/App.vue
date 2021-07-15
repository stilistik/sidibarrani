<template>
  <div class="h-screen w-screen">
    <NotificationHub />
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
import NotificationHub from "./components/NotificationHub.vue";
import { checkExistingSession } from "./utils/Auth";
import { useQueryProvider } from "vue-query";
Amplify.configure(awsconfig);

export default defineComponent({
  components: { NotificationHub },
  name: "App",
  setup() {
    checkExistingSession();
    useQueryProvider();
  },
});
</script>
