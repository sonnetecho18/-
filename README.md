# 余秋雨：行者无疆

这是一个基于 HTML、Tailwind CSS 与原生 JavaScript 的单页文化阅读导览原型。页面包含人生地图、作品地点筛选、地点详情弹层、人物关系分类示意，以及本机点赞、收藏和留言交互。

## 本地预览

在 `outputs` 目录运行内置预览服务器：

```powershell
node preview-server.cjs
```

浏览器访问 `http://127.0.0.1:4173`。也可以用其他静态 HTTP 服务托管这个目录。页面使用 Tailwind CDN；主要品牌样式同时保存在 `styles.css` 中。

## 页面文件

- `index.html`：页面结构与 Tailwind 配置
- `styles.css`：品牌变量、版式、组件与响应式样式
- `app.js`：地图、筛选、弹层、关系图和本机互动逻辑
- `preview-server.cjs`：仅依赖 Node 内置模块的本地预览服务器

点赞、收藏与留言目前仅写入当前浏览器的 `localStorage`，不会在用户之间共享。作品地点和关系人物的示例内容保留了“待核实”状态；公开上线前需要补齐逐条来源、图片授权、评论治理与隐私说明。
