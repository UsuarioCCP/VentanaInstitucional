import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['react', 'react-dom', 'react-router-dom'], // Especifica las dependencias externas
      output: {
        // Configura el formato de salida
        globals: {
          react: 'React',               // Asocia 'react' con 'React' globalmente
          'react-dom': 'ReactDOM',      // Asocia 'react-dom' con 'ReactDOM' globalmente
          'react-router-dom': 'ReactRouterDOM', // Asocia 'react-router-dom' con 'ReactRouterDOM' globalmente
        },
        // Puede ser necesario ajustar otros parámetros de salida según tus necesidades
        // Por ejemplo, puedes especificar el formato deseado (iife, esm, cjs, etc.)
        format: 'esm',  // Establece el formato de salida como ECMAScript Modules (ESM)
      },
    },
  },
});