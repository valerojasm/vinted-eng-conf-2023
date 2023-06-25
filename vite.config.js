import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'

// https://vitejs.dev/config/
export default ({ mode }) => {
  Object.assign(process.env, loadEnv(mode, process.cwd(), ''))
  return defineConfig({
    plugins: [react()],
    resolve: {
      alias: {
        '~': path.resolve(__dirname, 'src'),
      },
    },
    define: {
      'process.env': {
        API_KEY: process.env.API_KEY,
      },
    },
  })
}
