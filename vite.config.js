import { defineConfig } from 'vite';
import reactRefresh from 'vitejs/plugin-react-reactRefresh';

export default defineConfig({
  plugins: [reactRefresh()],
  build: {
    outDir: 'dist/app',
  },
});
