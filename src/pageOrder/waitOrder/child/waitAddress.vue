<template>
    <view class="address">
        <view class="address-take">
            <text class="address-take-ico">
                <image src="../../../static/color/car-side-solid.png" mode="scaleToFill" />
            </text>
            <view class="address-take-desc">
                <view>w</view>
                <view>s</view>
            </view>
        </view>
        <view class="address-name">
            <text class="address-name-ico">
                <image src="../../../static/color/positioning.png" mode="scaleToFill" />
            </text>
            <view class="address-name-desc">
                <view>w</view>
                <view>s</view>
            </view>
        </view>
    </view>
</template>
<style scoped>
.address {
    display: flex;
    flex-direction: column;
}

.address-take,
.address-name {
    display: flex;
}
</style>
<script setup>
const props = defineProps({})
const emits = defineEmits([""])
</script>