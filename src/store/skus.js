import { defineStore } from 'pinia';
import { ref } from 'vue';



export const globalSkuItem = defineStore('globalSkuItem', () => {
    // 记录skus的数据
    const skuItem = ref({})
    // 改变skus的数据
    function changeSkuItem(val) {
        skuItem.value = val
    }
    // 记录skus的数量
    const quantity = ref(1)
    // 改变skus的数量
    function changeQuantity(val) {
        skuItem.value = val
    }
    return { skuItem, quantity, changeSkuItem, changeQuantity };

});