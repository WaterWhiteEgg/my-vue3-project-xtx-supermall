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
        <view class="wait">
            <waitTitle :waitPayTime="waitPayTime" :id="id" :orderState="orderState" @netPay="netPay"></waitTitle>
            <waitAddress :addressItem="addressItem" v-if="!isEmptyObject(addressItem)"></waitAddress>
            <payItemScroll :selectedShopcar="skusItem" height="30vh"></payItemScroll>
            <waitSet></waitSet>
            <waitPrice :payPrice="payPrice"></waitPrice>
            <waitMessage :payMassage="payMassage"></waitMessage>
            <guessLike> </guessLike>
        </view>
    </scroll-view>
    <waitBottom :id="id" :orderState="orderState" @netPay="netPay"></waitBottom>
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
import { ref, computed } from "vue";
import { onLoad, onShow, onReady } from "@dcloudio/uni-app";
import { order, orderAll, orderId } from "@/network/purchaseOrder";
import { pay } from "@/network/pay"

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
            this.id = result.id,
            this.orderState = result.orderState
    }
}
// 记录地址栏信息
const addressItem = ref({})

// 记录skus
const skusItem = ref([])
// 记录价格信息
const payPrice = ref({})
// 记录订单信息
const payMassage = ref({})
// 记录订单id
const id = ref("")
// 记录订单状态码，数字形态
//1为待付款、2为待发货、3为待收货、4为待评价、5为已完成、6为已取消
const orderState = ref(1)
// 加载时触发
onLoad((query) => {
    // 判断有没有query里面的数据
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
        // console.log(addressItem.value);
        // 获取价格相关信息
        payPrice.value = {
            postFee: res.data.result.postFee,
            totalMoney: res.data.result.totalMoney,
            payMoney: res.data.result.payMoney,
        }
        // 获取订单信息
        payMassage.value = {
            id: res.data.result.id,
            createTime: res.data.result.createTime,
        }
        // 赋值订单id
        id.value = res.data.result.id
        // 赋值状态
        orderState.value = res.data.result.orderState
    })
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

// 处理支付
const netPay = (Pid) => {
    console.log(3);
    uni.showLoading({ title: "等待支付" })
    // 模拟请求，因为没有真正意义上的支付，不需要请求用户的微信支付宝之类的
    pay(Pid).then(() => {
        uni.hideLoading()
        // console.log(res);
        // 重新进入页面传id
        uni.navigateTo({ url: "/pageOrder/waitOrder/waitOrder?id=" + Pid })
    })
}

// 判断对象是否为空
const isEmptyObject = computed(() => {
    return (obj) => {
        return Object.keys(obj).length === 0

    }
})
</script>