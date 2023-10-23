<template>
    <view class="category-left">
        <scroll-view scroll-y class="category-scroll">
            <view v-for="item in categoryitem" :key="item.id">{{ item.name }}</view>
        </scroll-view>
    </view>
</template>
<script setup>
// 渲染左列表
const props = defineProps({
    categoryitem: {
        type: Array,
        default: function () {
            return []
        }
    }
})
</script>
<style scoped>
.category-left{
    width: 15vw;
}
</style>