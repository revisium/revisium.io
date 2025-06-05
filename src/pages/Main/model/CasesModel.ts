import { MainCasesFragment } from 'src/__generated__/graphql-request.ts'
import { CaseItemModel } from 'src/pages/Main/model/CaseItemModel.ts'

export class CasesModel {
  constructor(private readonly data: MainCasesFragment) {}

  public get isAvailable() {
    return Boolean(this.data.items.length)
  }

  public get title() {
    return this.data.title
  }

  public get items() {
    return this.data.items.map((item) => new CaseItemModel(item))
  }
}
