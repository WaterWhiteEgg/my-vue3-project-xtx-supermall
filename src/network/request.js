import { useRequest } from "../store/request"




// uniapp请求变成axios封装思想，用来替换 uni.request
export const uniReq = (option) => {
    // 这个option来源于自己传入的配置对象数据
    return new Promise((resolve, reject) => {
        uni.request({
            ...option,
            // 这样无论成功失败都能使用.then等promise方式返回
            success: ({ data, statusCode, header }) => {
                // 状态码是200(<300内也是请求成功，但是内容状态可能不一样)才能真正的返回数据，可以看statusCode
                if (statusCode >= 200 && statusCode < 300) {
                    // 成功时返回
                    resolve({ statusCode, header, data })
                }
                // 401表示用户请求信息异常，需要重新登录
                else if (statusCode === 401) {
                    // 清除token
                    clearToken()
                    // 重定义页面
                    uni.navigateTo({ url: '/pages/user/user' })
                    // 返回失败
                    reject({ statusCode, header })

                }
                // 其他错误
                else {
                    // 弹窗
                    showToast(data.msg || "请求失败")
                    // 返回失败
                    reject({ statusCode, header })
                }
            },
            fail: (error) => {
                // 弹窗
                showToast("网络错误")
                reject(error)
            }
        })
    })
}
// showToast类似h5里面的弹出框
function showToast(msg = "请求失败") {
    uni.showToast({
        title: msg,
        icon: "error",
    })
}
// 清除token
function clearToken() {

    let request = useRequest()
    request.clearToken()
}