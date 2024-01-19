// 请求登录
import { uniReq } from "./request";
// 需要参数
/// phoneNumber:需要提供一个手机号码即可
// 需要符合^1[3-9][0-9]{9}$

export function logintest(data) {
    return uniReq({
        url: "/login/wxMin/simple",
        data,
        header: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest",
        },
        method: "POST",
    })
}
