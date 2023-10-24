<template>
    <scroll-view scroll-y class="category-show">
        <view v-for="item in categoryActiveItem" :key="item.id">
            {{ item.name }}
            <categoryShowbox :categoryActiveItemGoods="item.goods"></categoryShowbox>
        </view>

    </scroll-view>
</template>
<script setup>
import categoryShowbox from './categoryShowbox.vue';
// 渲染右展示区
const props = defineProps({
    categoryActiveItem: {
        type: Array,
        default: function () {
            return []
        }
    }
})
</script>
<style scoped>
.category-show{
    background-color: red;
    height: 100vh;
}
</style>