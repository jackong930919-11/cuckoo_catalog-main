#!/bin/bash
# Cloudflare Pages 本地部署脚本
# 使用: bash deploy.sh

set -e

echo "🚀 开始 Cloudflare Pages 部署流程..."

# 检查 wrangler 是否安装
if ! command -v wrangler &> /dev/null; then
    echo "📦 安装 wrangler CLI..."
    npm install -g wrangler
fi

# 检查是否已登录
echo "🔐 检查 Cloudflare 认证..."
if ! wrangler whoami &> /dev/null; then
    echo "需要登录 Cloudflare..."
    wrangler login
fi

# 获取账户信息
ACCOUNT_ID=$(wrangler whoami | grep -i "account id" | awk '{print $NF}' || echo "")

if [ -z "$ACCOUNT_ID" ]; then
    echo "⚠️ 无法获取 Account ID，请确保已成功登录"
    exit 1
fi

echo "✅ 账户 ID: $ACCOUNT_ID"

# 构建项目
echo "🏗️ 构建项目..."
npm run build

# 创建或更新 Cloudflare Pages 项目
echo "📝 检查 Cloudflare Pages 项目..."
if ! wrangler pages project list | grep -q "cuckoo-catalog"; then
    echo "创建新项目: cuckoo-catalog"
    wrangler pages project create cuckoo-catalog --production-branch main
fi

# 部署到 Cloudflare Pages
echo "🚀 部署到 Cloudflare Pages..."
wrangler pages deploy dist --project-name=cuckoo-catalog

echo "✨ 部署完成！"
echo "🔗 你的网站将在以下地址可用："
echo "   https://cuckoo-catalog.pages.dev"
echo ""
echo "💡 绑定自定义域名: https://dash.cloudflare.com/pages"
