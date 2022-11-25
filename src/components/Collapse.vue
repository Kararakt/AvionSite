<script lang="ts" setup>
const props = defineProps({
  modelValue: Boolean,
});

const emit = defineEmits({
  "update:modelValue": (value: Boolean) => true,
});
const visible = computed({
  get: () => props.modelValue,
  set: (val) => emit("update:modelValue", val),
});
</script>
<template>
  <div>
    <div @click="visible = !visible">
      <slot name="header"></slot>
    </div>
    <Transition name="collapse">
      <div v-if="visible">
        <slot></slot></div
    ></Transition>
  </div>
</template>
