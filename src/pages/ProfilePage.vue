<script lang="ts" setup>
import { profileUserArray } from "../modules/ProfileUser";
import { profileUserHasItem } from "../modules/ProfileUser";
</script>
<template>
  <div
    class="container mx-auto py-24 flex clearPadding flex-col gap-8 text-[#2A254B]"
  >
    <h1 class="text-4xl font-bold text-center">User Profile</h1>
    <div class="flex flex-col gap-10" v-if="profileUserHasItem">
      <div
        class="flex flex-col gap-3"
        v-for="user in profileUserArray"
        :key="user.id"
      >
        <h1 class="text-4xl secondText">Order ID: #{{ user.id }}</h1>
        <h1 class="text-3xl textFont">Order Details</h1>
        <div
          class="grid grid-cols-5 customFlex clearFlex text-2xl pb-5 borderBottom"
        >
          <div class="col-span-2">Product</div>
          <div class="text-center textStart">Date</div>
          <div class="text-center textStart">Total</div>
          <div class="text-center textStart">Grand Total</div>
        </div>
        <div v-for="item in user.orderItems">
          <div class="grid grid-cols-5 customFlex clearFlex clearGap">
            <div class="flex gap-4 col-span-2">
              <ElImage class="h-[9rem] w-9rem]" :src="item.item.src" />
              <div class="flex flex-col justify-center gap-2">
                <span class="text-3xl">{{ item.item.name }}</span>
                <span class="text-2xl">{{ item.item.productType }}</span>
                <span class="text-xl">Qty - {{ item.count }}</span>
              </div>
            </div>
            <div class="text-center textStart text-3xl">{{ user.date }}</div>
            <div class="text-center textStart text-3xl">
              £{{ item.count * item.item.cost }}
            </div>
            <div class="text-center textStart text-3xl">
              £{{ user.totalPrice }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      v-else
      class="text-2xl font-bold text-[#2A254B] textCenter paddingForFilter"
    >
      You have not made any order.
    </div>
  </div>
</template>
<style></style>
