<template>
    <view class="showbox">
        <view v-for="(item, index) in dataArray" :key="item.id" class="showbox-item" @tap="toDetail(item.id)">
            <image :src="item.picture" mode="scaleToFill" class="showbox-pic" />
            <text class="showbox-title">
                <text class="showbox-title-name">{{ item.name }}</text>
                <text class="showbox-title-price"><text class="howbox-title-price-symbol">￥</text> {{ item.price }}</text>
            </text>
        </view>

    </view>
</template>


<script setup>

import { globalDetail } from "../../store/toDetail"

const props = defineProps({
    dataArray: {
        type: Array,
        default: function () {
            return []
        }
    }
})

// 跳转到详情页
// 进入详情页，需要提供id
const { toDetail } = globalDetail()
</script>
<style scoped>
.showbox {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    box-sizing: border-box;
    background-color: #f5f5f596;
}

.showbox-item {
    display: flex;
    flex-direction: column;
    width: 45vw;
    margin: 1vh 2vw;
    font-size: 25rpx;
    border-radius: 20rpx;
    background-color: #ffffff;
}

.showbox-pic {
    width: 35vw;
    height: 20vh;
    margin: 0 auto;
    margin-top: 2vh;
}

.showbox-title-name {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    height: 5vh;
    padding-top: 1vh;
    margin: 0.5vh 0;
    overflow: hidden;
    text-overflow: ellipsis;
}

.showbox-title-price {
    display: block;
    margin-bottom: 1vh;
    padding-left: 1vw;
    text-align: left;
    font-size: 36rpx;
    color: rgb(194, 0, 0);
}

.howbox-title-price-symbol {
    font-size: 20rpx;
    margin: 0 -12rpx;
}
</style>