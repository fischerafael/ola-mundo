module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        "plugin:react/recommended",
        "airbnb",
        "prettier",
        "eslint:recommended",
        "next",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: "module",
    },
    plugins: ["react", "@typescript-eslint"],
    rules: {
        "prefer-const": "error",
        "import/prefer-default-export": "off",
        "react/react-in-jsx-scope": "off",
        "react/jsx-filename-extension": [0],
    },

    settings: {
        react: {
            version: "latest",
        },
    },
};
