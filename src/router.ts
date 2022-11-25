import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import PlantPotsPage from "./pages/PlantPotsPage.vue";
import DandyChairPage from "./pages/DandyChairPage.vue";
import StoolPage from "./pages/StoolPage.vue";
import SecondDandyChair from "./pages/SecondDandyChairPage.vue";
import DandyChairsPage from "./pages/DandyChairsPage.vue";
import LastDandyChairPage from "./pages/LastDandyChairPage.vue";
import LucyLampPage from "./pages/LucyLampPage.vue";
import DancyLamp from "./pages/DancyLamp.vue";
import RusticVasePage from "./pages/RusticVasePage.vue";
import SilkyVasePage from "./pages/SilkyVasePage.vue";
import WhiteVasePage from "./pages/WhiteVasePage.vue";
import RustyVasePage from "./pages/RustyVasePage.vue";
import ShippingCart from "./pages/ShoppingCartPage.vue";
import CheckOutPage from "./pages/CheckOutPage.vue";
import ProfilePage from "./pages/ProfilePage.vue";

const routes = [
  { path: "/", component: HomePage },
  { path: "/PlantPot", component: PlantPotsPage },
  { path: "/Ceramics", component: PlantPotsPage },
  { path: "/Tables", component: PlantPotsPage },
  { path: "/Chairs", component: PlantPotsPage },
  { path: "/Crockery", component: PlantPotsPage },
  { path: "/Tableware", component: PlantPotsPage },
  { path: "/Cutlery", component: PlantPotsPage },
  { path: "/DandyChair", component: DandyChairPage },
  { path: "/Stool", component: StoolPage },
  { path: "/SecondDandyChair", component: SecondDandyChair },
  { path: "/DandyChairs", component: DandyChairsPage },
  { path: "/LastDandyChair", component: LastDandyChairPage },
  { path: "/LucyLamp", component: LucyLampPage },
  { path: "/DancyLamp", component: DancyLamp },
  { path: "/RusticVase", component: RusticVasePage },
  { path: "/SilkyVase", component: SilkyVasePage },
  { path: "/WhiteVase", component: WhiteVasePage },
  { path: "/RustyVase", component: RustyVasePage },
  { path: "/ShoppingCart", component: ShippingCart },
  { path: "/CheckOut", component: CheckOutPage },
  { path: "/Profile", component: ProfilePage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
