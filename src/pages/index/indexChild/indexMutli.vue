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
@import url("./style/indexMutli.css");

</style>