<script lang="ts" setup>
const props = defineProps({
  propSrc: String,
  propTitle: String,
  propDescription: String,
});
</script>
<template>
  <div class="flex flex-col gap-4 text-[#2A254B]">
    <ElImage class="h-10 w-10" :src="props.propSrc" />
    <h1 class="text-2xl">{{ props.propTitle }}</h1>
    <div class="text-xl">{{ props.propDescription }}</div>
  </div>
</template>
