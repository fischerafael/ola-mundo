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
        "react/react-in-jsx-scope": "off",
        "no-use-before-define": "off",
        "no-tabs": ["error", { allowIndentationTabs: true }],
        "import/extensions": [
            "error",
            "ignorePackages",
            {
                js: "never",
                jsx: "never",
                ts: "never",
                tsx: "never",
            },
        ],
        "react/jsx-fragments": ["off", "element"],
        "no-mixed-spaces-and-tabs": ["error", "smart-tabs"],
        "react/jsx-props-no-spreading": "off",
    },

    settings: {
        react: {
            version: "latest",
        },
    },
};
