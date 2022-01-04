<template>
  <PageContainer>
    <div class="flex justify-center items-center gap-10 mt-20">
      <Logo />
      <PageTitle>Sidi Barrani</PageTitle>
    </div>
    <form
      @submit.prevent="handleLogin"
      class="flex flex-col col-span-4 items-center w-full my-20 gap-8"
    >
      <Input name="email" type="email" placeholder="Email" required />
      <Input name="password" type="password" placeholder="Password" required />
      <Button type="submit" size="large" :isLoading="isLoading">Login</Button>
      <Link @click="handleSignup()"> Sign Up </Link>
    </form>
  </PageContainer>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import PageContainer from "../components/PageContainer.vue";
import PageTitle from "../components/PageTitle.vue";
import Button from "../components/Button.vue";
import Link from "../components/Link.vue";
import Input from "../components/Input.vue";
import Loading from "../components/Loading.vue";
import Logo from "../components/Logo.vue";
import { login } from "../utils/Auth";
import router from "../router";

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
    const isLoading = ref(false);

    async function handleLogin(event: Event) {
      isLoading.value = true;
      const data = new FormData(event.currentTarget as HTMLFormElement);
      const email = data.get("email") as string;
      const password = data.get("password") as string;
      await login(email, password);
      isLoading.value = false;
      router.push("/");
    }

    function handleSignup() {
      router.push("/signup");
    }

    return reactive({
      handleLogin,
      handleSignup,
      isLoading,
    });
  },
});
</script>
