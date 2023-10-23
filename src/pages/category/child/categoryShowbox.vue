<template>
    <view class="category-show-box">
        <view v-for="item in categoryActiveItemGoods " :key="item.id">

            {{ item.name }}
        </view>
    </view>
</template>
<script setup>
// 渲染右展示区的盒子
const props = defineProps({
    categoryActiveItemGoods: {
        type: Array,
        default: function () {
            return []
        }
    }
})
</script>
<style scoped>
.category-show-box{
    background-color: blue;
}
</style>