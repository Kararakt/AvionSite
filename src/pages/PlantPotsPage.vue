<script lang="ts" setup>
import ProductCard from "../components/productCard.vue";
import {
  productType,
  productPrice,
  productDesigner,
  checkProductType,
  checkProductPrice,
  checkDesigner,
  sortedItems,
  sortedArrayHasItem,
} from "../modules/ProductHelper";
import Collapse from "../components/Collapse.vue";
const visible = ref(false);
</script>
<template>
  <div>
    <div class="relative h-auto">
      <div
        class="absolute z-10 left-[5%] bottom-[25%] text-white text-6xl textPic"
      >
        All products
      </div>
      <ElImage
        src="/src/assets/product_list_pic.png"
        class="w-full imagePlant"
      />
    </div>
    <div class="container paddingYX mx-auto py-24">
      <div
        class="flex clearFlex customFlex gapForFilter gapFilter gap-[4.5rem]"
      >
        <div class="flex flex-col gap-10">
          <div class="flex flex-col gap-4 hiddenFilter">
            <h1 class="text-3xl text-[#2A254B] textFilter">Product Type</h1>
            <div class="flex flex-col gap-2 checkBox">
              <el-checkbox-group
                v-model="checkProductType"
                v-for="product in productType"
                class="flex flex-col gap-3"
              >
                <el-checkbox :label="product" />
              </el-checkbox-group>
            </div>
          </div>
          <div class="flex flex-col gap-4 hiddenFilter">
            <h1 class="text-3xl text-[#2A254B] textFilter">Price</h1>
            <div class="flex flex-col gap-2 checkBox">
              <el-checkbox-group
                v-model="checkProductPrice"
                v-for="product in productPrice"
                class="flex flex-col gap-3"
              >
                <el-checkbox :label="product" />
              </el-checkbox-group>
            </div>
          </div>
          <div class="flex flex-col gap-4 hiddenFilter">
            <h1 class="text-3xl text-[#2A254B] textFilter">Designer</h1>
            <div class="flex flex-col gap-2 checkBox">
              <el-checkbox-group
                v-model="checkDesigner"
                v-for="product in productDesigner"
                class="flex flex-col gap-3"
              >
                <el-checkbox :label="product" />
              </el-checkbox-group>
            </div>
          </div>
          <Collapse
            v-model="visible"
            class="hiddenCollapseFilter paddingForFilter paddingXSmall"
            ><template #header
              ><div
                :class="{ collapseRadius: visible }"
                class="flex justify-between items-center cursor-pointer bgCollapse px-6 py-3"
              >
                <h1 class="col-span-3 text-3xl text-[#2A254B]">
                  Product Filters
                </h1>
                <el-icon
                  :class="{ collapseVisibleActive: visible }"
                  class="collapseVisible"
                  ><ArrowRightBold
                /></el-icon></div
            ></template>
            <div
              class="px-6 pb-3 bgContentCollapse flex flex-col gap-5 checkBox"
            >
              <div class="flex flex-col gap-3">
                <h1 class="text-2xl text-[#2A254B]">Product Type</h1>
                <div class="flex flex-col gap-2">
                  <el-checkbox-group
                    v-model="checkProductType"
                    v-for="product in productType"
                  >
                    <el-checkbox :label="product" />
                  </el-checkbox-group>
                </div>
              </div>
              <div class="flex flex-col gap-3">
                <h1 class="text-2xl text-[#2A254B]">Price</h1>
                <div class="flex flex-col gap-2">
                  <el-checkbox-group
                    v-model="checkProductPrice"
                    v-for="product in productPrice"
                    class="flex flex-col gap-3"
                  >
                    <el-checkbox :label="product" />
                  </el-checkbox-group>
                </div>
              </div>
              <div class="flex flex-col gap-3">
                <h1 class="text-2xl text-[#2A254B]">Designer</h1>
                <div class="flex flex-col gap-2">
                  <el-checkbox-group
                    v-model="checkDesigner"
                    v-for="product in productDesigner"
                    class="flex flex-col gap-3"
                  >
                    <el-checkbox :label="product" />
                  </el-checkbox-group>
                </div>
              </div>
            </div>
          </Collapse>
        </div>
        <div
          class="grid grid-cols-3 gridTwo customGrid paddingForFilter clearFlex gapForFilter gapItem gap-10"
        >
          <ProductCard
            v-if="sortedArrayHasItem"
            v-for="allItem in sortedItems"
            :key="allItem.id"
            :item="allItem"
          />
          <div v-else class="text-2xl text-[#2A254B]">
            Nothing found for your request
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
