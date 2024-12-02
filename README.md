# Build all the things!

You need to change something in your WordPress projects build process. So let's just create a webpack.config.js and make the changes we need right?

![Animated GIF of Jack Nicholson adamantly saying no](https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExN3gzdGdjbTU4N2U0YWY2ZTlmemJ1dndjYzR4aGlwaGljYW96ZmN6aSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/23BST5FQOc8k8/giphy.gif)

**No. thanks!** Webpack is hard and you might not need to edit anything!

The `@wordpress/scripts` package provides all kinds of options that provide ways to customize your build setup without having to create a custom configuration.

## No custom configuration needed
<details>
<summary>Customize the location of source files</summary>

The default location for your sources files is the `src` directory but you can change the location with the `--webpack-src-dir` flag:

```json
"start": "wp-scripts start --webpack-src-dir blocks",
"build": "wp-scripts build --webpack-src-dir blocks",
```
</details>
<details>
<summary>Customize the location of the built files</summary>

The default location for your built files is the `build` directory but you can change the location with the `--output-path` flag:

```json
"start": "wp-scripts start --output-path dist",
"build": "wp-scripts build --output-path dist",
```
</details>
<details>
<summary>Copy source PHP files into your build directory</summary>

You can ensure all PHP files are copied into your build dir with the `--webpack-copy-php` flag:

```json
"start": "wp-scripts start --webpack-copy-php",
"build": "wp-scripts build --webpack-copy-php",
```
</details>
<details>
<summary>Target files to build</summary>

You can target files directory by passing one or more filenames to `wp-scripts` that will be complied into a single file.

## Single file
```json
"start": "wp-scripts start index.js",
"build": "wp-scripts build index.js",
```
## Multiple files

```json
"start": "wp-scripts start file-one.js file-two.js",
"build": "wp-scripts build file-one.js file-two.js",
```
</details>


## Fast Refresh

`wp-scripts` supports "Fast Refresh" using the `--hot` flag. When in this mode, the page will automatically reload when changes are made to the source files.


```json
"start" : "wp-scripts start --hot"
```

In order to use `--hot` mode, you will need the latest version of Gutenberg installs and have the the `SCRIPT_DEBUG` constant set to `true` in the `wp-config.php` file of your development environment.

### Custom development urls

Under the hood, `wp-scripts` is using `devServer` with the `allowedHosts` option set to `auto`. This ensures that if your local environment is using `localhost` as its URL everything will connect as expected.

If you're using a URL that is not `localhost`, you can get it working by customizing the configuration in webpack:

```js
const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );

module.exports = {
	...defaultConfig,
	devServer: {
		...defaultConfig.devServer,
		allowedHosts: 'all', // This can also be set to a url i.e "devsite.dev'
	},
};
```


