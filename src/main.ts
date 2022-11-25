import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import ElementPlus from "element-plus";
import ru from "element-plus/es/locale/lang/ru";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import "./index.css";
import "element-plus/dist/index.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fas, far, fab);

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app
  .use(router)
  .use(ElementPlus, { locale: ru })
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
