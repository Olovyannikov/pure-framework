import js from '@eslint/js';
import simpleImportSortPlugin from 'eslint-plugin-simple-import-sort';
import globals from 'globals';
import { builtinModules } from 'node:module';
import ts from 'typescript-eslint';
import pluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

const nodeBuiltinModules = builtinModules.join('|');
const ourOwnModules = [''].join('|');

export default ts.config(
    js.configs.recommended,
    ts.configs.recommended,
    pluginPrettierRecommended,
    { ignores: ['dist/', 'tests/', 'public/'] },
    {
        languageOptions: { globals: globals.browser },
        plugins: {
            'simple-import-sort': simpleImportSortPlugin,
        },
        rules: {
            'simple-import-sort/imports': [
                'warn',
                {
                    groups: [
                        ['^react', '^@?\\w'],
                        /* import 'foo*' or import '@foo*' */
                        [`^\\u0000@?\\w`],
                        /* import '@my-beautiful-lib*' or import '@my-awesome-ui-kit*' */
                        [`^\\u0000(${ourOwnModules})`],
                        /* import '#foo*' */
                        ['^\\u0000#\\w'],
                        /* import './foo*' or import '../foo*' */
                        ['^\\u0000\\.'],
                        /* import ... from 'fs' */
                        [`^(${nodeBuiltinModules})`],
                        /* import ... from 'foo*' or import ... from '@foo*' */
                        [`^@?\\w`],
                        /* import ... from '@my-beautiful-lib*' or import '@my-awesome-ui-kit*' */
                        [`^(${ourOwnModules})`],
                        /* import ... from '@foo*' */
                        ['^@\\w'],
                        /* import @/shared */
                        ['@/shared?\\w'],
                        /* import @/entities */
                        ['@/entities?\\w'],
                        /* import @/features */
                        ['@/features?\\w'],
                        /* import @/widgets */
                        ['@/widgets?\\w'],
                        /* import ... from './foo*' or import ... from '../foo*' */
                        ['^\\.'],
                        /* import styles */
                        ['^.+\\.?(scss|css)$'],
                    ],
                },
            ],
        },
    }
);
