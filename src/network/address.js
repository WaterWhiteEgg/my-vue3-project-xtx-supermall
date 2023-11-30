// 数据模型大概如下
// {
//     "receiver": "文霞",
//     "contact": "18210090580",
//     "provinceCode": "110000",
//     "cityCode": "110100",
//     "countyCode": "110101",
//     "address": "共四任化步",
//     "postalCode": "44",
//     "addressTags": "接书拉",
//     "isDefault": 0
//   }

// 信息提供的模型
    // 模型
       // {
       //     "receiver": "string",
       //     "contact": "string",
       //     "provinceCode": "string",
       //     "cityCode": "string",
       //     "countyCode": "string",
       //     "address": "string",
       //     "isDefault": 1
       // }
import { uniReq } from "./request";
// 请求添加收货地址
export function addAddress(data) {
    return uniReq({
        url: "/member/address",
        header: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest",
        },
        data,
        method: "POST",
    })
}
// 删除某个地址
export function delAddress(id) {
    return uniReq({
        url: "/member/address/" + id,
        header: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest",
        },
        method: "DELETE",
    })
}

// 修改某个地址
export function changeAddress(id,data) {
    return uniReq({
        url: "/member/address/" + id,
        header: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest",
        },
        data,
        method: "PUT",
    })
}

// 获取某个收货地址详情
export function inAddress(id) {
    return uniReq({
        url: "/member/address/" + id,
        header: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest",
        },
        method: "GET",
    })
}

// 获取所有收货地址详情
export function address() {
    return uniReq({
        url: "/member/address/",
        header: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest",
        },
        method: "GET",
    })
}