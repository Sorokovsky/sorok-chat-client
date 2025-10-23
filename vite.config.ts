import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'
import { API_URL, SERVER_URL } from './src/shared/constants';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler"]],
      },
    }),
  ],
  css: {
    modules: {
      localsConvention: "camelCase"
    }
  },
  resolve: {
    alias: [
      {
        find: "@",
        replacement: path.resolve(__dirname, "src"),
      },
    ],
  },
  server: {
    proxy: {
      [API_URL]: {
        target: SERVER_URL,
        changeCors: true,
        rewrite: (path: string) => path.replace(/^\/api/, ""),
      },
    },
  },
});
