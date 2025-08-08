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