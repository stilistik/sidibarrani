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
import Loading from "../components/Loading.vue";
import { CognitoUser } from "@aws-amplify/auth";
import { confirmEmail, signUp } from "../utils/Auth";

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
      this.loading = true;
      const data = new FormData(event.currentTarget as HTMLFormElement);
      const email = data.get("email") as string;
      const password = data.get("password") as string;
      const username = data.get("username") as string;
      const user = await signUp(email, password, username);
      if (user) {
        this.stage = "confirm";
        this.user = user;
      }
      this.loading = false;
    },
    confirm: async function (event: Event) {
      if (!this.user) return;
      this.loading = true;
      const data = new FormData(event.currentTarget as HTMLFormElement);
      const code = data.get("code") as string;
      const ok = await confirmEmail(this.user.getUsername(), code);
      if (ok) this.$router.push("/");
      this.loading = false;
    },
  },
});
</script>
