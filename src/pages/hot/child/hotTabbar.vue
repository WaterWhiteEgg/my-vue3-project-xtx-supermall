<template>
    <view class="hottabbar">
            <text v-for="item in hotItemArray" class="hottabbar-item" :key="item.id">{{ item.title }}</text>

    </view>
</template>

<script setup>
const props = defineProps({
    hotItemArray: {
        type: Array,
        default: function () {
            return []
        }
    }
})
</script>

<style scoped>
.hottabbar{
    display: flex;
    align-items: center;
    justify-content:space-around;
    height: 8vh;
    margin: 0 2vw;
    margin-top: 15vh;
    border-radius: 15rpx;
    font-size: 30rpx;
    background-color: rgb(255, 255, 255);
    box-shadow: 0rpx 3rpx #0000005c;
}
</style>