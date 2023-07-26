module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended",
        'plugin:@typescript-eslint/recommended-requiring-type-checking'
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project":  "./tsconfig.json"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "react/react-in-jsx-scope": "off",
        "@typescript-eslint/space-before-function-paren": "off",
        "@typescript-eslint/semi": "off",
        "no-trailing-spaces": "off",
        "no-multiple-empty-lines":"off",
        "@typescript-eslint/comma-dangle": "off"
    }
}
