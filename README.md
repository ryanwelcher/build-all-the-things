# Build all the things!

You need to change something in your WordPress projects build process. So let's just create a webpack.config.js and make the changes we need right?

![Animated GIF of Jack Nicholson adamantly saying no](https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExN3gzdGdjbTU4N2U0YWY2ZTlmemJ1dndjYzR4aGlwaGljYW96ZmN6aSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/23BST5FQOc8k8/giphy.gif)

**No. thanks!** Webpack is hard and you might not need to edit anything!

The `@wordpress/scripts` package provides all kinds of options that provide ways to customize your build setup without having to create a custom configuration.

## Controlling where things are.

| Flag                 | What does it do?                                  | Example                                                |
| -------------------- | ------------------------------------------------- | ------------------------------------------------------ |
| `--webpack-src-dir`  | Customize the location of source files            | `"start": "wp-scripts start --webpack-src-dir blocks"` |
| `---output-path`     | Customize the location of the built files         | `"start": "wp-scripts start --output-path dist"`       |
| `--webpack-copy-php` | Copies source PHP files into your build directory | `"start": "wp-scripts start --webpack-copy-php"`       |
| None                 | Target a single file to build                     | `"start": "wp-scripts start index.js"`                 |
| None                 | Target multiple files to be combined              | `"start": "wp-scripts start file-one.js file-two.js"`  |

## Advanced webpack flags

| Flag                        | What does it do?                                                                                                                                                         |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--webpack-bundle-analyzer` | Enables visualization for the size of webpack output files with an interactive zoomable treemap - [npm reference](https://www.npmjs.com/package/webpack-bundle-analyzer) |
| `--webpack-devtool`         | Controls how source maps are generated - [webpack reference](https://webpack.js.org/configuration/devtool/#devtool)                                                      |
| `--webpack-no-externals`    | Disables scripts' assets generation, and omits the list of default externals. Requires all packages to be installed to the project.                                      |

## Fast Refresh

`wp-scripts` supports "Fast Refresh" using the `--hot` flag. When in this mode, the page will automatically reload when changes are made to the source files.

```json
"start" : "wp-scripts start --hot"
```

In order to use `--hot` mode, you will need the latest version of Gutenberg installs and have the `SCRIPT_DEBUG` constant set to `true` in the `wp-config.php` file of your development environment.

### Custom development urls

Under the hood, `wp-scripts` is using [`devServer`](https://webpack.js.org/configuration/dev-server/) with the [`allowedHosts`](https://webpack.js.org/configuration/dev-server/#devserverallowedhosts) option set to `auto`.

This ensures that if your local environment is using `localhost` as its URL everything will connect as expected.

If you're using a URL that is not `localhost`, you can get it working by customizing the configuration in webpack:

```js
const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );

module.exports = {
	...defaultConfig,
	devServer: {
		...defaultConfig.devServer,
		allowedHosts: 'all', // This can also be set to a url i.e "dev-site.dev'
	},
};
```
