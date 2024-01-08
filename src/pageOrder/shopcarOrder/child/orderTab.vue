<template>
    <scroll-view scroll-x class="scroll">
        <text v-for="(item, index) in tabItem" :key="item.orderState" :class="{ 'active': index === realTabIndex }"
            @tap="changeTab(index)">{{ item.name
            }}</text>
    </scroll-view>
</template>
<style scoped>
.scroll {
    position: sticky;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    z-index: 99;
    white-space: nowrap;
    font-size: 30rpx;
    background-color: #fff;
}

.scroll text {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding: 2vh 4vw;
    height: 7vh;
    width: 20vw;

}

.active {
    border-bottom: 3px solid #00c2a5;
}
</style>
<script setup>
import { ref, watch, watchEffect } from 'vue'
const props = defineProps({
    // 开局活跃index
    tabIndex: {
        type: Number,
        default: 0
    },
    // tab数组
    tabItem: {
        type: Array,
        default: function () { return [] }
    }

})
const realTabIndex = ref(0)
// 监听同步tabIndex
watchEffect(() => {
    realTabIndex.value = props.tabIndex
})
const emits = defineEmits(["changeIndex"])
// 切换tab
const changeTab = (index) => {
    emits("changeIndex", index)
}
</script>