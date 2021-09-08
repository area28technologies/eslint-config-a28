module.exports = {
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/eslint-recommended",
		"plugin:@typescript-eslint/recommended",
	],
	env: {
		"node": true
	},
	parser: "@typescript-eslint/parser",
	plugins: [
		"@typescript-eslint",
	],
	settings: {
		"import/parsers": {
			"@typescript-eslint/parser": [
				".ts",
				".tsx"
			]
		},
		"import/resolver": {
			"typescript": {}
		}
	},
	rules: {
		"@typescript-eslint/no-explicit-any": "off",
		"comma-dangle": ["error", "always-multiline"],
		"semi": ["error", "always"]
	}
};