import { nanoid } from 'nanoid'
import { DeploymentTabsModel } from 'src/pages/Main/model/DeploymentTabsModel.ts'
import { container, ObservableRequest } from 'src/shared/lib'
import { client } from 'src/shared/services'

export class MainPageModel {
  private readonly mainPageRequest = ObservableRequest.of(client.mainPage)

  constructor() {}

  public get github() {
    return this.loadedData.github
  }

  public get cloudLink() {
    return this.loadedData.cloud.link
  }

  public get cloudLabel() {
    return this.loadedData.cloud.label
  }

  public get title() {
    return this.loadedData.texts.title
  }

  public get description() {
    return this.loadedData.texts.description.split('\n').map((text) => ({ id: nanoid(), text }))
  }

  public get previewUrl() {
    return this.loadedData.preview.url
  }

  public get code() {
    return new DeploymentTabsModel(this.loadedData.code)
  }

  public get isLoading() {
    return this.mainPageRequest.isLoading
  }

  public get isAvailableData() {
    return this.mainPageRequest.data
  }

  public async init() {
    await this.mainPageRequest.fetch()
  }

  public dispose() {}

  private get loadedData() {
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
