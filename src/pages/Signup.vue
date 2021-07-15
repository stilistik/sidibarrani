<template>
  <PageContainer>
    <PageHeader>Sign Up</PageHeader>
    <template v-if="stage === 'signup'">
      <form
        @submit.prevent="signup"
        class="flex flex-col col-span-4 items-center w-full my-20 gap-8"
      >
        <Input name="username" type="text" placeholder="Username" required />
        <Input name="email" type="email" placeholder="Email" required />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </template>
    <template v-if="stage === 'confirm'">
      <form
        @submit.prevent="confirm"
        class="flex flex-col col-span-4 items-center w-full my-20 gap-8"
      >
        <Input
          name="code"
          type="text"
          placeholder="Confirmation Code"
          required
        />
        <Button type="submit">Confirm</Button>
        <Loading v-if="loading" />
      </form>
    </template>
  </PageContainer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageContainer from "../components/PageContainer.vue";
import PageHeader from "../components/PageHeader.vue";
import Input from "../components/Input.vue";
import Button from "../components/Button.vue";
import Message from "../components/NotificationHub.vue";
import Loading from "../components/Loading.vue";
import { Auth } from "aws-amplify";
import { CognitoUser } from "@aws-amplify/auth";

export default defineComponent({
  components: { PageContainer, PageHeader, Input, Button, Loading },
  data() {
    return {
      stage: "signup",
      user: null as CognitoUser | null,
      loading: false,
    };
  },
  methods: {
    signup: async function (event: Event) {
      const data = new FormData(event.currentTarget as HTMLFormElement);
      try {
        this.loading = true;
        const result = await Auth.signUp({
          username: data.get("email") as string,
          password: data.get("password") as string,
          attributes: {
            email: data.get("email") as string,
            nickname: data.get("username") as string,
          },
        });
        this.stage = "confirm";
        this.user = result.user;
      } catch (error) {
        Message.error("Error during sign up process");
      } finally {
        this.loading = false;
      }
    },
    confirm: async function (event: Event) {
      const data = new FormData(event.currentTarget as HTMLFormElement);
      if (!this.user) return;
      try {
        this.loading = true;
        const result = await Auth.confirmSignUp(
          this.user.getUsername(),
          data.get("code") as string
        );
        this.$router.push("/");
      } catch (error) {
        Message.error("Error during email verification");
      } finally {
        this.loading = false;
      }
    },
  },
});
</script>
