<template>
    <detailSwiper :detailDataPic="detailDataPic"></detailSwiper>
    <detailPrice :oldPrice="priceData.oldPrice" :price="priceData.price"></detailPrice>
    <detailTitle :name="detailData.name" :desc="detailData.desc"></detailTitle>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { onLoad } from '@dcloudio/uni-app';

import detailSwiper from "./child/detailSwiper.vue";
import detailPrice from "./child/detailprice.vue";
import detailTitle from "./child/detailTitle.vue"

// 获取id
// 加载时触发
import { detail } from "../../network/detail"
// 初始化数据
const detailData = ref({})
const detailDataPic = ref([])
const priceData = ref({})
onLoad((query) => {
    // 获取详情页的数据,query需要传递id
    detail(query.id).then((res) => {
        console.log(res.data.result);
        detailData.value = res.data.result
        detailDataPic.value = detailData.value.mainPictures
        // 将价格转化为浮点型
        priceData.value = {
            price: parseFloat(detailData.value.price),
            oldPrice: parseFloat(detailData.value.oldPrice),

        }
    })

})


</script>
<style scoped></style>