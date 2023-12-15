import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useMember = defineStore('member', () => {
    

    // 地址栏数据
    const addressData = ref([])
    // 覆盖addressData的数据
    const changeAaddressData = (data) => {
        addressData.value = data
    }
    // 切换地址栏的单选按钮
    const activeRadio = ref(0);
    // 切换activeRadio的活跃值
    const changeRadio = (index) => {
        activeRadio.value = index;
    };

    return { addressData, changeAaddressData, activeRadio, changeRadio }

}, {
    // 设置

    // persist:true 持久化插件启用
    persist: {
        storage: {
            getItem(key) {
                return uni.getStorageSync(key); // 更改为从缓存中获取数据
            },
            setItem(key, value) {
                uni.setStorageSync(key, value); // 更改为将数据写入缓存中
            }
        }
    }

});