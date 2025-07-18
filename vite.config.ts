import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
    plugins: [
        react(),
        dts({
            include: [resolve(__dirname, 'src/**/*.ts'), resolve(__dirname, 'src/**/*.tsx')],
            tsconfigPath: resolve(__dirname, 'tsconfig.app.json'),
            insertTypesEntry: true,
            rollupTypes: true,
            outDir: 'dist',
            copyDtsFiles: false,
        }),
    ],
    build: {
        lib: {
            entry: resolve(__dirname, 'src/lib/index.ts'),
            name: 'KintoneUIComponentReact',
            formats: ['es', 'umd'],
            fileName: (format) => `kintone-ui-component-react.${format}.js`,
        },
        outDir: 'dist',
        rollupOptions: {
            external: ['react', 'react-dom', 'kintone-ui-component'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                    'kintone-ui-component': 'KintoneUIComponent',
                },
            },
        },
    },
});
