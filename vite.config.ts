import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/AcademicAce/', // Nombre exacto de tu repositorio
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
})