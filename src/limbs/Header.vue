<script lang="ts" setup>
import {
  closeDelivery,
  closeDeliveryHeader,
  menuActive,
  activeHeader,
  watchScroll,
} from "../modules/HeaderHelper";

watch(menuActive, watchScroll);

document.onclick = function (e: any) {
  if (e.target.id !== "header" && e.target.id.value !== "menu") {
    document.getElementById("header")!.classList.remove("active");
    document.getElementById("menu")!.classList.remove("active");
    document.body.classList.remove("no-scroll");
  }
};
</script>
<template>
  <div>
    <div
      class="bg-[#2A254B] flex text-white py-5 px-10 clearPadding"
      :class="{ delivery: closeDeliveryHeader }"
    >
      <div class="container mx-auto flex justify-center">
        <div class="flex clearAlign gap-4">
          <font-awesome-icon
            icon="fa-solid fa-truck-fast"
            class="text-white h-8 w-8"
          />
          <h1 class="text-xl textCenter">
            Free delivery on all orders over £50 with code easter checkout
          </h1>
        </div>
      </div>
      <div class="cursor-pointer" @click="closeDelivery">
        <font-awesome-icon icon="fa-solid fa-xmark" class="h-8 w-8" />
      </div>
    </div>
    <div class="container mx-auto flex flex-col gap-3 p-5">
      <div class="flex items-center">
        <span
          class="text-4xl text-[#22202E] font-bold mr-auto ml-auto textMainSite"
          >Avion</span
        >
        <div
          class="flex items-center justify-end gap-5 text-[#2A254B] text-2xl"
        >
          <font-awesome-icon
            @click="$router.push('/ShoppingCart')"
            icon="fa-solid fa-cart-shopping"
            class="cursor-pointer"
          />
          <font-awesome-icon
            @click="$router.push('/Profile')"
            icon="fa-regular fa-circle-user"
            class="cursor-pointer"
          />
          <div
            id="header"
            :class="{ active: menuActive }"
            @click="activeHeader()"
          ></div>
        </div>
      </div>
      <div id="menu" :class="{ active: menuActive }">
        <ul class="flex gap-4 justify-center">
          <li><RouterLink to="/PlantPot">Plant pots</RouterLink></li>
          <li><RouterLink to="/Ceramics">Ceramics</RouterLink></li>
          <li><RouterLink to="/Tables">Tables</RouterLink></li>
          <li><RouterLink to="/Chairs">Chairs</RouterLink></li>
          <li><RouterLink to="/Crockery">Crockery</RouterLink></li>
          <li><RouterLink to="/Tableware">Tableware</RouterLink></li>
          <li><RouterLink to="/Cutlery">Cutlery</RouterLink></li>
        </ul>
      </div>
    </div>
  </div>
</template>
