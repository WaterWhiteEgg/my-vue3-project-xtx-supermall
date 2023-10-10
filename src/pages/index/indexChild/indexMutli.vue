<template>
    <view class="mutli">
        <view v-for="item in mutliData" :key="item.id" class="mutli-box">
            <image :src="item.icon" mode="aspectFit" class="mutli-icon" />
            <text>{{ item.name }}</text>
        </view>
    </view>
</template>

<script setup>
// 定义父传子的数据
const props = defineProps({
    mutliData: {
        type: Array,
        default: function () {
            return [];
        },
    },
});
</script>

<style scoped>
.mutli {
    display: flex;
    flex-wrap: wrap ;
    margin-top:.5vh ;
    margin-bottom:.5vh ;
    text-align: center;
    font-size: 28rpx;
    color: #3e3e3e;
    background-color: #f9f9f937;
}
.mutli-box {
    display: flex;
    flex-direction: column ;
    padding: .5vh 0 0.5vh 0;
}
.mutli-icon {
    width: 20vw;
    /* padding: 0 1vw; */
    height: 7vh;
    /* height: 100%; */
}
</style>