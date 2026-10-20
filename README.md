# Moment — 记录当下，偶遇过去。

Moment 是一款为 [Obsidian](https://obsidian.md/) 打造的私人生活记录与回忆插件。

像发朋友圈一样轻松写下文字、照片、地点、标签与录音；用时间线、日历和往年同日回忆，保存生活里值得记住的瞬间。

- **记录 Timeline**：文字、最多 9 张图片、地点、标签、本地录音
- **日历 Calendar**：日 / 月 / 年回顾，支持补记历史日期
- **回忆 Memories**：累计 20 条 Moment 后开启回忆，优先匹配往年同日
- **本地优先**：Markdown、图片与录音保存在自己的 Obsidian Vault
- **多平台**：Desktop、iOS、iPadOS、Android
- **版本**：1.0.0；最低 Obsidian 1.13.7

## 最新稳定版：1.0.0

**[查看 Moment 1.0.0 正式 Release](https://github.com/libaiwan925/Moment-Releases/releases/tag/1.0.0)**

公开 Release 已提供 `main.js`、`manifest.json`、`styles.css` 三个安装文件，BRAT 可以通过这个公开仓库获取稳定版，无须 GitHub Token。

此仓库仅分发 **stable 版本**，不包含私有源码、内部测试数据或 Beta 构建。

## 方式一：通过 BRAT 安装（推荐）

1. 打开 Obsidian → **设置 → 第三方插件 → 浏览**，搜索并安装 **BRAT**。
2. 在 BRAT 设置里选择 **Add Beta Plugin**。
3. 填入仓库地址：`https://github.com/libaiwan925/Moment-Releases`。
4. 选择版本 `1.0.0`，添加插件。
5. 在 Obsidian **设置 → 第三方插件**中找到并启用 **Moment**。

如果之前添加仓库时出现“没有找到发布版本”，现在可重新添加同一地址。

## 方式二：手动安装

在 [Moment 1.0.0 Release](https://github.com/libaiwan925/Moment-Releases/releases/tag/1.0.0) 中下载：

- [main.js](https://github.com/libaiwan925/Moment-Releases/releases/download/1.0.0/main.js)
- [manifest.json](https://github.com/libaiwan925/Moment-Releases/releases/download/1.0.0/manifest.json)
- [styles.css](https://github.com/libaiwan925/Moment-Releases/releases/download/1.0.0/styles.css)

将这三个文件放在 Vault 的 `.obsidian/plugins/moment/` 目录下，重启 Obsidian，在 **设置 → 第三方插件**中启用 **Moment**。

## 构建和发布来源

安装包来自私有 Moments 源码 commit `4729e8c` 对应的成功 CI 构建（`npm ci` + `npm run check`），发布过程验证了所有安装文件的原始 Git Blob SHA，并在公开 Release 创建后进行逐字节比对。

详细信息参见 [BUILD_PROVENANCE.md](BUILD_PROVENANCE.md) 与 [RELEASE_NOTES.md](RELEASE_NOTES.md)。

> 自动测试通过不等同于已覆盖所有设备组合。若在 iOS、Android 或 Obsidian 特定版本上遇到问题，请附系统版本、Obsidian 版本与重现步骤反馈。

## 隐私

Moment 不运营账号系统、社区或上传服务。插件的数据以 Markdown、图片、录音文件的形式保存在用户自己的 Vault。使用 Obsidian Sync 或第三方同步时，请以相应同步服务的隐私策略为准。
