<template>
    <view class="address">
        <view class="address-take">
            <view class="address-take-ico">
                <image src="../../../static/color/car-side-solid.png" mode="scaleToFill" />
            </view>
            <view class="address-take-desc">
                <view>{{ addressItem && addressItem.receiverAddress }}</view>
                <view class="disc">{{ addressItem && addressItem.createTime }}</view>
            </view>
        </view>
        <view class="address-name">
            <view class="address-name-ico">
                <image src="../../../static/color/positioning.png" mode="scaleToFill" />
            </view>
            <view class="address-name-desc">
                <view>{{ addressItem && addressItem.receiverContact }}</view>
                <view class="disc">{{ addressItem && addressItem.receiverMobile }}</view>
            </view>
        </view>
    </view>
</template>
<style scoped>
.address {
    display: flex;
    flex-direction: column;
    font-size: 30rpx;
    background-color: #fff;

}

.address-take,
.address-name {
    display: flex;
    align-items: center;
    padding: 1vh 2vw;
    margin-top: 1vh ;
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
const props = defineProps({
    addressItem: {
        type: Object,
        default: function () {
            return {}
        }
    }

})
const emits = defineEmits([""])
</script>