import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";
import { storeKey, store, actionsKey, actions } from "./store/Store";
import "./tailwind.css";
import * as amplify from "aws-amplify";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTimes,
  faSignOutAlt,
  faChevronDown,
  faChevronUp,
  faCopy,
  faLongArrowAltDown,
  faLongArrowAltUp,
  faArrowsAltV,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faTimes);
library.add(faSignOutAlt);
library.add(faChevronDown);
library.add(faChevronUp);
library.add(faCopy);
library.add(faLongArrowAltDown);
library.add(faLongArrowAltUp);
library.add(faArrowsAltV);
library.add(faTrash);

const app = createApp(App);

app.provide(storeKey, store);
app.provide(actionsKey, actions);

app.component("Icon", FontAwesomeIcon);

app.use(router);

app.mount("#app");
