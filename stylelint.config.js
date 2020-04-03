module.exports = {
    "extends": "stylelint-config-recommended-scss",
    "plugins": [
        "stylelint-scss"
    ],
    "rules": {
        'at-rule-no-unknown': null,
        'scss/at-rule-no-unknown': [
            true,
            {
                ignoreAtRules: ['tailwind', 'apply', 'responsive', 'variants', 'screen', 'mixin', 'function'],
            },
        ],
        "selector-nested-pattern": "^&",
        "indentation": 2,
        "no-descending-specificity": null,
        "no-eol-whitespace": null,
        "declaration-empty-line-before": null,
        "value-keyword-case": null
    }
}