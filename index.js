module.exports = {
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'standard-with-typescript',
	],
	env: {
		'node': true,
	},
	parser: '@typescript-eslint/parser',
	plugins: [
		'@typescript-eslint',
	],
	rules: {
		'@typescript-eslint/no-explicit-any': 'off',
		'comma-dangle': ['error', 'always-multiline'],
	}
};
