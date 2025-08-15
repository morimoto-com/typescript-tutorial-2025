* **必須**：Vue/React 実務でも重要
* **一部必要**：概要は知っておくべきだが深掘りは不要
* **不要**：アプリ開発ではほぼ使わない（ライブラリ配布や特殊ケースのみ）

---

## TypeScript コンパイル・設定方法まとめ（Vue/React 前提 必要度付き）

1. **watchモード**（一部必要）
   保存時に自動でTSからJSへコンパイルする方法
   ※Vue/ReactはViteのHMRを使うためJS出力は不要。**型チェック専用の`--noEmit`でのwatchは有用**。

   ```bash
   # 型チェック監視例
   pnpm vue-tsc --noEmit -w -p tsconfig.app.json   # Vue
   pnpm tsc --noEmit -w -p tsconfig.app.json       # React
   ```

2. **tsc --init と tsconfig.json**（必須）
   全ファイルを一括コンパイル（型チェック）する設定方法。
   実務では既存のtsconfigを理解して調整できることが重要。

3. **include / exclude / files**（一部必要）
   コンパイル対象のファイル選択方法。
   実務は `include: ["src/**/*"]` が基本。個別 `files` 指定はほぼ不要。

4. **target**（一部必要）
   生成JSのバージョン指定。Viteでは自動設定が多いが、古いブラウザ対応やES機能制御時に触れる。

5. **lib**（一部必要）
   型定義の追加（`DOM`/`ESNext`など）。特殊API利用時のみ調整。

6. **allowJs / checkJs / jsx / declaration / declarationMap**（必要度混在）

   * `jsx`：React必須（`"jsx": "react-jsx"`）
   * `allowJs` / `checkJs`：既存JS移行時のみ
   * `declaration` / `declarationMap`：ライブラリ配布時のみ

7. **SourceMap**（必須）
   ブラウザでTSをデバッグするためのマッピング設定。
   Viteは自動生成するが、tsconfigとの関係は理解しておくと便利。

8. **outDir / rootDir / removeComments / noEmit / downlevelIteration**（多くは不要）

   * Vue/Reactアプリでは `"noEmit": true` で型チェック専用にするのが基本
   * 出力先やコメント除去はライブラリや別ビルド時のみ利用

9. **noEmitOnError**（不要）
   noEmit運用では意味なし。emitが必要な場合のみ有効。

10. **noImplicitAny / strictNullChecks / strict**（必須）
    型安全の核。実務でも必ず有効化すべき。

11. **コード整形設定**（必須）
    ESLint + Prettier を使ったコードフォーマット設定は開発効率と品質に直結。

---

この形にすれば、**講義全体はTypeScript基準で進めつつ、Vue/Reactでは優先度の高い部分を明確にできる**ので、学習時間を効率化できます。

