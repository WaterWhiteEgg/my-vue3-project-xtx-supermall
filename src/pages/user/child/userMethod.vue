<template>
    <view class="method">
        <view class="method-title">
            <view>我的订单</view>
            <view class="method-title-button">查看全部订单＞</view>
        </view>
        <view class="method-bar">
            <view class="method-bar-item" v-for="(item, index) in userMethods" :key="item.id" @tap="methodsClick(item.id)">
                <image :src="item.ico" mode="scaleToFill" />
                <text class="method-bar-item-name">{{ item.name }}</text>
            </view>

        </view>

    </view>
</template>
<script setup>
import { ref } from 'vue';

const props = defineProps({

})
// 方法是静态数据
const userMethods = ref([
    { name: "待付款", ico: "../../../static/color/daifukuan.png", id: "obligation" },
    { name: "待发货", ico: "../../../static/color/daifahuo.png", id: "beShipped" },
    { name: "待收货", ico: "../../../static/color/daishouhuo.png", id: "goodsBeReceived" },
    { name: "待评价", ico: "../../../static/color/daipingjia.png", id: "beEvaluated" },
    { name: "售后", ico: "../../../static/color/shouhou.png", id: "afterSales" },
])
// 订单的方法执行
const methodsClick = (id) => {
    // 根据id执行对应的方法
    switch (id) {
        case "obligation":
            {
                toWaitOrder()
                break;
            }
    }

}
// 前往待付款界面
const toWaitOrder = () => {
    uni.navigateTo({
        url: "/pageOrder/waitOrder/waitOrder"
    })
}
// 前往设置
const toSettings = () => {
    uni.navigateTo({
        url: "/pageMember/settings/settings"
    })
}
</script>
<style scoped>
.method {
    width: 96vw;
    margin: auto;
    margin-top: -7vh;
    margin-bottom: 5vh;
    border-radius: 5rpx;
    box-shadow: 0rpx 0rpx 3rpx #000;
    background-color: #fff;

}

.method-bar {
    display: flex;
    font-size: 25rpx;
}

.method-bar-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 1vw;
    flex: 1;
}

.method-bar-item image {
    width: 7vw;
    height: 5vh;
    object-fit: cover;
    /* 保持宽高比并填充整个容器，可能会裁剪部分内容 */
}

.method-bar-item-name {
    padding: 1vh 0;
}

.method-title {
    display: flex;
    justify-content: space-between;
    padding: 2vh 4vw;
    font-size: 30rpx;
}

.method-title-button {
    font-size: 25rpx;
    color: #8d8d8d;
}
</style>

