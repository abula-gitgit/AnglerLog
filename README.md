# AnglerLog Portal & Landing Page

https://angler-log.app/ のトップページおよびプライバシーポリシー (/privacy) をホストする Cloudflare Worker プロジェクトです。

## 概要

- **トップページ (`https://angler-log.app/`)**:
  - AnglerLog のサービス紹介、機能特徴（GPSピン留め、タイド・気象連携、釣果管理、ローカル完結設計）
  - 日本語版 (`https://jp.angler-log.app/`) および 英語版 (`https://en.angler-log.app/`) への言語選択リンク
  - ブラウザ言語に応じた自動サジェスト
  - プライバシーポリシー要約および全文へのリンク
- **プライバシーポリシー (`https://angler-log.app/privacy`)**:
  - ローカルファースト設計、GPS位置情報の用途、釣果写真の取り扱い、安全な釣行に関する免責事項、英語要約、お問い合わせ先

## ディレクトリ構成

- `src/index.js`: Cloudflare Worker ハンドラー（`/` と `/privacy` のHTMLレンダリング、アセットプロキシ）
- `wrangler.toml`: Cloudflare Worker 設定ファイル
- `package.json`: 依存パッケージおよびスクリプト

## デプロイ方法

```bash
# ローカルプレビュー
npx wrangler dev

# Cloudflare へのデプロイ
npx wrangler deploy
```
