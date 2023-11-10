// 请求登录
import { uniReq } from "./request";
// 需要参数
// "code": "string",wx.login() 获取
// "encryptedData": "string",getphonenumber 事件回调中获取
// "iv": "string",getphonenumber 事件回调中获取
export function login(data) {
    // console.log(data);
    return uniReq({
        url: "/login/wxMin",
        data,
        method: "POST",
    })
}
