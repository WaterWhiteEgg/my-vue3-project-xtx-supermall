<template>
    <view class="set">
        <text class="set-evaluate">去评价</text>
        <text class="set-sales">申请售后</text>
    </view>
</template>
<style scoped>
.set{
    display: flex;
    align-items: center;
    justify-content:flex-end;
    margin-top: .1vh;
    padding: 1vh 2vw;
    font-size: 30rpx;
    background-color: #fff;
}
.set text{
    padding: .2vh 4vw;
    margin: 0 2vw;
    border-radius: 35rpx;
    border: .1px solid #6666666e;
    color: #2b2b2b;
}
.set-sales{
    border-color: #12c1a7a2 !important;
    color: #12c1a7 !important;
}
</style>
<script setup>
const props = defineProps({})
const emits = defineEmits([""])
</script>