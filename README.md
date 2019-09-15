# svelte-code-cypress-project

Template for a sveltejs project with VSCode prettier, eslint and cypress

## Issues

-   Cannot use `eslint-plugin-prettier` which invokes prettier from eslint. The issue appears to be that for `.svelte` files `prettier-plugin-svelte` gets passed only the javascript when it expects the entire component source.
-   Need to set the default formater for svelt files to be the svelte language server rather than prettier. The case of the extension tag that has to be used is different to that shown on the svenlte extension page.
-   The svelte extension invokes prettier but does not use `.editorconfig` settings as the prettier extension does.
