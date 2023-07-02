module.exports = {
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:@typescript-eslint/recommended-type-checked",
		"plugin:jsx-a11y/recommended",
		"plugin:react/recommended",
		"plugin:react/jsx-runtime",
		"plugin:react-hooks/recommended",
		"plugin:tailwindcss/recommended",
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
		// https://twitter.com/Brooooook_lyn/status/1666637274757595141
		"react/jsx-no-leaked-render": ["error", { validStrategies: ["coerce"] }],
		// https://vitejs.dev/guide/features.html#typescript
		"@typescript-eslint/consistent-type-imports": "error",

		"react/prop-types": "off",

		// dev
		"react-refresh/only-export-components": "warn",

		// formatting
		"react/jsx-curly-brace-presence": ["warn", "never"],
	},
}
