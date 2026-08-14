# Cloudflare Pages 部署指南

项目已配置为自动部署到 Cloudflare Pages。按照以下步骤完成设置：

## 1️⃣ Cloudflare Pages 项目创建

### 方式 A：通过 Cloudflare UI（推荐）
1. 访问 [Cloudflare Pages](https://pages.cloudflare.com/)
2. 点击 "Create a project" → "Connect to Git"
3. 授权访问你的 GitHub 账户
4. 选择仓库：`cuckoo_catalog-main`
5. 项目设置：
   - **Project name**: `cuckoo-catalog`
   - **Framework preset**: None
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
6. 点击 "Save and Deploy"

### 方式 B：使用 Wrangler CLI
```bash
wrangler login
wrangler pages project create cuckoo-catalog --production-branch main
```

## 2️⃣ GitHub Actions 自动部署配置

已创建 GitHub Actions 工作流文件 (`.github/workflows/deploy.yml`)

需要配置两个 GitHub Secrets：

1. **CLOUDFLARE_API_TOKEN**
   - 访问 [Cloudflare API Tokens](https://dash.cloudflare.com/profile/api-tokens)
   - 点击 "Create Token"
   - 选择 "Edit Cloudflare Workers" 模板（或自定义权限）
   - 复制 Token 并添加到 GitHub Secrets

2. **CLOUDFLARE_ACCOUNT_ID**
   - 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - 右上角账户菜单 → 复制账户 ID
   - 或从 URL 中获取：`dash.cloudflare.com/{ACCOUNT_ID}`

### 添加 GitHub Secrets：
1. 进入 GitHub 仓库 → Settings → Secrets and variables → Actions
2. 点击 "New repository secret"
3. 添加 `CLOUDFLARE_API_TOKEN`
4. 添加 `CLOUDFLARE_ACCOUNT_ID`

## 3️⃣ 验证部署

- **方式 A 用户**：部署完成后会显示 `*.pages.dev` 域名
- **方式 B 用户**：运行以下命令验证：
  ```bash
  wrangler pages project list
  ```

## 4️⃣ 自定义域名（可选）

1. 在 Cloudflare Pages 项目设置中添加自定义域
2. 按照 Cloudflare 提示配置 DNS
3. 等待 SSL 证书生成（通常 5-10 分钟）

## 🚀 部署工作流

配置完成后：
- 推送到 `main` 分支 → GitHub Actions 自动触发
- 构建成功 → 自动部署到 Cloudflare Pages
- 查看部署状态：GitHub Actions → Deployments

## 📝 项目配置

- **构建命令**: `npm run build`
- **输出目录**: `dist`
- **Node 版本**: 18 LTS
- **依赖**: 已通过 `npm ci` 管理

## ⚠️ 故障排除

如遇到问题，检查：
1. GitHub Actions 工作流日志
2. Cloudflare Pages 部署日志
3. API Token 权限是否正确
4. Account ID 是否匹配
