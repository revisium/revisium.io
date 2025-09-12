// @ts-ignore
import { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: number | string; output: number | string; }
  JSON: { input: any; output: any; }
  _Any: { input: any; output: any; }
};

export type LandingArticle = {
  CEO: LandingArticleCeo;
  articleCategories: Array<LandingArticlecategoryNode>;
  author: LandingAuthorNode;
  coverImage: LandingArticleCoverimage;
  createdAt: Scalars['String']['output'];
  markdown: Scalars['String']['output'];
  previewImage: LandingArticlePreviewimage;
  publishedAt: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
  /** @deprecated To hide the article, use publishedAt with a date from the future. */
  visible: Scalars['Boolean']['output'];
};

export type LandingArticleCeo = {
  description: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingArticleConnection = {
  edges: Array<LandingArticleEdge>;
  pageInfo: LandingPageInfo;
  totalCount: Scalars['Int']['output'];
};

export type LandingArticleCoverimage = {
  extension: Scalars['String']['output'];
  fileId: Scalars['String']['output'];
  fileName: Scalars['String']['output'];
  hash: Scalars['String']['output'];
  height: Scalars['Float']['output'];
  mimeType: Scalars['String']['output'];
  size: Scalars['Float']['output'];
  status: Scalars['String']['output'];
  url: Scalars['String']['output'];
  width: Scalars['Float']['output'];
};

export type LandingArticleEdge = {
  cursor: Scalars['String']['output'];
  node: LandingArticleNode;
};

export type LandingArticleFlat = {
  CEO: LandingArticleFlatCeo;
  articleCategories: Array<LandingArticlecategoryFlat>;
  author: LandingAuthorFlat;
  coverImage: LandingArticleFlatCoverimage;
  createdAt: Scalars['String']['output'];
  markdown: Scalars['String']['output'];
  previewImage: LandingArticleFlatPreviewimage;
  publishedAt: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
  /** @deprecated To hide the article, use publishedAt with a date from the future. */
  visible: Scalars['Boolean']['output'];
};

export type LandingArticleFlatCeo = {
  description: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingArticleFlatConnection = {
  edges: Array<LandingArticleFlatEdge>;
  pageInfo: LandingPageInfo;
  totalCount: Scalars['Int']['output'];
};

export type LandingArticleFlatCoverimage = {
  extension: Scalars['String']['output'];
  fileId: Scalars['String']['output'];
  fileName: Scalars['String']['output'];
  hash: Scalars['String']['output'];
  height: Scalars['Float']['output'];
  mimeType: Scalars['String']['output'];
  size: Scalars['Float']['output'];
  status: Scalars['String']['output'];
  url: Scalars['String']['output'];
  width: Scalars['Float']['output'];
};

export type LandingArticleFlatEdge = {
  cursor: Scalars['String']['output'];
  node: LandingArticleFlat;
};

export type LandingArticleFlatPreviewimage = {
  extension: Scalars['String']['output'];
  fileId: Scalars['String']['output'];
  fileName: Scalars['String']['output'];
  hash: Scalars['String']['output'];
  height: Scalars['Float']['output'];
  mimeType: Scalars['String']['output'];
  size: Scalars['Float']['output'];
  status: Scalars['String']['output'];
  url: Scalars['String']['output'];
  width: Scalars['Float']['output'];
};

export type LandingArticleNode = {
  createdAt: Scalars['DateTime']['output'];
  createdId: Scalars['String']['output'];
  data: LandingArticle;
  id: Scalars['String']['output'];
  json: Scalars['JSON']['output'];
  publishedAt: Scalars['DateTime']['output'];
  updatedAt: Scalars['DateTime']['output'];
  versionId: Scalars['String']['output'];
};

export type LandingArticlePreviewimage = {
  extension: Scalars['String']['output'];
  fileId: Scalars['String']['output'];
  fileName: Scalars['String']['output'];
  hash: Scalars['String']['output'];
  height: Scalars['Float']['output'];
  mimeType: Scalars['String']['output'];
  size: Scalars['Float']['output'];
  status: Scalars['String']['output'];
  url: Scalars['String']['output'];
  width: Scalars['Float']['output'];
};

export type LandingArticlecategoriesWhereInput = {
  AND?: InputMaybe<Array<LandingArticlecategoriesWhereInput>>;
  NOT?: InputMaybe<Array<LandingArticlecategoriesWhereInput>>;
  OR?: InputMaybe<Array<LandingArticlecategoriesWhereInput>>;
  createdAt?: InputMaybe<LandingDateTimeFilter>;
  createdId?: InputMaybe<LandingStringFilter>;
  data?: InputMaybe<LandingJsonFilter>;
  id?: InputMaybe<LandingStringFilter>;
  publishedAt?: InputMaybe<LandingDateTimeFilter>;
  readonly?: InputMaybe<LandingBoolFilter>;
  updatedAt?: InputMaybe<LandingDateTimeFilter>;
  versionId?: InputMaybe<LandingStringFilter>;
};

export type LandingArticlecategory = {
  name: Scalars['String']['output'];
};

export type LandingArticlecategoryConnection = {
  edges: Array<LandingArticlecategoryEdge>;
  pageInfo: LandingPageInfo;
  totalCount: Scalars['Int']['output'];
};

export type LandingArticlecategoryEdge = {
  cursor: Scalars['String']['output'];
  node: LandingArticlecategoryNode;
};

export type LandingArticlecategoryFlat = {
  name: Scalars['String']['output'];
};

export type LandingArticlecategoryFlatConnection = {
  edges: Array<LandingArticlecategoryFlatEdge>;
  pageInfo: LandingPageInfo;
  totalCount: Scalars['Int']['output'];
};

export type LandingArticlecategoryFlatEdge = {
  cursor: Scalars['String']['output'];
  node: LandingArticlecategoryFlat;
};

export type LandingArticlecategoryNode = {
  createdAt: Scalars['DateTime']['output'];
  createdId: Scalars['String']['output'];
  data: LandingArticlecategory;
  id: Scalars['String']['output'];
  json: Scalars['JSON']['output'];
  publishedAt: Scalars['DateTime']['output'];
  updatedAt: Scalars['DateTime']['output'];
  versionId: Scalars['String']['output'];
};

export type LandingArticlesWhereInput = {
  AND?: InputMaybe<Array<LandingArticlesWhereInput>>;
  NOT?: InputMaybe<Array<LandingArticlesWhereInput>>;
  OR?: InputMaybe<Array<LandingArticlesWhereInput>>;
  createdAt?: InputMaybe<LandingDateTimeFilter>;
  createdId?: InputMaybe<LandingStringFilter>;
  data?: InputMaybe<LandingJsonFilter>;
  id?: InputMaybe<LandingStringFilter>;
  publishedAt?: InputMaybe<LandingDateTimeFilter>;
  readonly?: InputMaybe<LandingBoolFilter>;
  updatedAt?: InputMaybe<LandingDateTimeFilter>;
  versionId?: InputMaybe<LandingStringFilter>;
};

export type LandingAuthor = {
  /** Фамилия */
  firstName: Scalars['String']['output'];
  /** Имя */
  lastName: Scalars['String']['output'];
};

export type LandingAuthorConnection = {
  edges: Array<LandingAuthorEdge>;
  pageInfo: LandingPageInfo;
  totalCount: Scalars['Int']['output'];
};

export type LandingAuthorEdge = {
  cursor: Scalars['String']['output'];
  node: LandingAuthorNode;
};

export type LandingAuthorFlat = {
  /** Фамилия */
  firstName: Scalars['String']['output'];
  /** Имя */
  lastName: Scalars['String']['output'];
};

export type LandingAuthorFlatConnection = {
  edges: Array<LandingAuthorFlatEdge>;
  pageInfo: LandingPageInfo;
  totalCount: Scalars['Int']['output'];
};

export type LandingAuthorFlatEdge = {
  cursor: Scalars['String']['output'];
  node: LandingAuthorFlat;
};

export type LandingAuthorNode = {
  createdAt: Scalars['DateTime']['output'];
  createdId: Scalars['String']['output'];
  data: LandingAuthor;
  id: Scalars['String']['output'];
  json: Scalars['JSON']['output'];
  publishedAt: Scalars['DateTime']['output'];
  updatedAt: Scalars['DateTime']['output'];
  versionId: Scalars['String']['output'];
};

export type LandingAuthorsWhereInput = {
  AND?: InputMaybe<Array<LandingAuthorsWhereInput>>;
  NOT?: InputMaybe<Array<LandingAuthorsWhereInput>>;
  OR?: InputMaybe<Array<LandingAuthorsWhereInput>>;
  createdAt?: InputMaybe<LandingDateTimeFilter>;
  createdId?: InputMaybe<LandingStringFilter>;
  data?: InputMaybe<LandingJsonFilter>;
  id?: InputMaybe<LandingStringFilter>;
  publishedAt?: InputMaybe<LandingDateTimeFilter>;
  readonly?: InputMaybe<LandingBoolFilter>;
  updatedAt?: InputMaybe<LandingDateTimeFilter>;
  versionId?: InputMaybe<LandingStringFilter>;
};

export type LandingBoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<Scalars['Boolean']['input']>;
};

export type LandingCase = {
  caseId: Scalars['String']['output'];
  description: Scalars['String']['output'];
  file: LandingCaseFile;
  title: Scalars['String']['output'];
};

export type LandingCaseConnection = {
  edges: Array<LandingCaseEdge>;
  pageInfo: LandingPageInfo;
  totalCount: Scalars['Int']['output'];
};

export type LandingCaseEdge = {
  cursor: Scalars['String']['output'];
  node: LandingCaseNode;
};

export type LandingCaseFile = {
  extension: Scalars['String']['output'];
  fileId: Scalars['String']['output'];
  fileName: Scalars['String']['output'];
  hash: Scalars['String']['output'];
  height: Scalars['Float']['output'];
  mimeType: Scalars['String']['output'];
  size: Scalars['Float']['output'];
  status: Scalars['String']['output'];
  url: Scalars['String']['output'];
  width: Scalars['Float']['output'];
};

export type LandingCaseFlat = {
  caseId: Scalars['String']['output'];
  description: Scalars['String']['output'];
  file: LandingCaseFlatFile;
  title: Scalars['String']['output'];
};

export type LandingCaseFlatConnection = {
  edges: Array<LandingCaseFlatEdge>;
  pageInfo: LandingPageInfo;
  totalCount: Scalars['Int']['output'];
};

export type LandingCaseFlatEdge = {
  cursor: Scalars['String']['output'];
  node: LandingCaseFlat;
};

export type LandingCaseFlatFile = {
  extension: Scalars['String']['output'];
  fileId: Scalars['String']['output'];
  fileName: Scalars['String']['output'];
  hash: Scalars['String']['output'];
  height: Scalars['Float']['output'];
  mimeType: Scalars['String']['output'];
  size: Scalars['Float']['output'];
  status: Scalars['String']['output'];
  url: Scalars['String']['output'];
  width: Scalars['Float']['output'];
};

export type LandingCaseNode = {
  createdAt: Scalars['DateTime']['output'];
  createdId: Scalars['String']['output'];
  data: LandingCase;
  id: Scalars['String']['output'];
  json: Scalars['JSON']['output'];
  publishedAt: Scalars['DateTime']['output'];
  updatedAt: Scalars['DateTime']['output'];
  versionId: Scalars['String']['output'];
};

export type LandingCasesWhereInput = {
  AND?: InputMaybe<Array<LandingCasesWhereInput>>;
  NOT?: InputMaybe<Array<LandingCasesWhereInput>>;
  OR?: InputMaybe<Array<LandingCasesWhereInput>>;
  createdAt?: InputMaybe<LandingDateTimeFilter>;
  createdId?: InputMaybe<LandingStringFilter>;
  data?: InputMaybe<LandingJsonFilter>;
  id?: InputMaybe<LandingStringFilter>;
  publishedAt?: InputMaybe<LandingDateTimeFilter>;
  readonly?: InputMaybe<LandingBoolFilter>;
  updatedAt?: InputMaybe<LandingDateTimeFilter>;
  versionId?: InputMaybe<LandingStringFilter>;
};

export type LandingCode = {
  code: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingCodeConnection = {
  edges: Array<LandingCodeEdge>;
  pageInfo: LandingPageInfo;
  totalCount: Scalars['Int']['output'];
};

export type LandingCodeEdge = {
  cursor: Scalars['String']['output'];
  node: LandingCodeNode;
};

export type LandingCodeFlat = {
  code: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingCodeFlatConnection = {
  edges: Array<LandingCodeFlatEdge>;
  pageInfo: LandingPageInfo;
  totalCount: Scalars['Int']['output'];
};

export type LandingCodeFlatEdge = {
  cursor: Scalars['String']['output'];
  node: LandingCodeFlat;
};

export type LandingCodeNode = {
  createdAt: Scalars['DateTime']['output'];
  createdId: Scalars['String']['output'];
  data: LandingCode;
  id: Scalars['String']['output'];
  json: Scalars['JSON']['output'];
  publishedAt: Scalars['DateTime']['output'];
  updatedAt: Scalars['DateTime']['output'];
  versionId: Scalars['String']['output'];
};

export type LandingCodesWhereInput = {
  AND?: InputMaybe<Array<LandingCodesWhereInput>>;
  NOT?: InputMaybe<Array<LandingCodesWhereInput>>;
  OR?: InputMaybe<Array<LandingCodesWhereInput>>;
  createdAt?: InputMaybe<LandingDateTimeFilter>;
  createdId?: InputMaybe<LandingStringFilter>;
  data?: InputMaybe<LandingJsonFilter>;
  id?: InputMaybe<LandingStringFilter>;
  publishedAt?: InputMaybe<LandingDateTimeFilter>;
  readonly?: InputMaybe<LandingBoolFilter>;
  updatedAt?: InputMaybe<LandingDateTimeFilter>;
  versionId?: InputMaybe<LandingStringFilter>;
};

export type LandingConstantConnection = {
  edges: Array<LandingConstantEdge>;
  pageInfo: LandingPageInfo;
  totalCount: Scalars['Int']['output'];
};

export type LandingConstantEdge = {
  cursor: Scalars['String']['output'];
  node: LandingConstantNode;
};

export type LandingConstantFlatConnection = {
  edges: Array<LandingConstantFlatEdge>;
  pageInfo: LandingPageInfo;
  totalCount: Scalars['Int']['output'];
};

export type LandingConstantFlatEdge = {
  cursor: Scalars['String']['output'];
  node: Scalars['String']['output'];
};

export type LandingConstantNode = {
  createdAt: Scalars['DateTime']['output'];
  createdId: Scalars['String']['output'];
  data: Scalars['String']['output'];
  id: Scalars['String']['output'];
  json: Scalars['JSON']['output'];
  publishedAt: Scalars['DateTime']['output'];
  updatedAt: Scalars['DateTime']['output'];
  versionId: Scalars['String']['output'];
};

export type LandingConstantsWhereInput = {
  AND?: InputMaybe<Array<LandingConstantsWhereInput>>;
  NOT?: InputMaybe<Array<LandingConstantsWhereInput>>;
  OR?: InputMaybe<Array<LandingConstantsWhereInput>>;
  createdAt?: InputMaybe<LandingDateTimeFilter>;
  createdId?: InputMaybe<LandingStringFilter>;
  data?: InputMaybe<LandingJsonFilter>;
  id?: InputMaybe<LandingStringFilter>;
  publishedAt?: InputMaybe<LandingDateTimeFilter>;
  readonly?: InputMaybe<LandingBoolFilter>;
  updatedAt?: InputMaybe<LandingDateTimeFilter>;
  versionId?: InputMaybe<LandingStringFilter>;
};

export type LandingCountriesWhereInput = {
  AND?: InputMaybe<Array<LandingCountriesWhereInput>>;
  NOT?: InputMaybe<Array<LandingCountriesWhereInput>>;
  OR?: InputMaybe<Array<LandingCountriesWhereInput>>;
  createdAt?: InputMaybe<LandingDateTimeFilter>;
  createdId?: InputMaybe<LandingStringFilter>;
  data?: InputMaybe<LandingJsonFilter>;
  id?: InputMaybe<LandingStringFilter>;
  publishedAt?: InputMaybe<LandingDateTimeFilter>;
  readonly?: InputMaybe<LandingBoolFilter>;
  updatedAt?: InputMaybe<LandingDateTimeFilter>;
  versionId?: InputMaybe<LandingStringFilter>;
};

export type LandingCountry = {
  code: Scalars['String']['output'];
  icon: LandingCountryIcon;
  link: Scalars['Boolean']['output'];
  title: Scalars['String']['output'];
};

export type LandingCountryConnection = {
  edges: Array<LandingCountryEdge>;
  pageInfo: LandingPageInfo;
  totalCount: Scalars['Int']['output'];
};

export type LandingCountryEdge = {
  cursor: Scalars['String']['output'];
  node: LandingCountryNode;
};

export type LandingCountryFlat = {
  code: Scalars['String']['output'];
  icon: LandingCountryFlatIcon;
  link: Scalars['Boolean']['output'];
  title: Scalars['String']['output'];
};

export type LandingCountryFlatConnection = {
  edges: Array<LandingCountryFlatEdge>;
  pageInfo: LandingPageInfo;
  totalCount: Scalars['Int']['output'];
};

export type LandingCountryFlatEdge = {
  cursor: Scalars['String']['output'];
  node: LandingCountryFlat;
};

export type LandingCountryFlatIcon = {
  extension: Scalars['String']['output'];
  fileId: Scalars['String']['output'];
  fileName: Scalars['String']['output'];
  hash: Scalars['String']['output'];
  height: Scalars['Float']['output'];
  mimeType: Scalars['String']['output'];
  size: Scalars['Float']['output'];
  status: Scalars['String']['output'];
  url: Scalars['String']['output'];
  width: Scalars['Float']['output'];
};

export type LandingCountryIcon = {
  extension: Scalars['String']['output'];
  fileId: Scalars['String']['output'];
  fileName: Scalars['String']['output'];
  hash: Scalars['String']['output'];
  height: Scalars['Float']['output'];
  mimeType: Scalars['String']['output'];
  size: Scalars['Float']['output'];
  status: Scalars['String']['output'];
  url: Scalars['String']['output'];
  width: Scalars['Float']['output'];
};

export type LandingCountryNode = {
  createdAt: Scalars['DateTime']['output'];
  createdId: Scalars['String']['output'];
  data: LandingCountry;
  id: Scalars['String']['output'];
  json: Scalars['JSON']['output'];
  publishedAt: Scalars['DateTime']['output'];
  updatedAt: Scalars['DateTime']['output'];
  versionId: Scalars['String']['output'];
};

export type LandingCountrytransfers = {
  FAQ: LandingCountrytransfersFaq;
  InfoBlock: LandingCountrytransfersInfoblock;
  SEO: LandingCountrytransfersSeo;
  agentPaymentBlock: LandingCountrytransfersAgentpaymentblock;
  contactPromptBlock: LandingCountrytransfersContactpromptblock;
  infoDescriptionBlock: LandingCountrytransfersInfodescriptionblock;
  reliableB2BTransfersBlock: LandingCountrytransfersReliableb2btransfersblock;
  whenVedHelpBlock: LandingCountrytransfersWhenvedhelpblock;
  whyVedMasterBlock: LandingCountrytransfersWhyvedmasterblock;
  workProcessBlock: LandingCountrytransfersWorkprocessblock;
};

export type LandingCountrytransfersAgentpaymentblock = {
  agentPlatformScenarios: LandingCountrytransfersAgentpaymentblockAgentplatformscenarios;
  description: Scalars['String']['output'];
  documentManagement: LandingCountrytransfersAgentpaymentblockDocumentmanagement;
  title: Scalars['String']['output'];
};

export type LandingCountrytransfersAgentpaymentblockAgentplatformscenarios = {
  content: Array<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};

export type LandingCountrytransfersAgentpaymentblockDocumentmanagement = {
  description: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingCountrytransfersConnection = {
  edges: Array<LandingCountrytransfersEdge>;
  pageInfo: LandingPageInfo;
  totalCount: Scalars['Int']['output'];
};

export type LandingCountrytransfersContactpromptblock = {
  text: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingCountrytransfersEdge = {
  cursor: Scalars['String']['output'];
  node: LandingCountrytransfersNode;
};

export type LandingCountrytransfersFaq = {
  questions: Array<LandingCountrytransfersFaqQuestionsItems>;
  title: Scalars['String']['output'];
};

export type LandingCountrytransfersFaqQuestionsItems = {
  text: Scalars['String']['output'];
  title: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type LandingCountrytransfersFlat = {
  FAQ: LandingCountrytransfersFlatFaq;
  InfoBlock: LandingCountrytransfersFlatInfoblock;
  SEO: LandingCountrytransfersFlatSeo;
  agentPaymentBlock: LandingCountrytransfersFlatAgentpaymentblock;
  contactPromptBlock: LandingCountrytransfersFlatContactpromptblock;
  infoDescriptionBlock: LandingCountrytransfersFlatInfodescriptionblock;
  reliableB2BTransfersBlock: LandingCountrytransfersFlatReliableb2btransfersblock;
  whenVedHelpBlock: LandingCountrytransfersFlatWhenvedhelpblock;
  whyVedMasterBlock: LandingCountrytransfersFlatWhyvedmasterblock;
  workProcessBlock: LandingCountrytransfersFlatWorkprocessblock;
};

export type LandingCountrytransfersFlatAgentpaymentblock = {
  agentPlatformScenarios: LandingCountrytransfersFlatAgentpaymentblockAgentplatformscenarios;
  description: Scalars['String']['output'];
  documentManagement: LandingCountrytransfersFlatAgentpaymentblockDocumentmanagement;
  title: Scalars['String']['output'];
};

export type LandingCountrytransfersFlatAgentpaymentblockAgentplatformscenarios = {
  content: Array<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};

export type LandingCountrytransfersFlatAgentpaymentblockDocumentmanagement = {
  description: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingCountrytransfersFlatConnection = {
  edges: Array<LandingCountrytransfersFlatEdge>;
  pageInfo: LandingPageInfo;
  totalCount: Scalars['Int']['output'];
};

export type LandingCountrytransfersFlatContactpromptblock = {
  text: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingCountrytransfersFlatEdge = {
  cursor: Scalars['String']['output'];
  node: LandingCountrytransfersFlat;
};

export type LandingCountrytransfersFlatFaq = {
  questions: Array<LandingCountrytransfersFlatFaqQuestionsItems>;
  title: Scalars['String']['output'];
};

export type LandingCountrytransfersFlatFaqQuestionsItems = {
  text: Scalars['String']['output'];
  title: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type LandingCountrytransfersFlatInfoblock = {
  items: Array<LandingCountrytransfersFlatInfoblockItemsItems>;
};

export type LandingCountrytransfersFlatInfoblockItemsItems = {
  text: Scalars['String']['output'];
};

export type LandingCountrytransfersFlatInfodescriptionblock = {
  content: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingCountrytransfersFlatReliableb2btransfersblock = {
  description: Scalars['String']['output'];
  items: LandingCountrytransfersFlatReliableb2btransfersblockItems;
  title: Scalars['String']['output'];
};

export type LandingCountrytransfersFlatReliableb2btransfersblockItems = {
  title: Scalars['String']['output'];
};

export type LandingCountrytransfersFlatSeo = {
  description: Scalars['String']['output'];
  h1: Scalars['String']['output'];
  h1SubTitle: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingCountrytransfersFlatWhenvedhelpblock = {
  items: Array<LandingCountrytransfersFlatWhenvedhelpblockItemsItems>;
  title: Scalars['String']['output'];
};

export type LandingCountrytransfersFlatWhenvedhelpblockItemsItems = {
  text: Scalars['String']['output'];
};

export type LandingCountrytransfersFlatWhyvedmasterblock = {
  items: Array<LandingCountrytransfersFlatWhyvedmasterblockItemsItems>;
  title: Scalars['String']['output'];
};

export type LandingCountrytransfersFlatWhyvedmasterblockItemsItems = {
  description: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingCountrytransfersFlatWorkprocessblock = {
  items: Array<LandingCountrytransfersFlatWorkprocessblockItemsItems>;
  title: Scalars['String']['output'];
};

export type LandingCountrytransfersFlatWorkprocessblockItemsItems = {
  description: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingCountrytransfersInfoblock = {
  items: Array<LandingCountrytransfersInfoblockItemsItems>;
};

export type LandingCountrytransfersInfoblockItemsItems = {
  text: Scalars['String']['output'];
};

export type LandingCountrytransfersInfodescriptionblock = {
  content: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingCountrytransfersNode = {
  createdAt: Scalars['DateTime']['output'];
  createdId: Scalars['String']['output'];
  data: LandingCountrytransfers;
  id: Scalars['String']['output'];
  json: Scalars['JSON']['output'];
  publishedAt: Scalars['DateTime']['output'];
  updatedAt: Scalars['DateTime']['output'];
  versionId: Scalars['String']['output'];
};

export type LandingCountrytransfersReliableb2btransfersblock = {
  description: Scalars['String']['output'];
  items: LandingCountrytransfersReliableb2btransfersblockItems;
  title: Scalars['String']['output'];
};

export type LandingCountrytransfersReliableb2btransfersblockItems = {
  title: Scalars['String']['output'];
};

export type LandingCountrytransfersSeo = {
  description: Scalars['String']['output'];
  h1: Scalars['String']['output'];
  h1SubTitle: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingCountrytransfersWhenvedhelpblock = {
  items: Array<LandingCountrytransfersWhenvedhelpblockItemsItems>;
  title: Scalars['String']['output'];
};

export type LandingCountrytransfersWhenvedhelpblockItemsItems = {
  text: Scalars['String']['output'];
};

export type LandingCountrytransfersWhyvedmasterblock = {
  items: Array<LandingCountrytransfersWhyvedmasterblockItemsItems>;
  title: Scalars['String']['output'];
};

export type LandingCountrytransfersWhyvedmasterblockItemsItems = {
  description: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingCountrytransfersWorkprocessblock = {
  items: Array<LandingCountrytransfersWorkprocessblockItemsItems>;
  title: Scalars['String']['output'];
};

export type LandingCountrytransfersWorkprocessblockItemsItems = {
  description: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingCountrytransfersesWhereInput = {
  AND?: InputMaybe<Array<LandingCountrytransfersesWhereInput>>;
  NOT?: InputMaybe<Array<LandingCountrytransfersesWhereInput>>;
  OR?: InputMaybe<Array<LandingCountrytransfersesWhereInput>>;
  createdAt?: InputMaybe<LandingDateTimeFilter>;
  createdId?: InputMaybe<LandingStringFilter>;
  data?: InputMaybe<LandingJsonFilter>;
  id?: InputMaybe<LandingStringFilter>;
  publishedAt?: InputMaybe<LandingDateTimeFilter>;
  readonly?: InputMaybe<LandingBoolFilter>;
  updatedAt?: InputMaybe<LandingDateTimeFilter>;
  versionId?: InputMaybe<LandingStringFilter>;
};

export type LandingDateTimeFilter = {
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type LandingFeature = {
  description: Scalars['String']['output'];
  featureId: Scalars['String']['output'];
  file: LandingFeatureFile;
  title: Scalars['String']['output'];
};

export type LandingFeatureConnection = {
  edges: Array<LandingFeatureEdge>;
  pageInfo: LandingPageInfo;
  totalCount: Scalars['Int']['output'];
};

export type LandingFeatureEdge = {
  cursor: Scalars['String']['output'];
  node: LandingFeatureNode;
};

export type LandingFeatureFile = {
  extension: Scalars['String']['output'];
  fileId: Scalars['String']['output'];
  fileName: Scalars['String']['output'];
  hash: Scalars['String']['output'];
  height: Scalars['Float']['output'];
  mimeType: Scalars['String']['output'];
  size: Scalars['Float']['output'];
  status: Scalars['String']['output'];
  url: Scalars['String']['output'];
  width: Scalars['Float']['output'];
};

export type LandingFeatureFlat = {
  description: Scalars['String']['output'];
  featureId: Scalars['String']['output'];
  file: LandingFeatureFlatFile;
  title: Scalars['String']['output'];
};

export type LandingFeatureFlatConnection = {
  edges: Array<LandingFeatureFlatEdge>;
  pageInfo: LandingPageInfo;
  totalCount: Scalars['Int']['output'];
};

export type LandingFeatureFlatEdge = {
  cursor: Scalars['String']['output'];
  node: LandingFeatureFlat;
};

export type LandingFeatureFlatFile = {
  extension: Scalars['String']['output'];
  fileId: Scalars['String']['output'];
  fileName: Scalars['String']['output'];
  hash: Scalars['String']['output'];
  height: Scalars['Float']['output'];
  mimeType: Scalars['String']['output'];
  size: Scalars['Float']['output'];
  status: Scalars['String']['output'];
  url: Scalars['String']['output'];
  width: Scalars['Float']['output'];
};

export type LandingFeatureNode = {
  createdAt: Scalars['DateTime']['output'];
  createdId: Scalars['String']['output'];
  data: LandingFeature;
  id: Scalars['String']['output'];
  json: Scalars['JSON']['output'];
  publishedAt: Scalars['DateTime']['output'];
  updatedAt: Scalars['DateTime']['output'];
  versionId: Scalars['String']['output'];
};

export type LandingFeaturesWhereInput = {
  AND?: InputMaybe<Array<LandingFeaturesWhereInput>>;
  NOT?: InputMaybe<Array<LandingFeaturesWhereInput>>;
  OR?: InputMaybe<Array<LandingFeaturesWhereInput>>;
  createdAt?: InputMaybe<LandingDateTimeFilter>;
  createdId?: InputMaybe<LandingStringFilter>;
  data?: InputMaybe<LandingJsonFilter>;
  id?: InputMaybe<LandingStringFilter>;
  publishedAt?: InputMaybe<LandingDateTimeFilter>;
  readonly?: InputMaybe<LandingBoolFilter>;
  updatedAt?: InputMaybe<LandingDateTimeFilter>;
  versionId?: InputMaybe<LandingStringFilter>;
};

export enum LandingFilterJsonMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export enum LandingFilterStringMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type LandingForeignpayment = {
  FAQ: LandingForeignpaymentFaq;
  SEO: LandingForeignpaymentSeo;
  contactPromptBlock: LandingForeignpaymentContactpromptblock;
  helpPaymentBlock: LandingForeignpaymentHelppaymentblock;
  paymentOptionsBlock: LandingForeignpaymentPaymentoptionsblock;
  paymentOverviewBlock: LandingForeignpaymentPaymentoverviewblock;
  paymentSelectionBlock: LandingForeignpaymentPaymentselectionblock;
  requiredDocumentsBlock: LandingForeignpaymentRequireddocumentsblock;
  solvingProblemsBlock: Array<LandingForeignpaymentSolvingproblemsblockItems>;
  titleBlock: LandingForeignpaymentTitleblock;
  whyVedMasterBlock: LandingForeignpaymentWhyvedmasterblock;
  workProcessBlock: LandingForeignpaymentWorkprocessblock;
};

export type LandingForeignpaymentConnection = {
  edges: Array<LandingForeignpaymentEdge>;
  pageInfo: LandingPageInfo;
  totalCount: Scalars['Int']['output'];
};

export type LandingForeignpaymentContactpromptblock = {
  text: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingForeignpaymentEdge = {
  cursor: Scalars['String']['output'];
  node: LandingForeignpaymentNode;
};

export type LandingForeignpaymentFaq = {
  questions: Array<LandingForeignpaymentFaqQuestionsItems>;
  title: Scalars['String']['output'];
};

export type LandingForeignpaymentFaqQuestionsItems = {
  text: Scalars['String']['output'];
  title: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type LandingForeignpaymentFlat = {
  FAQ: LandingForeignpaymentFlatFaq;
  SEO: LandingForeignpaymentFlatSeo;
  contactPromptBlock: LandingForeignpaymentFlatContactpromptblock;
  helpPaymentBlock: LandingForeignpaymentFlatHelppaymentblock;
  paymentOptionsBlock: LandingForeignpaymentFlatPaymentoptionsblock;
  paymentOverviewBlock: LandingForeignpaymentFlatPaymentoverviewblock;
  paymentSelectionBlock: LandingForeignpaymentFlatPaymentselectionblock;
  requiredDocumentsBlock: LandingForeignpaymentFlatRequireddocumentsblock;
  solvingProblemsBlock: Array<LandingForeignpaymentFlatSolvingproblemsblockItems>;
  titleBlock: LandingForeignpaymentFlatTitleblock;
  whyVedMasterBlock: LandingForeignpaymentFlatWhyvedmasterblock;
  workProcessBlock: LandingForeignpaymentFlatWorkprocessblock;
};

export type LandingForeignpaymentFlatConnection = {
  edges: Array<LandingForeignpaymentFlatEdge>;
  pageInfo: LandingPageInfo;
  totalCount: Scalars['Int']['output'];
};

export type LandingForeignpaymentFlatContactpromptblock = {
  text: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingForeignpaymentFlatEdge = {
  cursor: Scalars['String']['output'];
  node: LandingForeignpaymentFlat;
};

export type LandingForeignpaymentFlatFaq = {
  questions: Array<LandingForeignpaymentFlatFaqQuestionsItems>;
  title: Scalars['String']['output'];
};

export type LandingForeignpaymentFlatFaqQuestionsItems = {
  text: Scalars['String']['output'];
  title: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type LandingForeignpaymentFlatHelppaymentblock = {
  items: Array<LandingForeignpaymentFlatHelppaymentblockItemsItems>;
  title: Scalars['String']['output'];
};

export type LandingForeignpaymentFlatHelppaymentblockItemsItems = {
  text: Scalars['String']['output'];
};

export type LandingForeignpaymentFlatPaymentoptionsblock = {
  content: Array<LandingForeignpaymentFlatPaymentoptionsblockContentItems>;
  description: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingForeignpaymentFlatPaymentoptionsblockContentItems = {
  description: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingForeignpaymentFlatPaymentoverviewblock = {
  content: Scalars['String']['output'];
  description: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingForeignpaymentFlatPaymentselectionblock = {
  items: Array<LandingForeignpaymentFlatPaymentselectionblockItemsItems>;
  subTitle: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingForeignpaymentFlatPaymentselectionblockItemsItems = {
  description: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingForeignpaymentFlatRequireddocumentsblock = {
  content: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingForeignpaymentFlatSeo = {
  description: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingForeignpaymentFlatSolvingproblemsblockItems = {
  content: Scalars['String']['output'];
  country: LandingCountryFlat;
};

export type LandingForeignpaymentFlatTitleblock = {
  description: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingForeignpaymentFlatWhyvedmasterblock = {
  items: Array<LandingForeignpaymentFlatWhyvedmasterblockItemsItems>;
  title: Scalars['String']['output'];
};

export type LandingForeignpaymentFlatWhyvedmasterblockItemsItems = {
  description: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingForeignpaymentFlatWorkprocessblock = {
  items: Array<LandingForeignpaymentFlatWorkprocessblockItemsItems>;
  title: Scalars['String']['output'];
};

export type LandingForeignpaymentFlatWorkprocessblockItemsItems = {
  description: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingForeignpaymentHelppaymentblock = {
  items: Array<LandingForeignpaymentHelppaymentblockItemsItems>;
  title: Scalars['String']['output'];
};

export type LandingForeignpaymentHelppaymentblockItemsItems = {
  text: Scalars['String']['output'];
};

export type LandingForeignpaymentNode = {
  createdAt: Scalars['DateTime']['output'];
  createdId: Scalars['String']['output'];
  data: LandingForeignpayment;
  id: Scalars['String']['output'];
  json: Scalars['JSON']['output'];
  publishedAt: Scalars['DateTime']['output'];
  updatedAt: Scalars['DateTime']['output'];
  versionId: Scalars['String']['output'];
};

export type LandingForeignpaymentPaymentoptionsblock = {
  content: Array<LandingForeignpaymentPaymentoptionsblockContentItems>;
  description: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingForeignpaymentPaymentoptionsblockContentItems = {
  description: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingForeignpaymentPaymentoverviewblock = {
  content: Scalars['String']['output'];
  description: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingForeignpaymentPaymentselectionblock = {
  items: Array<LandingForeignpaymentPaymentselectionblockItemsItems>;
  subTitle: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingForeignpaymentPaymentselectionblockItemsItems = {
  description: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingForeignpaymentRequireddocumentsblock = {
  content: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingForeignpaymentSeo = {
  description: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingForeignpaymentSolvingproblemsblockItems = {
  content: Scalars['String']['output'];
  country: LandingCountryNode;
};

export type LandingForeignpaymentTitleblock = {
  description: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingForeignpaymentWhyvedmasterblock = {
  items: Array<LandingForeignpaymentWhyvedmasterblockItemsItems>;
  title: Scalars['String']['output'];
};

export type LandingForeignpaymentWhyvedmasterblockItemsItems = {
  description: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingForeignpaymentWorkprocessblock = {
  items: Array<LandingForeignpaymentWorkprocessblockItemsItems>;
  title: Scalars['String']['output'];
};

export type LandingForeignpaymentWorkprocessblockItemsItems = {
  description: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingForeignpaymentsWhereInput = {
  AND?: InputMaybe<Array<LandingForeignpaymentsWhereInput>>;
  NOT?: InputMaybe<Array<LandingForeignpaymentsWhereInput>>;
  OR?: InputMaybe<Array<LandingForeignpaymentsWhereInput>>;
  createdAt?: InputMaybe<LandingDateTimeFilter>;
  createdId?: InputMaybe<LandingStringFilter>;
  data?: InputMaybe<LandingJsonFilter>;
  id?: InputMaybe<LandingStringFilter>;
  publishedAt?: InputMaybe<LandingDateTimeFilter>;
  readonly?: InputMaybe<LandingBoolFilter>;
  updatedAt?: InputMaybe<LandingDateTimeFilter>;
  versionId?: InputMaybe<LandingStringFilter>;
};

export type LandingGetArticlecategoriesInput = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<LandingGetArticlecategoriesOrderByInput>>;
  where?: InputMaybe<LandingArticlecategoriesWhereInput>;
};

export enum LandingGetArticlecategoriesOrderByField {
  CreatedAt = 'createdAt',
  Data = 'data',
  Id = 'id',
  PublishedAt = 'publishedAt',
  UpdatedAt = 'updatedAt'
}

export type LandingGetArticlecategoriesOrderByInput = {
  aggregation?: InputMaybe<LandingOrderFieldAggregation>;
  direction: LandingSortOrder;
  field: LandingGetArticlecategoriesOrderByField;
  path?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<LandingOrderFieldType>;
};

export type LandingGetArticlesInput = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<LandingGetArticlesOrderByInput>>;
  where?: InputMaybe<LandingArticlesWhereInput>;
};

export enum LandingGetArticlesOrderByField {
  CreatedAt = 'createdAt',
  Data = 'data',
  Id = 'id',
  PublishedAt = 'publishedAt',
  UpdatedAt = 'updatedAt'
}

export type LandingGetArticlesOrderByInput = {
  aggregation?: InputMaybe<LandingOrderFieldAggregation>;
  direction: LandingSortOrder;
  field: LandingGetArticlesOrderByField;
  path?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<LandingOrderFieldType>;
};

export type LandingGetAuthorsInput = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<LandingGetAuthorsOrderByInput>>;
  where?: InputMaybe<LandingAuthorsWhereInput>;
};

export enum LandingGetAuthorsOrderByField {
  CreatedAt = 'createdAt',
  Data = 'data',
  Id = 'id',
  PublishedAt = 'publishedAt',
  UpdatedAt = 'updatedAt'
}

export type LandingGetAuthorsOrderByInput = {
  aggregation?: InputMaybe<LandingOrderFieldAggregation>;
  direction: LandingSortOrder;
  field: LandingGetAuthorsOrderByField;
  path?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<LandingOrderFieldType>;
};

export type LandingGetCasesInput = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<LandingGetCasesOrderByInput>>;
  where?: InputMaybe<LandingCasesWhereInput>;
};

export enum LandingGetCasesOrderByField {
  CreatedAt = 'createdAt',
  Data = 'data',
  Id = 'id',
  PublishedAt = 'publishedAt',
  UpdatedAt = 'updatedAt'
}

export type LandingGetCasesOrderByInput = {
  aggregation?: InputMaybe<LandingOrderFieldAggregation>;
  direction: LandingSortOrder;
  field: LandingGetCasesOrderByField;
  path?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<LandingOrderFieldType>;
};

export type LandingGetCodesInput = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<LandingGetCodesOrderByInput>>;
  where?: InputMaybe<LandingCodesWhereInput>;
};

export enum LandingGetCodesOrderByField {
  CreatedAt = 'createdAt',
  Data = 'data',
  Id = 'id',
  PublishedAt = 'publishedAt',
  UpdatedAt = 'updatedAt'
}

export type LandingGetCodesOrderByInput = {
  aggregation?: InputMaybe<LandingOrderFieldAggregation>;
  direction: LandingSortOrder;
  field: LandingGetCodesOrderByField;
  path?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<LandingOrderFieldType>;
};

export type LandingGetConstantsInput = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<LandingGetConstantsOrderByInput>>;
  where?: InputMaybe<LandingConstantsWhereInput>;
};

export enum LandingGetConstantsOrderByField {
  CreatedAt = 'createdAt',
  Data = 'data',
  Id = 'id',
  PublishedAt = 'publishedAt',
  UpdatedAt = 'updatedAt'
}

export type LandingGetConstantsOrderByInput = {
  aggregation?: InputMaybe<LandingOrderFieldAggregation>;
  direction: LandingSortOrder;
  field: LandingGetConstantsOrderByField;
  path?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<LandingOrderFieldType>;
};

export type LandingGetCountriesInput = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<LandingGetCountriesOrderByInput>>;
  where?: InputMaybe<LandingCountriesWhereInput>;
};

export enum LandingGetCountriesOrderByField {
  CreatedAt = 'createdAt',
  Data = 'data',
  Id = 'id',
  PublishedAt = 'publishedAt',
  UpdatedAt = 'updatedAt'
}

export type LandingGetCountriesOrderByInput = {
  aggregation?: InputMaybe<LandingOrderFieldAggregation>;
  direction: LandingSortOrder;
  field: LandingGetCountriesOrderByField;
  path?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<LandingOrderFieldType>;
};

export type LandingGetCountrytransfersesInput = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<LandingGetCountrytransfersesOrderByInput>>;
  where?: InputMaybe<LandingCountrytransfersesWhereInput>;
};

export enum LandingGetCountrytransfersesOrderByField {
  CreatedAt = 'createdAt',
  Data = 'data',
  Id = 'id',
  PublishedAt = 'publishedAt',
  UpdatedAt = 'updatedAt'
}

export type LandingGetCountrytransfersesOrderByInput = {
  aggregation?: InputMaybe<LandingOrderFieldAggregation>;
  direction: LandingSortOrder;
  field: LandingGetCountrytransfersesOrderByField;
  path?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<LandingOrderFieldType>;
};

export type LandingGetFeaturesInput = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<LandingGetFeaturesOrderByInput>>;
  where?: InputMaybe<LandingFeaturesWhereInput>;
};

export enum LandingGetFeaturesOrderByField {
  CreatedAt = 'createdAt',
  Data = 'data',
  Id = 'id',
  PublishedAt = 'publishedAt',
  UpdatedAt = 'updatedAt'
}

export type LandingGetFeaturesOrderByInput = {
  aggregation?: InputMaybe<LandingOrderFieldAggregation>;
  direction: LandingSortOrder;
  field: LandingGetFeaturesOrderByField;
  path?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<LandingOrderFieldType>;
};

export type LandingGetForeignpaymentsInput = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<LandingGetForeignpaymentsOrderByInput>>;
  where?: InputMaybe<LandingForeignpaymentsWhereInput>;
};

export enum LandingGetForeignpaymentsOrderByField {
  CreatedAt = 'createdAt',
  Data = 'data',
  Id = 'id',
  PublishedAt = 'publishedAt',
  UpdatedAt = 'updatedAt'
}

export type LandingGetForeignpaymentsOrderByInput = {
  aggregation?: InputMaybe<LandingOrderFieldAggregation>;
  direction: LandingSortOrder;
  field: LandingGetForeignpaymentsOrderByField;
  path?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<LandingOrderFieldType>;
};

export type LandingGetGlossariesInput = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<LandingGetGlossariesOrderByInput>>;
  where?: InputMaybe<LandingGlossariesWhereInput>;
};

export enum LandingGetGlossariesOrderByField {
  CreatedAt = 'createdAt',
  Data = 'data',
  Id = 'id',
  PublishedAt = 'publishedAt',
  UpdatedAt = 'updatedAt'
}

export type LandingGetGlossariesOrderByInput = {
  aggregation?: InputMaybe<LandingOrderFieldAggregation>;
  direction: LandingSortOrder;
  field: LandingGetGlossariesOrderByField;
  path?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<LandingOrderFieldType>;
};

export type LandingGetGlossarytagsInput = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<LandingGetGlossarytagsOrderByInput>>;
  where?: InputMaybe<LandingGlossarytagsWhereInput>;
};

export enum LandingGetGlossarytagsOrderByField {
  CreatedAt = 'createdAt',
  Data = 'data',
  Id = 'id',
  PublishedAt = 'publishedAt',
  UpdatedAt = 'updatedAt'
}

export type LandingGetGlossarytagsOrderByInput = {
  aggregation?: InputMaybe<LandingOrderFieldAggregation>;
  direction: LandingSortOrder;
  field: LandingGetGlossarytagsOrderByField;
  path?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<LandingOrderFieldType>;
};

export type LandingGetGrossarytermsInput = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<LandingGetGrossarytermsOrderByInput>>;
  where?: InputMaybe<LandingGrossarytermsWhereInput>;
};

export enum LandingGetGrossarytermsOrderByField {
  CreatedAt = 'createdAt',
  Data = 'data',
  Id = 'id',
  PublishedAt = 'publishedAt',
  UpdatedAt = 'updatedAt'
}

export type LandingGetGrossarytermsOrderByInput = {
  aggregation?: InputMaybe<LandingOrderFieldAggregation>;
  direction: LandingSortOrder;
  field: LandingGetGrossarytermsOrderByField;
  path?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<LandingOrderFieldType>;
};

export type LandingGetImportpaymentpagesInput = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<LandingGetImportpaymentpagesOrderByInput>>;
  where?: InputMaybe<LandingImportpaymentpagesWhereInput>;
};

export enum LandingGetImportpaymentpagesOrderByField {
  CreatedAt = 'createdAt',
  Data = 'data',
  Id = 'id',
  PublishedAt = 'publishedAt',
  UpdatedAt = 'updatedAt'
}

export type LandingGetImportpaymentpagesOrderByInput = {
  aggregation?: InputMaybe<LandingOrderFieldAggregation>;
  direction: LandingSortOrder;
  field: LandingGetImportpaymentpagesOrderByField;
  path?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<LandingOrderFieldType>;
};

export type LandingGetInvoicepagedeprectedsInput = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<LandingGetInvoicepagedeprectedsOrderByInput>>;
  where?: InputMaybe<LandingInvoicepagedeprectedsWhereInput>;
};

export enum LandingGetInvoicepagedeprectedsOrderByField {
  CreatedAt = 'createdAt',
  Data = 'data',
  Id = 'id',
  PublishedAt = 'publishedAt',
  UpdatedAt = 'updatedAt'
}

export type LandingGetInvoicepagedeprectedsOrderByInput = {
  aggregation?: InputMaybe<LandingOrderFieldAggregation>;
  direction: LandingSortOrder;
  field: LandingGetInvoicepagedeprectedsOrderByField;
  path?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<LandingOrderFieldType>;
};

export type LandingGetInvoicepagesInput = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<LandingGetInvoicepagesOrderByInput>>;
  where?: InputMaybe<LandingInvoicepagesWhereInput>;
};

export enum LandingGetInvoicepagesOrderByField {
  CreatedAt = 'createdAt',
  Data = 'data',
  Id = 'id',
  PublishedAt = 'publishedAt',
  UpdatedAt = 'updatedAt'
}

export type LandingGetInvoicepagesOrderByInput = {
  aggregation?: InputMaybe<LandingOrderFieldAggregation>;
  direction: LandingSortOrder;
  field: LandingGetInvoicepagesOrderByField;
  path?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<LandingOrderFieldType>;
};

export type LandingGetInvoicesInput = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<LandingGetInvoicesOrderByInput>>;
  where?: InputMaybe<LandingInvoicesWhereInput>;
};

export enum LandingGetInvoicesOrderByField {
  CreatedAt = 'createdAt',
  Data = 'data',
  Id = 'id',
  PublishedAt = 'publishedAt',
  UpdatedAt = 'updatedAt'
}

export type LandingGetInvoicesOrderByInput = {
  aggregation?: InputMaybe<LandingOrderFieldAggregation>;
  direction: LandingSortOrder;
  field: LandingGetInvoicesOrderByField;
  path?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<LandingOrderFieldType>;
};

export type LandingGetMainsInput = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<LandingGetMainsOrderByInput>>;
  where?: InputMaybe<LandingMainsWhereInput>;
};

export enum LandingGetMainsOrderByField {
  CreatedAt = 'createdAt',
  Data = 'data',
  Id = 'id',
  PublishedAt = 'publishedAt',
  UpdatedAt = 'updatedAt'
}

export type LandingGetMainsOrderByInput = {
  aggregation?: InputMaybe<LandingOrderFieldAggregation>;
  direction: LandingSortOrder;
  field: LandingGetMainsOrderByField;
  path?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<LandingOrderFieldType>;
};

export type LandingGetMentionsInput = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<LandingGetMentionsOrderByInput>>;
  where?: InputMaybe<LandingMentionsWhereInput>;
};

export enum LandingGetMentionsOrderByField {
  CreatedAt = 'createdAt',
  Data = 'data',
  Id = 'id',
  PublishedAt = 'publishedAt',
  UpdatedAt = 'updatedAt'
}

export type LandingGetMentionsOrderByInput = {
  aggregation?: InputMaybe<LandingOrderFieldAggregation>;
  direction: LandingSortOrder;
  field: LandingGetMentionsOrderByField;
  path?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<LandingOrderFieldType>;
};

export type LandingGetPaymentsInput = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<LandingGetPaymentsOrderByInput>>;
  where?: InputMaybe<LandingPaymentsWhereInput>;
};

export enum LandingGetPaymentsOrderByField {
  CreatedAt = 'createdAt',
  Data = 'data',
  Id = 'id',
  PublishedAt = 'publishedAt',
  UpdatedAt = 'updatedAt'
}

export type LandingGetPaymentsOrderByInput = {
  aggregation?: InputMaybe<LandingOrderFieldAggregation>;
  direction: LandingSortOrder;
  field: LandingGetPaymentsOrderByField;
  path?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<LandingOrderFieldType>;
};

export type LandingGetReturnforeignrevenuesInput = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<LandingGetReturnforeignrevenuesOrderByInput>>;
  where?: InputMaybe<LandingReturnforeignrevenuesWhereInput>;
};

export enum LandingGetReturnforeignrevenuesOrderByField {
  CreatedAt = 'createdAt',
  Data = 'data',
  Id = 'id',
  PublishedAt = 'publishedAt',
  UpdatedAt = 'updatedAt'
}

export type LandingGetReturnforeignrevenuesOrderByInput = {
  aggregation?: InputMaybe<LandingOrderFieldAggregation>;
  direction: LandingSortOrder;
  field: LandingGetReturnforeignrevenuesOrderByField;
  path?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<LandingOrderFieldType>;
};

export type LandingGetTransportationpaymentsInput = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<LandingGetTransportationpaymentsOrderByInput>>;
  where?: InputMaybe<LandingTransportationpaymentsWhereInput>;
};

export enum LandingGetTransportationpaymentsOrderByField {
  CreatedAt = 'createdAt',
  Data = 'data',
  Id = 'id',
  PublishedAt = 'publishedAt',
  UpdatedAt = 'updatedAt'
}

export type LandingGetTransportationpaymentsOrderByInput = {
  aggregation?: InputMaybe<LandingOrderFieldAggregation>;
  direction: LandingSortOrder;
  field: LandingGetTransportationpaymentsOrderByField;
  path?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<LandingOrderFieldType>;
};

export type LandingGetmainsInput = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<LandingGetmainsOrderByInput>>;
  where?: InputMaybe<LandingmainsWhereInput>;
};

export enum LandingGetmainsOrderByField {
  CreatedAt = 'createdAt',
  Data = 'data',
  Id = 'id',
  PublishedAt = 'publishedAt',
  UpdatedAt = 'updatedAt'
}

export type LandingGetmainsOrderByInput = {
  aggregation?: InputMaybe<LandingOrderFieldAggregation>;
  direction: LandingSortOrder;
  field: LandingGetmainsOrderByField;
  path?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<LandingOrderFieldType>;
};

export type LandingGlossariesWhereInput = {
  AND?: InputMaybe<Array<LandingGlossariesWhereInput>>;
  NOT?: InputMaybe<Array<LandingGlossariesWhereInput>>;
  OR?: InputMaybe<Array<LandingGlossariesWhereInput>>;
  createdAt?: InputMaybe<LandingDateTimeFilter>;
  createdId?: InputMaybe<LandingStringFilter>;
  data?: InputMaybe<LandingJsonFilter>;
  id?: InputMaybe<LandingStringFilter>;
  publishedAt?: InputMaybe<LandingDateTimeFilter>;
  readonly?: InputMaybe<LandingBoolFilter>;
  updatedAt?: InputMaybe<LandingDateTimeFilter>;
  versionId?: InputMaybe<LandingStringFilter>;
};

export type LandingGlossary = {
  SEO: LandingGlossarySeo;
};

export type LandingGlossaryConnection = {
  edges: Array<LandingGlossaryEdge>;
  pageInfo: LandingPageInfo;
  totalCount: Scalars['Int']['output'];
};

export type LandingGlossaryEdge = {
  cursor: Scalars['String']['output'];
  node: LandingGlossaryNode;
};

export type LandingGlossaryFlat = {
  SEO: LandingGlossaryFlatSeo;
};

export type LandingGlossaryFlatConnection = {
  edges: Array<LandingGlossaryFlatEdge>;
  pageInfo: LandingPageInfo;
  totalCount: Scalars['Int']['output'];
};

export type LandingGlossaryFlatEdge = {
  cursor: Scalars['String']['output'];
  node: LandingGlossaryFlat;
};

export type LandingGlossaryFlatSeo = {
  description: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingGlossaryNode = {
  createdAt: Scalars['DateTime']['output'];
  createdId: Scalars['String']['output'];
  data: LandingGlossary;
  id: Scalars['String']['output'];
  json: Scalars['JSON']['output'];
  publishedAt: Scalars['DateTime']['output'];
  updatedAt: Scalars['DateTime']['output'];
  versionId: Scalars['String']['output'];
};

export type LandingGlossarySeo = {
  description: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingGlossarytag = {
  name: Scalars['String']['output'];
};

export type LandingGlossarytagConnection = {
  edges: Array<LandingGlossarytagEdge>;
  pageInfo: LandingPageInfo;
  totalCount: Scalars['Int']['output'];
};

export type LandingGlossarytagEdge = {
  cursor: Scalars['String']['output'];
  node: LandingGlossarytagNode;
};

export type LandingGlossarytagFlat = {
  name: Scalars['String']['output'];
};

export type LandingGlossarytagFlatConnection = {
  edges: Array<LandingGlossarytagFlatEdge>;
  pageInfo: LandingPageInfo;
  totalCount: Scalars['Int']['output'];
};

export type LandingGlossarytagFlatEdge = {
  cursor: Scalars['String']['output'];
  node: LandingGlossarytagFlat;
};

export type LandingGlossarytagNode = {
  createdAt: Scalars['DateTime']['output'];
  createdId: Scalars['String']['output'];
  data: LandingGlossarytag;
  id: Scalars['String']['output'];
  json: Scalars['JSON']['output'];
  publishedAt: Scalars['DateTime']['output'];
  updatedAt: Scalars['DateTime']['output'];
  versionId: Scalars['String']['output'];
};

export type LandingGlossarytagsWhereInput = {
  AND?: InputMaybe<Array<LandingGlossarytagsWhereInput>>;
  NOT?: InputMaybe<Array<LandingGlossarytagsWhereInput>>;
  OR?: InputMaybe<Array<LandingGlossarytagsWhereInput>>;
  createdAt?: InputMaybe<LandingDateTimeFilter>;
  createdId?: InputMaybe<LandingStringFilter>;
  data?: InputMaybe<LandingJsonFilter>;
  id?: InputMaybe<LandingStringFilter>;
  publishedAt?: InputMaybe<LandingDateTimeFilter>;
  readonly?: InputMaybe<LandingBoolFilter>;
  updatedAt?: InputMaybe<LandingDateTimeFilter>;
  versionId?: InputMaybe<LandingStringFilter>;
};

export type LandingGrossaryterm = {
  SEO: LandingGrossarytermSeo;
  content: Scalars['String']['output'];
  description: Scalars['String']['output'];
  name: Scalars['String']['output'];
  publishedAt: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  tags: Array<LandingGlossarytagNode>;
  updatedAt: Scalars['String']['output'];
  visible: Scalars['Boolean']['output'];
};

export type LandingGrossarytermConnection = {
  edges: Array<LandingGrossarytermEdge>;
  pageInfo: LandingPageInfo;
  totalCount: Scalars['Int']['output'];
};

export type LandingGrossarytermEdge = {
  cursor: Scalars['String']['output'];
  node: LandingGrossarytermNode;
};

export type LandingGrossarytermFlat = {
  SEO: LandingGrossarytermFlatSeo;
  content: Scalars['String']['output'];
  description: Scalars['String']['output'];
  name: Scalars['String']['output'];
  publishedAt: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  tags: Array<LandingGlossarytagFlat>;
  updatedAt: Scalars['String']['output'];
  visible: Scalars['Boolean']['output'];
};

export type LandingGrossarytermFlatConnection = {
  edges: Array<LandingGrossarytermFlatEdge>;
  pageInfo: LandingPageInfo;
  totalCount: Scalars['Int']['output'];
};

export type LandingGrossarytermFlatEdge = {
  cursor: Scalars['String']['output'];
  node: LandingGrossarytermFlat;
};

export type LandingGrossarytermFlatSeo = {
  description: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingGrossarytermNode = {
  createdAt: Scalars['DateTime']['output'];
  createdId: Scalars['String']['output'];
  data: LandingGrossaryterm;
  id: Scalars['String']['output'];
  json: Scalars['JSON']['output'];
  publishedAt: Scalars['DateTime']['output'];
  updatedAt: Scalars['DateTime']['output'];
  versionId: Scalars['String']['output'];
};

export type LandingGrossarytermSeo = {
  description: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingGrossarytermsWhereInput = {
  AND?: InputMaybe<Array<LandingGrossarytermsWhereInput>>;
  NOT?: InputMaybe<Array<LandingGrossarytermsWhereInput>>;
  OR?: InputMaybe<Array<LandingGrossarytermsWhereInput>>;
  createdAt?: InputMaybe<LandingDateTimeFilter>;
  createdId?: InputMaybe<LandingStringFilter>;
  data?: InputMaybe<LandingJsonFilter>;
  id?: InputMaybe<LandingStringFilter>;
  publishedAt?: InputMaybe<LandingDateTimeFilter>;
  readonly?: InputMaybe<LandingBoolFilter>;
  updatedAt?: InputMaybe<LandingDateTimeFilter>;
  versionId?: InputMaybe<LandingStringFilter>;
};

export type LandingImportpaymentpage = {
  SEO: LandingImportpaymentpageSeo;
  descriptionBlock: LandingImportpaymentpageDescriptionblock;
  helpPaymentBlock: LandingImportpaymentpageHelppaymentblock;
  importPaymentReqBlock: LandingImportpaymentpageImportpaymentreqblock;
  infoBlock: LandingImportpaymentpageInfoblock;
  infoDescriptionBlock: LandingImportpaymentpageInfodescriptionblock;
  questionBlock: LandingImportpaymentpageQuestionblock;
  solvingProblemsBlock: LandingImportpaymentpageSolvingproblemsblock;
  titleBlock: LandingImportpaymentpageTitleblock;
  whenVedHelpBlock: LandingImportpaymentpageWhenvedhelpblock;
  whyVedBlock: LandingImportpaymentpageWhyvedblock;
  workingStepsBlock: LandingImportpaymentpageWorkingstepsblock;
};

export type LandingImportpaymentpageConnection = {
  edges: Array<LandingImportpaymentpageEdge>;
  pageInfo: LandingPageInfo;
  totalCount: Scalars['Int']['output'];
};

export type LandingImportpaymentpageDescriptionblock = {
  mainSection: LandingImportpaymentpageDescriptionblockMainsection;
  titleSection: LandingImportpaymentpageDescriptionblockTitlesection;
};

export type LandingImportpaymentpageDescriptionblockMainsection = {
  content: Scalars['String']['output'];
};

export type LandingImportpaymentpageDescriptionblockTitlesection = {
  description: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingImportpaymentpageEdge = {
  cursor: Scalars['String']['output'];
  node: LandingImportpaymentpageNode;
};

export type LandingImportpaymentpageFlat = {
  SEO: LandingImportpaymentpageFlatSeo;
  descriptionBlock: LandingImportpaymentpageFlatDescriptionblock;
  helpPaymentBlock: LandingImportpaymentpageFlatHelppaymentblock;
  importPaymentReqBlock: LandingImportpaymentpageFlatImportpaymentreqblock;
  infoBlock: LandingImportpaymentpageFlatInfoblock;
  infoDescriptionBlock: LandingImportpaymentpageFlatInfodescriptionblock;
  questionBlock: LandingImportpaymentpageFlatQuestionblock;
  solvingProblemsBlock: LandingImportpaymentpageFlatSolvingproblemsblock;
  titleBlock: LandingImportpaymentpageFlatTitleblock;
  whenVedHelpBlock: LandingImportpaymentpageFlatWhenvedhelpblock;
  whyVedBlock: LandingImportpaymentpageFlatWhyvedblock;
  workingStepsBlock: LandingImportpaymentpageFlatWorkingstepsblock;
};

export type LandingImportpaymentpageFlatConnection = {
  edges: Array<LandingImportpaymentpageFlatEdge>;
  pageInfo: LandingPageInfo;
  totalCount: Scalars['Int']['output'];
};

export type LandingImportpaymentpageFlatDescriptionblock = {
  mainSection: LandingImportpaymentpageFlatDescriptionblockMainsection;
  titleSection: LandingImportpaymentpageFlatDescriptionblockTitlesection;
};

export type LandingImportpaymentpageFlatDescriptionblockMainsection = {
  content: Scalars['String']['output'];
};

export type LandingImportpaymentpageFlatDescriptionblockTitlesection = {
  description: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingImportpaymentpageFlatEdge = {
  cursor: Scalars['String']['output'];
  node: LandingImportpaymentpageFlat;
};

export type LandingImportpaymentpageFlatHelppaymentblock = {
  content: Array<LandingImportpaymentpageFlatHelppaymentblockContentItems>;
  title: Scalars['String']['output'];
};

export type LandingImportpaymentpageFlatHelppaymentblockContentItems = {
  title: Scalars['String']['output'];
};

export type LandingImportpaymentpageFlatImportpaymentreqblock = {
  content: LandingImportpaymentpageFlatImportpaymentreqblockContent;
  description: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingImportpaymentpageFlatImportpaymentreqblockContent = {
  items: Array<LandingImportpaymentpageFlatImportpaymentreqblockContentItemsItems>;
};

export type LandingImportpaymentpageFlatImportpaymentreqblockContentItemsItems = {
  title: Scalars['String']['output'];
};

export type LandingImportpaymentpageFlatInfoblock = {
  content: Array<LandingImportpaymentpageFlatInfoblockContentItems>;
};

export type LandingImportpaymentpageFlatInfoblockContentItems = {
  title: Scalars['String']['output'];
};

export type LandingImportpaymentpageFlatInfodescriptionblock = {
  content: LandingImportpaymentpageFlatInfodescriptionblockContent;
  description: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingImportpaymentpageFlatInfodescriptionblockContent = {
  infoBlocks: Array<LandingImportpaymentpageFlatInfodescriptionblockContentInfoblocksItems>;
};

export type LandingImportpaymentpageFlatInfodescriptionblockContentInfoblocksItems = {
  content: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingImportpaymentpageFlatQuestionblock = {
  questions: Array<LandingImportpaymentpageFlatQuestionblockQuestionsItems>;
  title: Scalars['String']['output'];
};

export type LandingImportpaymentpageFlatQuestionblockQuestionsItems = {
  description: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingImportpaymentpageFlatSeo = {
  description: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingImportpaymentpageFlatSolvingproblemsblock = {
  content: LandingImportpaymentpageFlatSolvingproblemsblockContent;
  title: Scalars['String']['output'];
};

export type LandingImportpaymentpageFlatSolvingproblemsblockContent = {
  solvingProblemsItems: Array<LandingImportpaymentpageFlatSolvingproblemsblockContentSolvingproblemsitemsItems>;
};

export type LandingImportpaymentpageFlatSolvingproblemsblockContentSolvingproblemsitemsItems = {
  content: Scalars['String']['output'];
  country: LandingCountryFlat;
};

export type LandingImportpaymentpageFlatTitleblock = {
  description: Scalars['String']['output'];
  image: LandingImportpaymentpageFlatTitleblockImage;
  title: Scalars['String']['output'];
};

export type LandingImportpaymentpageFlatTitleblockImage = {
  extension: Scalars['String']['output'];
  fileId: Scalars['String']['output'];
  fileName: Scalars['String']['output'];
  hash: Scalars['String']['output'];
  height: Scalars['Float']['output'];
  mimeType: Scalars['String']['output'];
  size: Scalars['Float']['output'];
  status: Scalars['String']['output'];
  url: Scalars['String']['output'];
  width: Scalars['Float']['output'];
};

export type LandingImportpaymentpageFlatWhenvedhelpblock = {
  content: LandingImportpaymentpageFlatWhenvedhelpblockContent;
  title: Scalars['String']['output'];
};

export type LandingImportpaymentpageFlatWhenvedhelpblockContent = {
  items: Array<LandingImportpaymentpageFlatWhenvedhelpblockContentItemsItems>;
};

export type LandingImportpaymentpageFlatWhenvedhelpblockContentItemsItems = {
  title: Scalars['String']['output'];
};

export type LandingImportpaymentpageFlatWhyvedblock = {
  content: LandingImportpaymentpageFlatWhyvedblockContent;
  title: Scalars['String']['output'];
};

export type LandingImportpaymentpageFlatWhyvedblockContent = {
  items: Array<LandingImportpaymentpageFlatWhyvedblockContentItemsItems>;
};

export type LandingImportpaymentpageFlatWhyvedblockContentItemsItems = {
  description: Scalars['String']['output'];
  icon: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingImportpaymentpageFlatWorkingstepsblock = {
  steps: Array<LandingImportpaymentpageFlatWorkingstepsblockStepsItems>;
};

export type LandingImportpaymentpageFlatWorkingstepsblockStepsItems = {
  description: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingImportpaymentpageHelppaymentblock = {
  content: Array<LandingImportpaymentpageHelppaymentblockContentItems>;
  title: Scalars['String']['output'];
};

export type LandingImportpaymentpageHelppaymentblockContentItems = {
  title: Scalars['String']['output'];
};

export type LandingImportpaymentpageImportpaymentreqblock = {
  content: LandingImportpaymentpageImportpaymentreqblockContent;
  description: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingImportpaymentpageImportpaymentreqblockContent = {
  items: Array<LandingImportpaymentpageImportpaymentreqblockContentItemsItems>;
};

export type LandingImportpaymentpageImportpaymentreqblockContentItemsItems = {
  title: Scalars['String']['output'];
};

export type LandingImportpaymentpageInfoblock = {
  content: Array<LandingImportpaymentpageInfoblockContentItems>;
};

export type LandingImportpaymentpageInfoblockContentItems = {
  title: Scalars['String']['output'];
};

export type LandingImportpaymentpageInfodescriptionblock = {
  content: LandingImportpaymentpageInfodescriptionblockContent;
  description: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingImportpaymentpageInfodescriptionblockContent = {
  infoBlocks: Array<LandingImportpaymentpageInfodescriptionblockContentInfoblocksItems>;
};

export type LandingImportpaymentpageInfodescriptionblockContentInfoblocksItems = {
  content: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingImportpaymentpageNode = {
  createdAt: Scalars['DateTime']['output'];
  createdId: Scalars['String']['output'];
  data: LandingImportpaymentpage;
  id: Scalars['String']['output'];
  json: Scalars['JSON']['output'];
  publishedAt: Scalars['DateTime']['output'];
  updatedAt: Scalars['DateTime']['output'];
  versionId: Scalars['String']['output'];
};

export type LandingImportpaymentpageQuestionblock = {
  questions: Array<LandingImportpaymentpageQuestionblockQuestionsItems>;
  title: Scalars['String']['output'];
};

export type LandingImportpaymentpageQuestionblockQuestionsItems = {
  description: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingImportpaymentpageSeo = {
  description: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingImportpaymentpageSolvingproblemsblock = {
  content: LandingImportpaymentpageSolvingproblemsblockContent;
  title: Scalars['String']['output'];
};

export type LandingImportpaymentpageSolvingproblemsblockContent = {
  solvingProblemsItems: Array<LandingImportpaymentpageSolvingproblemsblockContentSolvingproblemsitemsItems>;
};

export type LandingImportpaymentpageSolvingproblemsblockContentSolvingproblemsitemsItems = {
  content: Scalars['String']['output'];
  country: LandingCountryNode;
};

export type LandingImportpaymentpageTitleblock = {
  description: Scalars['String']['output'];
  image: LandingImportpaymentpageTitleblockImage;
  title: Scalars['String']['output'];
};

export type LandingImportpaymentpageTitleblockImage = {
  extension: Scalars['String']['output'];
  fileId: Scalars['String']['output'];
  fileName: Scalars['String']['output'];
  hash: Scalars['String']['output'];
  height: Scalars['Float']['output'];
  mimeType: Scalars['String']['output'];
  size: Scalars['Float']['output'];
  status: Scalars['String']['output'];
  url: Scalars['String']['output'];
  width: Scalars['Float']['output'];
};

export type LandingImportpaymentpageWhenvedhelpblock = {
  content: LandingImportpaymentpageWhenvedhelpblockContent;
  title: Scalars['String']['output'];
};

export type LandingImportpaymentpageWhenvedhelpblockContent = {
  items: Array<LandingImportpaymentpageWhenvedhelpblockContentItemsItems>;
};

export type LandingImportpaymentpageWhenvedhelpblockContentItemsItems = {
  title: Scalars['String']['output'];
};

export type LandingImportpaymentpageWhyvedblock = {
  content: LandingImportpaymentpageWhyvedblockContent;
  title: Scalars['String']['output'];
};

export type LandingImportpaymentpageWhyvedblockContent = {
  items: Array<LandingImportpaymentpageWhyvedblockContentItemsItems>;
};

export type LandingImportpaymentpageWhyvedblockContentItemsItems = {
  description: Scalars['String']['output'];
  icon: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingImportpaymentpageWorkingstepsblock = {
  steps: Array<LandingImportpaymentpageWorkingstepsblockStepsItems>;
};

export type LandingImportpaymentpageWorkingstepsblockStepsItems = {
  description: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingImportpaymentpagesWhereInput = {
  AND?: InputMaybe<Array<LandingImportpaymentpagesWhereInput>>;
  NOT?: InputMaybe<Array<LandingImportpaymentpagesWhereInput>>;
  OR?: InputMaybe<Array<LandingImportpaymentpagesWhereInput>>;
  createdAt?: InputMaybe<LandingDateTimeFilter>;
  createdId?: InputMaybe<LandingStringFilter>;
  data?: InputMaybe<LandingJsonFilter>;
  id?: InputMaybe<LandingStringFilter>;
  publishedAt?: InputMaybe<LandingDateTimeFilter>;
  readonly?: InputMaybe<LandingBoolFilter>;
  updatedAt?: InputMaybe<LandingDateTimeFilter>;
  versionId?: InputMaybe<LandingStringFilter>;
};

export type LandingInvoice = {
  SEO: LandingInvoiceSeo;
  country: LandingCountryNode;
  description: Scalars['String']['output'];
  help: LandingInvoiceHelp;
  infoBlock: Array<Scalars['String']['output']>;
  infoDescription: LandingInvoiceInfodescription;
  payment: LandingInvoicePayment;
  paymentProcedure: LandingInvoicePaymentprocedure;
  questions: Array<LandingInvoiceQuestionsItems>;
  questionsInfo: Scalars['String']['output'];
  registration: LandingInvoiceRegistration;
  title: Scalars['String']['output'];
  userInputFields: LandingInvoiceUserinputfields;
};

export type LandingInvoiceConnection = {
  edges: Array<LandingInvoiceEdge>;
  pageInfo: LandingPageInfo;
  totalCount: Scalars['Int']['output'];
};

export type LandingInvoiceEdge = {
  cursor: Scalars['String']['output'];
  node: LandingInvoiceNode;
};

export type LandingInvoiceFlat = {
  SEO: LandingInvoiceFlatSeo;
  country: LandingCountryFlat;
  description: Scalars['String']['output'];
  help: LandingInvoiceFlatHelp;
  infoBlock: Array<Scalars['String']['output']>;
  infoDescription: LandingInvoiceFlatInfodescription;
  payment: LandingInvoiceFlatPayment;
  paymentProcedure: LandingInvoiceFlatPaymentprocedure;
  questions: Array<LandingInvoiceFlatQuestionsItems>;
  questionsInfo: Scalars['String']['output'];
  registration: LandingInvoiceFlatRegistration;
  title: Scalars['String']['output'];
  userInputFields: LandingInvoiceFlatUserinputfields;
};

export type LandingInvoiceFlatConnection = {
  edges: Array<LandingInvoiceFlatEdge>;
  pageInfo: LandingPageInfo;
  totalCount: Scalars['Int']['output'];
};

export type LandingInvoiceFlatEdge = {
  cursor: Scalars['String']['output'];
  node: LandingInvoiceFlat;
};

export type LandingInvoiceFlatHelp = {
  text: Scalars['String']['output'];
  texts: Array<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};

export type LandingInvoiceFlatInfodescription = {
  content: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingInvoiceFlatPayment = {
  description: Scalars['String']['output'];
  texts: Array<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  titleTexts: Array<Scalars['String']['output']>;
};

export type LandingInvoiceFlatPaymentprocedure = {
  texts: Array<Scalars['String']['output']>;
};

export type LandingInvoiceFlatQuestionsItems = {
  text: Scalars['String']['output'];
  title: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type LandingInvoiceFlatRegistration = {
  title: Scalars['String']['output'];
};

export type LandingInvoiceFlatSeo = {
  description: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingInvoiceFlatUserinputfields = {
  text: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingInvoiceHelp = {
  text: Scalars['String']['output'];
  texts: Array<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};

export type LandingInvoiceInfodescription = {
  content: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingInvoiceNode = {
  createdAt: Scalars['DateTime']['output'];
  createdId: Scalars['String']['output'];
  data: LandingInvoice;
  id: Scalars['String']['output'];
  json: Scalars['JSON']['output'];
  publishedAt: Scalars['DateTime']['output'];
  updatedAt: Scalars['DateTime']['output'];
  versionId: Scalars['String']['output'];
};

export type LandingInvoicePayment = {
  description: Scalars['String']['output'];
  texts: Array<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  titleTexts: Array<Scalars['String']['output']>;
};

export type LandingInvoicePaymentprocedure = {
  texts: Array<Scalars['String']['output']>;
};

export type LandingInvoiceQuestionsItems = {
  text: Scalars['String']['output'];
  title: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type LandingInvoiceRegistration = {
  title: Scalars['String']['output'];
};

export type LandingInvoiceSeo = {
  description: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingInvoiceUserinputfields = {
  text: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingInvoicepage = {
  ChoosingCountryBlock: LandingInvoicepageChoosingcountryblock;
  SEO: LandingInvoicepageSeo;
  helpPaymentBlock: LandingInvoicepageHelppaymentblock;
  infoBlock: LandingInvoicepageInfoblock;
  infoDescriptionBlock: LandingInvoicepageInfodescriptionblock;
  invoiceFormBlock: LandingInvoicepageInvoiceformblock;
  notAnswerBlock: LandingInvoicepageNotanswerblock;
  paymentProcedureBlock: LandingInvoicepagePaymentprocedureblock;
  paymentViaAgentBlock: LandingInvoicepagePaymentviaagentblock;
  questionsBlock: LandingInvoicepageQuestionsblock;
  registrationBlock: LandingInvoicepageRegistrationblock;
  solvingProblemsBlock: LandingInvoicepageSolvingproblemsblock;
  titleBlock: LandingInvoicepageTitleblock;
};

export type LandingInvoicepageChoosingcountryblock = {
  invoices: Array<LandingInvoiceNode>;
  subtitle: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingInvoicepageConnection = {
  edges: Array<LandingInvoicepageEdge>;
  pageInfo: LandingPageInfo;
  totalCount: Scalars['Int']['output'];
};

export type LandingInvoicepageEdge = {
  cursor: Scalars['String']['output'];
  node: LandingInvoicepageNode;
};

export type LandingInvoicepageFlat = {
  ChoosingCountryBlock: LandingInvoicepageFlatChoosingcountryblock;
  SEO: LandingInvoicepageFlatSeo;
  helpPaymentBlock: LandingInvoicepageFlatHelppaymentblock;
  infoBlock: LandingInvoicepageFlatInfoblock;
  infoDescriptionBlock: LandingInvoicepageFlatInfodescriptionblock;
  invoiceFormBlock: LandingInvoicepageFlatInvoiceformblock;
  notAnswerBlock: LandingInvoicepageFlatNotanswerblock;
  paymentProcedureBlock: LandingInvoicepageFlatPaymentprocedureblock;
  paymentViaAgentBlock: LandingInvoicepageFlatPaymentviaagentblock;
  questionsBlock: LandingInvoicepageFlatQuestionsblock;
  registrationBlock: LandingInvoicepageFlatRegistrationblock;
  solvingProblemsBlock: LandingInvoicepageFlatSolvingproblemsblock;
  titleBlock: LandingInvoicepageFlatTitleblock;
};

export type LandingInvoicepageFlatChoosingcountryblock = {
  invoices: Array<LandingInvoiceFlat>;
  subtitle: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingInvoicepageFlatConnection = {
  edges: Array<LandingInvoicepageFlatEdge>;
  pageInfo: LandingPageInfo;
  totalCount: Scalars['Int']['output'];
};

export type LandingInvoicepageFlatEdge = {
  cursor: Scalars['String']['output'];
  node: LandingInvoicepageFlat;
};

export type LandingInvoicepageFlatHelppaymentblock = {
  content: LandingInvoicepageFlatHelppaymentblockContent;
  title: Scalars['String']['output'];
};

export type LandingInvoicepageFlatHelppaymentblockContent = {
  helpPaymentItems: Array<LandingInvoicepageFlatHelppaymentblockContentHelppaymentitemsItems>;
};

export type LandingInvoicepageFlatHelppaymentblockContentHelppaymentitemsItems = {
  title: Scalars['String']['output'];
};

export type LandingInvoicepageFlatInfoblock = {
  content: LandingInvoicepageFlatInfoblockContent;
};

export type LandingInvoicepageFlatInfoblockContent = {
  infoItem: Array<LandingInvoicepageFlatInfoblockContentInfoitemItems>;
};

export type LandingInvoicepageFlatInfoblockContentInfoitemItems = {
  icon: LandingInvoicepageFlatInfoblockContentInfoitemItemsIcon;
  title: Scalars['String']['output'];
};

export type LandingInvoicepageFlatInfoblockContentInfoitemItemsIcon = {
  extension: Scalars['String']['output'];
  fileId: Scalars['String']['output'];
  fileName: Scalars['String']['output'];
  hash: Scalars['String']['output'];
  height: Scalars['Float']['output'];
  mimeType: Scalars['String']['output'];
  size: Scalars['Float']['output'];
  status: Scalars['String']['output'];
  url: Scalars['String']['output'];
  width: Scalars['Float']['output'];
};

export type LandingInvoicepageFlatInfodescriptionblock = {
  descriptions: Array<LandingInvoicepageFlatInfodescriptionblockDescriptionsItems>;
  title: Scalars['String']['output'];
};

export type LandingInvoicepageFlatInfodescriptionblockDescriptionsItems = {
  content: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingInvoicepageFlatInvoiceformblock = {
  text: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingInvoicepageFlatNotanswerblock = {
  description: Scalars['String']['output'];
};

export type LandingInvoicepageFlatPaymentprocedureblock = {
  paymentSteps: Array<LandingInvoicepageFlatPaymentprocedureblockPaymentstepsItems>;
  title: Scalars['String']['output'];
};

export type LandingInvoicepageFlatPaymentprocedureblockPaymentstepsItems = {
  img: LandingInvoicepageFlatPaymentprocedureblockPaymentstepsItemsImg;
  title: Scalars['String']['output'];
};

export type LandingInvoicepageFlatPaymentprocedureblockPaymentstepsItemsImg = {
  extension: Scalars['String']['output'];
  fileId: Scalars['String']['output'];
  fileName: Scalars['String']['output'];
  hash: Scalars['String']['output'];
  height: Scalars['Float']['output'];
  mimeType: Scalars['String']['output'];
  size: Scalars['Float']['output'];
  status: Scalars['String']['output'];
  url: Scalars['String']['output'];
  width: Scalars['Float']['output'];
};

export type LandingInvoicepageFlatPaymentviaagentblock = {
  content: LandingInvoicepageFlatPaymentviaagentblockContent;
  description: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingInvoicepageFlatPaymentviaagentblockContent = {
  paymentItems: Array<LandingInvoicepageFlatPaymentviaagentblockContentPaymentitemsItems>;
};

export type LandingInvoicepageFlatPaymentviaagentblockContentPaymentitemsItems = {
  description: Scalars['String']['output'];
  icon: LandingInvoicepageFlatPaymentviaagentblockContentPaymentitemsItemsIcon;
  title: Scalars['String']['output'];
};

export type LandingInvoicepageFlatPaymentviaagentblockContentPaymentitemsItemsIcon = {
  extension: Scalars['String']['output'];
  fileId: Scalars['String']['output'];
  fileName: Scalars['String']['output'];
  hash: Scalars['String']['output'];
  height: Scalars['Float']['output'];
  mimeType: Scalars['String']['output'];
  size: Scalars['Float']['output'];
  status: Scalars['String']['output'];
  url: Scalars['String']['output'];
  width: Scalars['Float']['output'];
};

export type LandingInvoicepageFlatQuestionsblock = {
  questions: Array<LandingInvoicepageFlatQuestionsblockQuestionsItems>;
};

export type LandingInvoicepageFlatQuestionsblockQuestionsItems = {
  content: Scalars['String']['output'];
  title: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type LandingInvoicepageFlatRegistrationblock = {
  title: Scalars['String']['output'];
};

export type LandingInvoicepageFlatSeo = {
  description: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingInvoicepageFlatSolvingproblemsblock = {
  solvingProblems: Array<LandingInvoicepageFlatSolvingproblemsblockSolvingproblemsItems>;
  title: Scalars['String']['output'];
};

export type LandingInvoicepageFlatSolvingproblemsblockSolvingproblemsItems = {
  client: Scalars['String']['output'];
  description: Scalars['String']['output'];
  summa: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingInvoicepageFlatTitleblock = {
  description: Scalars['String']['output'];
  subtitle: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingInvoicepageHelppaymentblock = {
  content: LandingInvoicepageHelppaymentblockContent;
  title: Scalars['String']['output'];
};

export type LandingInvoicepageHelppaymentblockContent = {
  helpPaymentItems: Array<LandingInvoicepageHelppaymentblockContentHelppaymentitemsItems>;
};

export type LandingInvoicepageHelppaymentblockContentHelppaymentitemsItems = {
  title: Scalars['String']['output'];
};

export type LandingInvoicepageInfoblock = {
  content: LandingInvoicepageInfoblockContent;
};

export type LandingInvoicepageInfoblockContent = {
  infoItem: Array<LandingInvoicepageInfoblockContentInfoitemItems>;
};

export type LandingInvoicepageInfoblockContentInfoitemItems = {
  icon: LandingInvoicepageInfoblockContentInfoitemItemsIcon;
  title: Scalars['String']['output'];
};

export type LandingInvoicepageInfoblockContentInfoitemItemsIcon = {
  extension: Scalars['String']['output'];
  fileId: Scalars['String']['output'];
  fileName: Scalars['String']['output'];
  hash: Scalars['String']['output'];
  height: Scalars['Float']['output'];
  mimeType: Scalars['String']['output'];
  size: Scalars['Float']['output'];
  status: Scalars['String']['output'];
  url: Scalars['String']['output'];
  width: Scalars['Float']['output'];
};

export type LandingInvoicepageInfodescriptionblock = {
  descriptions: Array<LandingInvoicepageInfodescriptionblockDescriptionsItems>;
  title: Scalars['String']['output'];
};

export type LandingInvoicepageInfodescriptionblockDescriptionsItems = {
  content: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingInvoicepageInvoiceformblock = {
  text: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingInvoicepageNode = {
  createdAt: Scalars['DateTime']['output'];
  createdId: Scalars['String']['output'];
  data: LandingInvoicepage;
  id: Scalars['String']['output'];
  json: Scalars['JSON']['output'];
  publishedAt: Scalars['DateTime']['output'];
  updatedAt: Scalars['DateTime']['output'];
  versionId: Scalars['String']['output'];
};

export type LandingInvoicepageNotanswerblock = {
  description: Scalars['String']['output'];
};

export type LandingInvoicepagePaymentprocedureblock = {
  paymentSteps: Array<LandingInvoicepagePaymentprocedureblockPaymentstepsItems>;
  title: Scalars['String']['output'];
};

export type LandingInvoicepagePaymentprocedureblockPaymentstepsItems = {
  img: LandingInvoicepagePaymentprocedureblockPaymentstepsItemsImg;
  title: Scalars['String']['output'];
};

export type LandingInvoicepagePaymentprocedureblockPaymentstepsItemsImg = {
  extension: Scalars['String']['output'];
  fileId: Scalars['String']['output'];
  fileName: Scalars['String']['output'];
  hash: Scalars['String']['output'];
  height: Scalars['Float']['output'];
  mimeType: Scalars['String']['output'];
  size: Scalars['Float']['output'];
  status: Scalars['String']['output'];
  url: Scalars['String']['output'];
  width: Scalars['Float']['output'];
};

export type LandingInvoicepagePaymentviaagentblock = {
  content: LandingInvoicepagePaymentviaagentblockContent;
  description: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingInvoicepagePaymentviaagentblockContent = {
  paymentItems: Array<LandingInvoicepagePaymentviaagentblockContentPaymentitemsItems>;
};

export type LandingInvoicepagePaymentviaagentblockContentPaymentitemsItems = {
  description: Scalars['String']['output'];
  icon: LandingInvoicepagePaymentviaagentblockContentPaymentitemsItemsIcon;
  title: Scalars['String']['output'];
};

export type LandingInvoicepagePaymentviaagentblockContentPaymentitemsItemsIcon = {
  extension: Scalars['String']['output'];
  fileId: Scalars['String']['output'];
  fileName: Scalars['String']['output'];
  hash: Scalars['String']['output'];
  height: Scalars['Float']['output'];
  mimeType: Scalars['String']['output'];
  size: Scalars['Float']['output'];
  status: Scalars['String']['output'];
  url: Scalars['String']['output'];
  width: Scalars['Float']['output'];
};

export type LandingInvoicepageQuestionsblock = {
  questions: Array<LandingInvoicepageQuestionsblockQuestionsItems>;
};

export type LandingInvoicepageQuestionsblockQuestionsItems = {
  content: Scalars['String']['output'];
  title: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type LandingInvoicepageRegistrationblock = {
  title: Scalars['String']['output'];
};

export type LandingInvoicepageSeo = {
  description: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingInvoicepageSolvingproblemsblock = {
  solvingProblems: Array<LandingInvoicepageSolvingproblemsblockSolvingproblemsItems>;
  title: Scalars['String']['output'];
};

export type LandingInvoicepageSolvingproblemsblockSolvingproblemsItems = {
  client: Scalars['String']['output'];
  description: Scalars['String']['output'];
  summa: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingInvoicepageTitleblock = {
  description: Scalars['String']['output'];
  subtitle: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingInvoicepagedeprected = {
  ChoosingCountryBlock: LandingInvoicepagedeprectedChoosingcountryblock;
  SEO: LandingInvoicepagedeprectedSeo;
  helpPaymentBlock: LandingInvoicepagedeprectedHelppaymentblock;
  infoBlock: LandingInvoicepagedeprectedInfoblock;
  infoDescriptionBlock: LandingInvoicepagedeprectedInfodescriptionblock;
  invoiceFormBlock: LandingInvoicepagedeprectedInvoiceformblock;
  notAnswerBlock: LandingInvoicepagedeprectedNotanswerblock;
  paymentProcedureBlock: LandingInvoicepagedeprectedPaymentprocedureblock;
  paymentViaAgentBlock: LandingInvoicepagedeprectedPaymentviaagentblock;
  questionsBlock: LandingInvoicepagedeprectedQuestionsblock;
  registrationBlock: LandingInvoicepagedeprectedRegistrationblock;
  solvingProblemsBlock: LandingInvoicepagedeprectedSolvingproblemsblock;
  titleBlock: LandingInvoicepagedeprectedTitleblock;
};

export type LandingInvoicepagedeprectedChoosingcountryblock = {
  invoices: Array<LandingInvoiceNode>;
  subtitle: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingInvoicepagedeprectedConnection = {
  edges: Array<LandingInvoicepagedeprectedEdge>;
  pageInfo: LandingPageInfo;
  totalCount: Scalars['Int']['output'];
};

export type LandingInvoicepagedeprectedEdge = {
  cursor: Scalars['String']['output'];
  node: LandingInvoicepagedeprectedNode;
};

export type LandingInvoicepagedeprectedFlat = {
  ChoosingCountryBlock: LandingInvoicepagedeprectedFlatChoosingcountryblock;
  SEO: LandingInvoicepagedeprectedFlatSeo;
  helpPaymentBlock: LandingInvoicepagedeprectedFlatHelppaymentblock;
  infoBlock: LandingInvoicepagedeprectedFlatInfoblock;
  infoDescriptionBlock: LandingInvoicepagedeprectedFlatInfodescriptionblock;
  invoiceFormBlock: LandingInvoicepagedeprectedFlatInvoiceformblock;
  notAnswerBlock: LandingInvoicepagedeprectedFlatNotanswerblock;
  paymentProcedureBlock: LandingInvoicepagedeprectedFlatPaymentprocedureblock;
  paymentViaAgentBlock: LandingInvoicepagedeprectedFlatPaymentviaagentblock;
  questionsBlock: LandingInvoicepagedeprectedFlatQuestionsblock;
  registrationBlock: LandingInvoicepagedeprectedFlatRegistrationblock;
  solvingProblemsBlock: LandingInvoicepagedeprectedFlatSolvingproblemsblock;
  titleBlock: LandingInvoicepagedeprectedFlatTitleblock;
};

export type LandingInvoicepagedeprectedFlatChoosingcountryblock = {
  invoices: Array<LandingInvoiceFlat>;
  subtitle: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingInvoicepagedeprectedFlatConnection = {
  edges: Array<LandingInvoicepagedeprectedFlatEdge>;
  pageInfo: LandingPageInfo;
  totalCount: Scalars['Int']['output'];
};

export type LandingInvoicepagedeprectedFlatEdge = {
  cursor: Scalars['String']['output'];
  node: LandingInvoicepagedeprectedFlat;
};

export type LandingInvoicepagedeprectedFlatHelppaymentblock = {
  content: LandingInvoicepagedeprectedFlatHelppaymentblockContent;
  title: Scalars['String']['output'];
};

export type LandingInvoicepagedeprectedFlatHelppaymentblockContent = {
  helpPaymentItems: Array<LandingInvoicepagedeprectedFlatHelppaymentblockContentHelppaymentitemsItems>;
};

export type LandingInvoicepagedeprectedFlatHelppaymentblockContentHelppaymentitemsItems = {
  title: Scalars['String']['output'];
};

export type LandingInvoicepagedeprectedFlatInfoblock = {
  content: LandingInvoicepagedeprectedFlatInfoblockContent;
};

export type LandingInvoicepagedeprectedFlatInfoblockContent = {
  infoItem: Array<LandingInvoicepagedeprectedFlatInfoblockContentInfoitemItems>;
};

export type LandingInvoicepagedeprectedFlatInfoblockContentInfoitemItems = {
  icon: LandingInvoicepagedeprectedFlatInfoblockContentInfoitemItemsIcon;
  title: Scalars['String']['output'];
};

export type LandingInvoicepagedeprectedFlatInfoblockContentInfoitemItemsIcon = {
  extension: Scalars['String']['output'];
  fileId: Scalars['String']['output'];
  fileName: Scalars['String']['output'];
  hash: Scalars['String']['output'];
  height: Scalars['Float']['output'];
  mimeType: Scalars['String']['output'];
  size: Scalars['Float']['output'];
  status: Scalars['String']['output'];
  url: Scalars['String']['output'];
  width: Scalars['Float']['output'];
};

export type LandingInvoicepagedeprectedFlatInfodescriptionblock = {
  descriptions: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingInvoicepagedeprectedFlatInvoiceformblock = {
  text: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingInvoicepagedeprectedFlatNotanswerblock = {
  description: Scalars['String']['output'];
};

export type LandingInvoicepagedeprectedFlatPaymentprocedureblock = {
  paymentSteps: Array<LandingInvoicepagedeprectedFlatPaymentprocedureblockPaymentstepsItems>;
  title: Scalars['String']['output'];
};

export type LandingInvoicepagedeprectedFlatPaymentprocedureblockPaymentstepsItems = {
  img: LandingInvoicepagedeprectedFlatPaymentprocedureblockPaymentstepsItemsImg;
  title: Scalars['String']['output'];
};

export type LandingInvoicepagedeprectedFlatPaymentprocedureblockPaymentstepsItemsImg = {
  extension: Scalars['String']['output'];
  fileId: Scalars['String']['output'];
  fileName: Scalars['String']['output'];
  hash: Scalars['String']['output'];
  height: Scalars['Float']['output'];
  mimeType: Scalars['String']['output'];
  size: Scalars['Float']['output'];
  status: Scalars['String']['output'];
  url: Scalars['String']['output'];
  width: Scalars['Float']['output'];
};

export type LandingInvoicepagedeprectedFlatPaymentviaagentblock = {
  content: LandingInvoicepagedeprectedFlatPaymentviaagentblockContent;
  description: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingInvoicepagedeprectedFlatPaymentviaagentblockContent = {
  paymentItems: Array<LandingInvoicepagedeprectedFlatPaymentviaagentblockContentPaymentitemsItems>;
};

export type LandingInvoicepagedeprectedFlatPaymentviaagentblockContentPaymentitemsItems = {
  description: Scalars['String']['output'];
  icon: LandingInvoicepagedeprectedFlatPaymentviaagentblockContentPaymentitemsItemsIcon;
  title: Scalars['String']['output'];
};

export type LandingInvoicepagedeprectedFlatPaymentviaagentblockContentPaymentitemsItemsIcon = {
  extension: Scalars['String']['output'];
  fileId: Scalars['String']['output'];
  fileName: Scalars['String']['output'];
  hash: Scalars['String']['output'];
  height: Scalars['Float']['output'];
  mimeType: Scalars['String']['output'];
  size: Scalars['Float']['output'];
  status: Scalars['String']['output'];
  url: Scalars['String']['output'];
  width: Scalars['Float']['output'];
};

export type LandingInvoicepagedeprectedFlatQuestionsblock = {
  questions: Array<LandingInvoicepagedeprectedFlatQuestionsblockQuestionsItems>;
};

export type LandingInvoicepagedeprectedFlatQuestionsblockQuestionsItems = {
  content: Scalars['String']['output'];
  title: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type LandingInvoicepagedeprectedFlatRegistrationblock = {
  title: Scalars['String']['output'];
};

export type LandingInvoicepagedeprectedFlatSeo = {
  description: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingInvoicepagedeprectedFlatSolvingproblemsblock = {
  solvingProblems: Array<LandingInvoicepagedeprectedFlatSolvingproblemsblockSolvingproblemsItems>;
  title: Scalars['String']['output'];
};

export type LandingInvoicepagedeprectedFlatSolvingproblemsblockSolvingproblemsItems = {
  client: Scalars['String']['output'];
  description: Scalars['String']['output'];
  summa: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingInvoicepagedeprectedFlatTitleblock = {
  description: Scalars['String']['output'];
  subtitle: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingInvoicepagedeprectedHelppaymentblock = {
  content: LandingInvoicepagedeprectedHelppaymentblockContent;
  title: Scalars['String']['output'];
};

export type LandingInvoicepagedeprectedHelppaymentblockContent = {
  helpPaymentItems: Array<LandingInvoicepagedeprectedHelppaymentblockContentHelppaymentitemsItems>;
};

export type LandingInvoicepagedeprectedHelppaymentblockContentHelppaymentitemsItems = {
  title: Scalars['String']['output'];
};

export type LandingInvoicepagedeprectedInfoblock = {
  content: LandingInvoicepagedeprectedInfoblockContent;
};

export type LandingInvoicepagedeprectedInfoblockContent = {
  infoItem: Array<LandingInvoicepagedeprectedInfoblockContentInfoitemItems>;
};

export type LandingInvoicepagedeprectedInfoblockContentInfoitemItems = {
  icon: LandingInvoicepagedeprectedInfoblockContentInfoitemItemsIcon;
  title: Scalars['String']['output'];
};

export type LandingInvoicepagedeprectedInfoblockContentInfoitemItemsIcon = {
  extension: Scalars['String']['output'];
  fileId: Scalars['String']['output'];
  fileName: Scalars['String']['output'];
  hash: Scalars['String']['output'];
  height: Scalars['Float']['output'];
  mimeType: Scalars['String']['output'];
  size: Scalars['Float']['output'];
  status: Scalars['String']['output'];
  url: Scalars['String']['output'];
  width: Scalars['Float']['output'];
};

export type LandingInvoicepagedeprectedInfodescriptionblock = {
  descriptions: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingInvoicepagedeprectedInvoiceformblock = {
  text: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingInvoicepagedeprectedNode = {
  createdAt: Scalars['DateTime']['output'];
  createdId: Scalars['String']['output'];
  data: LandingInvoicepagedeprected;
  id: Scalars['String']['output'];
  json: Scalars['JSON']['output'];
  publishedAt: Scalars['DateTime']['output'];
  updatedAt: Scalars['DateTime']['output'];
  versionId: Scalars['String']['output'];
};

export type LandingInvoicepagedeprectedNotanswerblock = {
  description: Scalars['String']['output'];
};

export type LandingInvoicepagedeprectedPaymentprocedureblock = {
  paymentSteps: Array<LandingInvoicepagedeprectedPaymentprocedureblockPaymentstepsItems>;
  title: Scalars['String']['output'];
};

export type LandingInvoicepagedeprectedPaymentprocedureblockPaymentstepsItems = {
  img: LandingInvoicepagedeprectedPaymentprocedureblockPaymentstepsItemsImg;
  title: Scalars['String']['output'];
};

export type LandingInvoicepagedeprectedPaymentprocedureblockPaymentstepsItemsImg = {
  extension: Scalars['String']['output'];
  fileId: Scalars['String']['output'];
  fileName: Scalars['String']['output'];
  hash: Scalars['String']['output'];
  height: Scalars['Float']['output'];
  mimeType: Scalars['String']['output'];
  size: Scalars['Float']['output'];
  status: Scalars['String']['output'];
  url: Scalars['String']['output'];
  width: Scalars['Float']['output'];
};

export type LandingInvoicepagedeprectedPaymentviaagentblock = {
  content: LandingInvoicepagedeprectedPaymentviaagentblockContent;
  description: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingInvoicepagedeprectedPaymentviaagentblockContent = {
  paymentItems: Array<LandingInvoicepagedeprectedPaymentviaagentblockContentPaymentitemsItems>;
};

export type LandingInvoicepagedeprectedPaymentviaagentblockContentPaymentitemsItems = {
  description: Scalars['String']['output'];
  icon: LandingInvoicepagedeprectedPaymentviaagentblockContentPaymentitemsItemsIcon;
  title: Scalars['String']['output'];
};

export type LandingInvoicepagedeprectedPaymentviaagentblockContentPaymentitemsItemsIcon = {
  extension: Scalars['String']['output'];
  fileId: Scalars['String']['output'];
  fileName: Scalars['String']['output'];
  hash: Scalars['String']['output'];
  height: Scalars['Float']['output'];
  mimeType: Scalars['String']['output'];
  size: Scalars['Float']['output'];
  status: Scalars['String']['output'];
  url: Scalars['String']['output'];
  width: Scalars['Float']['output'];
};

export type LandingInvoicepagedeprectedQuestionsblock = {
  questions: Array<LandingInvoicepagedeprectedQuestionsblockQuestionsItems>;
};

export type LandingInvoicepagedeprectedQuestionsblockQuestionsItems = {
  content: Scalars['String']['output'];
  title: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type LandingInvoicepagedeprectedRegistrationblock = {
  title: Scalars['String']['output'];
};

export type LandingInvoicepagedeprectedSeo = {
  description: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingInvoicepagedeprectedSolvingproblemsblock = {
  solvingProblems: Array<LandingInvoicepagedeprectedSolvingproblemsblockSolvingproblemsItems>;
  title: Scalars['String']['output'];
};

export type LandingInvoicepagedeprectedSolvingproblemsblockSolvingproblemsItems = {
  client: Scalars['String']['output'];
  description: Scalars['String']['output'];
  summa: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingInvoicepagedeprectedTitleblock = {
  description: Scalars['String']['output'];
  subtitle: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingInvoicepagedeprectedsWhereInput = {
  AND?: InputMaybe<Array<LandingInvoicepagedeprectedsWhereInput>>;
  NOT?: InputMaybe<Array<LandingInvoicepagedeprectedsWhereInput>>;
  OR?: InputMaybe<Array<LandingInvoicepagedeprectedsWhereInput>>;
  createdAt?: InputMaybe<LandingDateTimeFilter>;
  createdId?: InputMaybe<LandingStringFilter>;
  data?: InputMaybe<LandingJsonFilter>;
  id?: InputMaybe<LandingStringFilter>;
  publishedAt?: InputMaybe<LandingDateTimeFilter>;
  readonly?: InputMaybe<LandingBoolFilter>;
  updatedAt?: InputMaybe<LandingDateTimeFilter>;
  versionId?: InputMaybe<LandingStringFilter>;
};

export type LandingInvoicepagesWhereInput = {
  AND?: InputMaybe<Array<LandingInvoicepagesWhereInput>>;
  NOT?: InputMaybe<Array<LandingInvoicepagesWhereInput>>;
  OR?: InputMaybe<Array<LandingInvoicepagesWhereInput>>;
  createdAt?: InputMaybe<LandingDateTimeFilter>;
  createdId?: InputMaybe<LandingStringFilter>;
  data?: InputMaybe<LandingJsonFilter>;
  id?: InputMaybe<LandingStringFilter>;
  publishedAt?: InputMaybe<LandingDateTimeFilter>;
  readonly?: InputMaybe<LandingBoolFilter>;
  updatedAt?: InputMaybe<LandingDateTimeFilter>;
  versionId?: InputMaybe<LandingStringFilter>;
};

export type LandingInvoicesWhereInput = {
  AND?: InputMaybe<Array<LandingInvoicesWhereInput>>;
  NOT?: InputMaybe<Array<LandingInvoicesWhereInput>>;
  OR?: InputMaybe<Array<LandingInvoicesWhereInput>>;
  createdAt?: InputMaybe<LandingDateTimeFilter>;
  createdId?: InputMaybe<LandingStringFilter>;
  data?: InputMaybe<LandingJsonFilter>;
  id?: InputMaybe<LandingStringFilter>;
  publishedAt?: InputMaybe<LandingDateTimeFilter>;
  readonly?: InputMaybe<LandingBoolFilter>;
  updatedAt?: InputMaybe<LandingDateTimeFilter>;
  versionId?: InputMaybe<LandingStringFilter>;
};

export type LandingJsonFilter = {
  array_contains?: InputMaybe<Array<Scalars['JSON']['input']>>;
  array_ends_with?: InputMaybe<Scalars['JSON']['input']>;
  array_starts_with?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  mode?: InputMaybe<LandingFilterJsonMode>;
  path?: InputMaybe<Array<Scalars['String']['input']>>;
  string_contains?: InputMaybe<Scalars['String']['input']>;
  string_ends_with?: InputMaybe<Scalars['String']['input']>;
  string_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export type LandingMain = {
  /** @deprecated use in offersItem */
  buttonText: Scalars['String']['output'];
  /** @deprecated use in offersItem */
  hint: Scalars['String']['output'];
  media: LandingMainMedia;
  offers: Array<LandingMainOffersItems>;
  /** @deprecated use in offersItem */
  title: Scalars['String']['output'];
  video: LandingMainVideo;
};

export type LandingMainConnection = {
  edges: Array<LandingMainEdge>;
  pageInfo: LandingPageInfo;
  totalCount: Scalars['Int']['output'];
};

export type LandingMainEdge = {
  cursor: Scalars['String']['output'];
  node: LandingMainNode;
};

export type LandingMainFlat = {
  /** @deprecated use in offersItem */
  buttonText: Scalars['String']['output'];
  /** @deprecated use in offersItem */
  hint: Scalars['String']['output'];
  media: LandingMainFlatMedia;
  offers: Array<LandingMainFlatOffersItems>;
  /** @deprecated use in offersItem */
  title: Scalars['String']['output'];
  video: LandingMainFlatVideo;
};

export type LandingMainFlatConnection = {
  edges: Array<LandingMainFlatEdge>;
  pageInfo: LandingPageInfo;
  totalCount: Scalars['Int']['output'];
};

export type LandingMainFlatEdge = {
  cursor: Scalars['String']['output'];
  node: LandingMainFlat;
};

export type LandingMainFlatMedia = {
  extension: Scalars['String']['output'];
  fileId: Scalars['String']['output'];
  fileName: Scalars['String']['output'];
  hash: Scalars['String']['output'];
  height: Scalars['Float']['output'];
  mimeType: Scalars['String']['output'];
  size: Scalars['Float']['output'];
  status: Scalars['String']['output'];
  url: Scalars['String']['output'];
  width: Scalars['Float']['output'];
};

export type LandingMainFlatOffersItems = {
  additionalInfo: Scalars['String']['output'];
  buttonText: Scalars['String']['output'];
  hint: Scalars['String']['output'];
  media: LandingMainFlatOffersItemsMedia;
  source: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingMainFlatOffersItemsMedia = {
  extension: Scalars['String']['output'];
  fileId: Scalars['String']['output'];
  fileName: Scalars['String']['output'];
  hash: Scalars['String']['output'];
  height: Scalars['Float']['output'];
  mimeType: Scalars['String']['output'];
  size: Scalars['Float']['output'];
  status: Scalars['String']['output'];
  url: Scalars['String']['output'];
  width: Scalars['Float']['output'];
};

export type LandingMainFlatVideo = {
  extension: Scalars['String']['output'];
  fileId: Scalars['String']['output'];
  fileName: Scalars['String']['output'];
  hash: Scalars['String']['output'];
  height: Scalars['Float']['output'];
  mimeType: Scalars['String']['output'];
  size: Scalars['Float']['output'];
  status: Scalars['String']['output'];
  url: Scalars['String']['output'];
  width: Scalars['Float']['output'];
};

export type LandingMainMedia = {
  extension: Scalars['String']['output'];
  fileId: Scalars['String']['output'];
  fileName: Scalars['String']['output'];
  hash: Scalars['String']['output'];
  height: Scalars['Float']['output'];
  mimeType: Scalars['String']['output'];
  size: Scalars['Float']['output'];
  status: Scalars['String']['output'];
  url: Scalars['String']['output'];
  width: Scalars['Float']['output'];
};

export type LandingMainNode = {
  createdAt: Scalars['DateTime']['output'];
  createdId: Scalars['String']['output'];
  data: LandingMain;
  id: Scalars['String']['output'];
  json: Scalars['JSON']['output'];
  publishedAt: Scalars['DateTime']['output'];
  updatedAt: Scalars['DateTime']['output'];
  versionId: Scalars['String']['output'];
};

export type LandingMainOffersItems = {
  additionalInfo: Scalars['String']['output'];
  buttonText: Scalars['String']['output'];
  hint: Scalars['String']['output'];
  media: LandingMainOffersItemsMedia;
  source: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingMainOffersItemsMedia = {
  extension: Scalars['String']['output'];
  fileId: Scalars['String']['output'];
  fileName: Scalars['String']['output'];
  hash: Scalars['String']['output'];
  height: Scalars['Float']['output'];
  mimeType: Scalars['String']['output'];
  size: Scalars['Float']['output'];
  status: Scalars['String']['output'];
  url: Scalars['String']['output'];
  width: Scalars['Float']['output'];
};

export type LandingMainVideo = {
  extension: Scalars['String']['output'];
  fileId: Scalars['String']['output'];
  fileName: Scalars['String']['output'];
  hash: Scalars['String']['output'];
  height: Scalars['Float']['output'];
  mimeType: Scalars['String']['output'];
  size: Scalars['Float']['output'];
  status: Scalars['String']['output'];
  url: Scalars['String']['output'];
  width: Scalars['Float']['output'];
};

export type LandingMainsWhereInput = {
  AND?: InputMaybe<Array<LandingMainsWhereInput>>;
  NOT?: InputMaybe<Array<LandingMainsWhereInput>>;
  OR?: InputMaybe<Array<LandingMainsWhereInput>>;
  createdAt?: InputMaybe<LandingDateTimeFilter>;
  createdId?: InputMaybe<LandingStringFilter>;
  data?: InputMaybe<LandingJsonFilter>;
  id?: InputMaybe<LandingStringFilter>;
  publishedAt?: InputMaybe<LandingDateTimeFilter>;
  readonly?: InputMaybe<LandingBoolFilter>;
  updatedAt?: InputMaybe<LandingDateTimeFilter>;
  versionId?: InputMaybe<LandingStringFilter>;
};

export type LandingMention = {
  createdAt: Scalars['String']['output'];
  icon: LandingMentionIcon;
  id: Scalars['String']['output'];
  link: Scalars['String']['output'];
  /** @deprecated Не актуально, использовать icon */
  name: Scalars['String']['output'];
  publishedAt: Scalars['String']['output'];
};

export type LandingMentionConnection = {
  edges: Array<LandingMentionEdge>;
  pageInfo: LandingPageInfo;
  totalCount: Scalars['Int']['output'];
};

export type LandingMentionEdge = {
  cursor: Scalars['String']['output'];
  node: LandingMentionNode;
};

export type LandingMentionFlat = {
  createdAt: Scalars['String']['output'];
  icon: LandingMentionFlatIcon;
  id: Scalars['String']['output'];
  link: Scalars['String']['output'];
  /** @deprecated Не актуально, использовать icon */
  name: Scalars['String']['output'];
  publishedAt: Scalars['String']['output'];
};

export type LandingMentionFlatConnection = {
  edges: Array<LandingMentionFlatEdge>;
  pageInfo: LandingPageInfo;
  totalCount: Scalars['Int']['output'];
};

export type LandingMentionFlatEdge = {
  cursor: Scalars['String']['output'];
  node: LandingMentionFlat;
};

export type LandingMentionFlatIcon = {
  extension: Scalars['String']['output'];
  fileId: Scalars['String']['output'];
  fileName: Scalars['String']['output'];
  hash: Scalars['String']['output'];
  height: Scalars['Float']['output'];
  mimeType: Scalars['String']['output'];
  size: Scalars['Float']['output'];
  status: Scalars['String']['output'];
  url: Scalars['String']['output'];
  width: Scalars['Float']['output'];
};

export type LandingMentionIcon = {
  extension: Scalars['String']['output'];
  fileId: Scalars['String']['output'];
  fileName: Scalars['String']['output'];
  hash: Scalars['String']['output'];
  height: Scalars['Float']['output'];
  mimeType: Scalars['String']['output'];
  size: Scalars['Float']['output'];
  status: Scalars['String']['output'];
  url: Scalars['String']['output'];
  width: Scalars['Float']['output'];
};

export type LandingMentionNode = {
  createdAt: Scalars['DateTime']['output'];
  createdId: Scalars['String']['output'];
  data: LandingMention;
  id: Scalars['String']['output'];
  json: Scalars['JSON']['output'];
  publishedAt: Scalars['DateTime']['output'];
  updatedAt: Scalars['DateTime']['output'];
  versionId: Scalars['String']['output'];
};

export type LandingMentionsWhereInput = {
  AND?: InputMaybe<Array<LandingMentionsWhereInput>>;
  NOT?: InputMaybe<Array<LandingMentionsWhereInput>>;
  OR?: InputMaybe<Array<LandingMentionsWhereInput>>;
  createdAt?: InputMaybe<LandingDateTimeFilter>;
  createdId?: InputMaybe<LandingStringFilter>;
  data?: InputMaybe<LandingJsonFilter>;
  id?: InputMaybe<LandingStringFilter>;
  publishedAt?: InputMaybe<LandingDateTimeFilter>;
  readonly?: InputMaybe<LandingBoolFilter>;
  updatedAt?: InputMaybe<LandingDateTimeFilter>;
  versionId?: InputMaybe<LandingStringFilter>;
};

export enum LandingOrderFieldAggregation {
  Avg = 'avg',
  First = 'first',
  Last = 'last',
  Max = 'max',
  Min = 'min'
}

export enum LandingOrderFieldType {
  Boolean = 'boolean',
  Float = 'float',
  Int = 'int',
  Text = 'text',
  Timestamp = 'timestamp'
}

export type LandingPageInfo = {
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type LandingPayment = {
  SEO: LandingPaymentSeo;
  agentPlatformSection: LandingPaymentAgentplatformsection;
  applicationScenarios: LandingPaymentApplicationscenarios;
  description: Scalars['String']['output'];
  implementWays: LandingPaymentImplementways;
  infoDescription: LandingPaymentInfodescription;
  infoDescriptionSection: LandingPaymentInfodescriptionsection;
  paymentProcedure: LandingPaymentPaymentprocedure;
  questions: Array<LandingPaymentQuestionsItems>;
  questionsInfo: Scalars['String']['output'];
  registration: LandingPaymentRegistration;
  solvingInvoiceProblem: Array<LandingPaymentSolvinginvoiceproblemItems>;
  title: Scalars['String']['output'];
  userInputFields: LandingPaymentUserinputfields;
};

export type LandingPaymentAgentplatformsection = {
  agentPlatformScenarios: LandingPaymentAgentplatformsectionAgentplatformscenarios;
  description: Scalars['String']['output'];
  documentManagement: LandingPaymentAgentplatformsectionDocumentmanagement;
  title: Scalars['String']['output'];
};

export type LandingPaymentAgentplatformsectionAgentplatformscenarios = {
  content: Array<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};

export type LandingPaymentAgentplatformsectionDocumentmanagement = {
  description: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingPaymentApplicationscenarios = {
  texts: Array<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};

export type LandingPaymentConnection = {
  edges: Array<LandingPaymentEdge>;
  pageInfo: LandingPageInfo;
  totalCount: Scalars['Int']['output'];
};

export type LandingPaymentEdge = {
  cursor: Scalars['String']['output'];
  node: LandingPaymentNode;
};

export type LandingPaymentFlat = {
  SEO: LandingPaymentFlatSeo;
  agentPlatformSection: LandingPaymentFlatAgentplatformsection;
  applicationScenarios: LandingPaymentFlatApplicationscenarios;
  description: Scalars['String']['output'];
  implementWays: LandingPaymentFlatImplementways;
  infoDescription: LandingPaymentFlatInfodescription;
  infoDescriptionSection: LandingPaymentFlatInfodescriptionsection;
  paymentProcedure: LandingPaymentFlatPaymentprocedure;
  questions: Array<LandingPaymentFlatQuestionsItems>;
  questionsInfo: Scalars['String']['output'];
  registration: LandingPaymentFlatRegistration;
  solvingInvoiceProblem: Array<LandingPaymentFlatSolvinginvoiceproblemItems>;
  title: Scalars['String']['output'];
  userInputFields: LandingPaymentFlatUserinputfields;
};

export type LandingPaymentFlatAgentplatformsection = {
  agentPlatformScenarios: LandingPaymentFlatAgentplatformsectionAgentplatformscenarios;
  description: Scalars['String']['output'];
  documentManagement: LandingPaymentFlatAgentplatformsectionDocumentmanagement;
  title: Scalars['String']['output'];
};

export type LandingPaymentFlatAgentplatformsectionAgentplatformscenarios = {
  content: Array<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};

export type LandingPaymentFlatAgentplatformsectionDocumentmanagement = {
  description: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingPaymentFlatApplicationscenarios = {
  texts: Array<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};

export type LandingPaymentFlatConnection = {
  edges: Array<LandingPaymentFlatEdge>;
  pageInfo: LandingPageInfo;
  totalCount: Scalars['Int']['output'];
};

export type LandingPaymentFlatEdge = {
  cursor: Scalars['String']['output'];
  node: LandingPaymentFlat;
};

export type LandingPaymentFlatImplementways = {
  content: Array<LandingPaymentFlatImplementwaysContentItems>;
  title: Scalars['String']['output'];
};

export type LandingPaymentFlatImplementwaysContentItems = {
  subText: Scalars['String']['output'];
  subTextBgColor: Scalars['String']['output'];
  text: Scalars['String']['output'];
};

export type LandingPaymentFlatInfodescription = {
  content: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingPaymentFlatInfodescriptionsection = {
  descriptionBlocks: Array<LandingPaymentFlatInfodescriptionsectionDescriptionblocksItems>;
  title: Scalars['String']['output'];
};

export type LandingPaymentFlatInfodescriptionsectionDescriptionblocksItems = {
  content: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingPaymentFlatPaymentprocedure = {
  paymentProcedureItems: Array<LandingPaymentFlatPaymentprocedurePaymentprocedureitemsItems>;
  /** @deprecated необходимо добавить title и description. Используйте поле 'paymentProcedureItem' */
  texts: Array<Scalars['String']['output']>;
};

export type LandingPaymentFlatPaymentprocedurePaymentprocedureitemsItems = {
  description: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingPaymentFlatQuestionsItems = {
  text: Scalars['String']['output'];
  title: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type LandingPaymentFlatRegistration = {
  title: Scalars['String']['output'];
};

export type LandingPaymentFlatSeo = {
  description: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingPaymentFlatSolvinginvoiceproblemItems = {
  client: Scalars['String']['output'];
  description: Scalars['String']['output'];
  summa: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingPaymentFlatUserinputfields = {
  text: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingPaymentImplementways = {
  content: Array<LandingPaymentImplementwaysContentItems>;
  title: Scalars['String']['output'];
};

export type LandingPaymentImplementwaysContentItems = {
  subText: Scalars['String']['output'];
  subTextBgColor: Scalars['String']['output'];
  text: Scalars['String']['output'];
};

export type LandingPaymentInfodescription = {
  content: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingPaymentInfodescriptionsection = {
  descriptionBlocks: Array<LandingPaymentInfodescriptionsectionDescriptionblocksItems>;
  title: Scalars['String']['output'];
};

export type LandingPaymentInfodescriptionsectionDescriptionblocksItems = {
  content: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingPaymentNode = {
  createdAt: Scalars['DateTime']['output'];
  createdId: Scalars['String']['output'];
  data: LandingPayment;
  id: Scalars['String']['output'];
  json: Scalars['JSON']['output'];
  publishedAt: Scalars['DateTime']['output'];
  updatedAt: Scalars['DateTime']['output'];
  versionId: Scalars['String']['output'];
};

export type LandingPaymentPaymentprocedure = {
  paymentProcedureItems: Array<LandingPaymentPaymentprocedurePaymentprocedureitemsItems>;
  /** @deprecated необходимо добавить title и description. Используйте поле 'paymentProcedureItem' */
  texts: Array<Scalars['String']['output']>;
};

export type LandingPaymentPaymentprocedurePaymentprocedureitemsItems = {
  description: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingPaymentQuestionsItems = {
  text: Scalars['String']['output'];
  title: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type LandingPaymentRegistration = {
  title: Scalars['String']['output'];
};

export type LandingPaymentSeo = {
  description: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingPaymentSolvinginvoiceproblemItems = {
  client: Scalars['String']['output'];
  description: Scalars['String']['output'];
  summa: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingPaymentUserinputfields = {
  text: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingPaymentsWhereInput = {
  AND?: InputMaybe<Array<LandingPaymentsWhereInput>>;
  NOT?: InputMaybe<Array<LandingPaymentsWhereInput>>;
  OR?: InputMaybe<Array<LandingPaymentsWhereInput>>;
  createdAt?: InputMaybe<LandingDateTimeFilter>;
  createdId?: InputMaybe<LandingStringFilter>;
  data?: InputMaybe<LandingJsonFilter>;
  id?: InputMaybe<LandingStringFilter>;
  publishedAt?: InputMaybe<LandingDateTimeFilter>;
  readonly?: InputMaybe<LandingBoolFilter>;
  updatedAt?: InputMaybe<LandingDateTimeFilter>;
  versionId?: InputMaybe<LandingStringFilter>;
};

export type LandingReturnforeignrevenue = {
  SEO: LandingReturnforeignrevenueSeo;
  applicationScenariosSection: LandingReturnforeignrevenueApplicationscenariossection;
  currencyRevenueIntro: LandingReturnforeignrevenueCurrencyrevenueintro;
  headerSection: LandingReturnforeignrevenueHeadersection;
  infoDescriptionSection: LandingReturnforeignrevenueInfodescriptionsection;
  questionSection: LandingReturnforeignrevenueQuestionsection;
  registrationSection: LandingReturnforeignrevenueRegistrationsection;
  solvingInvoiceProblemSection: LandingReturnforeignrevenueSolvinginvoiceproblemsection;
  userFormSection: LandingReturnforeignrevenueUserformsection;
  workingProcessSection: LandingReturnforeignrevenueWorkingprocesssection;
  workingStepsSection: LandingReturnforeignrevenueWorkingstepssection;
};

export type LandingReturnforeignrevenueApplicationscenariossection = {
  scenarios: Array<LandingReturnforeignrevenueApplicationscenariossectionScenariosItems>;
  title: Scalars['String']['output'];
};

export type LandingReturnforeignrevenueApplicationscenariossectionScenariosItems = {
  title: Scalars['String']['output'];
};

export type LandingReturnforeignrevenueConnection = {
  edges: Array<LandingReturnforeignrevenueEdge>;
  pageInfo: LandingPageInfo;
  totalCount: Scalars['Int']['output'];
};

export type LandingReturnforeignrevenueCurrencyrevenueintro = {
  description: Scalars['String']['output'];
};

export type LandingReturnforeignrevenueEdge = {
  cursor: Scalars['String']['output'];
  node: LandingReturnforeignrevenueNode;
};

export type LandingReturnforeignrevenueFlat = {
  SEO: LandingReturnforeignrevenueFlatSeo;
  applicationScenariosSection: LandingReturnforeignrevenueFlatApplicationscenariossection;
  currencyRevenueIntro: LandingReturnforeignrevenueFlatCurrencyrevenueintro;
  headerSection: LandingReturnforeignrevenueFlatHeadersection;
  infoDescriptionSection: LandingReturnforeignrevenueFlatInfodescriptionsection;
  questionSection: LandingReturnforeignrevenueFlatQuestionsection;
  registrationSection: LandingReturnforeignrevenueFlatRegistrationsection;
  solvingInvoiceProblemSection: LandingReturnforeignrevenueFlatSolvinginvoiceproblemsection;
  userFormSection: LandingReturnforeignrevenueFlatUserformsection;
  workingProcessSection: LandingReturnforeignrevenueFlatWorkingprocesssection;
  workingStepsSection: LandingReturnforeignrevenueFlatWorkingstepssection;
};

export type LandingReturnforeignrevenueFlatApplicationscenariossection = {
  scenarios: Array<LandingReturnforeignrevenueFlatApplicationscenariossectionScenariosItems>;
  title: Scalars['String']['output'];
};

export type LandingReturnforeignrevenueFlatApplicationscenariossectionScenariosItems = {
  title: Scalars['String']['output'];
};

export type LandingReturnforeignrevenueFlatConnection = {
  edges: Array<LandingReturnforeignrevenueFlatEdge>;
  pageInfo: LandingPageInfo;
  totalCount: Scalars['Int']['output'];
};

export type LandingReturnforeignrevenueFlatCurrencyrevenueintro = {
  description: Scalars['String']['output'];
};

export type LandingReturnforeignrevenueFlatEdge = {
  cursor: Scalars['String']['output'];
  node: LandingReturnforeignrevenueFlat;
};

export type LandingReturnforeignrevenueFlatHeadersection = {
  description: Scalars['String']['output'];
  img: LandingReturnforeignrevenueFlatHeadersectionImg;
  subTitle: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingReturnforeignrevenueFlatHeadersectionImg = {
  extension: Scalars['String']['output'];
  fileId: Scalars['String']['output'];
  fileName: Scalars['String']['output'];
  hash: Scalars['String']['output'];
  height: Scalars['Float']['output'];
  mimeType: Scalars['String']['output'];
  size: Scalars['Float']['output'];
  status: Scalars['String']['output'];
  url: Scalars['String']['output'];
  width: Scalars['Float']['output'];
};

export type LandingReturnforeignrevenueFlatInfodescriptionsection = {
  descriptionBlocks: Array<LandingReturnforeignrevenueFlatInfodescriptionsectionDescriptionblocksItems>;
  title: Scalars['String']['output'];
};

export type LandingReturnforeignrevenueFlatInfodescriptionsectionDescriptionblocksItems = {
  content: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingReturnforeignrevenueFlatQuestionsection = {
  answerNotFound: Scalars['String']['output'];
  questions: Array<LandingReturnforeignrevenueFlatQuestionsectionQuestionsItems>;
};

export type LandingReturnforeignrevenueFlatQuestionsectionQuestionsItems = {
  text: Scalars['String']['output'];
  title: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type LandingReturnforeignrevenueFlatRegistrationsection = {
  title: Scalars['String']['output'];
};

export type LandingReturnforeignrevenueFlatSeo = {
  description: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingReturnforeignrevenueFlatSolvinginvoiceproblemsection = {
  solvingInvoiceProblems: Array<LandingReturnforeignrevenueFlatSolvinginvoiceproblemsectionSolvinginvoiceproblemsItems>;
  solvingProblemsBlock: Array<LandingReturnforeignrevenueFlatSolvinginvoiceproblemsectionSolvingproblemsblockItems>;
  title: Scalars['String']['output'];
};

export type LandingReturnforeignrevenueFlatSolvinginvoiceproblemsectionSolvinginvoiceproblemsItems = {
  client: Scalars['String']['output'];
  description: Scalars['String']['output'];
  summa: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingReturnforeignrevenueFlatSolvinginvoiceproblemsectionSolvingproblemsblockItems = {
  completionTime: Scalars['String']['output'];
  content: Scalars['String']['output'];
  country: LandingCountryFlat;
  currency: Scalars['String']['output'];
  summa: Scalars['String']['output'];
};

export type LandingReturnforeignrevenueFlatUserformsection = {
  description: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingReturnforeignrevenueFlatWorkingprocesssection = {
  title: Scalars['String']['output'];
  workingProcess: Array<LandingReturnforeignrevenueFlatWorkingprocesssectionWorkingprocessItems>;
};

export type LandingReturnforeignrevenueFlatWorkingprocesssectionWorkingprocessItems = {
  description: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingReturnforeignrevenueFlatWorkingstepssection = {
  title: Scalars['String']['output'];
  workingSteps: Array<LandingReturnforeignrevenueFlatWorkingstepssectionWorkingstepsItems>;
};

export type LandingReturnforeignrevenueFlatWorkingstepssectionWorkingstepsItems = {
  description: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingReturnforeignrevenueHeadersection = {
  description: Scalars['String']['output'];
  img: LandingReturnforeignrevenueHeadersectionImg;
  subTitle: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingReturnforeignrevenueHeadersectionImg = {
  extension: Scalars['String']['output'];
  fileId: Scalars['String']['output'];
  fileName: Scalars['String']['output'];
  hash: Scalars['String']['output'];
  height: Scalars['Float']['output'];
  mimeType: Scalars['String']['output'];
  size: Scalars['Float']['output'];
  status: Scalars['String']['output'];
  url: Scalars['String']['output'];
  width: Scalars['Float']['output'];
};

export type LandingReturnforeignrevenueInfodescriptionsection = {
  descriptionBlocks: Array<LandingReturnforeignrevenueInfodescriptionsectionDescriptionblocksItems>;
  title: Scalars['String']['output'];
};

export type LandingReturnforeignrevenueInfodescriptionsectionDescriptionblocksItems = {
  content: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingReturnforeignrevenueNode = {
  createdAt: Scalars['DateTime']['output'];
  createdId: Scalars['String']['output'];
  data: LandingReturnforeignrevenue;
  id: Scalars['String']['output'];
  json: Scalars['JSON']['output'];
  publishedAt: Scalars['DateTime']['output'];
  updatedAt: Scalars['DateTime']['output'];
  versionId: Scalars['String']['output'];
};

export type LandingReturnforeignrevenueQuestionsection = {
  answerNotFound: Scalars['String']['output'];
  questions: Array<LandingReturnforeignrevenueQuestionsectionQuestionsItems>;
};

export type LandingReturnforeignrevenueQuestionsectionQuestionsItems = {
  text: Scalars['String']['output'];
  title: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type LandingReturnforeignrevenueRegistrationsection = {
  title: Scalars['String']['output'];
};

export type LandingReturnforeignrevenueSeo = {
  description: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingReturnforeignrevenueSolvinginvoiceproblemsection = {
  solvingInvoiceProblems: Array<LandingReturnforeignrevenueSolvinginvoiceproblemsectionSolvinginvoiceproblemsItems>;
  solvingProblemsBlock: Array<LandingReturnforeignrevenueSolvinginvoiceproblemsectionSolvingproblemsblockItems>;
  title: Scalars['String']['output'];
};

export type LandingReturnforeignrevenueSolvinginvoiceproblemsectionSolvinginvoiceproblemsItems = {
  client: Scalars['String']['output'];
  description: Scalars['String']['output'];
  summa: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingReturnforeignrevenueSolvinginvoiceproblemsectionSolvingproblemsblockItems = {
  completionTime: Scalars['String']['output'];
  content: Scalars['String']['output'];
  country: LandingCountryNode;
  currency: Scalars['String']['output'];
  summa: Scalars['String']['output'];
};

export type LandingReturnforeignrevenueUserformsection = {
  description: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingReturnforeignrevenueWorkingprocesssection = {
  title: Scalars['String']['output'];
  workingProcess: Array<LandingReturnforeignrevenueWorkingprocesssectionWorkingprocessItems>;
};

export type LandingReturnforeignrevenueWorkingprocesssectionWorkingprocessItems = {
  description: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingReturnforeignrevenueWorkingstepssection = {
  title: Scalars['String']['output'];
  workingSteps: Array<LandingReturnforeignrevenueWorkingstepssectionWorkingstepsItems>;
};

export type LandingReturnforeignrevenueWorkingstepssectionWorkingstepsItems = {
  description: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingReturnforeignrevenuesWhereInput = {
  AND?: InputMaybe<Array<LandingReturnforeignrevenuesWhereInput>>;
  NOT?: InputMaybe<Array<LandingReturnforeignrevenuesWhereInput>>;
  OR?: InputMaybe<Array<LandingReturnforeignrevenuesWhereInput>>;
  createdAt?: InputMaybe<LandingDateTimeFilter>;
  createdId?: InputMaybe<LandingStringFilter>;
  data?: InputMaybe<LandingJsonFilter>;
  id?: InputMaybe<LandingStringFilter>;
  publishedAt?: InputMaybe<LandingDateTimeFilter>;
  readonly?: InputMaybe<LandingBoolFilter>;
  updatedAt?: InputMaybe<LandingDateTimeFilter>;
  versionId?: InputMaybe<LandingStringFilter>;
};

export enum LandingSortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type LandingStringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<LandingFilterStringMode>;
  not?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type LandingTransportationpayment = {
  FAQ: LandingTransportationpaymentFaq;
  SEO: LandingTransportationpaymentSeo;
  contactPromptBlock: LandingTransportationpaymentContactpromptblock;
  helpPaymentBlock: LandingTransportationpaymentHelppaymentblock;
  paymentOptionsBlock: LandingTransportationpaymentPaymentoptionsblock;
  solvingProblemsBlock: Array<LandingTransportationpaymentSolvingproblemsblockItems>;
  titleBlock: LandingTransportationpaymentTitleblock;
  whyVedMasterBlock: LandingTransportationpaymentWhyvedmasterblock;
  workProcessBlock: LandingTransportationpaymentWorkprocessblock;
};

export type LandingTransportationpaymentConnection = {
  edges: Array<LandingTransportationpaymentEdge>;
  pageInfo: LandingPageInfo;
  totalCount: Scalars['Int']['output'];
};

export type LandingTransportationpaymentContactpromptblock = {
  text: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingTransportationpaymentEdge = {
  cursor: Scalars['String']['output'];
  node: LandingTransportationpaymentNode;
};

export type LandingTransportationpaymentFaq = {
  questions: Array<LandingTransportationpaymentFaqQuestionsItems>;
  title: Scalars['String']['output'];
};

export type LandingTransportationpaymentFaqQuestionsItems = {
  text: Scalars['String']['output'];
  title: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type LandingTransportationpaymentFlat = {
  FAQ: LandingTransportationpaymentFlatFaq;
  SEO: LandingTransportationpaymentFlatSeo;
  contactPromptBlock: LandingTransportationpaymentFlatContactpromptblock;
  helpPaymentBlock: LandingTransportationpaymentFlatHelppaymentblock;
  paymentOptionsBlock: LandingTransportationpaymentFlatPaymentoptionsblock;
  solvingProblemsBlock: Array<LandingTransportationpaymentFlatSolvingproblemsblockItems>;
  titleBlock: LandingTransportationpaymentFlatTitleblock;
  whyVedMasterBlock: LandingTransportationpaymentFlatWhyvedmasterblock;
  workProcessBlock: LandingTransportationpaymentFlatWorkprocessblock;
};

export type LandingTransportationpaymentFlatConnection = {
  edges: Array<LandingTransportationpaymentFlatEdge>;
  pageInfo: LandingPageInfo;
  totalCount: Scalars['Int']['output'];
};

export type LandingTransportationpaymentFlatContactpromptblock = {
  text: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingTransportationpaymentFlatEdge = {
  cursor: Scalars['String']['output'];
  node: LandingTransportationpaymentFlat;
};

export type LandingTransportationpaymentFlatFaq = {
  questions: Array<LandingTransportationpaymentFlatFaqQuestionsItems>;
  title: Scalars['String']['output'];
};

export type LandingTransportationpaymentFlatFaqQuestionsItems = {
  text: Scalars['String']['output'];
  title: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type LandingTransportationpaymentFlatHelppaymentblock = {
  items: Array<LandingTransportationpaymentFlatHelppaymentblockItemsItems>;
  title: Scalars['String']['output'];
};

export type LandingTransportationpaymentFlatHelppaymentblockItemsItems = {
  text: Scalars['String']['output'];
};

export type LandingTransportationpaymentFlatPaymentoptionsblock = {
  content: Array<LandingTransportationpaymentFlatPaymentoptionsblockContentItems>;
  description: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingTransportationpaymentFlatPaymentoptionsblockContentItems = {
  description: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingTransportationpaymentFlatSeo = {
  description: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingTransportationpaymentFlatSolvingproblemsblockItems = {
  content: Scalars['String']['output'];
  country: LandingCountryFlat;
};

export type LandingTransportationpaymentFlatTitleblock = {
  description: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingTransportationpaymentFlatWhyvedmasterblock = {
  items: Array<LandingTransportationpaymentFlatWhyvedmasterblockItemsItems>;
  title: Scalars['String']['output'];
};

export type LandingTransportationpaymentFlatWhyvedmasterblockItemsItems = {
  description: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingTransportationpaymentFlatWorkprocessblock = {
  items: Array<LandingTransportationpaymentFlatWorkprocessblockItemsItems>;
  title: Scalars['String']['output'];
};

export type LandingTransportationpaymentFlatWorkprocessblockItemsItems = {
  description: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingTransportationpaymentHelppaymentblock = {
  items: Array<LandingTransportationpaymentHelppaymentblockItemsItems>;
  title: Scalars['String']['output'];
};

export type LandingTransportationpaymentHelppaymentblockItemsItems = {
  text: Scalars['String']['output'];
};

export type LandingTransportationpaymentNode = {
  createdAt: Scalars['DateTime']['output'];
  createdId: Scalars['String']['output'];
  data: LandingTransportationpayment;
  id: Scalars['String']['output'];
  json: Scalars['JSON']['output'];
  publishedAt: Scalars['DateTime']['output'];
  updatedAt: Scalars['DateTime']['output'];
  versionId: Scalars['String']['output'];
};

export type LandingTransportationpaymentPaymentoptionsblock = {
  content: Array<LandingTransportationpaymentPaymentoptionsblockContentItems>;
  description: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingTransportationpaymentPaymentoptionsblockContentItems = {
  description: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingTransportationpaymentSeo = {
  description: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingTransportationpaymentSolvingproblemsblockItems = {
  content: Scalars['String']['output'];
  country: LandingCountryNode;
};

export type LandingTransportationpaymentTitleblock = {
  description: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingTransportationpaymentWhyvedmasterblock = {
  items: Array<LandingTransportationpaymentWhyvedmasterblockItemsItems>;
  title: Scalars['String']['output'];
};

export type LandingTransportationpaymentWhyvedmasterblockItemsItems = {
  description: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingTransportationpaymentWorkprocessblock = {
  items: Array<LandingTransportationpaymentWorkprocessblockItemsItems>;
  title: Scalars['String']['output'];
};

export type LandingTransportationpaymentWorkprocessblockItemsItems = {
  description: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingTransportationpaymentsWhereInput = {
  AND?: InputMaybe<Array<LandingTransportationpaymentsWhereInput>>;
  NOT?: InputMaybe<Array<LandingTransportationpaymentsWhereInput>>;
  OR?: InputMaybe<Array<LandingTransportationpaymentsWhereInput>>;
  createdAt?: InputMaybe<LandingDateTimeFilter>;
  createdId?: InputMaybe<LandingStringFilter>;
  data?: InputMaybe<LandingJsonFilter>;
  id?: InputMaybe<LandingStringFilter>;
  publishedAt?: InputMaybe<LandingDateTimeFilter>;
  readonly?: InputMaybe<LandingBoolFilter>;
  updatedAt?: InputMaybe<LandingDateTimeFilter>;
  versionId?: InputMaybe<LandingStringFilter>;
};

export type Landingmain = {
  cases: LandingmainCases;
  cloud: LandingmainCloud;
  code: LandingmainCode;
  docs: LandingmainDocs;
  features: LandingmainFeatures;
  github: Scalars['String']['output'];
  preview: LandingmainPreview;
  texts: LandingmainTexts;
};

export type LandingmainCases = {
  items: Array<LandingCaseNode>;
  title: Scalars['String']['output'];
};

export type LandingmainCloud = {
  label: Scalars['String']['output'];
  link: Scalars['String']['output'];
};

export type LandingmainCode = {
  docker: LandingCodeNode;
  dockerCompose: LandingCodeNode;
};

export type LandingmainConnection = {
  edges: Array<LandingmainEdge>;
  pageInfo: LandingPageInfo;
  totalCount: Scalars['Int']['output'];
};

export type LandingmainDocs = {
  label: Scalars['String']['output'];
  link: Scalars['String']['output'];
};

export type LandingmainEdge = {
  cursor: Scalars['String']['output'];
  node: LandingmainNode;
};

export type LandingmainFeatures = {
  items: Array<LandingFeatureNode>;
  title: Scalars['String']['output'];
};

export type LandingmainFlat = {
  cases: LandingmainFlatCases;
  cloud: LandingmainFlatCloud;
  code: LandingmainFlatCode;
  docs: LandingmainFlatDocs;
  features: LandingmainFlatFeatures;
  github: Scalars['String']['output'];
  preview: LandingmainFlatPreview;
  texts: LandingmainFlatTexts;
};

export type LandingmainFlatCases = {
  items: Array<LandingCaseFlat>;
  title: Scalars['String']['output'];
};

export type LandingmainFlatCloud = {
  label: Scalars['String']['output'];
  link: Scalars['String']['output'];
};

export type LandingmainFlatCode = {
  docker: LandingCodeFlat;
  dockerCompose: LandingCodeFlat;
};

export type LandingmainFlatConnection = {
  edges: Array<LandingmainFlatEdge>;
  pageInfo: LandingPageInfo;
  totalCount: Scalars['Int']['output'];
};

export type LandingmainFlatDocs = {
  label: Scalars['String']['output'];
  link: Scalars['String']['output'];
};

export type LandingmainFlatEdge = {
  cursor: Scalars['String']['output'];
  node: LandingmainFlat;
};

export type LandingmainFlatFeatures = {
  items: Array<LandingFeatureFlat>;
  title: Scalars['String']['output'];
};

export type LandingmainFlatPreview = {
  extension: Scalars['String']['output'];
  fileId: Scalars['String']['output'];
  fileName: Scalars['String']['output'];
  hash: Scalars['String']['output'];
  height: Scalars['Float']['output'];
  mimeType: Scalars['String']['output'];
  size: Scalars['Float']['output'];
  status: Scalars['String']['output'];
  url: Scalars['String']['output'];
  width: Scalars['Float']['output'];
};

export type LandingmainFlatTexts = {
  description: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingmainNode = {
  createdAt: Scalars['DateTime']['output'];
  createdId: Scalars['String']['output'];
  data: Landingmain;
  id: Scalars['String']['output'];
  json: Scalars['JSON']['output'];
  publishedAt: Scalars['DateTime']['output'];
  updatedAt: Scalars['DateTime']['output'];
  versionId: Scalars['String']['output'];
};

export type LandingmainPreview = {
  extension: Scalars['String']['output'];
  fileId: Scalars['String']['output'];
  fileName: Scalars['String']['output'];
  hash: Scalars['String']['output'];
  height: Scalars['Float']['output'];
  mimeType: Scalars['String']['output'];
  size: Scalars['Float']['output'];
  status: Scalars['String']['output'];
  url: Scalars['String']['output'];
  width: Scalars['Float']['output'];
};

export type LandingmainTexts = {
  description: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingmainsWhereInput = {
  AND?: InputMaybe<Array<LandingmainsWhereInput>>;
  NOT?: InputMaybe<Array<LandingmainsWhereInput>>;
  OR?: InputMaybe<Array<LandingmainsWhereInput>>;
  createdAt?: InputMaybe<LandingDateTimeFilter>;
  createdId?: InputMaybe<LandingStringFilter>;
  data?: InputMaybe<LandingJsonFilter>;
  id?: InputMaybe<LandingStringFilter>;
  publishedAt?: InputMaybe<LandingDateTimeFilter>;
  readonly?: InputMaybe<LandingBoolFilter>;
  updatedAt?: InputMaybe<LandingDateTimeFilter>;
  versionId?: InputMaybe<LandingStringFilter>;
};

export type Query = {
  Main: LandingMainNode;
  MainFlat: LandingMainFlat;
  Mains: LandingMainConnection;
  MainsFlat: LandingMainFlatConnection;
  _entities: Array<Maybe<_Entity>>;
  _service: _Service;
  article: LandingArticleNode;
  articleFlat: LandingArticleFlat;
  articlecategories: LandingArticlecategoryConnection;
  articlecategoriesFlat: LandingArticlecategoryFlatConnection;
  articlecategory: LandingArticlecategoryNode;
  articlecategoryFlat: LandingArticlecategoryFlat;
  articles: LandingArticleConnection;
  articlesFlat: LandingArticleFlatConnection;
  author: LandingAuthorNode;
  authorFlat: LandingAuthorFlat;
  authors: LandingAuthorConnection;
  authorsFlat: LandingAuthorFlatConnection;
  case: LandingCaseNode;
  caseFlat: LandingCaseFlat;
  cases: LandingCaseConnection;
  casesFlat: LandingCaseFlatConnection;
  code: LandingCodeNode;
  codeFlat: LandingCodeFlat;
  codes: LandingCodeConnection;
  codesFlat: LandingCodeFlatConnection;
  constant: LandingConstantNode;
  constantFlat: Scalars['String']['output'];
  constants: LandingConstantConnection;
  constantsFlat: LandingConstantFlatConnection;
  countries: LandingCountryConnection;
  countriesFlat: LandingCountryFlatConnection;
  country: LandingCountryNode;
  countryFlat: LandingCountryFlat;
  countrytransfers: LandingCountrytransfersNode;
  countrytransfersFlat: LandingCountrytransfersFlat;
  countrytransferses: LandingCountrytransfersConnection;
  countrytransfersesFlat: LandingCountrytransfersFlatConnection;
  feature: LandingFeatureNode;
  featureFlat: LandingFeatureFlat;
  features: LandingFeatureConnection;
  featuresFlat: LandingFeatureFlatConnection;
  foreignpayment: LandingForeignpaymentNode;
  foreignpaymentFlat: LandingForeignpaymentFlat;
  foreignpayments: LandingForeignpaymentConnection;
  foreignpaymentsFlat: LandingForeignpaymentFlatConnection;
  glossaries: LandingGlossaryConnection;
  glossariesFlat: LandingGlossaryFlatConnection;
  glossary: LandingGlossaryNode;
  glossaryFlat: LandingGlossaryFlat;
  glossarytag: LandingGlossarytagNode;
  glossarytagFlat: LandingGlossarytagFlat;
  glossarytags: LandingGlossarytagConnection;
  glossarytagsFlat: LandingGlossarytagFlatConnection;
  grossaryterm: LandingGrossarytermNode;
  grossarytermFlat: LandingGrossarytermFlat;
  grossaryterms: LandingGrossarytermConnection;
  grossarytermsFlat: LandingGrossarytermFlatConnection;
  importpaymentpage: LandingImportpaymentpageNode;
  importpaymentpageFlat: LandingImportpaymentpageFlat;
  importpaymentpages: LandingImportpaymentpageConnection;
  importpaymentpagesFlat: LandingImportpaymentpageFlatConnection;
  invoice: LandingInvoiceNode;
  invoiceFlat: LandingInvoiceFlat;
  invoicepage: LandingInvoicepageNode;
  invoicepageFlat: LandingInvoicepageFlat;
  invoicepagedeprected: LandingInvoicepagedeprectedNode;
  invoicepagedeprectedFlat: LandingInvoicepagedeprectedFlat;
  invoicepagedeprecteds: LandingInvoicepagedeprectedConnection;
  invoicepagedeprectedsFlat: LandingInvoicepagedeprectedFlatConnection;
  invoicepages: LandingInvoicepageConnection;
  invoicepagesFlat: LandingInvoicepageFlatConnection;
  invoices: LandingInvoiceConnection;
  invoicesFlat: LandingInvoiceFlatConnection;
  main: LandingmainNode;
  mainFlat: LandingmainFlat;
  mains: LandingmainConnection;
  mainsFlat: LandingmainFlatConnection;
  mention: LandingMentionNode;
  mentionFlat: LandingMentionFlat;
  mentions: LandingMentionConnection;
  mentionsFlat: LandingMentionFlatConnection;
  payment: LandingPaymentNode;
  paymentFlat: LandingPaymentFlat;
  payments: LandingPaymentConnection;
  paymentsFlat: LandingPaymentFlatConnection;
  returnforeignrevenue: LandingReturnforeignrevenueNode;
  returnforeignrevenueFlat: LandingReturnforeignrevenueFlat;
  returnforeignrevenues: LandingReturnforeignrevenueConnection;
  returnforeignrevenuesFlat: LandingReturnforeignrevenueFlatConnection;
  transportationpayment: LandingTransportationpaymentNode;
  transportationpaymentFlat: LandingTransportationpaymentFlat;
  transportationpayments: LandingTransportationpaymentConnection;
  transportationpaymentsFlat: LandingTransportationpaymentFlatConnection;
};


export type QueryMainArgs = {
  id: Scalars['String']['input'];
};


export type QueryMainFlatArgs = {
  id: Scalars['String']['input'];
};


export type QueryMainsArgs = {
  data?: InputMaybe<LandingGetMainsInput>;
};


export type QueryMainsFlatArgs = {
  data?: InputMaybe<LandingGetMainsInput>;
};


export type Query_EntitiesArgs = {
  representations: Array<Scalars['_Any']['input']>;
};


export type QueryArticleArgs = {
  id: Scalars['String']['input'];
};


export type QueryArticleFlatArgs = {
  id: Scalars['String']['input'];
};


export type QueryArticlecategoriesArgs = {
  data?: InputMaybe<LandingGetArticlecategoriesInput>;
};


export type QueryArticlecategoriesFlatArgs = {
  data?: InputMaybe<LandingGetArticlecategoriesInput>;
};


export type QueryArticlecategoryArgs = {
  id: Scalars['String']['input'];
};


export type QueryArticlecategoryFlatArgs = {
  id: Scalars['String']['input'];
};


export type QueryArticlesArgs = {
  data?: InputMaybe<LandingGetArticlesInput>;
};


export type QueryArticlesFlatArgs = {
  data?: InputMaybe<LandingGetArticlesInput>;
};


export type QueryAuthorArgs = {
  id: Scalars['String']['input'];
};


export type QueryAuthorFlatArgs = {
  id: Scalars['String']['input'];
};


export type QueryAuthorsArgs = {
  data?: InputMaybe<LandingGetAuthorsInput>;
};


export type QueryAuthorsFlatArgs = {
  data?: InputMaybe<LandingGetAuthorsInput>;
};


export type QueryCaseArgs = {
  id: Scalars['String']['input'];
};


export type QueryCaseFlatArgs = {
  id: Scalars['String']['input'];
};


export type QueryCasesArgs = {
  data?: InputMaybe<LandingGetCasesInput>;
};


export type QueryCasesFlatArgs = {
  data?: InputMaybe<LandingGetCasesInput>;
};


export type QueryCodeArgs = {
  id: Scalars['String']['input'];
};


export type QueryCodeFlatArgs = {
  id: Scalars['String']['input'];
};


export type QueryCodesArgs = {
  data?: InputMaybe<LandingGetCodesInput>;
};


export type QueryCodesFlatArgs = {
  data?: InputMaybe<LandingGetCodesInput>;
};


export type QueryConstantArgs = {
  id: Scalars['String']['input'];
};


export type QueryConstantFlatArgs = {
  id: Scalars['String']['input'];
};


export type QueryConstantsArgs = {
  data?: InputMaybe<LandingGetConstantsInput>;
};


export type QueryConstantsFlatArgs = {
  data?: InputMaybe<LandingGetConstantsInput>;
};


export type QueryCountriesArgs = {
  data?: InputMaybe<LandingGetCountriesInput>;
};


export type QueryCountriesFlatArgs = {
  data?: InputMaybe<LandingGetCountriesInput>;
};


export type QueryCountryArgs = {
  id: Scalars['String']['input'];
};


export type QueryCountryFlatArgs = {
  id: Scalars['String']['input'];
};


export type QueryCountrytransfersArgs = {
  id: Scalars['String']['input'];
};


export type QueryCountrytransfersFlatArgs = {
  id: Scalars['String']['input'];
};


export type QueryCountrytransfersesArgs = {
  data?: InputMaybe<LandingGetCountrytransfersesInput>;
};


export type QueryCountrytransfersesFlatArgs = {
  data?: InputMaybe<LandingGetCountrytransfersesInput>;
};


export type QueryFeatureArgs = {
  id: Scalars['String']['input'];
};


export type QueryFeatureFlatArgs = {
  id: Scalars['String']['input'];
};


export type QueryFeaturesArgs = {
  data?: InputMaybe<LandingGetFeaturesInput>;
};


export type QueryFeaturesFlatArgs = {
  data?: InputMaybe<LandingGetFeaturesInput>;
};


export type QueryForeignpaymentArgs = {
  id: Scalars['String']['input'];
};


export type QueryForeignpaymentFlatArgs = {
  id: Scalars['String']['input'];
};


export type QueryForeignpaymentsArgs = {
  data?: InputMaybe<LandingGetForeignpaymentsInput>;
};


export type QueryForeignpaymentsFlatArgs = {
  data?: InputMaybe<LandingGetForeignpaymentsInput>;
};


export type QueryGlossariesArgs = {
  data?: InputMaybe<LandingGetGlossariesInput>;
};


export type QueryGlossariesFlatArgs = {
  data?: InputMaybe<LandingGetGlossariesInput>;
};


export type QueryGlossaryArgs = {
  id: Scalars['String']['input'];
};


export type QueryGlossaryFlatArgs = {
  id: Scalars['String']['input'];
};


export type QueryGlossarytagArgs = {
  id: Scalars['String']['input'];
};


export type QueryGlossarytagFlatArgs = {
  id: Scalars['String']['input'];
};


export type QueryGlossarytagsArgs = {
  data?: InputMaybe<LandingGetGlossarytagsInput>;
};


export type QueryGlossarytagsFlatArgs = {
  data?: InputMaybe<LandingGetGlossarytagsInput>;
};


export type QueryGrossarytermArgs = {
  id: Scalars['String']['input'];
};


export type QueryGrossarytermFlatArgs = {
  id: Scalars['String']['input'];
};


export type QueryGrossarytermsArgs = {
  data?: InputMaybe<LandingGetGrossarytermsInput>;
};


export type QueryGrossarytermsFlatArgs = {
  data?: InputMaybe<LandingGetGrossarytermsInput>;
};


export type QueryImportpaymentpageArgs = {
  id: Scalars['String']['input'];
};


export type QueryImportpaymentpageFlatArgs = {
  id: Scalars['String']['input'];
};


export type QueryImportpaymentpagesArgs = {
  data?: InputMaybe<LandingGetImportpaymentpagesInput>;
};


export type QueryImportpaymentpagesFlatArgs = {
  data?: InputMaybe<LandingGetImportpaymentpagesInput>;
};


export type QueryInvoiceArgs = {
  id: Scalars['String']['input'];
};


export type QueryInvoiceFlatArgs = {
  id: Scalars['String']['input'];
};


export type QueryInvoicepageArgs = {
  id: Scalars['String']['input'];
};


export type QueryInvoicepageFlatArgs = {
  id: Scalars['String']['input'];
};


export type QueryInvoicepagedeprectedArgs = {
  id: Scalars['String']['input'];
};


export type QueryInvoicepagedeprectedFlatArgs = {
  id: Scalars['String']['input'];
};


export type QueryInvoicepagedeprectedsArgs = {
  data?: InputMaybe<LandingGetInvoicepagedeprectedsInput>;
};


export type QueryInvoicepagedeprectedsFlatArgs = {
  data?: InputMaybe<LandingGetInvoicepagedeprectedsInput>;
};


export type QueryInvoicepagesArgs = {
  data?: InputMaybe<LandingGetInvoicepagesInput>;
};


export type QueryInvoicepagesFlatArgs = {
  data?: InputMaybe<LandingGetInvoicepagesInput>;
};


export type QueryInvoicesArgs = {
  data?: InputMaybe<LandingGetInvoicesInput>;
};


export type QueryInvoicesFlatArgs = {
  data?: InputMaybe<LandingGetInvoicesInput>;
};


export type QueryMainArgs = {
  id: Scalars['String']['input'];
};


export type QueryMainFlatArgs = {
  id: Scalars['String']['input'];
};


export type QueryMainsArgs = {
  data?: InputMaybe<LandingGetmainsInput>;
};


export type QueryMainsFlatArgs = {
  data?: InputMaybe<LandingGetmainsInput>;
};


export type QueryMentionArgs = {
  id: Scalars['String']['input'];
};


export type QueryMentionFlatArgs = {
  id: Scalars['String']['input'];
};


export type QueryMentionsArgs = {
  data?: InputMaybe<LandingGetMentionsInput>;
};


export type QueryMentionsFlatArgs = {
  data?: InputMaybe<LandingGetMentionsInput>;
};


export type QueryPaymentArgs = {
  id: Scalars['String']['input'];
};


export type QueryPaymentFlatArgs = {
  id: Scalars['String']['input'];
};


export type QueryPaymentsArgs = {
  data?: InputMaybe<LandingGetPaymentsInput>;
};


export type QueryPaymentsFlatArgs = {
  data?: InputMaybe<LandingGetPaymentsInput>;
};


export type QueryReturnforeignrevenueArgs = {
  id: Scalars['String']['input'];
};


export type QueryReturnforeignrevenueFlatArgs = {
  id: Scalars['String']['input'];
};


export type QueryReturnforeignrevenuesArgs = {
  data?: InputMaybe<LandingGetReturnforeignrevenuesInput>;
};


export type QueryReturnforeignrevenuesFlatArgs = {
  data?: InputMaybe<LandingGetReturnforeignrevenuesInput>;
};


export type QueryTransportationpaymentArgs = {
  id: Scalars['String']['input'];
};


export type QueryTransportationpaymentFlatArgs = {
  id: Scalars['String']['input'];
};


export type QueryTransportationpaymentsArgs = {
  data?: InputMaybe<LandingGetTransportationpaymentsInput>;
};


export type QueryTransportationpaymentsFlatArgs = {
  data?: InputMaybe<LandingGetTransportationpaymentsInput>;
};

export type _Entity = LandingArticleNode | LandingArticlecategoryNode | LandingAuthorNode | LandingCaseFlat | LandingCaseNode | LandingCodeNode | LandingConstantNode | LandingCountryNode | LandingCountrytransfersNode | LandingFeatureFlat | LandingFeatureNode | LandingForeignpaymentNode | LandingGlossaryNode | LandingGlossarytagNode | LandingGrossarytermFlat | LandingGrossarytermNode | LandingImportpaymentpageNode | LandingInvoiceNode | LandingInvoicepageNode | LandingInvoicepagedeprectedNode | LandingMainNode | LandingMentionFlat | LandingMentionNode | LandingPaymentNode | LandingReturnforeignrevenueNode | LandingTransportationpaymentNode | LandingmainNode;

export type _Service = {
  /** The sdl representing the federated service capabilities. Includes federation directives, removes federation types, and includes rest of full schema after schema directives have been applied */
  sdl?: Maybe<Scalars['String']['output']>;
};

export type FeatureFragment = { featureId: string, title: string, description: string, file: { width: number, height: number, url: string, mimeType: string } };

export type CaseFragment = { caseId: string, title: string, description: string, file: { width: number, height: number, url: string, mimeType: string } };

export type MainFeaturesFragment = { title: string, items: Array<{ featureId: string, title: string, description: string, file: { width: number, height: number, url: string, mimeType: string } }> };

export type MainCasesFragment = { title: string, items: Array<{ caseId: string, title: string, description: string, file: { width: number, height: number, url: string, mimeType: string } }> };

export type CodeFragment = { docker: { code: string, title: string }, dockerCompose: { title: string, code: string } };

export type MainPageQueryVariables = Exact<{ [key: string]: never; }>;


export type MainPageQuery = { version: string, mainFlat: { github: string, texts: { title: string, description: string }, cloud: { label: string, link: string }, docs: { link: string, label: string }, preview: { url: string }, code: { docker: { code: string, title: string }, dockerCompose: { title: string, code: string } }, features: { title: string, items: Array<{ featureId: string, title: string, description: string, file: { width: number, height: number, url: string, mimeType: string } }> }, cases: { title: string, items: Array<{ caseId: string, title: string, description: string, file: { width: number, height: number, url: string, mimeType: string } }> } } };

export const FeatureFragmentDoc = gql`
    fragment Feature on LandingFeatureFlat {
  featureId
  title
  description
  file {
    width
    height
    url
    mimeType
  }
}
    `;
export const MainFeaturesFragmentDoc = gql`
    fragment MainFeatures on LandingmainFlatFeatures {
  title
  items {
    ...Feature
  }
}
    ${FeatureFragmentDoc}`;
export const CaseFragmentDoc = gql`
    fragment Case on LandingCaseFlat {
  caseId
  title
  description
  file {
    width
    height
    url
    mimeType
  }
}
    `;
export const MainCasesFragmentDoc = gql`
    fragment MainCases on LandingmainFlatCases {
  title
  items {
    ...Case
  }
}
    ${CaseFragmentDoc}`;
export const CodeFragmentDoc = gql`
    fragment Code on LandingmainFlatCode {
  docker {
    code
    title
  }
  dockerCompose {
    title
    code
  }
}
    `;
export const MainPageDocument = gql`
    query mainPage {
  version: constantFlat(id: "version")
  mainFlat(id: "main") {
    texts {
      title
      description
    }
    github
    cloud {
      label
      link
    }
    docs {
      link
      label
    }
    preview {
      url
    }
    code {
      docker {
        code
        title
      }
      dockerCompose {
        title
        code
      }
    }
    features {
      ...MainFeatures
    }
    cases {
      ...MainCases
    }
  }
}
    ${MainFeaturesFragmentDoc}
${MainCasesFragmentDoc}`;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    mainPage(variables?: MainPageQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<MainPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<MainPageQuery>({ document: MainPageDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'mainPage', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;