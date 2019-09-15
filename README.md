# svelte-code-cypress-project

Template for a sveltejs project with VSCode prettier, eslint and cypress. Based on the official [svelte template](https://github.com/sveltejs/template).

## Issues

-   Cannot use `eslint-plugin-prettier` which invokes prettier from eslint. The issue appears to be that for `.svelte` files `prettier-plugin-svelte` gets passed only the javascript when it expects the entire component source. https://github.com/sveltejs/svelte/issues/3550
-   Need to set the default formater for svelt files to be the svelte language server rather than prettier. The case of the extension tag that has to be used is different to that shown on the svenlte extension page. https://github.com/microsoft/vscode/issues/80941.
-   The svelte extension invokes prettier but does not use `.editorconfig` settings as the prettier extension does. So had to duplicate some settiings. https://github.com/sveltejs/svelte/issues/3571
