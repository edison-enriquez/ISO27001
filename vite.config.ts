import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Con dominio propio el sitio se sirve desde la raíz ('/'); en local igual.
  // src/main.tsx pasa este mismo valor como basename al BrowserRouter
  // leyéndolo de import.meta.env.BASE_URL, así que no hay que tocar dos sitios.
  base: process.env.VITE_BASE ?? '/',
  server: { port: 5173, open: true },
});
