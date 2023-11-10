import {
	createSSRApp
} from "vue";
import pinia from "./store/index"
import App from "./App.vue";

export function createApp() {
	const app = createSSRApp(App);
	app.use(pinia);
	return {
		app
	};
}

// 全局使用字体图标
import "../src/static/icon/iconfont.css"
