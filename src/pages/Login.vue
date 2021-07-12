<template>
  <PageContainer>
    <PageHeader>Sidi Barrani</PageHeader>
    <div class="flex flex-col col-span-4 items-center w-full my-20 gap-8">
      <Input v-model="name" type="text" placeholder="Username" />
      <Input v-model="password" type="password" placeholder="Password" />
      <Button @click="login()">Login</Button>
      <Link @click="signup()"> Sign Up </Link>
    </div>
  </PageContainer>
</template>

<script lang="ts">
import { defineComponent, inject } from "vue";
import { API, graphqlOperation } from "aws-amplify";
import { createPlayer } from "../graphql/mutations";
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
    return { name: "", password: "", loading: false };
  },
  methods: {
    login: function () {
      console.log("click!");
    },
    signup: function () {
      this.$router.push("/signup");
    },
    createPlayer: async function (redirectTo: string) {
      this.loading = true;
      const res = (await API.graphql(
        graphqlOperation(createPlayer, {
          input: {
            name: this.name,
          },
        })
      )) as any;
      this.loading = false;
    },
  },
});
</script>
