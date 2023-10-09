import { banner } from "../../../network/banner";
// banner的网络请求返回
export function bannerData() {
    // 理论上并没有错误的情况出现，除非banner是不存在的
    return new Promise((resolve) => {
        // 这里写处理网络请求的方法并放回
        banner().then((res) => {
            resolve({
                status: 0,
                data: res.data.result,
                massage: "获取广告轮播图"
            })

        })
            // 注意看这个catch是banner的，就算请求失败也是成功执行返回
            // 但是要错误处理
            .catch((err) => {
                resolve({
                    status: 1,
                    message: "请求失败",
                    errMassage: err,
                })
            })


    })


}