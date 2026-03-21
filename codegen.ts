import { CodegenConfig } from '@graphql-codegen/cli'
import dotenv from 'dotenv'
import path from 'node:path'

dotenv.config({ path: path.resolve(__dirname, '.env/.env.development') })

const ARGS_START = 2
const args = process.argv.slice(ARGS_START)
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
  schema: `${process.env.REACT_APP_GRAPHQL_SERVER_PROTOCOL}://${process.env.REACT_APP_GRAPHQL_SERVER_HOST}:${process.env.REACT_APP_GRAPHQL_SERVER_PORT}${process.env.REACT_APP_GRAPHQL_SERVER_PATHNAME}`,
  documents: ['src/**/*.graphql'],
  ignoreNoDocuments: true,
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
