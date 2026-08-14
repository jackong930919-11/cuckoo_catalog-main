# Cloudflare Pages 部署指南

项目已配置为自动部署到 Cloudflare Pages。按照以下步骤完成设置：

## ⚠️ 部署失败排查

如果 GitHub Actions 显示部署失败，最常见原因是：
1. **缺少 GitHub Secrets** - CLOUDFLARE_API_TOKEN 或 CLOUDFLARE_ACCOUNT_ID 未配置
2. **Cloudflare 项目未创建** - 需要先在 Cloudflare Pages 中创建项目
3. **API Token 权限不足** - Token 需要有编辑 Workers 和 Pages 的权限

## 🚀 快速部署方案 A：通过 Cloudflare UI（最简单！推荐）

这是最快且最可靠的方法：

1. 访问 [Cloudflare Pages](https://pages.cloudflare.com/)
2. 点击 "Create a project" 按钮
3. 选择 "Connect to Git"
4. 授权 GitHub 访问权限
5. 找到并选择 `cuckoo_catalog-main` 仓库
6. 项目配置：
   ```
   Project name: cuckoo-catalog
   Framework preset: None (选择无框架)
   Build command: npm run build
   Build output directory: dist
   ```
7. 点击 "Save and Deploy"
8. **完成！** Cloudflare 会自动为每次 push to main 创建部署

✅ 这种方法无需 GitHub Secrets，Cloudflare 会自动管理凭证

---

## 📝 部署方案 B：使用 GitHub Actions（高级配置）

如果你已经选择了方案 A，可以跳过本部分。

已创建 GitHub Actions 工作流文件 (`.github/workflows/deploy.yml`)

### 步骤 1：获取 Cloudflare 凭证

#### 获取 Account ID
1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. 在左侧菜单找到你的账户信息
3. 从 URL 中提取 Account ID：`dash.cloudflare.com/{ACCOUNT_ID}`
4. 或点击账户图标 → "Account Settings" → 右侧会显示 "Account ID"

#### 创建 API Token
1. 访问 [Cloudflare API Tokens](https://dash.cloudflare.com/profile/api-tokens)
2. 点击 "Create Token" 按钮
3. 选择以下选项之一：
   - **选项 A**：找到 "Edit Cloudflare Workers" 模板 → 点击 "Use template"
   - **选项 B**：点击 "Custom token" → 手动配置权限
4. 权限配置（必需）：
   ```
   - Cloudflare Pages: Edit
   - Workers KV Storage: Edit
   - Workers: Edit
   ```
5. 作用域：选择 "All accounts" 或特定账户
6. 点击 "Create Token"
7. **立即复制 Token**（只会显示一次！）

### 步骤 2：配置 GitHub Secrets

1. 进入 GitHub 仓库
2. 点击 "Settings" → "Secrets and variables" → "Actions"
3. 点击 "New repository secret" 按钮
4. 创建第一个 secret：
   - **Name**: `CLOUDFLARE_API_TOKEN`
   - **Value**: 粘贴你复制的 API Token
5. 再创建第二个 secret：
   - **Name**: `CLOUDFLARE_ACCOUNT_ID`
   - **Value**: 粘贴你的 Account ID
6. 点击 "Add secret"

### 步骤 3：确保 Cloudflare 项目存在

在部署前，需要在 Cloudflare 中创建项目骨架：

```bash
# 本地执行一次（或通过 Cloudflare UI 创建）
npm install -g wrangler
wrangler login
wrangler pages project create cuckoo-catalog --production-branch main
```

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
