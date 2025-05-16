# Tailwind 入門

## プロジェクト作成

```bash
npm create vite@latest my-tailwind-css -- --template vanilla
cd my-tailwind-css
npm install
npm install tailwindcss @tailwindcss/vite
```

## 設定追加

ファイル(新規作成) : `vite.config.js`

```js
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite"; // 追加

export default defineConfig({
  plugins: [
    tailwindcss(), // 追加
  ],
  server: {
    port: 3000, // ここでポート番号を指定
  },
});
```

ファイル : `src/style.css`

```css
@import "tailwindcss";
```

ファイル : `index.html`

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite App</title>
    <link href="/src/style.css" rel="stylesheet" />
  </head>
  <body class="bg-gray-100 text-center p-10">
    <h1 class="text-3xl font-bold text-blue-600">こんにちは、Tailwind!</h1>
    <button
      class="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
    >
      ボタン
    </button>
  </body>
</html>
```

## 不要なファイル削除

- `public/vite.svg`
- `src/counter.js`
- `src/javascript.svg`
- `src/main.js`

## プロジェクト実行

```bash
npm run dev
```
