// 请求个人详情，需要token验证
// 由于中间件已经制作 只要有token就往请求头里硬塞 所以不需要管token 没有token请求会失败
import { uniReq } from "./request";
// 获取个人数据
export function getProfile() {
    return uniReq({
        url: "/member/profile",
        header: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest",
        },
        method: "GET",
    })
}
