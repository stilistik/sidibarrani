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
  faCopy,
  faLongArrowAltDown,
  faLongArrowAltUp,
  faArrowsAltV,
  faTrash,
  faCoins,
  faForward,
  faCaretUp,
  faCaretDown,
  faPlus,
  faTrophy,
  faDice,
  faMinus,
  faPalette,
  faQuestion,
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
library.add(faCoins);
library.add(faForward);
library.add(faCaretDown);
library.add(faCaretUp);
library.add(faPlus);
library.add(faMinus);
library.add(faTrophy);
library.add(faDice);
library.add(faPalette);
library.add(faQuestion);

const app = createApp(App);

app.provide(storeKey, store);
app.provide(actionsKey, actions);

app.component("Icon", FontAwesomeIcon);

app.use(router);

app.mount("#app");
