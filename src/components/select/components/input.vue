<template>
  <div class="y-select-input">
    <label class="y-select-input__placeholder">{{ props.placeholder }}</label>
    <input type="text" class="y-select-input__inner" />
    <span class="y-select-input__suffix"></span>
  </div>
</template>

<script setup lang="ts">
  import { selectProps } from '../select'
  import type { SelectProps } from '../select'

  const props = defineProps({ placeholder: selectProps.placeholder })
</script>

<style lang="less" scoped>
  .y-select-input {
    position: relative;
    width: 100%;
    min-height: 38px;
  }
</style>
