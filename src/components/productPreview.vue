<script lang="ts" setup>
import { itemsView } from "../modules/ProductHelper";
import { addItemToBasket } from "../modules/BasketHelper";
const props = defineProps({
  item: {
    type: Object as () => itemsView,
    required: true,
  },
});
let count = ref(1);
</script>
<template>
  <div class="bg-[#F9F9F9]">
    <div class="container mx-auto py-16 flex flex-col gap-8">
      <div
        class="flex items-center text-xl clearGap gap-3 paddingLeft paddingForFilter"
      >
        <h1
          class="text-[#2A254B] text-2xl textFont hover:text-[#CAC6DA] cursor-pointer"
          @click="$router.push('/')"
        >
          Home
        </h1>
        <el-icon><ArrowRight class="text-[#60578a]" /></el-icon>
        <h1
          class="text-[#2A254B] text-2xl textFont hover:text-[#CAC6DA] cursor-pointer"
          @click="$router.push('/PlantPot')"
        >
          Plant Pots
        </h1>
        <el-icon><ArrowRight class="text-[#60578a]" /></el-icon>
        <h1 class="cursor-text text-[#CAC6DA] text-2xl textFont">
          {{ props.item.name }}
        </h1>
      </div>
      <div
        class="grid grid-cols-2 customFlex gapItem clearFlex gapForFilter gap-[4.5rem] secondGap"
      >
        <ElImage :src="props.item.src" />
        <div
          class="flex flex-col customPadding gap-6 justify-center paddingForFilter text-[#2A254B]"
        >
          <div class="flex flex-col gap-3">
            <h1 class="text-5xl font-bold">{{ props.item.name }}</h1>
            <span class="text-3xl">£{{ props.item.cost }}</span>
          </div>
          <div class="flex flex-col gap-6">
            <div class="flex flex-col gap-2">
              <h1 class="text-2xl">Product description</h1>
              <div class="text-xl">
                A timeless design, with premium materials features as one of our
                most popular and iconic pieces. The dandy chair is perfect for
                any stylish living space with beech legs and lambskin leather
                upholstery.
              </div>
            </div>
            <div class="flex flex-col gap-2 text-xl">
              <h1 class="text-2xl textCenter">Dimensions</h1>
              <div class="grid grid-cols-3 text-center">
                <div class="flex flex-col gap-2">
                  <h1>Height</h1>
                  <h1>{{ props.item.height }}cm</h1>
                </div>
                <div class="flex flex-col gap-2">
                  <h1>Width</h1>
                  <h1>{{ props.item.width }}cm</h1>
                </div>
                <div class="flex flex-col gap-2">
                  <h1>Depth</h1>
                  <h1>{{ props.item.depth }}cm</h1>
                </div>
              </div>
            </div>
            <div
              class="flex flexCol secondGap gapForFilter clearFlex justify-between"
            >
              <div class="flex items-center gap-6">
                <h1 class="text-2xl">Amount:</h1>
                <div class="quantityCount">
                  <button @click="count--" :disabled="count === 1">
                    <font-awesome-icon
                      icon="fa-solid fa-minus"
                      :class="[count === 1 ? 'disabledCount' : '']"
                    />
                  </button>
                  <h1 class="text-[2rem] text-[#2A254B]">{{ count }}</h1>
                  <button @click="count++" :disabled="count === 20">
                    <font-awesome-icon
                      icon="fa-solid fa-plus"
                      :class="[count === 20 ? 'disabledCount' : '']"
                    />
                  </button>
                </div>
              </div>
              <button
                class="thirdBtn"
                @click="addItemToBasket(props.item, count)"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
