import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";
import { storeKey, store, actionsKey, actions } from "./store/Store";
import "./tailwind.css";

const app = createApp(App);

app.provide(storeKey, store);
app.provide(actionsKey, actions);

app.use(router);

app.mount("#app");
