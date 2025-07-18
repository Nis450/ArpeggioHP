# Arpeggioホームページ開発手順書

ホームページ：https://arpeggio393.web.app/

この手順では、**プログラミング初心者** の人でも、  
**ホームページをアップデートする** までに必要なすべての環境構築・手順を説明します‼️


## 必須条件
- 理工学部の情シス/イン情または文化情報学部 (それ以外でもプログラミングに触れた経験があれば🙆‍♂️)
- VS CodeまたはCursor、RplitなどのAIコーディングツールを触ったことがある
- Githubという名前を知っている

## GitHubアカウントを作る
- [GitHub公式サイト](https://github.com) にアクセスし、右上にあるボタンからアカウントを作成  

## GitHubのPersonal Access Token（トークン）を作成
- GitHubの `Settings` → `Developer settings` → `Personal access tokens` → `Tokens (classic)` にアクセス  
- 「Generate new token (classic)」をクリック  
- 以下の権限を付与  
  - repo（すべて選択）  
- 作成されたトークンをコピー

## Gitのインストールとセットアップ
- [Git公式サイト](https://git-scm.com/) からダウンロードしてインストール  
- ターミナルで以下を実行して、ユーザー情報を設定  
  ```
  git config --global user.name "{username}"
  git config --global user.email "{email}"
  ```
  例）
  ```
    git config --global user.name "Nis450"
    git config --global user.email "arpeggio@example.com"
    ```
- GitHubのリポジトリにアクセスする時に、HTTPS接続を使い、トークンをパスワード代わりに入力  

## VSCodeのインストール
- [VSCode公式サイト](https://code.visualstudio.com/) からダウンロードしてインストール  


## Node.js と npm をインストール
- [Node.js公式サイト](https://nodejs.org/ja/download) からLTS版をダウンロードしてインストール  
- ターミナルで以下を実行し、インストールできたか確認  
  ```
  node -v
  npm -v
  ```

## リポジトリをクローン

1. まずプロジェクトフォルダーを作る場所に移動する。
僕の場合は Desktop/VSCode

2. そのフォルダ内でターミナルで以下を実行  
```
git clone https://github.com/Nis450/ArpeggioHP.git
cd arpeggio_web
```


## 必要なパッケージをインストール
```
npm install
```

## Next.js 開発サーバーを起動
```
npm run dev
```
- ブラウザで [http://localhost:3000](http://localhost:3000) にアクセスし、動作確認  

## 作業用ブランチを作成
```
git checkout -b feature/{ユーザー名}_{タイトル}
```

例：
```
git checkout -b feature/Nis450_アルバム30th情報追加
```

## 変更を保存してコミット
```
git add .
git commit -m "自分が行った変更内容"
```

## 変更をGitHubにプッシュ
```
git push origin feature/自分の作業名
```

- この時、GitHubのユーザー名と、パスワードとして先ほど発行したトークンを入力  

## GitHub上でPull Request（PR）を作成
- GitHubのリポジトリページにアクセス  
- 「Compare & Pull Request」ボタンからPRを作成  
- タイトルと説明を記入し、メンバーにレビュー依頼  

## Issueを作成する場合
- GitHubリポジトリの「Issues」タブを開き、「New issue」から作成  
- タイトル・内容・必要に応じてラベルを付与  

## 開発メンバーへの相談
- 不明点やエラーが出た場合は、気軽に開発メンバーに相談してください！