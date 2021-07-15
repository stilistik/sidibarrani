import Vue, { createApp } from "vue";
import router from "./router";
import App from "./App.vue";
import { storeKey, store, actionsKey, actions } from "./store/Store";
import "./tailwind.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faTimes);
library.add(faSignOutAlt);

const app = createApp(App);

app.provide(storeKey, store);
app.provide(actionsKey, actions);

app.component("Icon", FontAwesomeIcon);

app.use(router);

app.mount("#app");
