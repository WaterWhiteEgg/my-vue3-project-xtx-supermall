<template>
  <show-static-product :dataArray="goodsData"></show-static-product>
</template>

<script setup>
import { ref } from "vue";
import { onLoad } from "@dcloudio/uni-app";

import showStaticProduct from "../../components/showStaticProduct/showStaticProduct.vue";
// 获取query并提供数据
const goodsData = ref([]);
onLoad((query) => {
  goodsData.value = JSON.parse(query.goodsData);
});
</script>

<style >
</style>