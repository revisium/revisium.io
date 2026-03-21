import { makeAutoObservable } from 'mobx'
import { MainPageQuery } from 'src/__generated__/graphql-request.ts'
import { container, ObservableRequest } from 'src/shared/lib'
import { client } from 'src/shared/services'

type MainData = MainPageQuery['mainFlat']

export class MainPageModel {
  private readonly mainPageRequest = ObservableRequest.of(client.mainPage)

  constructor() {
    makeAutoObservable(this)
  }

  public get isLoading() {
    return this.mainPageRequest.isLoading
  }

  public get isAvailableData() {
    return Boolean(this.mainPageRequest.data)
  }

  public get hasError() {
    return Boolean(this.mainPageRequest.error)
  }

  public get hero() {
    return this.loadedData.hero
  }

  public get imageUrl() {
    return this.loadedData.image.url
  }

  public get header() {
    return this.loadedData.header
  }

  public get featuresTitle() {
    return this.loadedData.features.title
  }

  public get featureItems() {
    return this.loadedData.features.items
  }

  public get codeSectionTitle() {
    return this.loadedData.codeSection.title
  }

  public get codeSectionSubtitle() {
    return this.loadedData.codeSection.subtitle
  }

  public get codeSectionFooterText() {
    return this.loadedData.codeSection.footerText
  }

  public get codeSectionFooterLink() {
    return this.loadedData.codeSection.footerLink
  }

  public get codeSectionFooterLinkLabel() {
    return this.loadedData.codeSection.footerLinkLabel
  }

  public get codeSteps() {
    return this.loadedData.codeSection.items
  }

  public get useCasesTitle() {
    return this.loadedData.useCases.title
  }

  public get useCaseItems() {
    return this.loadedData.useCases.items
  }

  public get quickStart() {
    return this.loadedData.quickStart
  }

  public get openSource() {
    return this.loadedData.openSource
  }

  public get poweredBy() {
    return this.loadedData.poweredBy
  }

  public get cta() {
    return this.loadedData.cta
  }

  public get footer() {
    return this.loadedData.footer
  }

  public async init() {
    await this.mainPageRequest.fetch()
  }

  public dispose() {}

  private get loadedData(): MainData {
    if (!this.mainPageRequest.data) {
      throw new Error('No main page found.')
    }

    return this.mainPageRequest.data.mainFlat
  }
}

container.register(
  MainPageModel,
  () => {
    return new MainPageModel()
  },
  { scope: 'request' },
)
