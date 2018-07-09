module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "extends": ["eslint:recommended","airbnb"],
    "rules": {
        "react/jsx-filename-extension": [true, { "extensions": [".js", ".jsx"] }],
        "react/prop-types": false,
        "no-param-reassign": ["error", { "props": true, "ignorePropertyModificationsFor": ["registration"] }],
        "react/forbid-prop-types": [true, { "forbid": ["object"] }],
        "react/destructuring-assignment": [true, 'never']
    },
    "globals": {
        "it": false
    }
};
