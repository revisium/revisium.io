import { CodegenConfig } from '@graphql-codegen/cli'
import { loadEnv } from 'vite'

const ENV_DIR = '.env'
const ENV_PREFIX = 'REACT_APP_'

const env = loadEnv('DEVELOPMENT', ENV_DIR, ENV_PREFIX)

const START_INDEX = 2
const args = process.argv.slice(START_INDEX)
const isDownload = args.includes('--download')

const disablePlugin = {
  add: {
    content: ['// @ts-ignore'],
  },
}

const scalars = {
  DateTime: 'number | string',
  JSON: 'any',
  JSONObject: 'any',
}

const config: CodegenConfig = {
  overwrite: true,
  schema: `${env.REACT_APP_GRAPHQL_SERVER_PROTOCOL}://${env.REACT_APP_GRAPHQL_SERVER_HOST}:${env.REACT_APP_GRAPHQL_SERVER_PORT}${env.REACT_APP_GRAPHQL_SERVER_PATHNAME}`,
  documents: ['src/**/*.graphql'],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    [`./src/__generated__/schema.graphql`]: {
      plugins: ['schema-ast'],
      config: {
        includeDirectives: true,
      },
    },
    ...(!isDownload
      ? {
          [`./src/__generated__/graphql-request.ts`]: {
            plugins: [disablePlugin, 'typescript', 'typescript-operations', 'typescript-graphql-request'],
            config: {
              rawRequest: false,
              skipTypename: true,
              scalars,
            },
          },
        }
      : {}),
  },
}

export default config
