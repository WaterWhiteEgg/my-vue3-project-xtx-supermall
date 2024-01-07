<template>
    <orderTab :tabIndex="tabIndex" :tabItem="tabItem" @changeIndex="changeIndex"></orderTab>
    <orderItems :items="tabItem[tabIndex].items"></orderItems>
</template>
<script setup>
import { ref } from 'vue'
import { onLoad, onShow } from '@dcloudio/uni-app';
import { orderAll } from "../../network/purchaseOrder"

import orderTab from "./child/orderTab.vue"
import orderItems from "./child/orderItems.vue"

// 记录tab的index
const tabIndex = ref(0)
// 记录tab的信息数组
const tabItem = ref([
    { orderState: 0, name: "全部", page: 0, maxPage: 1, items: [] },
    { orderState: 1, name: "待付款", page: 0, maxPage: 1, items: [] },
    { orderState: 2, name: "待发货", page: 0, maxPage: 1, items: [] },
    { orderState: 3, name: "待收货", page: 0, maxPage: 1, items: [] },
    { orderState: 4, name: "待评价", page: 0, maxPage: 1, items: [] },
    { orderState: 5, name: "已完成", page: 0, maxPage: 1, items: [] },
    { orderState: 6, name: "已取消", page: 0, maxPage: 1, items: [] },
])

// 加载时触发
onLoad((query) => {
    // 进入页面时，根据index选择进入哪一个页面
    // 默认进入全部页面
    tabIndex.value = query.index || 0

    // 进行首个进入请求
    goOrderAll(++tabItem.value[tabIndex.value].page, tabIndex.value)

})

// 请求订单数据
const goOrderAll = (page, orderState) => {
    // 等待加载
    uni.showLoading({title:"祈祷数据中..."})
    // 网络请求
    orderAll({
        page,
        orderState
    }).then((res) => {
        // 将对应数据放入
        tabItem.value[orderState].items =
            tabItem.value[orderState].items.concat(res.data.result.items);
        console.log(res);
        // 隐藏加载
        uni.hideLoading()

    })
}

// 切换tab的index
const changeIndex = (index) => {
    tabIndex.value = index
}
</script>
<style scoped></style>