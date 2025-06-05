import { FeatureFragment } from 'src/__generated__/graphql-request.ts'

export class FeatureItemModel {
  constructor(private readonly data: FeatureFragment) {}

  public get id() {
    return this.data.featureId
  }

  public get title() {
    return this.data.title
  }

  public get description() {
    return this.data.description
  }

  public get isVideo() {
    return this.data.file.mimeType.startsWith('video/')
  }

  public get url() {
    return this.data.file.url
  }
}
