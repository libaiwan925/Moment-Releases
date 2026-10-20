# Moment 1.0.0 — 记录当下，偶遇过去

Moment 是面向 Obsidian 的私人生活记录与回忆插件。这是首个稳定版。

### 核心能力

- **记录 Timeline**：文字、最多 9 张图片、地点、标签、本地录音、按时间浏览与分页
- **详情与编辑**：照片轮播、完整音频播放、修改正文 / 图片 / 地点 / 标签，支持删除
- **回忆 Memories**：累计 20 条记录后启用历史回忆，优先寻找往年同日
- **日历 Calendar**：日、月、年回顾；可补记历史日期；月、年视图可更换代表记录
- **发布回声**：根据同地点或标签提示过去的相关记录
- **数据隐私**：文字为 Markdown，照片与录音都保存在自己的 Obsidian Vault，不上传到 Moment 服务器

### 安装方式

在 Obsidian 中安装 BRAT，选择 **Add Beta Plugin** 并填写：

```text
https://github.com/libaiwan925/Moment-Releases
```

安装后到 **设置 → 第三方插件** 启用 **Moment**。

也可以下载本 Release 的 `main.js`、`manifest.json`、`styles.css`，复制到 Vault 的 `.obsidian/plugins/moment/`，重启 Obsidian 后启用。

### 兼容性与版本

- 版本：`1.0.0`
- 插件 ID：`moment`
- Obsidian 最低版本：`1.13.7`
- 支持平台：桌面和移动平台（macOS、Windows、Linux、iOS、iPadOS、Android）

### 构建可追溯性

这三个文件直接来自私有 Moments 源码提交 `4729e8c84c469ffd84007d0a8bf715dde6ba0d9c` 对应的成功 GitHub Actions CI 构建，自动执行了 `npm ci` 与 `npm run check`。发布工作流逐项验证文件的 Git Blob SHA，并在发布后比对 Release 中的文件字节。

> 自动测试通过不等同于在所有手机型号上做过人工验收。如遇兼容性问题，请反馈 Obsidian 版本、操作系统及重现步骤。
