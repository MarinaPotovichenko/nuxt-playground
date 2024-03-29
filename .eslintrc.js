module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    extends: [
        '@nuxtjs/eslint-config-typescript',
        'plugin:vue/recommended',
        'plugin:nuxt/recommended',
        'prettier',
        'eslint:recommended',
    ],
    parser: 'vue-eslint-parser',
    parserOptions: {
        ecmaVersion: 12,
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
    },
    plugins: ['vue', '@typescript-eslint'],
    rules: {
        'vue/attribute-hyphenation': [
            'error',
            'always',
            {
                ignore: [],
            },
        ],
        'no-console': ['error', { allow: ['warn', 'error'] }],
        'lines-between-class-members': 'off',
        'vue/html-self-closing': 'off',
        'no-var': 'error',
        indent: ['error', 4, { SwitchCase: 1 }],
        'vue/html-indent': ['error', 4],
        'object-curly-spacing': 'off',
        semi: 'off',
        'space-before-function-paren': 'off',
        'vue/max-attributes-per-line': [
            'error',
            {
                singleline: 1,
                multiline: {
                    max: 1,
                    allowFirstLine: false,
                },
            },
        ],
        'max-len': [
            'warn',
            {
                code: 120,
            },
        ],
        'vue/max-len': [
            'warn',
            {
                code: 120,
                template: 120,
                tabWidth: 4,
                comments: 120,
                ignorePattern: '',
                ignoreComments: false,
                ignoreTrailingComments: false,
                ignoreUrls: false,
                ignoreStrings: false,
                ignoreTemplateLiterals: false,
                ignoreRegExpLiterals: false,
                ignoreHTMLAttributeValues: false,
                ignoreHTMLTextContents: false,
            },
        ],
        'no-underscore-dangle': ['error', { allowAfterThis: true }],
        'vue/html-closing-bracket-newline': [
            'error',
            {
                singleline: 'never',
                multiline: 'always',
            },
        ],
        // спорное свойство, обсудить
        // 'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
        'no-plusplus': 'off',
        'import/no-extraneous-dependencies': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'no-restricted-syntax': 'off',
        'prefer-destructuring': 'off',
        radix: ['error', 'as-needed'],
        'no-restricted-properties': 'off',
        'no-undef': 'off',
        // legacy rules set to warn/off; in new projects remove it all
        'no-restricted-globals': 'off',
        'class-methods-use-this': 'warn',
        'no-useless-catch': 'warn',
        '@typescript-eslint/no-empty-function': 'warn',
        'vue/custom-event-name-casing': 'warn',
        'import/extensions': 'warn',
        'vue/no-unused-components': 'warn',
        'import/prefer-default-export': 'warn',
        'no-useless-constructor': 'warn',
        'no-mixed-operators': 'warn',
        'no-shadow': 'warn',
        'no-param-reassign': 'warn',
        '@typescript-eslint/ban-ts-comment': 'off',
        'no-return-await': 'warn',
        'consistent-return': 'warn',
        'no-bitwise': 'warn',
        'no-await-in-loop': 'warn',
        'array-callback-return': 'warn',
        'vue/return-in-computed-property': 'warn',
        'import/namespace': 'off',
        'import/order': 'off',
        'import/named': 'off',
        camelcase: 'warn',
    },
    settings: {
        'import/resolver': {
            nuxt: {
                extensions: ['.js', '.vue'],
            },
        },
    },
};
