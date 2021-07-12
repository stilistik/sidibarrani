<template>
  <div class="h-screen w-screen">
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
Amplify.configure(awsconfig);

export default defineComponent({
  name: "App",
});
</script>
