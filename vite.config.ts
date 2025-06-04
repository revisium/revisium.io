import { execSync } from 'child_process'
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'
import checker from 'vite-plugin-checker'
import { resolve } from 'path'
import svgr from 'vite-plugin-svgr'
import packageJson from './package.json'

const commitHash = execSync('git rev-parse --short HEAD').toString().trimEnd()
const branchName = execSync('git rev-parse --abbrev-ref HEAD').toString().trimEnd()

const ENV_DIR = '.env'
const ENV_PREFIX = 'REACT_APP_'
const DEFAULT_PORT = 5173

export default ({ mode }: { mode: string }) => {
  const env = loadEnv(mode, ENV_DIR, ENV_PREFIX)
  process.env = { ...process.env, ...env }

  return defineConfig({
    plugins: [
      react(),
      svgr({
        include: '**/*.svg',
      }),
      checker({
        // e.g. use TypeScript check
        typescript: true,
      }),
    ],

    resolve: {
      alias: {
        src: resolve(__dirname, 'src'),
      },
    },
    server: {
      port: DEFAULT_PORT,
      proxy: {
        [process.env.REACT_APP_GRAPHQL_PATHNAME as string]: {
          target: `${process.env.REACT_APP_GRAPHQL_SERVER_PROTOCOL}://${process.env.REACT_APP_GRAPHQL_SERVER_HOST}:${process.env.REACT_APP_GRAPHQL_SERVER_PORT}`,
          changeOrigin: true,
          rewrite: (path: string) => {
            return path.replace(
              new RegExp(`^${process.env.REACT_APP_GRAPHQL_PATHNAME}`),
              process.env.REACT_APP_GRAPHQL_SERVER_PATHNAME as string,
            )
          },
        },
      },
    },
    envDir: ENV_DIR,
    envPrefix: ENV_PREFIX,
    define: {
      'import.meta.env.PACKAGE_VERSION': `${JSON.stringify(packageJson.version)}`,
      'import.meta.env.GIT_COMMIT_HASH': `"${commitHash}"`,
      'import.meta.env.GIT_BRANCH_NAME': `"${branchName}"`,
    },
  })
}
