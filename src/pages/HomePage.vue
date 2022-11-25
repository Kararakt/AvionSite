<script lang="ts" setup>
import BrandDifferent from "../components/brandDifferent.vue";
import ProductCard from "../components/productCard.vue";
import { allItems, brandInformation } from "../modules/ProductHelper";
import { scrollToTop } from "../modules/UtilityHelper";
</script>
<template>
  <div class="container mx-auto">
    <div class="grid grid-cols-3 customFlex clearFlex py-24">
      <div
        class="col-span-2 flex flex-col paddingText gap-10 bg-[#2A254B] text-white justify-center px-20 clearPadding"
      >
        <div class="flex flex-col gap-6">
          <h1 class="text-4xl">
            The furniture brand for the future, with timeless designs
          </h1>
          <div>
            <button
              class="firstBtn"
              @click="$router.push('/PlantPot'), scrollToTop()"
            >
              View collection
            </button>
          </div>
        </div>
        <div class="text-2xl">
          A new era in eco friendly furniture with Avelon, the French luxury
          retail brand with nice fonts, tasteful colors and a beautiful way to
          display things digitally using modern web technologies.
        </div>
      </div>
      <div class="col-span-1">
        <ElImage src="/src/assets/chair_pic.png" class="h-full" />
      </div>
    </div>
    <div class="flex flex-col gap-8">
      <h1 class="text-center text-2xl text-[#2A254B]">
        What makes our brand different
      </h1>
      <div
        class="grid grid-cols-4 paddingForX gridTwo customGrid clearFlex paddingX gap-8"
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
    <div class="py-24">
      <h1 class="text-4xl font-bold textCenter">New ceramics</h1>
      <div
        class="grid grid-cols-4 gridThree paddingForX customGrid customGap clearFlex paddingX gap-8 py-16"
      >
        <ProductCard
          v-for="allItem in allItems.slice(0, 4)"
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
    <div class="pb-24">
      <h1 class="text-4xl font-bold textCenter">Our popular products</h1>
      <div
        class="grid grid-cols-4 gridThree paddingForX customGrid customGap paddingX clearFlex gap-8 py-16"
      >
        <ProductCard
          v-for="allItem in allItems.slice(4, 8)"
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
    <div class="grid grid-cols-2 customFlex clearFlex">
      <div class="flex flex-col gap-6 justify-center clearPadding px-20">
        <h1 class="text-[#2A254B] text-4xl">
          From a studio in London to a global brand with over 400 outlets
        </h1>
        <div class="text-[#505977] text-2xl">
          When we started Avion, the idea was simple. Make high quality
          furniture affordable and available for the mass market.Handmade, and
          lovingly crafted furniture and homeware is what we live, breathe and
          design so our Chelsea boutique become the hotbed for the London
          interior design community.
        </div>
        <div>
          <button
            class="secondBtn"
            @click="$router.push('/PlantPot'), scrollToTop()"
          >
            Get in touch
          </button>
        </div>
      </div>
      <ElImage src="/src/assets/homePage_pic.png" />
    </div>
  </div>
</template>
