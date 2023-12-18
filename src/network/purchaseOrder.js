// 订单请求
import { uniReq } from "./request";

// 订单请求较为复杂，因为根据状态不同而要执行的东西不同
// 预交付 预立即提交付 待发货 待收货 待评价 已完成 / 已取消

// 获取预付订单数组
export function orderPre() {
    return uniReq({
        url: "/member/order/pre",
        method: "GET",
    })
}

// 获取立即交付的订单
// 需要query的skuId count 可选addressId
export function orderPreNow(data) {
    return uniReq({
        url: `/member/order/pre/now?skuId=${data.skuId}
        &count=${data.count}
        &addressId=${data.addressId}`,
        method: "GET",
    })
}

// 获取再次交付的订单
// 需要一个存在的订单，最好是交过钱的（已收货），需要订单id
export function orderRepurchase(id) {
    return uniReq({
        url: "/member/order/repurchase/" + id,
        method: "GET",
    })
}

// 提交订单
// "goods":
// 商品skuId与count的数组集合
// [
//     {
//         "skuId": "string",
//         "count": 0
//     }
// ],

// "addressId":所选地址Id
// "deliveryTimeType":配送时间类型，1为不限，2为工作日，3为双休或假日
// "buyerMessage": 买家留言
// "payType": 支付方式，1为在线支付，2为货到付款
// "payChannel":支付渠道：支付渠道，1支付宝、2微信--支付方式为在线支付时，传值，为货到付款时，不传值
export function order(data) {
    return uniReq({
        url: "/member/order",
        data,
        method: "POST",
    })
}

// 获取单个订单详情
export function orderId(id) {
    return uniReq({
        url: "/member/order/" + id,
        method: "GET",
    })
}

// 获取订单列表
// page页码 pageSize页容量 orderState请求的订单筛选 可选
// 1为待付款、2为待发货、3为待收货、4为待评价、5为已完成、6为已取消，未传该参数或0为全部
export function orderAll(data) {
    return uniReq({
        url: "/member/order",
        data,
        method: "GET",
    })
}

// 内测中的接口，可能会有一些问题

// 模拟发货,DEV 环境中使用,用于让自己控制收货状态
// 调用后订单状态修改为待收货
export function orderConsignment(id) {
    return uniReq({
        url: "/member/order/consignment/" + id,
        method: "GET",
    })
}

// 在待收货的状态下确认，变为待评价
export function orderReceipt(id) {
    return uniReq({
        url: "/member/order/" + id + "/receipt",
        method: "PUT",
    })
}

// 仅在订单状态为待收货，待评价，已完成时，可获取物流信息

export function orderLogistics(id) {
    return uniReq({
        url: "/member/order/" + id + "/logistics",
        method: "GET",
    })
}

// 仅在订单状态为待评价，已完成，已取消时，可删除订单。
export function orderDel(ids) {
    return uniReq({
        url: "/member/order",
        data: {
            ids
        },
        method: "DELETE",
    })
}

// 仅在订单状态为待付款时，可取消订单。
export function orderCancel(id, message) {
    return uniReq({
        url: "/member/order/" + id + "/cancel",
        data:{
            message
        },
        method: "PUT",
    })
}
