<template>
    <skeleton v-if="showing().isSkeleton"></skeleton>
    <indexNavber></indexNavber>
    <swiper-mian :swiperData="swiperData"></swiper-mian>
    <indexMutli :mutliData="mutliData"></indexMutli>
    <IndexHotMutil :hotMutilData="hotMutilData"></IndexHotMutil>
    <guessLike></guessLike>
</template>

<script setup>
import indexNavber from "../../components/Content/indexNavber/indexNavber.vue";
import "../../network/interceptor";
import skeleton from "../../components/Content/skeleton/skeleton.vue";
import { bannerData } from "./js/bannerData";
import { hotMutli, mutli } from "../../network/home";
import { showing } from "../../store/show"

import swiperMian from "../../components/swiper/swiperMian.vue";
import indexMutli from "./indexChild/indexMutli.vue";
import guessLike from "../../components/Content/guessLike/guessLike.vue"
import IndexHotMutil from "./indexChild/indexHotMutil.vue";

import { onMounted, ref } from "vue";

const swiperData = ref();
const mutliData = ref([]);
const hotMutilData = ref([])

// 骨架屏控制
const { closeSkeleton, openSkeleton, } = showing()
// 首页渲染时触发
onMounted(() => {
    // 骨架屏开启
    openSkeleton()
    // 请求广告数据
    bannerData().then((res) => {
        // 利用res.status返回成功或错误的结果
        if (!res.status) {
            // 成功获取数据
            swiperData.value = res.data;
        }
        //  else {
        // 失败目前啥也不干，不是一定要用这个地方的可以去doBanner里面
        // 写逻辑
        // }
        // console.log(swiperData.value);
    })
        // bannerData结束时关闭骨架屏
        .finally(() => {
            closeSkeleton()
        })
    //热点推荐请求
    hotMutli().then((res) => {
        // 获取热点请求数据
        hotMutilData.value = res.data.result
        // console.log(res.data.result);
    });
    //前台图片数据请求
    mutli().then((res) => {
        // 获取前台图片数组
        mutliData.value = res.data.result;
        // console.log(res);
    });
});



</script>

<style>
@import url("../../static/icon/iconfont.css");

.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.logo {
    height: 200rpx;
    width: 200rpx;
    margin-top: 200rpx;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50rpx;
}

.text-area {
    display: flex;
    justify-content: center;
}

.title {
    font-size: 36rpx;
    color: #8f8f94;
}
</style>
