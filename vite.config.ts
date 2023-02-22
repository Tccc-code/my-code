import { defineConfig, UserConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig(() => {
  const conf: UserConfig = {
    base: './',//公共基础路径，由 JS 引入的资源 URL，CSS 中的 url() 引用以及 .html 文件中引用的资源在构建过程中都会自动调整，以适配此选项。
    plugins: [react()],
    build: {
      outDir: './dist',//编译输出路径
      assetsDir: '',
      rollupOptions: {
        input: {
          main: 'index.html',
          // family: 'family.html',
        },
        output: {

        },
      }
    },
    esbuild: {
      loader: "tsx",
      include: /src\/.*\.[tj]sx?$/,
      exclude: [],
    },
    resolve: {
      alias: {
        '@': '/src'
      }
    },
    css: {
      preprocessorOptions: {
        scss: {

        },
        less: {
          javascriptEnabled: true,
          modifyVars: {
            "@primary-color": "#1D33FF"
          }
        }
      }
    },
    server: {
      host: true, //true表示监听所有地址，局域网公网
      port: 29001
    }
  }
  return conf;
})
