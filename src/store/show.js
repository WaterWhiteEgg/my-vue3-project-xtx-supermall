import { defineStore } from 'pinia';
import { ref } from 'vue';



export const showing = defineStore('showing', () => {
    // 控制骨架屏显示隐藏
    const isSkeleton = ref(false)
    // 开启骨架屏
    function openSkeleton() {
        isSkeleton.value = true
    }
    // 关闭骨架屏
    function closeSkeleton() {
        isSkeleton.value = false
    }

    return { openSkeleton, closeSkeleton };

});