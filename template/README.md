# Build all the things!

This `create-block` template provides a starting point for a WordPress plugin that can support multiple block along with standalone scripts for slots and variations. It is easily extendable.

It shows how to customize the `wp-scripts` build process both via flags and a custom webpack. Additionally, it has full support for building multiple blocks and uses the new [caching mechanism introduced in WordPress 6.7](https://make.wordpress.org/core/2024/10/17/new-block-type-registration-apis-to-improve-performance-in-wordpress-6-7/) to load blocks even faster.

## Usage

`npx @wordpress/create-block --template @ryanwelcher/build-all-the-things`

## Variants

-   `dynamic` - Generates a dynamic block. This is the default variant
-   `static` - scaffolds the completed files for the tutorial

## Structure

```
- build
- js
--> slots.js
--> variations.js
- blocks
--> {block-slug}
---> block.json
---> edit.js
---> editor.scss
---> index.js
---> style.scss
---> render.php
---> view.js
.editorconfig
.eslintrc
.gitignore
{block-slug}.php
package.json
package-lock.json
webpack.config.js
```
