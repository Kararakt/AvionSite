<script lang="ts" setup>
import { itemsView } from "../modules/ProductHelper";
import { scrollToTop } from "../modules/UtilityHelper";
const props = defineProps({
  item: {
    type: Object as () => itemsView,
    required: true,
  },
});
</script>
<template>
  <ElCard class="w-auto h-[29.5rem]" :body-style="{ padding: '0px' }"
    ><ElImage
      :src="props.item.src"
      class="w-full h-[22rem] cursor-pointer"
      @click="$router.push(props.item.url), scrollToTop()"
    />
    <div class="flex flex-col gap-3 px-8 py-5 paddingCard text-[#2A254B]">
      <h1 class="text-2xl">{{ props.item.name }}</h1>
      <span class="text-xl">£{{ props.item.cost }}</span>
    </div></ElCard
  >
</template>
