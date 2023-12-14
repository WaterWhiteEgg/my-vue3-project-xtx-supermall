// 请求购物车数据
import { uniReq } from "./request";

// 获取购物车
export function getShopcar() {
    return uniReq({
        url: "/member/cart",
        method: "GET",
    })
}

// 加入购物车
// 需要
// "skuId": "",
// "count": 0
export function joinShopcar(data) {
    console.log(data);
    return uniReq({
        url: "/member/cart",
        data,
        method: "POST",
    })
}

// 删除/清空(根据数组)购物车
export function delShopcar(ids) {
    return uniReq({
        url: "/member/cart",
        data: {
            ids
        },
        method: "DELETE",
    })
}

// 修改单品购物车的数量/选中状态
// 能修改
// "selected": true,
// "count": 0
export function changeShopcar(skuid, data) {
    return uniReq({
        url: "/member/cart/" + skuid,
        data,
        method: "PUT",
    })
}

// 请求取消全选/全选
export function allSelectShopcar(selected) {
    return uniReq({
        url: "/member/cart/selected",
        data: {
            selected
        },
        method: "PUT",
    })
}

