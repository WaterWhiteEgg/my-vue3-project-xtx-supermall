<template>
    <view class="ad">
        <view class="ad-tag">满减</view>
        <view class="ad-desc">满5件，即可享受9折优惠！</view>
    </view>
    <scroll-view scroll-y class="scroll">
        <view class="shopcar" v-for="item in data">
        </view>
        <guessLike></guessLike>
    </scroll-view>
    <view class="all-shopcar">
        <view class="all">
            <radio style="transform: scale(0.6)" color="#12c1a7" />
            <view class="all-text">
                <view>全选</view>
            </view>
        </view>
        <view class="total">
            <view>合计:</view>
            <view class="total-box">
                <text class="total-ico">￥</text>
                <text class="total-price">10000</text>

            </view>
        </view>
        <view class="settlement">去结算(100)</view>
    </view>
</template>
<script setup>
import guessLike from '../../components/Content/guessLike/guessLike.vue';
// 模拟数据
const data = [{
    id: "2",
    name: "广告",
    price: 0,
    count: 0,
    picture: "../../static/color/logo.png",
    skuId: "string",
    attrsText: "string",
    selected: true,
    nowPrice: 0,
    stock: 0,
    isCollect: true,
    discount: 0,
    isEffective: true
}]
</script>

<style scoped>
.ad {
    display: flex;
    align-items: center;
    height: 5vh;
    font-size: 25rpx;
    background-color: #fff;
}

.ad-tag {
    height: 3vh;
    padding: 0 1vw;
    margin: 0 1vw;
    background-color: #0bb39a;
    color: #ffffff;
}

.ad-desc {
    color: #1b1b1b;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}

.scroll {
    height: 88vh;

}

.all-shopcar {
    position: absolute;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 8vh;
    width: 100vw;
    background-color: #ffffff;
    font-size: 30rpx;
    overflow: hidden;
}

.all {
    display: flex;
    text-align: center;
    justify-content: center;
    margin-left: 2vw;

}

.all-text {
    margin-left: -2vw;
    margin-top: 1vh;
}

.total {
    display: flex;
    align-items: center;
    height: 70%;
    width: 40vw;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}

.total-box {
    margin: 0 .5vw;
    margin-top: .5vh;
}

.total-ico {
    font-size: 20rpx;
    color: #e98400;
}

.total-price {
    font-size: 35rpx;
    font-weight: 900;
    color: #e98400;

}

.settlement {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 2vw;
    padding: 0 6vw;
    height: 70%;
    border-radius: 35rpx;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    background-color: #0bb399d7;
    color: #ffffff;
}
</style>
