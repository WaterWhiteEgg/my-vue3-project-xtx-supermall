// 搜索请求
import { uniReq } from "./request";

export const easySearch = (keyword) => {
    return uniReq({
        url: "/search/tips?keyword=" + keyword,
        method: "GET",
    })
}
// 都是可选的的数据结构，会返回满足条件
// keyword 所输入的关键词
// associatedIds  联想词Id集合
// categoryId 分类id
// brandId 品牌id
// onlyDiscount 只显示特惠
// page    pageSize 数据页码以及一页大小
// sortField 字段排序 [publishTime,orderNum,price,evaluateNum] 发布时间 订单编号 价格评估 编号
// sortMethod 排序规则，asc为正序，desc为倒序，默认为desc
export const search = (data) => {
    return uniReq({
        url: "/search/all",
        data,
        method: "POST",
    })
}