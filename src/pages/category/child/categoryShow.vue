<template>
    <scroll-view scroll-y class="category-show">
        <view class="category-swiper">
            <swiperMain :swiperData="swiperData"></swiperMain>
        </view>
        <view v-for="item in categoryActiveItem" :key="item.id">
            <view class="category-title">
                <text>
                    {{ item.name }}
                </text>
                <text class="category-title-showall" @tap="navShowall(item.goods)">
                    全部>
                </text>
            </view>
            <categoryShowbox :categoryActiveItemGoods="item.goods"></categoryShowbox>
        </view>
    </scroll-view>
</template>
<script setup>
import { watch, watchEffect, ref, onMounted } from "vue";

import swiperMain from "../../../components/swiper/swiperMian.vue";
import categoryShowbox from "./categoryShowbox.vue";
// 渲染右展示区
const props = defineProps({
    categoryActiveItem: {
        type: Array,
        default: function () {
            return [];
        },
    },
    categoryActivePic: {
        type: String,
        default: "",
    },
});

// 轮播图数据获取

const swiperData = ref();
// import { banner } from "../../../network/banner.js";
// 挂载时触发
onMounted(() => {

    banner().then((res) => {
        swiperData.value = res.data.result;
    });

})
// 转载到showall
const navShowall = (goods) => {
    uni.navigateTo({
        //   将对应数据转化为JSON格式,且发送给showall
        url: "/pages/showall/showall?goodsData=" + JSON.stringify(goods),
    });
};
</script>
<style scoped>
.category-show {
    width: 80vw;
    height: 100vh;
}

.category-title {
    display: flex;
    justify-content: space-between;
    padding: 2vh 0;
    font-size: 32rpx;
    background-color: #fbfbfb80;
}

.category-swiper {
    box-sizing: border-box;
    margin: 0 4vw;
}

.category-title-showall {
    margin: auto 0;
    margin-right: 4vw;
    font-size: 24rpx;
    color: #271a00c4;
}
</style>