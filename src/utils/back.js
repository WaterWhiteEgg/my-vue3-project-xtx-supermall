//如果没有上一级界面则返回首页
export const back = () => {
    const pages = getCurrentPages();
    if (pages.length === 1) {
        uni.switchTab({
            url: '/pages/index/index',
        })
    } else {
        uni.navigateBack();
    }
}