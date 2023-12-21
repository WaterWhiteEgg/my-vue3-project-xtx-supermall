import { defineStore } from 'pinia';
import { ref } from 'vue';



export const globalDetail = defineStore('detail', () => {
    // 记录id
    const id = ref("")
    // 记录地址id
    const addressId = ref(null)
    // 添加/更改id
    function changeId(newid) {
        id.value = newid
    }
    // 添加/更改id
    function changeAddressId(newid) {
        addressId.value = newid
    }
    // 前往detail
    function toDetail(id) {
        uni.navigateTo({ url: '/pages/detail/detail?id=' + id })
    }

    return { toDetail, id, changeId, addressId,changeAddressId };

});