# AtCocer問題解いてみる
* typescriptの練習

# Docker
node version `18.16.1` AtCoderのnodeのversionと合わせる

## memo
### デバック
1. src/index.tsを編集
2. `npx tsc`を実行（TypeScriptコードをJavaScriptにコンパイル）
3. `node dist/index.js`を実行(src/index.jsを実行)

### 標準入力
```typescript
import * as fs from "fs";

const inputs = fs.readFileSync("/dev/stdin", "utf8");
```
### 編集ファイル
基本的に`src/index.ts`と`src/index.txt`(入力値)の編集を行う
→過去の問題はcommitログから辿る
