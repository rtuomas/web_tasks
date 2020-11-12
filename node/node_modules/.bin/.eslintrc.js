module.exports = {
    "parser": "babel-eslint",
    "env": {
        "node": true
    },
    "extends": "eslint:recommended",

    "env": {
        "node": true,
        "es6": true
    },
    "parserOptions": {
        "ecmaVersion": 2018
    },
    "rules": {
        "indent": [
            "error",
            "tab"
        ],
        "linebreak-style": [
            "error",
            "windows"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ]

    }
};
module.exports = {
    "parserOptions": {
        "ecmaVersion": 8
    }
};
module.exports = {
    rules: {
        'no-console': 'off',
    },
};