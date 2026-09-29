# 母芸菲 · 米粒观察样本

一个以“个人观察样本”为概念的编辑式个人网站，使用 Vite、React、TypeScript 和原生 CSS 构建。

## 本地运行

```bash
npm install
npm run dev
```

浏览器打开终端显示的本地地址，默认通常为 `http://localhost:5173/`。

## 生产构建

```bash
npm run build
npm run preview
```

生产文件输出到 `dist`。

## 内容修改

- 经历、照片说明、个签和研究方向：`src/data.ts`
- 页面正文和章节结构：`src/App.tsx`
- 色彩、字体、网格和响应式样式：`src/styles.css`
- 图片素材：`public/assets`

## GitHub Pages 部署

项目已经包含 `.github/workflows/deploy-pages.yml`。推送到 GitHub 的 `main` 分支后，GitHub Actions 会自动安装依赖、执行生产构建并发布 `dist`。

1. 在 GitHub 创建一个公开仓库，例如 `milli-observation`。
2. 将本地仓库推送到 GitHub：

```bash
git remote add origin https://github.com/你的用户名/milli-observation.git
git push -u origin main
```

3. 打开仓库的 `Settings → Pages`。
4. 在 `Build and deployment` 中，将 Source 选择为 `GitHub Actions`。
5. 等待 `Deploy website to GitHub Pages` 工作流完成。
6. 公开地址通常为 `https://你的用户名.github.io/milli-observation/`。

项目使用相对资源路径，无需为仓库名称单独修改 Vite 配置。网站不需要后端、密钥或环境变量。

## 发布前隐私检查

- 已公开：姓名、英文名、昵称、飞书/字节/蔚来相关经历、AI 先锋大赛经历、合作博主粉丝合计 100 万以上、邮箱和飞书搜索方式。
- 已隐藏：小红书账号、客户真实数据、案例库原始内容、客诉测试编号和内部界面细节。
- 客诉 Demo 使用重新绘制的流程，不嵌入原始截图。
- 表情包图片由本人提供并确认用于个人网站展示。
- 活动合影中的人物已经确认可以公开出现。
- 网站不设置统计脚本、表单、Cookie 或其他访客信息收集功能。

## 网站简要说明

《米粒观察样本》是母芸菲的个人互动小刊物。网站以摄影接触印样为视觉线索，记录她从独立经营摄影账号、参与飞书市场工作，到成为 AI FDE 实习生的几次重要转场，也呈现客诉闭环 Demo、达人方案探索和真实个签，让专业经历与个人语气同时被看见。

## AI 使用说明

网站使用 TRAE 辅助完成结构化访谈、创意方向比较、React 代码搭建、响应式布局和质量检查。提示词重点约束真实内容、编辑杂志感、单一薄荷绿强调色、信息脱敏与克制动效。AI 负责加速整理和实现，个人经历、文案、照片授权、公开边界及最终视觉选择均由本人确认；开发中还修正了初版配色偏离、内容缺失和移动端适配问题。

## 提交标题

1. 米粒观察样本：从镜头到 AI FDE
2. 母芸菲的个人观察档案
3. 一人摄影组，现在转入 AI 现场

## 投票预览图

项目根目录中的 `milli-site-preview.png` 为 `1440 × 1000` 的桌面首屏截图，可直接用于活动投票展示。正式提交前可在生产链接中再次截取同尺寸图片，以确保域名字样或浏览器环境符合活动要求。
