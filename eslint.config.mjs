import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import pluginPrettier from 'eslint-plugin-prettier';

export default [
    {
        files: ['**/*.{js,mjs,cjs,jsx}'],
        languageOptions: {
            globals: {
                ...globals.browser,
                // Jest globals
                test: 'readonly',
                expect: 'readonly',
                // Node globals
                process: 'readonly',
            },
            parserOptions: {
                ecmaVersion: 2021, // Specify the ECMAScript version
                sourceType: 'module', // Allow the use of imports
                ecmaFeatures: {
                    jsx: true, // Enable JSX
                },
            },
        },
        rules: {
            // Custom ESLint rules
            'prettier/prettier': 'error', // Ensure Prettier rules are enforced
            'react/react-in-jsx-scope': 'off', // Not needed with React 17+
            'react/prop-types': 'off', // Turn off prop-types rule if you are using TypeScript
        },
        plugins: {
            react: pluginReact,
            prettier: pluginPrettier,
        },
        settings: {
            react: {
                version: 'detect', // Automatically picks the React version you have installed
            },
        },
    },
    pluginJs.configs.recommended,
    pluginReact.configs.flat.recommended,
];
