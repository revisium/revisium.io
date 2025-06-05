import { nanoid } from 'nanoid'
import { CodeFragment } from 'src/__generated__/graphql-request.ts'
import { interpolation } from 'src/shared/lib'

const PASSWORD_LENGTH = 10

export class DeploymentTabsModel {
  constructor(
    private readonly data: CodeFragment,
    private readonly version: string,
  ) {}

  public get dockerTitle() {
    return this.data.docker.title
  }

  public get docker() {
    return interpolation(this.data.docker.code, { version: this.version })
  }

  public get dockerComposeTitle() {
    return this.data.dockerCompose.title
  }

  public get dockerCompose() {
    return interpolation(this.data.dockerCompose.code, {
      version: this.version,
      password: nanoid(PASSWORD_LENGTH).toLowerCase(),
    })
  }
}
