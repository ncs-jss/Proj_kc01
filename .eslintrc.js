module.exports = {
    env: {
        browser: true,
        es6: true
    },
    parserOptions: {
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
            jsx: true
        },
        sourceType: "module"
    },
    parser:"babel-eslint",
    extends: ["airbnb", "plugin:prettier/recommended"],
    rules: {
        "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
        "react/prop-types": false,
        "no-param-reassign": [
            "error",
            { props: true, ignorePropertyModificationsFor: ["registration"] }
        ],
        "react/forbid-prop-types": [true, { forbid: ["object"] }],
        "react/destructuring-assignment": [true, "never"],
        "react/jsx-one-expression-per-line":false,
        "no-underscore-dangle":0,
        "consistent-return": 0 
    },
    globals: {
        it: false
    }
};
