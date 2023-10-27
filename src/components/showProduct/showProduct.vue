<template>
    <scroll-view class="scroll" scroll-y @scrolltolower="scrolltolower">
        <view class="showbox">
            <view v-for="item in dataArray" :key="item.id" class="showbox-item" @tap="toDetail(item.id)">
                <image :src="item.picture" mode="scaleToFill" class="showbox-pic" />
                <text class="showbox-title">
                    <text class="showbox-title-name">{{ item.name }}</text>
                    <text class="showbox-title-price">￥{{ item.price }}</text>
                </text>
            </view>
        </view>
    </scroll-view>
</template>
<script setup>
import { debounce } from "../../utils/debounce";


// 获取渲染数据
const props = defineProps({
    dataArray: {
        type: Array,
        default: function () {
            return [];
        },
    },
});
// 填写发送事件的名字
const emit = defineEmits(["tolower"]);
// 下拉事件
const scrolltolower = () => {
    // 触发下拉事件时通知父组件
    emit("tolower");
    // console.log(props.guesslikeDataArray);
};
// 进入详情页，需要提供id
import { detail } from "../../store/toDetail"
const { toDetail } = detail()

</script>
<style scoped>
.scroll {
    height: 100vh;
}

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
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
}

.showbox-title-price {
    display: block;
    margin-bottom: 1vh;
    padding-left: 1vw;
    text-align: left;
    font-size: 28rpx;
    font-weight: 900;
    color: red;
}
</style>