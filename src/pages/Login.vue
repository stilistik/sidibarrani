<template>
  <PageContainer>
    <div class="flex justify-center items-center gap-10 mt-20">
      <Logo />
      <PageTitle>Sidi Barrani</PageTitle>
    </div>
    <form
      @submit.prevent="login"
      class="flex flex-col col-span-4 items-center w-full my-20 gap-8"
    >
      <Input v-model="email" name="email" type="email" placeholder="Email" />
      <Input
        v-model="password"
        name="password"
        type="password"
        placeholder="Password"
      />
      <Button type="submit" size="large">Login</Button>
      <Link @click="signup()"> Sign Up </Link>
      <Loading v-if="loading" />
    </form>
  </PageContainer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useActions, useStore } from "../store/Store";
import PageContainer from "../components/PageContainer.vue";
import PageTitle from "../components/PageTitle.vue";
import Button from "../components/Button.vue";
import Link from "../components/Link.vue";
import Input from "../components/Input.vue";
import Loading from "../components/Loading.vue";
import Logo from "../components/Logo.vue";
import { login } from "../utils/Auth";

export default defineComponent({
  name: "Login",
  components: {
    PageContainer,
    PageTitle,
    Button,
    Link,
    Input,
    Loading,
    Logo,
  },
  setup: function () {
    return { store: useStore(), actions: useActions() };
  },
  data: function () {
    return { email: "", password: "", loading: false };
  },
  methods: {
    login: async function (event: Event) {
      this.loading = true;
      const data = new FormData(event.currentTarget as HTMLFormElement);
      const email = data.get("email") as string;
      const password = data.get("password") as string;
      await login(email, password);
      this.loading = false;
      this.$router.push("/");
    },
    signup: function () {
      this.$router.push("/signup");
    },
  },
});
</script>
