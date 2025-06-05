import { MainFeaturesFragment } from 'src/__generated__/graphql-request.ts'
import { FeatureItemModel } from 'src/pages/Main/model/FeatureItemModel.ts'

export class FeaturesModel {
  constructor(private readonly data: MainFeaturesFragment) {}

  public get isAvailable() {
    return Boolean(this.data.items.length)
  }

  public get title() {
    return this.data.title
  }

  public get items() {
    return this.data.items.map((item) => new FeatureItemModel(item))
  }
}
