<template>
    <view class="guesslike-title"> ✨猜你喜欢✨ </view>
    <showProduct
        :guesslikeDataArray="guesslikeDataArray"
        @tolower="tolower"
    ></showProduct>
</template>
<script setup>
import { onMounted, ref } from "vue";

import showProduct from "../../showProduct/showProduct.vue";

import { guesslike } from "../../../network/guessLike";
// 挂载时请求网络

onMounted(() => {
    // 猜你喜欢数据获取
    doGuesslike();
});

// 子组件的触底事件
const tolower = () => {
    doGuesslike();
};

// 猜你喜欢数据获取函数
const guesslikeData = ref({});
const guesslikeDataArray = ref([]);
const maxCounts = ref(null);
const page = ref(0);
const pageSize = ref(10);

const doGuesslike = () => {
    // 页码加1
    addPage();
    // 猜你喜欢数据获取
    guesslike(page.value, pageSize.value).then((res) => {
        // 仅获取一次的res.data.result.counts
        maxCounts.value =
            maxCounts.value === null ? res.data.result.counts : maxCounts.value;
        // 赋值操作
        maxCounts.value = res.data.result.counts;
        guesslikeData.value = res.data.result;
        // 利用扩展运算符添加新的数据,同时不删除之前的数据
        guesslikeDataArray.value = [
            ...guesslikeDataArray.value,
            ...guesslikeData.value.items,
        ];
        // console.log(guesslikeData.value);
    });
};

// 每次执行页码加1函数
const addPage = () => {
    ++page.value;
};
</script>
<style scoped>
.guesslike-title {
    text-align: center;
    background-color: rgba(255, 255, 255, 0.846);
}
</style>