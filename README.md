# Build all the things!

You need to change something in your WordPress projects build process. So let's just create a webpack.config.js and make the changes we need right?

![Animated GIF of Jack Nicholson adamantly saying no](https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExN3gzdGdjbTU4N2U0YWY2ZTlmemJ1dndjYzR4aGlwaGljYW96ZmN6aSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/23BST5FQOc8k8/giphy.gif)

**No. thanks!** Webpack is hard and you might not need to edit anything!

## Target files

It's possible to target files directly, just pass on or more files to `wp-scripts` and they will be compiled into a single file

### Single file

```json
"start": "wp-scripts start index.js"
```

### Multiple files

```json
"start": "wp-scripts start file-one.js file-two.js"
```

## Flags

The `@wordpress/scripts` package provides all kinds of options that provide ways to customize your build setup without having to create a custom configuration.

| Flag                        | What does it do?                                                                                                                                                         | Example                                                 |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------- |
| `--webpack-src-dir`         | Customize the location of source files                                                                                                                                   | `"start": "wp-scripts start --webpack-src-dir blocks"`  |
| `--output-path`             | Customize the location of the built files                                                                                                                                | `"start": "wp-scripts start --output-path dist"`        |
| `--webpack-copy-php`        | Copies source PHP files into your build directory                                                                                                                        | `"start": "wp-scripts start --webpack-copy-php"`        |
| `--webpack-bundle-analyzer` | Enables visualization for the size of webpack output files with an interactive zoomable treemap - [npm reference](https://www.npmjs.com/package/webpack-bundle-analyzer) | `"start": "wp-scripts start --webpack-bundle-analyzer"` |
| `--webpack-devtool`         | Controls how source maps are generated - [webpack reference](https://webpack.js.org/configuration/devtool/#devtool)                                                      | `"start": "wp-scripts start --webpack-devtool eval"`    |
| `--webpack-no-externals`    | Disables scripts' assets generation, and omits the list of default externals. Requires all packages to be installed to the project.                                      | `"start": "wp-scripts start --webpack-no-externals"`    |
| `--experimental-modules`    | Enables compiling as modules. Required for the Interactivity API.                                                                                                        | `"start": "wp-scripts start --experimental-modules"`    |
| `--hot`                     | Enable "Fast Refresh" When in this mode, the page will automatically reload when changes are made to the source files. See notes below                                   | `"start": "wp-scripts start --hot"`                     |

## Fast Refresh

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

## Multiple entry points

In order to have multiple entry points, you will need to create a custom `webpack.config.js` file in the root of your project.

This example will detect and build blocks as well as create discreet files for `slots` and `variations`.

`wp-scripts`exports its config, so it's possible to use it and only change the parts you need!

```js
// Import the original config from the @wordpress/scripts package.
const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );

// Add any a new entry point by extending the webpack config.
module.exports = {
	...defaultConfig,
	entry: {
		// This will dynamically discover any blocks located in the `blocks` directory.
		...defaultConfig.entry(),
		// These are discreet entries that will be built separately.
		variations: './js/variations.js',
		slots: './js/slots.js',
		// Add more custom entries as needed i.e 'admin-screen': './js/admins.js',
	},
};
```
