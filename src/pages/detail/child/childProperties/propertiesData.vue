<template>
  <popupTitle title="商品规格"></popupTitle>
  <view>
    {{ detailSpecs }}
  </view>
</template>

<script setup>
import popupTitle from './title/popupTitle.vue';

const prop = defineProps({
  detailSpecs: {
    type: Array,
    default: function () {
      return []
    }
  }
})
</script>

<style scoped></style>