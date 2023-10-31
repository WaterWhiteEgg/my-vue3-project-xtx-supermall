
<template>
    <view class="price">
        <view>
            <text class="sign">￥</text>
            <text class="new-price">
                {{ price }}
            </text>
        </view>
        <view v-if="!isNaN(price) && price !== oldPrice">
            <text class="old-sign">￥</text>
            <text class="old-price">
                {{ oldPrice.toFixed(2) }}
            </text>
        </view>

    </view>
</template>
<script setup>
import { ref } from "vue";

// 获取数据
const props = defineProps({
    price: {
        type: Number,
        default: 0
    },
    oldPrice: {
        type: Number,
        default: 0
    },
})

</script>
<style scoped>
.price {
    height: 9vh;
    display: flex;
    align-items: center;
    font-size: 43rpx;
    color: #fff;
    background-color: #12c1a7;
}

.sign {
    padding-left: 3vw;
    font-size: 25rpx;
}

.old-sign {
    padding-left: 1vw;
    font-size: 25rpx;
    color: red;


}

.old-price {
    font-size: 25rpx;
    color: red;
    text-decoration: line-through;
}
</style>
  