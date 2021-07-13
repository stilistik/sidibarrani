<template>
  <PageContainer>
    <PageHeader>Sidi Barrani</PageHeader>
    <form
      @submit.prevent="login"
      class="flex flex-col col-span-4 items-center w-full my-20 gap-8"
    >
      <Input v-model="email" name="email" type="email" placeholder="Username" />
      <Input
        v-model="password"
        name="password"
        type="password"
        placeholder="Password"
      />
      <div class="flex">
        <Button type="submit">Login</Button>
      </div>
      <Link @click="signup()"> Sign Up </Link>
    </form>
  </PageContainer>
</template>

<script lang="ts">
import { defineComponent, inject } from "vue";
import { Auth } from "aws-amplify";
import PageContainer from "../components/PageContainer.vue";
import PageHeader from "../components/PageHeader.vue";
import Button from "../components/Button.vue";
import Link from "../components/Link.vue";
import Input from "../components/Input.vue";

export default defineComponent({
  name: "Login",
  components: {
    PageContainer,
    PageHeader,
    Button,
    Link,
    Input,
  },
  data: function () {
    return { email: "", password: "", loading: false };
  },
  methods: {
    login: async function (event: Event) {
      this.loading = true;
      const data = new FormData(event.currentTarget as HTMLFormElement);
      try {
        const res = await Auth.signIn({
          username: data.get("email") as string,
          password: data.get("password") as string,
        });
        console.log(res);
      } catch (error) {
        console.error(error);
      } finally {
        this.loading = false;
      }
    },
    signup: function () {
      this.$router.push("/signup");
    },
  },
});
</script>
