import { defineConfig } from '@rsbuild/core';

// Docs: https://rsbuild.rs/config/
export default defineConfig({
  output: {
    cssModules: {
      auto: (resource) => {
        return resource.includes('.module.') || resource.includes('shared/');
      },
    },
  },
});
