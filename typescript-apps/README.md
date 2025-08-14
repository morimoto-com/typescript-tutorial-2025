# typescript-apps

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Type-Check, Compile and Minify for Production

```sh
pnpm build
```

### Lint with [ESLint](https://eslint.org/)

```sh
pnpm lint
```

```json
{
    "editor.suggestSelection": "first",
    "vsintellicode.modify.editor.suggestSelection": "automaticallyOverrodeDefaultValue",
    "python.pythonPath": "C:\\Users\\Shinji\\anaconda3\\python.exe",
    "files.enableTrash": false,
    "javascript.updateImportsOnFileMove.enabled": "always",
    "explorer.confirmDragAndDrop": false,

    // 保存時に自動整形
    "editor.formatOnSave": true,

    // 言語別のフォーマッター設定（Prettier）
    "[vue]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[javascript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[html]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[scss]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[typescript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },

    // 保存時に ESLint 自動修正
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true, // "explicit" → true に変更で自動実行
        "source.organizeImports": true // 不要な import 削除
    },

    // ESLint がチェックする対象
    "eslint.validate": [
        "javascript",
        "javascriptreact",
        "vue",
        "typescript",
        "typescriptreact"
    ],

    "git.enableSmartCommit": true,
    "git.confirmSync": false,

    // Emmet（HTML補完）を Vue ファイルでも有効化
    "emmet.includeLanguages": {
        "vue-html": "html",
        "vue": "html"
    },

    // 文字列中でも補完を有効化
    "editor.quickSuggestions": {
        "strings": true
    },

    // 自動保存（1秒後）
    "files.autoSave": "afterDelay",
    "files.autoSaveDelay": 1000
}

```