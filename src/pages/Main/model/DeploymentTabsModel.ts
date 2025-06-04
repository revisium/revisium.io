import { CodeFragment } from 'src/__generated__/graphql-request.ts'

export class DeploymentTabsModel {
  constructor(private readonly data: CodeFragment) {}

  public get dockerTitle() {
    return this.data.docker.title
  }

  public get dockerComposeTitle() {
    return this.data.dockerCompose.title
  }
}
