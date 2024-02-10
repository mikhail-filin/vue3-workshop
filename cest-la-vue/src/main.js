import { createApp } from "vue";
import App from "./App.vue";
import { appRouter } from "@/router";

const app = createApp(App);
const router = appRouter;

app.use(router);
app.mount("#app");
