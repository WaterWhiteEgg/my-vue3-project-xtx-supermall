<template>
    <scroll-view scroll-y class="category-scroll">
        <view v-for="(item, index) in categoryitem" :key="item.id" :class="{ 'active': activeItem === index }"
            class="category-scroll-item" @tap="changeActiveItem(index)">{{
                item.name }}</view>
    </scroll-view>
</template>
<script setup>
import { ref } from 'vue'
// 渲染左列表
const props = defineProps({
    categoryitem: {
        type: Array,
        default: function () {
            return []
        }
    }
})
const emits = defineEmits(['activeItem'])
// 活跃点击切换
const activeItem = ref(0)
const changeActiveItem = (index) => {
    activeItem.value = index
    // 还要通知父元素改变了index
    emits("activeItem", index)

}
</script>
<style scoped>
.category-scroll {
    width: 20vw;
}

.category-scroll-item {
    padding: 2vh 1vw;
    text-align: center;
    font-size: 30rpx;

    background-color: #ffffff;

}

.active::before {
    content: "";
    position: absolute;
    bottom: 0px;
    /* 距离盒子底部的距离 */
    left: 0%;
    width: 2px;
    /* 下划线的粗细，可以根据需要进行调整 */
    height: 100%;
    /* 下划线的高度，可以根据需要进行调整 */
    background-color: #00e200;
    /* 下划线的颜色 */
    transform: translateX(-50%);
}

.active {
    position: relative;
    background-color: rgb(239, 239, 239);
}
</style>