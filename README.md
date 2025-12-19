# 微信 Markdown 编辑器

> Fork 自 [doocs/md](https://github.com/doocs/md)，删除了不感兴趣的功能。欢迎 Fork 之后进行进一步修改，本项目不接受任何新功能请求或者 BUG 反馈。

## 📝 项目介绍

**Markdown 文档自动即时渲染为微信图文**，让你不再为微信内容排版而发愁！只要你会基本的 Markdown 语法，就能做出一篇样式简洁而又美观大方的微信图文。

## ✨ 功能特性

### 🎨 核心功能

- ✅ **完整 Markdown 支持** - 支持所有基础语法、数学公式
- ✅ **图表渲染** - 支持 Mermaid 图表和 [GFM 警告块](https://github.com/orgs/community/discussions/16925)

### 🎯 编辑体验

- ✅ **代码高亮** - 丰富的代码块高亮主题，提升代码可读性
- ✅ **自定义样式** - 允许自定义主题色和 CSS 样式，灵活定制展示效果

## 🛠️ 开发与部署

```sh
# 安装 node 版本
nvm i && nvm use

# 安装依赖
pnpm i

# 启动开发模式
pnpm dev
# 访问 http://localhost:5173/

# 构建静态资源（产物在 dist）
pnpm build
```

## 🐳 Docker 部署

如果你是 Docker 用户，可以直接用本仓库内置的 `Dockerfile` 构建镜像并启动实例。镜像会用 Nginx 提供静态文件服务。

```sh
docker build -f Dockerfile -t md:local .
docker run -d -p 8080:80 md:local
```

容器运行起来之后，打开浏览器，访问 http://localhost:8080 即可。
