import { createApp } from "vue";
import "./style.scss";
import store from "./store/store";
import App from "./App.vue";
import routes from "./routes/routes";

createApp(App).use(store).use(routes).mount("#app");
