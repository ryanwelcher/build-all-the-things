/**
 * Imports
 */
const { join } = require( 'path' );

module.exports = {
	defaultValues: {
		transformer: ( values ) => {
			const { plugin, slug, folderName } = values;

			return {
				...values,
				folderName:
					plugin === true ? `${ folderName }/${ slug }` : folderName,
			};
		},
		folderName: 'blocks',
		customPackageJSON: {
			prettier: '@wordpress/prettier-config',
		},
		customScripts: {
			'start:hot':
				'wp-scripts start --hot --webpack-copy-php --webpack-src-dir=blocks',
			start: 'wp-scripts start --webpack-copy-php --webpack-src-dir=blocks',
			build: 'wp-scripts build --webpack-copy-php --webpack-src-dir=blocks',
			'create-block':
				'npx @wordpress/create-block ${npm_config_name} --target-dir blocks/${npm_config_name} --no-plugin',
			'create-block:windows':
				'npx @wordpress/create-block %npm_config_name% --target-dir blocks/%npm_config_name% --no-plugin',
		},
	},
	variants: {
		dynamic: {
			render: 'file:./render.php',
		},
		static: {},
	},
	pluginTemplatesPath: join( __dirname, 'files/plugin' ),
	blockTemplatesPath: join( __dirname, 'files/block' ),
};
