# kintone-ui-component-react

kintone-ui-componentをReactで手軽に使用できるように作ったコンポーネントライブラリです。

## 概要

このライブラリは、[kintone-ui-component](https://github.com/kintone-labs/kintone-ui-component)をReactアプリケーションで簡単に使用できるようにするためのReactラッパーです。@lit/reactを使用して、kintone-ui-componentのWeb ComponentsをReactコンポーネントとして提供します。

## インストール

このプロジェクトはGitHubから直接インストールできます：

```bash
npm install git+https://github.com/your-username/kintone-ui-component-react.git
```

または、特定のブランチやタグを指定する場合：

```bash
npm install git+https://github.com/your-username/kintone-ui-component-react.git#main
```

## 対応コンポーネント

現在、以下のkintone-ui-componentがReactコンポーネントとして利用可能です：

- **KucButton** - ボタンコンポーネント
- **KucText** - テキスト入力コンポーネント
- **KucDialog** - ダイアログコンポーネント
- **KucAttachment** - ファイル添付コンポーネント

## 使用方法

### 基本的なインポート

```tsx
import { KucButton, KucText, KucDialog, KucAttachment } from 'kintone-ui-component-react';
```

### KucButton（ボタン）

```tsx
import { KucButton } from 'kintone-ui-component-react';

function MyComponent() {
    const handleClick = (event: Event) => {
        console.log('ボタンがクリックされました');
    };

    return (
        <KucButton text="クリックしてください" type="submit" onClick={handleClick}>
            カスタムコンテンツ
        </KucButton>
    );
}
```

### KucText（テキスト入力）

```tsx
import { KucText } from 'kintone-ui-component-react';

function MyComponent() {
    const handleChange = (event: CustomEvent) => {
        console.log('値が変更されました:', event.detail.value);
    };

    return <KucText label="名前" placeholder="名前を入力してください" value="" onChange={handleChange} />;
}
```

### KucDialog（ダイアログ）

```tsx
import { KucDialog } from 'kintone-ui-component-react';

function MyComponent() {
    const [isOpen, setIsOpen] = useState(false);

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <KucDialog open={isOpen} onClose={handleClose}>
            <KucDialog.Header>
                <h2>ダイアログのタイトル</h2>
            </KucDialog.Header>

            <KucDialog.Content>
                <p>ダイアログの内容がここに表示されます。</p>
            </KucDialog.Content>

            <KucDialog.Footer>
                <KucButton text="閉じる" onClick={handleClose} />
            </KucDialog.Footer>
        </KucDialog>
    );
}
```

### KucAttachment（ファイル添付）

```tsx
import { KucAttachment } from 'kintone-ui-component-react';

function MyComponent() {
    const handleChange = (event: CustomEvent) => {
        console.log('ファイルが選択されました:', event.detail.files);
    };

    return <KucAttachment label="ファイルを添付" accept=".pdf,.doc,.docx" onChange={handleChange} />;
}
```

## 型定義

TypeScriptを使用している場合、各コンポーネントの型定義も提供されています：

```tsx
import type { KucButtonProps, KucTextProps, KucDialogProps, KucAttachmentProps } from 'kintone-ui-component-react';
```

## 依存関係

このライブラリは以下の依存関係が必要です：

- React 19.1.0以上
- React DOM 19.1.0以上
- kintone-ui-component 1.21.0以上

## 開発

### セットアップ

```bash
# 依存関係をインストール
pnpm install

# 開発サーバーを起動
pnpm dev

# ライブラリをビルド
pnpm build

# リントを実行
pnpm lint

# コードフォーマット
pnpm format
```

### プロジェクト構造

```
src/
├── components/          # Reactコンポーネント
│   ├── KucButton.tsx
│   ├── KucText.tsx
│   ├── KucDialog.tsx
│   ├── KucAttachment.tsx
│   └── index.ts
├── utils/              # ユーティリティ関数
│   ├── element.tsx
│   └── kuc.ts
└── lib/                # ライブラリエントリーポイント
    └── index.ts
```

## ライセンス

このプロジェクトはMITライセンスの下で公開されています。

## 貢献

プルリクエストやイシューの報告を歓迎します。貢献する前に、以下の手順を確認してください：

1. このリポジトリをフォーク
2. 機能ブランチを作成 (`git checkout -b feature/amazing-feature`)
3. 変更をコミット (`git commit -m 'Add some amazing feature'`)
4. ブランチにプッシュ (`git push origin feature/amazing-feature`)
5. プルリクエストを作成

## 関連リンク

- [kintone-ui-component](https://github.com/kintone-labs/kintone-ui-component) - 元のWeb Componentsライブラリ
- [@lit/react](https://lit.dev/docs/libraries/react/) - React統合ライブラリ
