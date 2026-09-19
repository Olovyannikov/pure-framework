import { defineConfig } from '@rsbuild/core';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import postcss_mixins from 'postcss-mixins';

// Docs: https://rsbuild.rs/config/

export default defineConfig({
    source: {
        entry: {
            index: join(__dirname, 'src', 'app', 'index.ts'),
        },
    },
    output: {
        cssModules: {
            auto: (resource) => {
                return resource.includes('.module.') || resource.includes('shared/');
            },
        },
    },
    tools: {
        postcss: (_opts, { addPlugins }) => {
            addPlugins(postcss_mixins);
        },
    },
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
});
