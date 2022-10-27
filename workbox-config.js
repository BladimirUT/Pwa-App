module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{css,html,json,png,js}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};