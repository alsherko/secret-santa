module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": ["react-app", "prettier"],
    "plugins": ["react", "prettier"],
    "parserOptions": {
        "ecmaVersion": 2018
    },
    "rules": {
        "prettier/prettier": [
            "error",
            {
                "useTabs": false,
                "printWidth": 80,
                "tabWidth": 2,
                "singleQuote": true,
                "trailingComma": "es5",
                "jsxBracketSameLine": false,
                "parser": "flow",
                "semi": false
            }
        ]
    }
};
