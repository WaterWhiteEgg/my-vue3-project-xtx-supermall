<template>
    <scroll-view scroll-y class="scroll" @scrolltolower="scrolltolower" lower-threshold="100">
        <view v-for="(item, index) in items" class="item" :key="item.id">
            <view class="item-time">
                <text>{{ item.createTime }}</text>
                <view class="gray item-time-del">{{ tabItem[item.orderState].name }} |
                    <image src="../../../static/color/delete.png" mode="scaleToFill" />
                </view>
            </view>
            <view class="item-view">
                <scroll-view scroll-y class="item-view-scroll">
                    <view class="item-view-skus" v-for="(item2, index2) in item.skus" :key="item2.spuId">
                        <view class="shopcar-image">
                            <image :src="item2.image" mode="scaleToFill" />
                        </view>
                        <view class="shopcar-text">
                            <view class="shopcar-text-title">{{ item2.name }}</view>
                            <text class="shopcar-text-attrstext">{{ item2.attrsText }}</text>
                            <view class="shopcar-text-count">
                                <view class="count"> x{{ item2.quantity }} </view>
                            </view>
                        </view>
                    </view>
                </scroll-view>
                <view class="item-view-message">
                    <view>共{{ item.totalNum }}件商品</view>
                    <view class="item-view-message-realpay">实付<text class="item-view-message-ico">￥</text><text
                            class="item-view-message-price"> {{
                                item.payMoney }} </text></view>
                </view>
            </view>
            <view class="item-buttom">
                <view class="topay" v-if="item.orderState === 1">去支付</view>
                <view class="toorder" v-if="item.orderState !== 1">查看订单</view>
            </view>
        </view>
    </scroll-view>
</template>
<style scoped>
.scroll {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 93vh;
    width: 96%;
    margin: 0 auto;
    font-size: 30rpx;

}

.item {
    margin: 2vh 0;
    padding: .0 2vw;
    border-radius: 35rpx;
    background-color: #fff;
}

.item-time {
    display: flex;
    justify-content: space-between;
    padding: 2vh 1vw;
    padding-bottom: .5vh;
}

.item-time-del {
    display: flex;
    align-items: center;
    font-size: 28rpx;

}

.item-time-del image {
    width: 3.5vw;
    height: 2vh;
    padding: 0 .5vw;
}

.item-view-scroll {
    height: 30vh;
}

.item-view-skus {
    display: flex;
    margin: .5vh 2vw;
    padding: 2vh 0;
    padding-bottom: 1vh;
    font-size: 25rpx;
}

.shopcar-image image {
    width: 18vw;
    height: 12vh;
    padding: 0 1vw;
    margin-right: 1vw;
    border-radius: 20rpx;
}

.shopcar-text-title {
    width: 60vw;
    margin: 1vh 0 3.5vh 0;
    font-weight: 900;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.shopcar-text {
    width: 70vw;
}

.shopcar-text-attrstext {
    padding: 0.2vh 1vw;
    font-size: 23rpx;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    background-color: #ededed;
    color: #595959;
}

.shopcar-text-count {
    display: flex;
    width: 100%;
    justify-content: flex-end;
    align-items: center;
}

.count {
    font-weight: 900;
}

.item-view-message {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 1vh 0;
    font-size: 24rpx;
    border-bottom: .5px solid #919191;
    color: #919191;
}

.item-view-message-realpay {
    padding: 0 1vw;
}

.item-view-message-ico {
    font-size: 15rpx;
}

.item-view-message-price {
    font-weight: 900;
    color: #000;
}

.item-buttom {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 2vh 0;
}

.topay {
    padding: .5vh 5vw;
    border-radius: 35rpx;
    background-color: #00c2a5;
    border: .5px solid #00c2a5;
    color: #fff;

}

.toorder {
    padding: .5vh 4vw;
    margin: 0 2vw;
    border-radius: 35rpx;
    background-color: #ffffff;
    color: #919191;
    border: .5px solid #919191;
}

.gray {
    color: #919191;
}
</style>
<script setup>
import { ref, watch, watchEffect } from 'vue'
const props = defineProps({
    // 要展示的数据
    items: {
        type: Array,
        default: function () {
            return []
        }
    },
    // 切换的信息
    tabItem: {
        type: Array,
        default: function () {
            return []
        }
    }

})
const emits = defineEmits(["scrolltolower"])

// 触底时触发
const scrolltolower = () => {
    // 发给父组件
    emits("scrolltolower")

} 
</script>