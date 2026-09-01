# 🚀 快速部署指南 - 3 种方式

## ⚡ 方式 1：最简单 - 通过 Cloudflare UI（推荐 - 5分钟）

### 步骤：
1. 访问 https://pages.cloudflare.com/
2. 点击 **"Create a project"**
3. 点击 **"Connect to Git"**
4. 授权 GitHub（允许访问你的账户）
5. 选择仓库：**cuckoo_catalog-main**
6. 填写配置：
   ```
   Project name: cuckoo-catalog
   Framework preset: None (无框架)
   Build command: npm run build
   Build output directory: dist
   ```
7. 点击 **"Save and Deploy"** ✅
8. 完成！网站将在 `https://cuckoo-catalog.pages.dev` 上线

**优点：** 无需任何密钥配置，Cloudflare 自动管理部署

---

## 💻 方式 2：本地部署（3分钟）

需要在你的电脑上运行一次：

```bash
# 进入项目目录
cd /Users/jackong/Downloads/cuckoo_catalog-main

# 执行部署脚本（会提示登录 Cloudflare）
bash deploy.sh

# 按提示在浏览器中授权，然后返回终端
# 脚本会自动创建项目并部署
```

部署完成后，每次通过方式1或3部署时会自动同步。

---

## 🔄 方式 3：自动部署 - GitHub Actions（需要配置）

### 前置条件：
- 先通过方式 1 或 2 部署一次
- 获取 Cloudflare Account ID 和 API Token

### 获取凭证：

#### Account ID：
1. 登录 https://dash.cloudflare.com/
2. 右上角找到账户菜单
3. 点击 "Account Settings"
4. 复制 **Account ID**

#### API Token：
1. 访问 https://dash.cloudflare.com/profile/api-tokens
2. 点击 **"Create Token"**
3. 选择或创建权限：
   - Cloudflare Pages: Edit
   - Workers: Edit
4. 复制生成的 Token（**只显示一次**）

### 配置 GitHub Secrets：
1. 进入你的仓库：https://github.com/jackong930919-11/cuckoo_catalog-main
2. 点击 **Settings**（设置）
3. 左侧菜单 → **Secrets and variables** → **Actions**
4. 点击 **"New repository secret"**
5. 创建两个 Secrets：

   **Secret 1:**
   - Name: `CLOUDFLARE_API_TOKEN`
   - Value: 粘贴你的 API Token

   **Secret 2:**
   - Name: `CLOUDFLARE_ACCOUNT_ID`
   - Value: 粘贴你的 Account ID

6. 配置完成！以后每次 push 到 main 分支会自动部署

---

## ✅ 验证部署

部署成功后，你会看到：
- ✅ Cloudflare Pages 显示 "Active" 状态
- ✅ 访问 `https://cuckoo-catalog.pages.dev` 看到你的网站
- ✅ （仅 GitHub Actions）GitHub Actions 中 Deploy 工作流显示绿色 ✓

---

## 🎯 我的建议

**现在就做：**
1. 打开 https://pages.cloudflare.com/
2. 按方式1的步骤操作（5分钟完成）
3. 完成！你的网站已上线

**之后做（可选）：**
- 配置自定义域名
- 设置方式3自动部署（如果需要）

**问题排查：**
- 如果方式2登录卡住，打开浏览器授权后刷新
- 如果Cloudflare项目不存在，先通过方式1创建
- 如果GitHub Actions失败，检查Secrets是否正确配置
