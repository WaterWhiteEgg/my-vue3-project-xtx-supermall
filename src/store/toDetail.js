import { defineStore } from 'pinia';
import { ref } from 'vue';



export const globalDetail = defineStore('detail', () => {
    // 记录id
    const id = ref("")
    // 添加/更改id
    function changeId(newid) {
        id.value = newid
    }

    function toDetail(id) {
        uni.navigateTo({ url: '/pages/detail/detail?id=' + id })
    }

    return { toDetail, id, changeId };

});