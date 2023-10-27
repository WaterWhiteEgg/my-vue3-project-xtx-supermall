import { defineStore } from 'pinia';
import { ref } from 'vue';



export const detail = defineStore('detail', () => {

    function toDetail(id) {
        uni.navigateTo({ url: '/pages/detail/detail?id=' + id })
    }

    return { toDetail };

});