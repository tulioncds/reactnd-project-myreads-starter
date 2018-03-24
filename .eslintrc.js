module.exports = {
    "extends": "airbnb",
    "parser": "babel-eslint",
    "env": {
        "browser": true
    },
    "rules": {
        "indent": ["error", 2],
        "quotes": ["error", "single"],
        "jsx-quotes": ["error", "prefer-single"],
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "jsx-a11y/anchor-is-valid": ["error", {
            "components": ["Link"],
            "specialLink": ["hrefLeft", "hrefRight"],
            "aspects": ["preferButton"]
        }]
    }
};