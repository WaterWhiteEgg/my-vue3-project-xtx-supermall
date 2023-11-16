import { useRequest } from "../store/modules/request"


const BaseURL = "https://pcapi-xiaotuxian-front-devtest.itheima.net"

// 配置对象
const interceptor = {
    // 拦截前触发
    invoke(options) {
        // 如果已经是有http/https开头的地址，不需要进行默认地址的拼接
        if (!options.url.startsWith("http")) {
            options.url = BaseURL + options.url
        }
        // 超时时长设置
        options.timeout = 10000
        // 默认请求头
        // ...options.header用于保留req设置的请求头保留

        options.header = {
            ...options.header,
            'source-client': 'miniapp'

        }
        // 有些接口需要验证token，从store获取token设置头
        const token = useRequest().token
        // 判断是否有token
        if (token) {
            // 设置token到Authorization，注意Authorization需要的格式
            options.header.Authorization = token
        }


        // console.log(options);
    }
}
uni.addInterceptor('request', interceptor)
uni.addInterceptor('uploadFile', interceptor)



