<template>
  <scroll-view scroll-y class="detail-scroll">
    <detailSwiper :detailDataPic="detailDataPic"></detailSwiper>
    <detailPrice :oldPrice="priceData.oldPrice" :price="priceData.price"></detailPrice>
    <detailTitle :name="detailData.name" :desc="detailData.desc"></detailTitle>
    <detailProperties :detailSpecs="detailSpecs" :detailSkus="detailSkus"></detailProperties>
  </scroll-view>
  <detailShop></detailShop>
</template>
<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import { onLoad, onHide, onUnload, onBackPress } from "@dcloudio/uni-app";

import detailSwiper from "./child/detailSwiper.vue";
import detailPrice from "./child/detailprice.vue";
import detailTitle from "./child/detailTitle.vue";
import detailShop from "./child/detailShop.vue";
import detailProperties from "./child/detailProperties.vue";

import { globalDetail } from "../../store/toDetail"
import { detail } from "../../network/detail";
import { globalSkuItem } from "../../store/skus";
import { joinShopcar } from "../../network/shopcar";
// 初始化数据
const detailData = ref({});
const detailDataPic = ref([]);
const priceData = ref({});
const detailSpecs = ref([]);
const detailSkus = ref([]);

// 加载时触发
onLoad((query) => {
  // 获取详情页的数据,query需要传递id
  detail(query.id).then((res) => {
    console.log(res.data.result);
    detailData.value = res.data.result;
    detailDataPic.value = detailData.value.mainPictures;
    // 将价格转化为浮点型
    priceData.value = {
      price: parseFloat(detailData.value.price),
      oldPrice: parseFloat(detailData.value.oldPrice),
    };
    // 规格
    detailSpecs.value = res.data.result.specs;
    // 规格对应的sku(是产品入库后一种归类方法,简称规格对应的数组)
    detailSkus.value = res.data.result.skus;
    // 将id存入全局
    globalDetail().changeId(query.id)
    // 清空skus
    globalSkuItem().changeSkuItem({})
  });
});

</script>
<style scoped>
/* #ifdef H5 */
.detail-scroll {
  height: calc(90vh - 44px);
}

/* #endif */

/* #ifdef MP-WEIXIN */
.detail-scroll {
  height: 90vh;
}

/* #endif */
</style>