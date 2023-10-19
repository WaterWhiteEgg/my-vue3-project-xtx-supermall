<template>
    <view class="guesslike-title"> ✨猜你喜欢✨ </view>
    <showProduct :dataArray="guesslikeDataArray" @tolower="tolower"></showProduct>
</template>
<script setup>
import { onMounted, ref } from "vue";

import showProduct from "../../showProduct/showProduct.vue";

import { guesslike } from "../../../network/guessLike";

import { debounce } from "../../../utils/debounce"
// 挂载时请求网络

onMounted(() => {
    // 猜你喜欢数据获取
    doGuesslike();
});

const maxCounts = ref(null);
const page = ref(0);
const guesslikeDataArray = ref([]);

// 子组件的触底事件
const tolower = () => {
    // 如果maxCounts是null或者不大于这个它的值就不再次触发并且提示到顶
    if (maxCounts.value === null || maxCounts.value >= guesslikeDataArray.value.length) {
        doGuesslike();
    }
    // 提示弹窗
    else {
        uni.showToast({
            title: '已经到顶啦~',
            duration: 1000,
            icon: "none"
        });
    }
};

// 猜你喜欢数据获取函数
const guesslikeData = ref({});
const pageSize = ref(10);


// 执行展示加载弹窗函数
const showLoading = () => {
    uni.showLoading({
        title: '加载中...',
        icon: "none"
    });
}
const doGuesslike = () => {
    // 页码加1
    addPage();
    // 加载加载弹窗
    // 添加防抖其实就是想让它延迟执行
    debounce(showLoading(), 200)
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
    }).finally(() => {
        // 无论如何加载完都取消弹窗
        uni.hideLoading()
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