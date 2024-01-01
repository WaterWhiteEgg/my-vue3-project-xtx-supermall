// 无法使用真正的支付请求，因为需要公司人员appid
// 请求支付(模拟)
// orderId 订单id
import { uniReq } from "./request";

export function pay(orderId) {
    return uniReq({
        url: "/pay/mock?orderId=" + orderId,
        method: "GET",
    })
}
