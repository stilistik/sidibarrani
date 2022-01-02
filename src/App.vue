<template>
  <NotificationHub />
  <router-view />
  <div id="modal-plane" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
import NotificationHub from "./components/NotificationHub.vue";
import { checkExistingSession } from "./utils/Auth";
import { useQueryProvider } from "vue-query";
Amplify.configure(awsconfig);

const classList = [
  "primary-color-red",
  "primary-color-orange",
  "primary-color-yellow",
  "primary-color-lime",
  "primary-color-green",
  "primary-color-teal",
  "primary-color-cyan",
  "primary-color-blue",
  "primary-color-purple",
  "primary-color-pink",
];

export default defineComponent({
  components: { NotificationHub },
  name: "App",
  setup() {
    checkExistingSession();
    useQueryProvider({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
        },
      },
    });

    const root = document.documentElement;
    const rndIndex = Math.floor(Math.random() * classList.length);
    root.classList.add(classList[rndIndex]);
  },
});
</script>
