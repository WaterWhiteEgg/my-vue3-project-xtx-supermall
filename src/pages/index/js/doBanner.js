import { banner } from "../../../network/banner";

export default function () {
    // 请求广告
    banner().then((res) => {
        const swiper = res.data.result
        return {
            swiper
        }
    })

}