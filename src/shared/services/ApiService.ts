// @ts-expect-error can't find type
import { GraphQLClient, GraphQLClientResponse } from 'graphql-request'
import { getSdk, Sdk } from 'src/__generated__/graphql-request.ts'
import { container } from 'src/shared/lib'
import { EnvironmentService } from 'src/shared/services/EnvironmentService.ts'
import { toaster } from 'src/shared/ui'

export class ApiService {
  private readonly graphQLClient: GraphQLClient
  public readonly client: Sdk

  constructor(private readonly environmentService: EnvironmentService) {
    const url = this.environmentService.get('REACT_APP_GRAPHQL_PATHNAME')

    if (!url) {
      throw new Error(`Invalid REACT_APP_GRAPHQL_PATHNAME`)
    }

    this.graphQLClient = new GraphQLClient(url, {
      responseMiddleware: (response: GraphQLClientResponse<unknown> | Error) => {
        if (response.response?.errors[0].message) {
          toaster.create({
            title: response.response?.errors[0].message,
          })
        }

        return response
      },
    })
    this.client = getSdk(this.graphQLClient)
  }
}

container.register(
  ApiService,
  () => {
    const environmentService = container.get(EnvironmentService)

    return new ApiService(environmentService)
  },
  { scope: 'singleton' },
)

export const client = container.get(ApiService).client
