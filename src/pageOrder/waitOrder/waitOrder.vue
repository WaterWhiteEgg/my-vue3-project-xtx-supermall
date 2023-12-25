<template>
    <view v-for="(item) in allWaitPayArray">
        <waitTitle :waitPayTime="waitPayTime"></waitTitle>
        <waitAddress></waitAddress>
        <scroll-view scroll-y>
            {{ item }}
        </scroll-view>
        <view>set</view>
        <view>bottom</view>
    </view>
</template>
<style scoped></style>
<script setup>
import { ref } from "vue";
import { onLoad, onShow } from "@dcloudio/uni-app";
import { order, orderAll, orderId } from "@/network/purchaseOrder";

import waitTitle from "./child/waitTitle.vue";
import waitAddress from "./child/waitAddress.vue"


// 记录所有待付款的数组
const allWaitPayArray = ref([])
// 记录提交/销毁时间
const waitPayTime = ref({})
// 加载时触发
onLoad((query) => {
    // 判断有没有query里面的数据
    if (query.id) {
        // console.log(query.id);
        // 有id的话将这个订单展示
        orderId(query.id).then((res) => {
            console.log(res);
            // 赋值
            allWaitPayArray.value = res.data.result.skus
            // 获得第一个订单提交/销毁时间
            waitPayTime.value = {
                createTime: res.data.result.createTime.split(" ")[1],
                payLatestTime: res.data.result.payLatestTime.split(" ")[1],
            }
            console.log(waitPayTime.value);
        })
    }
    // 没有则渲染所有等待付款
    else {
        // 请求所有待付款的订单
        orderAll({ orderState: 1 }).then((res) => {
            // 赋值
            allWaitPayArray.value = res.data.result.items;
        })
    }

})
</script>