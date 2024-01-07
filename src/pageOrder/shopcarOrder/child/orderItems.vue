<template>
    <scroll-view scroll-y class="scroll">
        {{ items }}
    </scroll-view>
</template>
<style scoped>
.scroll {
    display: flex;
    justify-content: center;
    align-items: center;

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
</script>