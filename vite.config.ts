import { defineConfig } from 'vite';
import { resolve } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'ThreeSceneInspector',
      fileName: (format) => `three-scene-inspector.${format}.js`,
      formats: ['es', 'umd']
    },
    rollupOptions: {
      external: ['three', 'tweakpane'],
      output: {
        globals: {
          'three': 'THREE',
          'tweakpane': 'Tweakpane'
        },
      }
    },
    sourcemap: true
  }
});
