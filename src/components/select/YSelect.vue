<template>
  <div class="y-selector">
    <Input :placeholder="props.placeholder" />
  </div>
</template>

<script lang="ts" setup>
import Input from './components/input.vue'
import { selectProps } from './select'
import type { SelectProps } from './select'
  defineOptions({
    name: 'YSelect',
  })
const props = defineProps(selectProps)
</script>

<style lang="less" scoped>
  .y-selector {
    position: relative;
    width: 300px;
    height: 100px;
  }
</style>
