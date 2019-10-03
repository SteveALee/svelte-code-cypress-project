# svelte-code-cypress-project

Template for a sveltejs project with VSCode prettier, eslint and cypress. Based on the official [svelte template](https://github.com/sveltejs/template).

## Issues found and worked around

- Cannot use `eslint-plugin-prettier` which invokes prettier from eslint. The issue appears to be that for `.svelte` files `prettier-plugin-svelte` gets passed only the javascript when it expects the entire component source. This breaks both VSCode and CLI use. See [sveltejs/svelte#3550](https://github.com/sveltejs/svelte/issues/3550).
- Need to disable prettier for svelte files and also set the default formater for svelt files to be the svelte language server.
- The svelte extension invokes prettier but does not use `.editorconfig` settings as the prettier extension does. So had to duplicate some settings. See [UnwrittenFun/svelte-vscode#74](https://github.com/UnwrittenFun/svelte-vscode/issues/74).
- Prettier introducing extra spacing before markdown unordered list items as it treats this as an indent (tab stop). I personally disagree and don't think prettier should be making style decisions. See [prettier/prettier6481](https://github.com/prettier/prettier/issues/6481).
