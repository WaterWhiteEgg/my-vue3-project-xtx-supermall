<template>
    <view v-for="(item) in allWaitPayArray">
        <view>
            title
        </view>
        <view>
            address
        </view>
        <scroll-view scroll-y>
            item
        </scroll-view>
        <view>set</view>
        <view>bottom</view>
    </view>
</template>
<style scoped></style>
<script setup>
import { ref } from "vue";
import { onLoad, onShow } from "@dcloudio/uni-app";
import { order, orderAll } from "@/network/purchaseOrder";

// 记录所有待付款的数组
const allWaitPayArray = ref([])
// 加载时触发
onLoad((query) => {
    // 请求所有待付款的订单
    orderAll({ orderState: 1 }).then((res) => {
        // 赋值
        allWaitPayArray.value = res.data.result.items
    })
})
</script>