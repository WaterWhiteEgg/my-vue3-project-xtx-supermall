<template>
    <view class="guesslike-title">
        ✨猜你喜欢✨
    </view>
    <showProduct :guesslikeDataArray="guesslikeDataArray" @tolower="tolower"></showProduct>
</template>
<script setup>
import { onMounted, ref } from "vue"

import showProduct from "../../showProduct/showProduct.vue";

import { guesslike } from "../../../network/guessLike";
// 挂载时请求网络
const guesslikeData = ref({})
const guesslikeDataArray = ref([])
onMounted(() => {
    // 猜你喜欢数据获取
    guesslike().then((res) => {
        // console.log(res);
        guesslikeData.value = res.data.result
        // 利用扩展运算符添加新的数据,同时不删除之前的数据
        guesslikeDataArray.value = [...guesslikeDataArray.value, ...guesslikeData.value.items]
        console.log(guesslikeDataArray.value);

    })
})


// 子组件的触底事件
const tolower = ()=>{
    console.log(333);
}
</script>
<style scoped>
.guesslike-title {
    text-align: center;
    background-color: rgba(255, 255, 255, 0.846);
}
</style>