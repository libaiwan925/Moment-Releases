# Moment — 记录当下，偶遇过去。

Moment 是一款为 [Obsidian](https://obsidian.md/) 打造的私人生活记录与回忆插件。

像发朋友圈一样轻松写下文字、照片、地点、标签与录音；用时间线、日历和往年同日回忆，保存生活里值得记住的瞬间。

- **记录 Timeline**：文字、最多 9 张图片、地点、标签、本地录音
- **日历 Calendar**：日 / 月 / 年回顾，支持补记历史日期
- **回忆 Memories**：累计 20 条 Moment 后开启回忆，优先匹配往年同日
- **本地优先**：Markdown、图片与录音保存在自己的 Obsidian Vault
- **多平台**：Desktop、iOS、iPadOS、Android
- **版本基线**：v1.0.0；最低 Obsidian v1.13.7

产品介绍与使用方式：[Moment 产品页](https://libaiwan.top/products/moment/)

## 发布状态

> **正式版安装包尚未公开。** 当前公开仓库暂无 GitHub Release，也没有可供 BRAT 直接安装的 `main.js`、`manifest.json`、`styles.css`。请等待正式发布；不要从私有源码仓库寻找或下载测试构建。

此仓库仅负责公开分发 **stable 版本**。私有源代码仓库、内部测试数据和 Beta 构建不在这里公开。

## 正式版发布后的安装方式

正式版 GitHub Release 发布后：

1. 打开 Obsidian → **设置 → 第三方插件 → 浏览**，搜索并安装 **BRAT**。
2. 在 BRAT 中选择 **Add Beta Plugin**。
3. 填入公开仓库地址：`libaiwan925/Moment-Releases`。
4. 等待安装完成，在 Obsidian **设置 → 第三方插件**中启用 **Moment**。

也可以在本仓库的 GitHub Releases 页面下载正式版的 `main.js`、`manifest.json`、`styles.css`，将它们放入 Vault 的 `.obsidian/plugins/moment/` 文件夹进行手动安装。

## 稳定版发布检查清单（维护者）

发布 `1.0.0` 之前：

- 在私有源码仓库核对 `manifest.json`、`package.json`、`package-lock.json`、`versions.json` 版本一致。
- 执行 `npm ci` 与 `npm run check`，完成 Desktop、iOS、Android 核心流程测试。
- 从**同一稳定版源码提交**构建 `main.js`、`manifest.json`、`styles.css`。
- 在 **本公开仓库**创建稳定版 tag / GitHub Release，上传上述三个文件作为 Release assets；检查 Release 资产中的 `manifest.json` 版本与 tag 一致，`id` 为 `moment`。
- 验证从 BRAT 安装和手动安装的流程，再移除此 README 的「尚未公开」提示。
- 不向公开仓库发布 `-beta.*` 测试构建或测试用的 Moment 数据。

## 隐私

Moment 不运营账号系统、社区或上传服务。插件的数据以 Markdown、图片、录音文件的形式保存在用户自己的 Vault。使用 Obsidian Sync 或第三方同步时，请以相应同步服务的隐私策略为准。
