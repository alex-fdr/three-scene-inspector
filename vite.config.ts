import { defineConfig } from 'vite';
import { resolve } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  resolve: {
    dedupe: ['three'],
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'ThreeSceneInspector',
      fileName: (format) => `three-scene-inspector.${format}.js`,
      formats: ['es', 'umd']
    },
    rollupOptions: {
      external: ['three', 'tweakpane', 'tweakpane-plugin-media'],
      output: {
        globals: {
          'three': 'THREE',
          'tweakpane': 'Tweakpane',
          'tweakpane-plugin-media': 'TweakpanePluginMedia'
        },
      }
    },
    sourcemap: true
  }
});
