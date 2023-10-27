import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useMainDatas = defineStore('mainDatas', () => {

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