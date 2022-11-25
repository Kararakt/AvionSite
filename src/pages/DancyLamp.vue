<script lang="ts" setup>
import productPreviewVue from "/src/components/productPreview.vue";
import { allItems, brandInformation } from "../modules/ProductHelper";
import { scrollToTop } from "../modules/UtilityHelper";
import ProductCard from "../components/productCard.vue";
</script>
<template>
  <productPreviewVue
    v-for="allItem in allItems.slice(6, 7)"
    :key="allItem.id"
    :item="allItem"
  />
  <div>
    <div class="container mx-auto flex flex-col gap-10 py-24">
      <h1 class="font-bold text-[#2A254B] text-3xl textCenter">
        You might also like
      </h1>
      <div
        class="grid grid-cols-4 secondGap gridTwo customGrid gapItem paddingForFilter clearFlex gap-10"
      >
        <ProductCard
          v-for="allItem in allItems.slice(7, 11)"
          :key="allItem.id"
          :item="allItem"
        />
      </div>
      <div class="flex justify-center">
        <button
          class="secondBtn"
          @click="$router.push('/PlantPot'), scrollToTop()"
        >
          View collection
        </button>
      </div>
    </div>
    <div class="container mx-auto pt-16 pb-24">
      <div class="flex flex-col gap-8">
        <h1 class="text-center text-2xl text-[#2A254B]">
          What makes our brand different
        </h1>
        <div
          class="grid grid-cols-4 secondGap gridThree customGrid gapItem paddingForFilter clearFlex clearPadding gap-8"
        >
          <BrandDifferent
            v-for="brand in brandInformation"
            :key="brand.id"
            :propSrc="brand.src"
            :propTitle="brand.title"
            :propDescription="brand.description"
          />
        </div>
      </div>
    </div>
  </div>
</template>
