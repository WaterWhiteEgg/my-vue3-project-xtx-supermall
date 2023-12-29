<template>
    <view class="navber">
        <navber>
            <template #title>
                <view>
                    订单详情
                </view>
            </template>
        </navber>
    </view>

    <scroll-view scroll-y class="wait-scroll">
        <view v-for="(item) in allWaitPayArray" :key="item.id" class="wait">
            <waitTitle :waitPayTime="waitPayTime"></waitTitle>
            <waitAddress :addressItem="addressItem"></waitAddress>
            <payItemScroll :selectedShopcar="skusItem" height="30vh"></payItemScroll>
            <waitSet></waitSet>
            <waitPrice :pay="pay"></waitPrice>
            <waitMessage :payMassage="payMassage"></waitMessage>
            <guessLike></guessLike>
        </view>
    </scroll-view>
    <waitBottom></waitBottom>
</template>
<style scoped>
.navber {
    position: absolute;
    top: 0;
    z-index: 999;
    width: 100vw;
}

.wait-scroll {
    height: 90vh;
}
</style>
<script setup>
import { ref } from "vue";
import { onLoad, onShow, onReady } from "@dcloudio/uni-app";
import { order, orderAll, orderId } from "@/network/purchaseOrder";
import waitTitle from "./child/waitTitle.vue";
import waitSet from "./child/waitSet.vue"
import waitPrice from "./child/waitPrice.vue"
import waitBottom from "./child/waitBottom.vue"
import waitMessage from "./child/waitMessage.vue";
import waitAddress from "./child/waitAddress.vue"
import payItemScroll from "../../components/Content/payItemScroll/payItemScroll.vue";

import navber from "../../components/navbar/navber.vue";
import guessLike from "../../components/Content/guessLike/guessLike"
// 记录所有待付款的数组
const allWaitPayArray = ref([])
// 记录提交/销毁时间
const waitPayTime = ref({})
// 将地址信息分类
class Address {
    constructor(result) {
        this.receiverAddress = result.receiverAddress,
            this.receiverContact = result.receiverContact,
            this.receiverMobile = result.receiverMobile,
            this.createTime = result.createTime

    }
}
const addressItem = ref({})
// 记录skus
const skusItem = ref([])
// 记录价格信息
const pay = ref({})
// 记录订单信息
const payMassage = ref({})
// 加载时触发
onLoad((query) => {
    // 判断有没有query里面的数据
    if (query.id) {
        // console.log(query.id);
        // 有id的话将这个订单展示
        orderId(query.id).then((res) => {
            console.log(res);
            // 赋值
            allWaitPayArray.value = []
            allWaitPayArray.value.push(res.data.result)
            // 获得第一个订单销毁时间，以及订单支付金额
            waitPayTime.value = {
                payLatestTime: res.data.result.payLatestTime,
                payMoney: res.data.result.payMoney,
            }
            // 获取地址栏需要的信息
            addressItem.value = new Address(res.data.result)
            // 获取skus信息
            skusItem.value = res.data.result.skus
            console.log(addressItem.value);
            // 获取价格相关信息
            pay.value = {
                postFee: res.data.result.postFee,
                totalMoney: res.data.result.totalMoney,
                payMoney: res.data.result.payMoney
            }
            // 获取订单信息
            payMassage.value = {
                id: res.data.result.id,
                createTime: res.data.result.createTime,

            }
        })
    }
    // 没有则渲染所有等待付款
    else {
        // 请求所有待付款的订单
        orderAll({ orderState: 1 }).then((res) => {
            // 赋值
            allWaitPayArray.value = res.data.result.items;
            console.log(allWaitPayArray.value);
        })
    }

})
// 获取页面实例
const pageInstance = getCurrentPages().at(-1)
// 加载完毕后触发
onReady(() => {
    // 加载navbar过渡动画
    pageInstance.animate(".navber",
        [{ backgroundColor: 'transparent', visibility: 'hidden', color: 'transparent' },
        { backgroundColor: '#f8f8f8', color: '#000000' }],
        1000, {
        scrollSource: '.wait-scroll',
        timeRange: 1000,
        startScrollOffset: 0,
        endScrollOffset: 50
    })
})
</script>