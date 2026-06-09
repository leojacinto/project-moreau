import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '../', 'SN_');
  const instance = env.SN_INSTANCE || 'https://YOUR_INSTANCE.service-now.com';
  const user = env.SN_USER || 'admin';
  const pass = env.SN_PASSWORD || '';

  return {
    plugins: [react()],
    server: {
      port: 3002,
      proxy: {
        '/api': {
          target: instance,
          changeOrigin: true,
          secure: true,
          headers: {
            Authorization: 'Basic ' + Buffer.from(`${user}:${pass}`).toString('base64')
          }
        }
      }
    }
  };
});
