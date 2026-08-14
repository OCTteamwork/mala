# CF JE 1.8.9 One-Click

Minecraft Java 1.8.9 / Protocol 47 的 Cloudflare 驱动服务端实验项目。

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/OCTteamwork/mala)

## 手机一键部署

1. 点上面的 **Deploy to Cloudflare**。
2. Cloudflare 自动创建 Worker、D1、KV、静态管理面板并完成绑定。
3. 部署完成后打开 Worker 地址的 `/setup.html`。
4. 点 **初始化服务器**，管理员 Token 自动保存在浏览器。
5. 页面会生成一条 Termux 安装命令，复制执行即可启动 Minecraft Gateway。

支持 Offline、Mojang/Microsoft 正版会话验证、自定义 Yggdrasil、玩家位置、聊天、方块改动持久化、白名单、封禁、管理员、网页面板等。

> Cloudflare Workers 当前不能直接监听 Minecraft 入站 TCP，所以真正的 25565 游戏入口仍由 Termux Gateway 提供。
