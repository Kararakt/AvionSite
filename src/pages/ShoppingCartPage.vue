<script lang="ts" setup>
import {
  basketHasItems,
  basketItems,
  total,
  removeItemFromBasket,
} from "../modules/BasketHelper";
import { scrollToTop } from "../modules/UtilityHelper";
</script>
<template>
  <div class="container mx-auto text-[#2A254B] py-24">
    <h1 class="text-5xl font-bold clearPadding pb-14 textPic">
      Your shopping cart
    </h1>
    <div class="flex flex-col gap-8" v-if="basketHasItems">
      <div
        class="grid grid-cols-5 customFlex clearFlex text-3xl pb-5 borderBottom clearPadding"
      >
        <div class="col-span-2">Product</div>
        <div class="text-center textStart">Quantity</div>
        <div class="text-center textStart">Total</div>
      </div>
      <div class="borderBottom pb-8 flex flex-col gap-10">
        <div
          class="grid grid-cols-5 customFlex clearFlex clearGap"
          v-for="basketItem in basketItems"
          :key="basketItem.item.id"
        >
          <div class="col-span-2 flex gap-4">
            <ElImage class="h-[9rem] w-[9rem]" :src="basketItem.item.src" />
            <div class="flex flex-col justify-center gap-2 text-[#2A254B]">
              <span class="text-3xl">{{ basketItem.item.name }}</span>
              <span class="text-2xl">{{ basketItem.item.productType }}</span>
              <span class="text-2xl">£{{ basketItem.item.cost }}</span>
            </div>
          </div>
          <span class="text-center text-2xl">{{ basketItem.count }}</span>
          <span class="text-center text-2xl"
            >£{{ basketItem.count * basketItem.item.cost }}</span
          >
          <span class="text-2xl text-center"
            ><font-awesome-icon
              @click="removeItemFromBasket(basketItem)"
              icon="fa-solid fa-x"
              class="cursor-pointer text-red-600"
          /></span>
        </div>
      </div>
      <div class="flex flex-col gap-4 items-end clearPadding">
        <div class="flex gap-2">
          <h1 class="text-3xl text-[#4E4D93]">Subtotal</h1>
          <span class="text-3xl text-[#2A254B]">£{{ total }}</span>
        </div>
        <span class="text-2xl text-[#4E4D93] textFont"
          >Taxes and shipping are calculated at checkout</span
        >
        <button
          @click="$router.push('/CheckOut'), scrollToTop()"
          class="thirdBtn"
        >
          Go to checkout
        </button>
      </div>
    </div>
    <div
      v-else
      class="text-2xl font-bold text-[#2A254B] textCenter paddingForFilter"
    >
      Your Shopping cart is empty
    </div>
  </div>
</template>
