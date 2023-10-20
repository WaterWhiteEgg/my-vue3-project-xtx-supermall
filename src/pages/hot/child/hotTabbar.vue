<template>
    <view class="hottabbar">
        <text v-for="(item, index) in hotItemArray" class="hottabbar-item" :key="item.id" @tap="changeActive(index)"
            :class="{ 'hottabbar-item-active': index === activeItem }">
            {{ item.title }}</text>

    </view>
</template>

<script setup>
import { ref } from "vue"
const props = defineProps({
    hotItemArray: {
        type: Array,
        default: function () {
            return []
        }
    }
})
// 发送事件名字
const emits = defineEmits(["tabbarIndex"])

// 切换活跃
const activeItem = ref(0)
const changeActive = (index) => {
    activeItem.value = index
    // 发送要切换index数字
    emits("tabbarIndex", index)

}


</script>

<style scoped>
.hottabbar {
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 8vh;
    margin: 0 2vw;
    margin-top: 15vh;
    border-radius: 15rpx;
    font-size: 30rpx;
    background-color: rgb(255, 255, 255);
    box-shadow: 0rpx 3rpx #0000005c;
}

.hottabbar-item {}

.hottabbar-item-active {
    position: relative;
}

.hottabbar-item-active::after {
    content: "";
    position: absolute;
    bottom: -5px;
    /* 距离盒子底部的距离 */
    left: 50%;
    width: 50%;
    /* 下划线的长度，可以根据需要进行调整 */
    height: 2px;
    /* 下划线的高度，可以根据需要进行调整 */
    background-color: rgb(0, 77, 0);
    /* 下划线的颜色 */
    transform: translateX(-50%);
}
</style>