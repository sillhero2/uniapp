import { createSSRApp } from "vue";
// SSR 后端（服务端）渲染

// 引入组件
import App from "./App.vue";
export function createApp() {
  const app = createSSRApp(App);
  return {
    app, // 挂载模板
  };
}
/**
 *
 */
