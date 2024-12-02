# Build all the things!

You need to change something in your WordPress projects build process. So let's just create a webpack.config.js and make the changes we need right?

![Animated GIF of Jack Nicholson adamantly saying no](https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExN3gzdGdjbTU4N2U0YWY2ZTlmemJ1dndjYzR4aGlwaGljYW96ZmN6aSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/23BST5FQOc8k8/giphy.gif)

**No. thanks!** Webpack is hard and you might not need to edit anything!

The `@wordpress/scripts` package provides all kinds of options that provide ways to customize your build setup without having to create a custom configuration.

## Common Examples
<details>
<summary>Customize the location of source files</summary>
The default location for your sources files is the `src` directory but there are times when you may want to change that. This can be done with the `--webpack-src-dir` flag:

```json
"start": "wp-scripts start --webpack-src-dir blocks",
"build": "wp-scripts build --webpack-src-dir blocks",
```
</details>

## Developer Hours


