import {
	createSSRApp
} from "vue";
import * as Pinia from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from "./App.vue";
// 创建Pinia对象
const pinia = Pinia.createPinia()
// 加入插件
pinia.use(piniaPluginPersistedstate)
export function createApp() {
	const app = createSSRApp(App);
	app.use(pinia);
	return {
		app,
		Pinia
	};
}
