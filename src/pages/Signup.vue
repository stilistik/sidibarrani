<template>
  <PageContainer>
    <PageHeader>Sign Up</PageHeader>
    <form
      @submit.prevent="login"
      class="flex flex-col col-span-4 items-center w-full my-20 gap-8"
    >
      <Input name="username" type="text" placeholder="Username" required />
      <Input name="email" type="email" placeholder="Email" required />
      <Input type="password" name="password" placeholder="Password" required />
      <Button type="submit">Sign Up</Button>
    </form>
  </PageContainer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageContainer from "../components/PageContainer.vue";
import PageHeader from "../components/PageHeader.vue";
import Input from "../components/Input.vue";
import Button from "../components/Button.vue";

export default defineComponent({
  components: { PageContainer, PageHeader, Input, Button },
  methods: {
    login(event: Event) {
      const data = new FormData(event.currentTarget as HTMLFormElement);
    },
  },
});
</script>
