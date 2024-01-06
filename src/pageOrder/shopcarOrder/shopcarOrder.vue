<template>
    <orderTab :tabIndex="tabIndex" :tabItem="tabItem"></orderTab>
</template>
<script setup>
import { ref } from 'vue'
import { onLoad, onShow } from '@dcloudio/uni-app';
import { orderAll } from "../../network/purchaseOrder"

import orderTab from "./child/orderTab.vue"

// 记录tab的index
const tabIndex = ref(0)
// 记录tab的信息数组
const tabItem = ref([
    { orderState: 0, name: "全部" },
    { orderState: 1, name: "待付款" },
    { orderState: 2, name: "待发货" },
    { orderState: 3, name: "待收货" },
    { orderState: 4, name: "待评价" },
    { orderState: 5, name: "已完成" },
    { orderState: 6, name: "已取消" },
])

// 加载时触发
onLoad((query) => {
    // 进入页面时，根据index选择进入哪一个页面
    // 默认进入全部页面
    tabIndex.value = query.index || 0
    orderAll({
        page: 1,
        orderState: tabIndex.value
    }).then((res) => {
        console.log(res);
    })
})
</script>
<style scoped></style>