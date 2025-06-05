import { container } from 'src/shared/lib'

type Envs = 'REACT_APP_GRAPHQL_PATHNAME'

export class EnvironmentService {
  public get(key: Envs): string | undefined {
    const windowValue = window.__env__?.[key]
    const processValue = import.meta.env[key]

    return windowValue ?? processValue
  }
}

container.register(EnvironmentService, () => new EnvironmentService(), { scope: 'singleton' })
