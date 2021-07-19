import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";
import { storeKey, store, actionsKey, actions } from "./store/Store";
import "./tailwind.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTimes,
  faSignOutAlt,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faTimes);
library.add(faSignOutAlt);
library.add(faChevronDown);
library.add(faChevronUp);

const app = createApp(App);

app.provide(storeKey, store);
app.provide(actionsKey, actions);

app.component("Icon", FontAwesomeIcon);

app.use(router);

app.mount("#app");
