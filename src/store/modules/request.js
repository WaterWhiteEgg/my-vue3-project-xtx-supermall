import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useRequest = defineStore('request', () => {
    const token = ref("")

    const userData = ref()

    // 覆盖userData的数据
    const addUserData = (data) => {
        userData.value = data
    }
    // token
    const addToken = (data) => {
        token.value = data
    }
    // 清除token
    function clearToken() {
        token.value = ""
    }
    return { token, userData, addToken, clearToken, addUserData };

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