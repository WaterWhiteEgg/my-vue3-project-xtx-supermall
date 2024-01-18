<template>
    <view class="address">
        <view class="address-take" v-for="(item, index) in logistics.list" :key="item.id">
            <view class="address-take-ico">
                <image src="../../../static/color/car-side-solid.png" mode="scaleToFill" />
            </view>
            <view class="address-take-desc">
                <view>{{ item.text }}</view>
                <view class="disc">{{ item.time }}</view>
            </view>
        </view>
        <view class="address-name">
            <view class="address-name-ico">
                <image src="../../../static/color/positioning.png" mode="scaleToFill" />
            </view>
            <view class="address-name-desc">
                <view>{{ addressItem && addressItem.receiverContact }} {{ addressItem && addressItem.receiverMobile }}
                </view>
                <view class="disc">{{ addressItem && addressItem.receiverAddress }}</view>
            </view>
        </view>
    </view>
</template>
<style scoped>
.address {
    display: flex;
    flex-direction: column;
    margin-top: 21vh;
    font-size: 30rpx;
    background-color: #fff;

}

.address-take,
.address-name {
    display: flex;
    align-items: center;
    padding: 1vh 2vw;
    margin-top: 1vh;
    border-bottom: .1px solid #9e9e9e54;
}

.address-name-ico image,
.address-take-ico image {
    width: 8vw;
    height: 4vh;
    padding: 0 2vw;
}

.disc {
    font-size: 28rpx;
    color: #7e7e7e;
}
</style>
<script setup>
import { onMounted, watch, ref } from 'vue'

import { orderLogistics } from "../../../network/purchaseOrder"
const props = defineProps({
    addressItem: {
        type: Object,
        default: function () {
            return {}
        }
    }

})
const emits = defineEmits([""])

// 记录物流数据
const logistics = ref({})
// 挂载时触发
onMounted(() => {
    // console.log(props.addressItem, props.addressItem && (props.addressItem.orderState === 3 || props.addressItem.orderState === 4 || props.addressItem.orderState === 5));
    // 获取物流信息，判断是否需要请求物流
    if (props.addressItem && (props.addressItem.orderState === 3 || props.addressItem.orderState === 4 || props.addressItem.orderState === 5)) {
        orderLogistics(props.addressItem && props.addressItem.id).then((res) => {
            // console.log(res.data.result);
            logistics.value = res.data.result
        })

    }

})

</script>