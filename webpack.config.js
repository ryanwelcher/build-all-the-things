// Import the original config from the @wordpress/scripts package.
const defaultConfig = require("@wordpress/scripts/config/webpack.config");

// Add any a new entry point by extending the webpack config.
module.exports = {
	...defaultConfig,
	entry: {
		// This will dynamically discover any blocks located in the `blocks` directory.
		...defaultConfig.entry(),
		// These are discreet entries that will be built separately.
		variations: "./js/variations.js",
		slots: "./js/slots.js",
		"admin-screen": './js/admins.js'
	},
};
