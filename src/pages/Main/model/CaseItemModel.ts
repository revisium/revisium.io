import { CaseFragment } from 'src/__generated__/graphql-request.ts'

export class CaseItemModel {
  constructor(private readonly data: CaseFragment) {}

  public get id() {
    return this.data.caseId
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
