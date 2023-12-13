import { defineStore } from 'pinia';
import { ref } from 'vue';



export const globalSkuItem = defineStore('globalSkuItem', () => {
    // 记录skus的数据
    const skuItem = ref({})
    // 记录skus的数量
    const quantity = ref(1)
    return { skuItem,quantity };

});