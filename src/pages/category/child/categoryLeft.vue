<template>
        <scroll-view scroll-y class="category-scroll">
            <view v-for="(item, index) in categoryitem" :key="item.id" :class="{ 'active': activeItem === index }"
                @tap="changeActiveItem(index)">{{
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
    width: 15vw;
}

.active {
    background-color: red;
}
</style>