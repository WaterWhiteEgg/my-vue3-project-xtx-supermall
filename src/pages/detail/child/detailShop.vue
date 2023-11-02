<template>
    <view class="shop">
        <view class="shop-fn">
            <view class="shop-fn-item"><text>
                    <text>&#xe666;</text></text>
                <text>收藏</text>
            </view>
            <view class="shop-fn-item"><text><text>&#xe8a0;</text> </text>
                <text>客服</text>
            </view>
            <view class="shop-fn-item"><text><text>&#xe63f;</text> </text>
                <text>购物车</text>
            </view>
        </view>
        <view class="shop-button">
            <view class="shopcar">添加购物车</view>
            <view class="buying">立即购买</view>
        </view>
    </view>
</template>
<script setup>


</script>
<style scoped>
.shop {
    position: absolute;
    bottom: 0;
    z-index: 9;
    padding: .5vh 0;
    font-family: "iconfont";
    display: flex;
    justify-content: space-between;
    font-size: 30rpx;
}

.shop-fn {
    display: flex;
    font-size: 30rpx;

}

.shop-fn:first-child {
    margin-left: 1vw;
}

.shop-button {
    display: flex;
}

.shop-button view {
    padding: 1vh 4vw;
    margin: 0 1vw;
    font-size: 35rpx;
    border-radius: 40rpx;
    background-color: #12c1a7;
    color: #fff;

}

.shop-fn-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 2vw;
}

.shopcar {
    background-color: #fe9539 !important;
}
</style>