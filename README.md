# svelte-code-cypress-project

Template for a sveltejs project with VSCode prettier, eslint and cypress. Based on the official [svelte template](https://github.com/sveltejs/template).

## Issues found and worked around

- Cannot use `eslint-plugin-prettier` which invokes prettier from eslint. The issue appears to be that for `.svelte` files `prettier-plugin-svelte` gets passed only the javascript when it expects the entire component source. See [sveltejs/svelte#3550](https://github.com/sveltejs/svelte/issues/3550).
- Need to set the default formater for svelt files to be the svelte language server rather than prettier. The case of the extension tag that has to be used is different to that shown on the svenlte extension page. See [microsoft/vscode#80941](https://github.com/microsoft/vscode/issues/80941).
- The svelte extension invokes prettier but does not use `.editorconfig` settings as the prettier extension does. So had to duplicate some settiings. See [sveltejs/svelte#3571](https://github.com/sveltejs/svelte/issues/3571).
- Prettier introducing extra spacing before markdown unordered list items as it trats this as an indent (tab stop). See [prettier/prettier6481](https://github.com/prettier/prettier/issues/6481).
