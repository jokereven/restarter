module.exports = {
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:@typescript-eslint/recommended-type-checked",
		"plugin:jsx-a11y/recommended",
		"plugin:react/recommended",
		"plugin:react/jsx-runtime",
		"plugin:react-hooks/recommended",
	],
	plugins: ["@typescript-eslint", "react-refresh"],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		project: true,
		tsconfigRootDir: __dirname,
	},
	root: true,
	settings: {
		react: {
			version: "detect",
		},
	},
	rules: {
		"react/prop-types": "off",
		"react-refresh/only-export-components": "warn",
		"react/jsx-no-leaked-render": ["error", { validStrategies: ["coerce"] }],
	},
}
