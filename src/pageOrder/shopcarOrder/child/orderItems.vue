<template>
    <scroll-view scroll-y class="scroll" @scrolltolower="scrolltolower" lower-threshold="100">
        {{ items }}
    </scroll-view>
</template>
<style scoped>
.scroll {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 93vh;

}
</style>
<script setup>
import { ref, watch, watchEffect } from 'vue'
const props = defineProps({
    // 要展示的数据
    items: {
        type: Array,
        default: function () {
            return []
        }
    }

})
const emits = defineEmits(["scrolltolower"])

// 触底时触发
const scrolltolower = ()=>{
    // 发给父组件
    emits("scrolltolower")

} 
</script>