# 微信 Markdown 编辑器

> Fork 自 [doocs/md](https://github.com/doocs/md)，删除了不感兴趣的功能。欢迎 Fork 之后进行进一步修改，本项目不接受任何新功能请求或者 BUG 反馈。

## 📝 项目介绍

**Markdown 文档自动即时渲染为微信图文**，让你不再为微信内容排版而发愁！只要你会基本的 Markdown 语法，就能做出一篇样式简洁而又美观大方的微信图文。

## ✨ 功能特性

### 🎨 核心功能

- ✅ **完整 Markdown 支持** - 支持所有基础语法、数学公式
- ✅ **图表渲染** - 支持 Mermaid 图表和 [GFM 警告块](https://github.com/orgs/community/discussions/16925)
- ✅ **PlantUML 支持** - 强大的 UML 图表渲染
- ✅ **Ruby 注音扩展** - 支持 `[文字]{注音}`、`[文字]^(注音)` 格式，支持多种分隔符

### 🎯 编辑体验

- ✅ **代码高亮** - 丰富的代码块高亮主题，提升代码可读性
- ✅ **自定义样式** - 允许自定义主题色和 CSS 样式，灵活定制展示效果
- ✅ **草稿保存** - 内置本地内容管理功能，支持草稿自动保存

### 🚀 高级功能

- ✅ **文件管理** - 便捷的文件导入、导出功能，提升工作效率

## 🎬 产品演示

<div align="center">

|                                      🎨 主题切换                                      |                                      📝 样式扩展                                      |
| :-----------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------: |
| ![demo1](https://cdn-doocs.oss-cn-shenzhen.aliyuncs.com/gh/doocs/md/images/demo1.gif) | ![demo3](https://cdn-doocs.oss-cn-shenzhen.aliyuncs.com/gh/doocs/md/images/demo3.gif) |

</div>

## 🛠️ 开发与部署

```sh
# 安装 node 版本
nvm i && nvm use

# 安装依赖
pnpm i

# 启动开发模式
pnpm web dev
# 访问 http://localhost:5173/md/

# 部署在 /md 目录
pnpm web build

# 部署在根目录
pnpm web build:h5-netlify

# Chrome 插件启动及调试
pnpm web ext:dev
# 访问 chrome://extensions/ 打开开发者模式，加载已解压的扩展程序，选择 apps/web/.output/chrome-mv3-dev 目录

# Chrome 插件打包
pnpm web ext:zip

# Firefox 扩展打包(how to build Firefox addon)
pnpm web firefox:zip # output zip file at in apps/web/.output/md-{version}-firefox.zip

# uTools 插件打包
pnpm utools:package # output zip file at apps/utools/release/md-utools-v{version}.zip

# cloudflare workers
pnpm web wrangler:dev # cloudflare workers dev 模式
pnpm web wrangler:deploy # cloudflare workers 部署命令
```

## 🚀 快速搭建私有服务

### 📦 方式 1. 使用 npm cli

通过我们的 npm cli 你可以轻易搭建属于自己的微信 Markdown 编辑器。

```sh
# 安装
npm i -g @doocs/md-cli

# 启动
md-cli

# 访问
open http://127.0.0.1:8800

# 启动并指定端口
md-cli port=8899

# 访问
open http://127.0.0.1:8899
```

md-cli 支持以下命令行参数：

- `port` 指定端口号，默认 8800，如果被占用会随机使用一个新端口。
- `spaceId` dcloud 服务空间配置
- `clientSecret` dcloud 服务空间配置

### 🐳 方式 2. 使用 Docker 镜像

如果你是 Docker 用户，也可以直接使用一条命令，启动**完全属于你的、私有化运行的实例**。

```sh
docker run -d -p 8080:80 doocs/md:latest
```

容器运行起来之后，打开浏览器，访问 http://localhost:8080 即可。

关于本项目 Docker 镜像的更多详细信息，可以关注 https://github.com/doocs/docker-md

## 👥 谁在使用

请查看 [📋 USERS.md](USERS.md) 文件，了解使用本项目的公众号。

## 🤝 贡献指南

我们欢迎任何形式的贡献！请查看 [📖 CONTRIBUTING.md](./CONTRIBUTING.md) 获取提交 PR、Issue 的流程与规范。

## ☕ 支持我们

如果本项目对你有所帮助，可以通过以下方式支持我们的持续开发。

<table style="margin: 0 auto">
  <tbody>
    <tr>
      <td align="center" style="width: 260px">
        <img
          src="https://cdn-doocs.oss-cn-shenzhen.aliyuncs.com/gh/doocs/md/images/support1.jpg"
          style="width: 200px"
        /><br />
      </td>
      <td align="center" style="width: 260px">
        <img
          src="https://cdn-doocs.oss-cn-shenzhen.aliyuncs.com/gh/doocs/md/images/support2.jpg"
          style="width: 200px"
        /><br />
      </td>
    </tr>
  </tbody>
</table>
