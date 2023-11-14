<template>
    <view class="method">
        <view class="my-order">我的订单</view>
        <view class="method-bar">
            <view class="method-bar-item" v-for="(item, index) in userMethods" :key="item.id">
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
</script>
<style scoped>
.method {
    width: 96vw;
    height: 10vh;
    margin: auto;
    margin-top: -7vh;
    font-size: 35rpx;
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
.method-bar-item-name{
    padding: 1vh 0;
}
</style>