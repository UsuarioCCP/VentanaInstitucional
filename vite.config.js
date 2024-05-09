import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist", // Directorio de salida para los archivos generados
    rollupOptions: {
      external: ["react", "react-dom", "react-router-dom"], // Indica las dependencias externas
      output: {
        // Configura el formato de salida y las variables globales
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react-router-dom": "ReactRouterDOM",
        },
      },
    },
  },
});
