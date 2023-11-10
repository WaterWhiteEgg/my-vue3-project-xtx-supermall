import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

// 创建pinia实例
const pinia = createPinia()
// 使用持续化
pinia.use(piniaPluginPersistedstate)
// 导出设置
export default pinia
// 导出需要引用持久化的文件
export * from "./modules/member"
export * from "./modules/request"
