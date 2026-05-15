// @ts-ignore
/** Internal type. DO NOT USE DIRECTLY. */
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** Internal type. DO NOT USE DIRECTLY. */
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
import { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
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
  _Any: { input: unknown; output: unknown; }
};

export type LandingBoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<Scalars['Boolean']['input']>;
};

export type LandingBulkMutationResult = {
  count: Scalars['Int']['output'];
  success: Scalars['Boolean']['output'];
};

export type LandingCode_Step = {
  code: Scalars['String']['output'];
  description: Scalars['String']['output'];
  extraCode: Scalars['String']['output'];
  extraLabel: Scalars['String']['output'];
  label: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingCode_StepConnection = {
  edges: Array<LandingCode_StepEdge>;
  pageInfo: LandingPageInfo;
  totalCount: Scalars['Int']['output'];
};

export type LandingCode_StepEdge = {
  cursor: Scalars['String']['output'];
  node: LandingCode_StepNode;
};

export type LandingCode_StepFlat = {
  code: Scalars['String']['output'];
  description: Scalars['String']['output'];
  extraCode: Scalars['String']['output'];
  extraLabel: Scalars['String']['output'];
  label: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingCode_StepFlatConnection = {
  edges: Array<LandingCode_StepFlatEdge>;
  pageInfo: LandingPageInfo;
  totalCount: Scalars['Int']['output'];
};

export type LandingCode_StepFlatEdge = {
  cursor: Scalars['String']['output'];
  node: LandingCode_StepFlat;
};

export type LandingCode_StepNode = {
  createdAt: Scalars['DateTime']['output'];
  createdId: Scalars['String']['output'];
  data: LandingCode_Step;
  id: Scalars['String']['output'];
  json: Scalars['JSON']['output'];
  publishedAt: Scalars['DateTime']['output'];
  updatedAt: Scalars['DateTime']['output'];
  versionId: Scalars['String']['output'];
};

export type LandingCode_StepsWhereInput = {
  AND?: InputMaybe<Array<LandingCode_StepsWhereInput>>;
  NOT?: InputMaybe<Array<LandingCode_StepsWhereInput>>;
  OR?: InputMaybe<Array<LandingCode_StepsWhereInput>>;
  createdAt?: InputMaybe<LandingDateTimeFilter>;
  createdId?: InputMaybe<LandingStringFilter>;
  data?: InputMaybe<LandingJsonFilter>;
  id?: InputMaybe<LandingStringFilter>;
  publishedAt?: InputMaybe<LandingDateTimeFilter>;
  readonly?: InputMaybe<LandingBoolFilter>;
  updatedAt?: InputMaybe<LandingDateTimeFilter>;
  versionId?: InputMaybe<LandingStringFilter>;
};

export type LandingCreateCode_StepInput = {
  data: Scalars['JSON']['input'];
  id: Scalars['String']['input'];
};

export type LandingCreateCode_StepsInput = {
  rows: Array<LandingCreateCode_StepsRowInput>;
};

export type LandingCreateCode_StepsRowInput = {
  data: Scalars['JSON']['input'];
  id: Scalars['String']['input'];
};

export type LandingCreateFeatureInput = {
  data: Scalars['JSON']['input'];
  id: Scalars['String']['input'];
};

export type LandingCreateFeaturesInput = {
  rows: Array<LandingCreateFeaturesRowInput>;
};

export type LandingCreateFeaturesRowInput = {
  data: Scalars['JSON']['input'];
  id: Scalars['String']['input'];
};

export type LandingCreateMainInput = {
  data: Scalars['JSON']['input'];
  id: Scalars['String']['input'];
};

export type LandingCreateMainsInput = {
  rows: Array<LandingCreateMainsRowInput>;
};

export type LandingCreateMainsRowInput = {
  data: Scalars['JSON']['input'];
  id: Scalars['String']['input'];
};

export type LandingCreateUse_CaseInput = {
  data: Scalars['JSON']['input'];
  id: Scalars['String']['input'];
};

export type LandingCreateUse_CasesInput = {
  rows: Array<LandingCreateUse_CasesRowInput>;
};

export type LandingCreateUse_CasesRowInput = {
  data: Scalars['JSON']['input'];
  id: Scalars['String']['input'];
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

export type LandingDeleteCode_StepsInput = {
  rowIds: Array<Scalars['String']['input']>;
};

export type LandingDeleteFeaturesInput = {
  rowIds: Array<Scalars['String']['input']>;
};

export type LandingDeleteMainsInput = {
  rowIds: Array<Scalars['String']['input']>;
};

export type LandingDeleteResult = {
  id: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type LandingDeleteUse_CasesInput = {
  rowIds: Array<Scalars['String']['input']>;
};

export type LandingFeature = {
  description: Scalars['String']['output'];
  link: Scalars['String']['output'];
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

export type LandingFeatureFlat = {
  description: Scalars['String']['output'];
  link: Scalars['String']['output'];
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

export type LandingGetCode_StepsInput = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<LandingGetCode_StepsOrderByInput>>;
  where?: InputMaybe<LandingCode_StepsWhereInput>;
};

export enum LandingGetCode_StepsOrderByField {
  CreatedAt = 'createdAt',
  Data = 'data',
  Id = 'id',
  PublishedAt = 'publishedAt',
  UpdatedAt = 'updatedAt'
}

export type LandingGetCode_StepsOrderByInput = {
  aggregation?: InputMaybe<LandingOrderFieldAggregation>;
  direction: LandingSortOrder;
  field: LandingGetCode_StepsOrderByField;
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

export type LandingGetUse_CasesInput = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<LandingGetUse_CasesOrderByInput>>;
  where?: InputMaybe<LandingUse_CasesWhereInput>;
};

export enum LandingGetUse_CasesOrderByField {
  CreatedAt = 'createdAt',
  Data = 'data',
  Id = 'id',
  PublishedAt = 'publishedAt',
  UpdatedAt = 'updatedAt'
}

export type LandingGetUse_CasesOrderByInput = {
  aggregation?: InputMaybe<LandingOrderFieldAggregation>;
  direction: LandingSortOrder;
  field: LandingGetUse_CasesOrderByField;
  path?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<LandingOrderFieldType>;
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
  path?: InputMaybe<Scalars['JSON']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchLanguage?: InputMaybe<LandingSearchLanguage>;
  searchType?: InputMaybe<LandingSearchType>;
  string_contains?: InputMaybe<Scalars['String']['input']>;
  string_ends_with?: InputMaybe<Scalars['String']['input']>;
  string_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export type LandingMain = {
  codeSection: LandingMainCodeSection;
  cta: LandingMainCta;
  features: LandingMainFeatures;
  footer: LandingMainFooter;
  header: LandingMainHeader;
  hero: LandingMainHero;
  image: LandingMainImage;
  openSource: LandingMainOpenSource;
  poweredBy: LandingMainPoweredBy;
  quickStart: LandingMainQuickStart;
  useCases: LandingMainUseCases;
};

export type LandingMainCodeSection = {
  footerLink: Scalars['String']['output'];
  footerLinkLabel: Scalars['String']['output'];
  footerText: Scalars['String']['output'];
  items: Array<LandingCode_StepNode>;
  subtitle: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingMainConnection = {
  edges: Array<LandingMainEdge>;
  pageInfo: LandingPageInfo;
  totalCount: Scalars['Int']['output'];
};

export type LandingMainCta = {
  ctaLabel: Scalars['String']['output'];
  ctaLink: Scalars['String']['output'];
  description: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingMainEdge = {
  cursor: Scalars['String']['output'];
  node: LandingMainNode;
};

export type LandingMainFeatures = {
  items: Array<LandingFeatureNode>;
  title: Scalars['String']['output'];
};

export type LandingMainFlat = {
  codeSection: LandingMainFlatCodeSection;
  cta: LandingMainFlatCta;
  features: LandingMainFlatFeatures;
  footer: LandingMainFlatFooter;
  header: LandingMainFlatHeader;
  hero: LandingMainFlatHero;
  image: LandingMainFlatImage;
  openSource: LandingMainFlatOpenSource;
  poweredBy: LandingMainFlatPoweredBy;
  quickStart: LandingMainFlatQuickStart;
  useCases: LandingMainFlatUseCases;
};

export type LandingMainFlatCodeSection = {
  footerLink: Scalars['String']['output'];
  footerLinkLabel: Scalars['String']['output'];
  footerText: Scalars['String']['output'];
  items: Array<LandingCode_StepFlat>;
  subtitle: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingMainFlatConnection = {
  edges: Array<LandingMainFlatEdge>;
  pageInfo: LandingPageInfo;
  totalCount: Scalars['Int']['output'];
};

export type LandingMainFlatCta = {
  ctaLabel: Scalars['String']['output'];
  ctaLink: Scalars['String']['output'];
  description: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingMainFlatEdge = {
  cursor: Scalars['String']['output'];
  node: LandingMainFlat;
};

export type LandingMainFlatFeatures = {
  items: Array<LandingFeatureFlat>;
  title: Scalars['String']['output'];
};

export type LandingMainFlatFooter = {
  copyright: Scalars['String']['output'];
  links: Array<LandingMainFlatFooterLinksItems>;
};

export type LandingMainFlatFooterLinksItems = {
  label: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type LandingMainFlatHeader = {
  docsLabel: Scalars['String']['output'];
  docsLink: Scalars['String']['output'];
  githubLabel: Scalars['String']['output'];
  githubLink: Scalars['String']['output'];
};

export type LandingMainFlatHero = {
  ctaLabel: Scalars['String']['output'];
  ctaLink: Scalars['String']['output'];
  description: Scalars['String']['output'];
  metrics: Array<LandingMainFlatHeroMetricsItems>;
  subtitle: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingMainFlatHeroMetricsItems = {
  label: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type LandingMainFlatImage = {
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

export type LandingMainFlatOpenSource = {
  badge: Scalars['String']['output'];
  description: Scalars['String']['output'];
  link: Scalars['String']['output'];
  linkLabel: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingMainFlatPoweredBy = {
  description: Scalars['String']['output'];
  link: Scalars['String']['output'];
  linkLabel: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingMainFlatQuickStart = {
  cloudLabel: Scalars['String']['output'];
  cloudLink: Scalars['String']['output'];
  cloudLinkLabel: Scalars['String']['output'];
  cloudText: Scalars['String']['output'];
  deployLink: Scalars['String']['output'];
  deployLinkLabel: Scalars['String']['output'];
  standaloneCmd: Scalars['String']['output'];
  standaloneLabel: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingMainFlatUseCases = {
  items: Array<LandingUse_CaseFlat>;
  title: Scalars['String']['output'];
};

export type LandingMainFooter = {
  copyright: Scalars['String']['output'];
  links: Array<LandingMainFooterLinksItems>;
};

export type LandingMainFooterLinksItems = {
  label: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type LandingMainHeader = {
  docsLabel: Scalars['String']['output'];
  docsLink: Scalars['String']['output'];
  githubLabel: Scalars['String']['output'];
  githubLink: Scalars['String']['output'];
};

export type LandingMainHero = {
  ctaLabel: Scalars['String']['output'];
  ctaLink: Scalars['String']['output'];
  description: Scalars['String']['output'];
  metrics: Array<LandingMainHeroMetricsItems>;
  subtitle: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingMainHeroMetricsItems = {
  label: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type LandingMainImage = {
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

export type LandingMainOpenSource = {
  badge: Scalars['String']['output'];
  description: Scalars['String']['output'];
  link: Scalars['String']['output'];
  linkLabel: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingMainPoweredBy = {
  description: Scalars['String']['output'];
  link: Scalars['String']['output'];
  linkLabel: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingMainQuickStart = {
  cloudLabel: Scalars['String']['output'];
  cloudLink: Scalars['String']['output'];
  cloudLinkLabel: Scalars['String']['output'];
  cloudText: Scalars['String']['output'];
  deployLink: Scalars['String']['output'];
  deployLinkLabel: Scalars['String']['output'];
  standaloneCmd: Scalars['String']['output'];
  standaloneLabel: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingMainUseCases = {
  items: Array<LandingUse_CaseNode>;
  title: Scalars['String']['output'];
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

export type LandingPatchCode_StepInput = {
  id: Scalars['String']['input'];
  patches: Array<LandingPatchOperation>;
};

export type LandingPatchCode_StepsInput = {
  rows: Array<LandingPatchCode_StepsRowInput>;
};

export type LandingPatchCode_StepsRowInput = {
  id: Scalars['String']['input'];
  patches: Array<LandingPatchOperation>;
};

export type LandingPatchFeatureInput = {
  id: Scalars['String']['input'];
  patches: Array<LandingPatchOperation>;
};

export type LandingPatchFeaturesInput = {
  rows: Array<LandingPatchFeaturesRowInput>;
};

export type LandingPatchFeaturesRowInput = {
  id: Scalars['String']['input'];
  patches: Array<LandingPatchOperation>;
};

export type LandingPatchMainInput = {
  id: Scalars['String']['input'];
  patches: Array<LandingPatchOperation>;
};

export type LandingPatchMainsInput = {
  rows: Array<LandingPatchMainsRowInput>;
};

export type LandingPatchMainsRowInput = {
  id: Scalars['String']['input'];
  patches: Array<LandingPatchOperation>;
};

export enum LandingPatchOp {
  Replace = 'replace'
}

export type LandingPatchOperation = {
  op: LandingPatchOp;
  path: Scalars['String']['input'];
  value: Scalars['JSON']['input'];
};

export type LandingPatchUse_CaseInput = {
  id: Scalars['String']['input'];
  patches: Array<LandingPatchOperation>;
};

export type LandingPatchUse_CasesInput = {
  rows: Array<LandingPatchUse_CasesRowInput>;
};

export type LandingPatchUse_CasesRowInput = {
  id: Scalars['String']['input'];
  patches: Array<LandingPatchOperation>;
};

export enum LandingSearchLanguage {
  Arabic = 'arabic',
  Armenian = 'armenian',
  Basque = 'basque',
  Catalan = 'catalan',
  Danish = 'danish',
  Dutch = 'dutch',
  English = 'english',
  Finnish = 'finnish',
  French = 'french',
  German = 'german',
  Greek = 'greek',
  Hindi = 'hindi',
  Hungarian = 'hungarian',
  Indonesian = 'indonesian',
  Irish = 'irish',
  Italian = 'italian',
  Lithuanian = 'lithuanian',
  Nepali = 'nepali',
  Norwegian = 'norwegian',
  Portuguese = 'portuguese',
  Romanian = 'romanian',
  Russian = 'russian',
  Serbian = 'serbian',
  Simple = 'simple',
  Spanish = 'spanish',
  Swedish = 'swedish',
  Tamil = 'tamil',
  Turkish = 'turkish',
  Yiddish = 'yiddish'
}

export enum LandingSearchType {
  Phrase = 'phrase',
  Plain = 'plain',
  Prefix = 'prefix',
  Tsquery = 'tsquery'
}

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

export type LandingUpdateCode_StepInput = {
  data: Scalars['JSON']['input'];
  id: Scalars['String']['input'];
};

export type LandingUpdateCode_StepsInput = {
  rows: Array<LandingUpdateCode_StepsRowInput>;
};

export type LandingUpdateCode_StepsRowInput = {
  data: Scalars['JSON']['input'];
  id: Scalars['String']['input'];
};

export type LandingUpdateFeatureInput = {
  data: Scalars['JSON']['input'];
  id: Scalars['String']['input'];
};

export type LandingUpdateFeaturesInput = {
  rows: Array<LandingUpdateFeaturesRowInput>;
};

export type LandingUpdateFeaturesRowInput = {
  data: Scalars['JSON']['input'];
  id: Scalars['String']['input'];
};

export type LandingUpdateMainInput = {
  data: Scalars['JSON']['input'];
  id: Scalars['String']['input'];
};

export type LandingUpdateMainsInput = {
  rows: Array<LandingUpdateMainsRowInput>;
};

export type LandingUpdateMainsRowInput = {
  data: Scalars['JSON']['input'];
  id: Scalars['String']['input'];
};

export type LandingUpdateUse_CaseInput = {
  data: Scalars['JSON']['input'];
  id: Scalars['String']['input'];
};

export type LandingUpdateUse_CasesInput = {
  rows: Array<LandingUpdateUse_CasesRowInput>;
};

export type LandingUpdateUse_CasesRowInput = {
  data: Scalars['JSON']['input'];
  id: Scalars['String']['input'];
};

export type LandingUse_Case = {
  description: Scalars['String']['output'];
  link: Scalars['String']['output'];
  linkLabel: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingUse_CaseConnection = {
  edges: Array<LandingUse_CaseEdge>;
  pageInfo: LandingPageInfo;
  totalCount: Scalars['Int']['output'];
};

export type LandingUse_CaseEdge = {
  cursor: Scalars['String']['output'];
  node: LandingUse_CaseNode;
};

export type LandingUse_CaseFlat = {
  description: Scalars['String']['output'];
  link: Scalars['String']['output'];
  linkLabel: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type LandingUse_CaseFlatConnection = {
  edges: Array<LandingUse_CaseFlatEdge>;
  pageInfo: LandingPageInfo;
  totalCount: Scalars['Int']['output'];
};

export type LandingUse_CaseFlatEdge = {
  cursor: Scalars['String']['output'];
  node: LandingUse_CaseFlat;
};

export type LandingUse_CaseNode = {
  createdAt: Scalars['DateTime']['output'];
  createdId: Scalars['String']['output'];
  data: LandingUse_Case;
  id: Scalars['String']['output'];
  json: Scalars['JSON']['output'];
  publishedAt: Scalars['DateTime']['output'];
  updatedAt: Scalars['DateTime']['output'];
  versionId: Scalars['String']['output'];
};

export type LandingUse_CasesWhereInput = {
  AND?: InputMaybe<Array<LandingUse_CasesWhereInput>>;
  NOT?: InputMaybe<Array<LandingUse_CasesWhereInput>>;
  OR?: InputMaybe<Array<LandingUse_CasesWhereInput>>;
  createdAt?: InputMaybe<LandingDateTimeFilter>;
  createdId?: InputMaybe<LandingStringFilter>;
  data?: InputMaybe<LandingJsonFilter>;
  id?: InputMaybe<LandingStringFilter>;
  publishedAt?: InputMaybe<LandingDateTimeFilter>;
  readonly?: InputMaybe<LandingBoolFilter>;
  updatedAt?: InputMaybe<LandingDateTimeFilter>;
  versionId?: InputMaybe<LandingStringFilter>;
};

export type Mutation = {
  createCode_step: LandingCode_StepNode;
  createCode_steps: LandingBulkMutationResult;
  createFeature: LandingFeatureNode;
  createFeatures: LandingBulkMutationResult;
  createMain: LandingMainNode;
  createMains: LandingBulkMutationResult;
  createUse_case: LandingUse_CaseNode;
  createUse_cases: LandingBulkMutationResult;
  deleteCode_step: LandingDeleteResult;
  deleteCode_steps: LandingBulkMutationResult;
  deleteFeature: LandingDeleteResult;
  deleteFeatures: LandingBulkMutationResult;
  deleteMain: LandingDeleteResult;
  deleteMains: LandingBulkMutationResult;
  deleteUse_case: LandingDeleteResult;
  deleteUse_cases: LandingBulkMutationResult;
  patchCode_step: LandingCode_StepNode;
  patchCode_steps: LandingBulkMutationResult;
  patchFeature: LandingFeatureNode;
  patchFeatures: LandingBulkMutationResult;
  patchMain: LandingMainNode;
  patchMains: LandingBulkMutationResult;
  patchUse_case: LandingUse_CaseNode;
  patchUse_cases: LandingBulkMutationResult;
  updateCode_step: LandingCode_StepNode;
  updateCode_steps: LandingBulkMutationResult;
  updateFeature: LandingFeatureNode;
  updateFeatures: LandingBulkMutationResult;
  updateMain: LandingMainNode;
  updateMains: LandingBulkMutationResult;
  updateUse_case: LandingUse_CaseNode;
  updateUse_cases: LandingBulkMutationResult;
};


export type MutationCreateCode_StepArgs = {
  data: LandingCreateCode_StepInput;
};


export type MutationCreateCode_StepsArgs = {
  data: LandingCreateCode_StepsInput;
};


export type MutationCreateFeatureArgs = {
  data: LandingCreateFeatureInput;
};


export type MutationCreateFeaturesArgs = {
  data: LandingCreateFeaturesInput;
};


export type MutationCreateMainArgs = {
  data: LandingCreateMainInput;
};


export type MutationCreateMainsArgs = {
  data: LandingCreateMainsInput;
};


export type MutationCreateUse_CaseArgs = {
  data: LandingCreateUse_CaseInput;
};


export type MutationCreateUse_CasesArgs = {
  data: LandingCreateUse_CasesInput;
};


export type MutationDeleteCode_StepArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteCode_StepsArgs = {
  data: LandingDeleteCode_StepsInput;
};


export type MutationDeleteFeatureArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteFeaturesArgs = {
  data: LandingDeleteFeaturesInput;
};


export type MutationDeleteMainArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteMainsArgs = {
  data: LandingDeleteMainsInput;
};


export type MutationDeleteUse_CaseArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteUse_CasesArgs = {
  data: LandingDeleteUse_CasesInput;
};


export type MutationPatchCode_StepArgs = {
  data: LandingPatchCode_StepInput;
};


export type MutationPatchCode_StepsArgs = {
  data: LandingPatchCode_StepsInput;
};


export type MutationPatchFeatureArgs = {
  data: LandingPatchFeatureInput;
};


export type MutationPatchFeaturesArgs = {
  data: LandingPatchFeaturesInput;
};


export type MutationPatchMainArgs = {
  data: LandingPatchMainInput;
};


export type MutationPatchMainsArgs = {
  data: LandingPatchMainsInput;
};


export type MutationPatchUse_CaseArgs = {
  data: LandingPatchUse_CaseInput;
};


export type MutationPatchUse_CasesArgs = {
  data: LandingPatchUse_CasesInput;
};


export type MutationUpdateCode_StepArgs = {
  data: LandingUpdateCode_StepInput;
};


export type MutationUpdateCode_StepsArgs = {
  data: LandingUpdateCode_StepsInput;
};


export type MutationUpdateFeatureArgs = {
  data: LandingUpdateFeatureInput;
};


export type MutationUpdateFeaturesArgs = {
  data: LandingUpdateFeaturesInput;
};


export type MutationUpdateMainArgs = {
  data: LandingUpdateMainInput;
};


export type MutationUpdateMainsArgs = {
  data: LandingUpdateMainsInput;
};


export type MutationUpdateUse_CaseArgs = {
  data: LandingUpdateUse_CaseInput;
};


export type MutationUpdateUse_CasesArgs = {
  data: LandingUpdateUse_CasesInput;
};

export type Query = {
  _entities: Array<Maybe<_Entity>>;
  _service: _Service;
  code_step: LandingCode_StepNode;
  code_stepFlat: LandingCode_StepFlat;
  code_steps: LandingCode_StepConnection;
  code_stepsFlat: LandingCode_StepFlatConnection;
  feature: LandingFeatureNode;
  featureFlat: LandingFeatureFlat;
  features: LandingFeatureConnection;
  featuresFlat: LandingFeatureFlatConnection;
  main: LandingMainNode;
  mainFlat: LandingMainFlat;
  mains: LandingMainConnection;
  mainsFlat: LandingMainFlatConnection;
  use_case: LandingUse_CaseNode;
  use_caseFlat: LandingUse_CaseFlat;
  use_cases: LandingUse_CaseConnection;
  use_casesFlat: LandingUse_CaseFlatConnection;
};


export type Query_EntitiesArgs = {
  representations: Array<Scalars['_Any']['input']>;
};


export type QueryCode_StepArgs = {
  id: Scalars['String']['input'];
};


export type QueryCode_StepFlatArgs = {
  id: Scalars['String']['input'];
};


export type QueryCode_StepsArgs = {
  data?: InputMaybe<LandingGetCode_StepsInput>;
};


export type QueryCode_StepsFlatArgs = {
  data?: InputMaybe<LandingGetCode_StepsInput>;
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


export type QueryUse_CaseArgs = {
  id: Scalars['String']['input'];
};


export type QueryUse_CaseFlatArgs = {
  id: Scalars['String']['input'];
};


export type QueryUse_CasesArgs = {
  data?: InputMaybe<LandingGetUse_CasesInput>;
};


export type QueryUse_CasesFlatArgs = {
  data?: InputMaybe<LandingGetUse_CasesInput>;
};

export type _Entity = LandingCode_StepNode | LandingFeatureNode | LandingMainNode | LandingUse_CaseNode;

export type _Service = {
  /** The sdl representing the federated service capabilities. Includes federation directives, removes federation types, and includes rest of full schema after schema directives have been applied */
  sdl?: Maybe<Scalars['String']['output']>;
};

export type FeatureFragment = { title: string, description: string, link: string };

export type UseCaseFragment = { title: string, description: string, link: string, linkLabel: string };

export type CodeStepFragment = { label: string, description: string, title: string, code: string, extraLabel: string, extraCode: string };

export type MainHeroMetricFragment = { value: string, label: string };

export type MainHeroFragment = { title: string, subtitle: string, description: string, ctaLabel: string, ctaLink: string, metrics: Array<{ value: string, label: string }> };

export type MainHeaderFragment = { docsLink: string, docsLabel: string, githubLink: string, githubLabel: string };

export type MainImageFragment = { url: string, fileId: string, fileName: string, mimeType: string, status: string };

export type MainFeaturesFragment = { title: string, items: Array<{ title: string, description: string, link: string }> };

export type MainCodeSectionFragment = { title: string, subtitle: string, footerText: string, footerLink: string, footerLinkLabel: string, items: Array<{ label: string, description: string, title: string, code: string, extraLabel: string, extraCode: string }> };

export type MainUseCasesFragment = { title: string, items: Array<{ title: string, description: string, link: string, linkLabel: string }> };

export type MainQuickStartFragment = { title: string, standaloneLabel: string, standaloneCmd: string, cloudLabel: string, cloudText: string, cloudLink: string, cloudLinkLabel: string, deployLink: string, deployLinkLabel: string };

export type MainOpenSourceFragment = { badge: string, title: string, description: string, link: string, linkLabel: string };

export type MainPoweredByFragment = { title: string, description: string, link: string, linkLabel: string };

export type MainCtaFragment = { title: string, description: string, ctaLabel: string, ctaLink: string };

export type MainFooterLinkFragment = { label: string, url: string };

export type MainFooterFragment = { copyright: string, links: Array<{ label: string, url: string }> };

export type MainPageQueryVariables = Exact<{ [key: string]: never; }>;


export type MainPageQuery = { mainFlat: { hero: { title: string, subtitle: string, description: string, ctaLabel: string, ctaLink: string, metrics: Array<{ value: string, label: string }> }, image: { url: string, fileId: string, fileName: string, mimeType: string, status: string }, header: { docsLink: string, docsLabel: string, githubLink: string, githubLabel: string }, features: { title: string, items: Array<{ title: string, description: string, link: string }> }, codeSection: { title: string, subtitle: string, footerText: string, footerLink: string, footerLinkLabel: string, items: Array<{ label: string, description: string, title: string, code: string, extraLabel: string, extraCode: string }> }, useCases: { title: string, items: Array<{ title: string, description: string, link: string, linkLabel: string }> }, quickStart: { title: string, standaloneLabel: string, standaloneCmd: string, cloudLabel: string, cloudText: string, cloudLink: string, cloudLinkLabel: string, deployLink: string, deployLinkLabel: string }, openSource: { badge: string, title: string, description: string, link: string, linkLabel: string }, poweredBy: { title: string, description: string, link: string, linkLabel: string }, cta: { title: string, description: string, ctaLabel: string, ctaLink: string }, footer: { copyright: string, links: Array<{ label: string, url: string }> } } };

export const MainHeroMetricFragmentDoc = gql`
    fragment MainHeroMetric on LandingMainFlatHeroMetricsItems {
  value
  label
}
    `;
export const MainHeroFragmentDoc = gql`
    fragment MainHero on LandingMainFlatHero {
  title
  subtitle
  description
  ctaLabel
  ctaLink
  metrics {
    ...MainHeroMetric
  }
}
    ${MainHeroMetricFragmentDoc}`;
export const MainHeaderFragmentDoc = gql`
    fragment MainHeader on LandingMainFlatHeader {
  docsLink
  docsLabel
  githubLink
  githubLabel
}
    `;
export const MainImageFragmentDoc = gql`
    fragment MainImage on LandingMainFlatImage {
  url
  fileId
  fileName
  mimeType
  status
}
    `;
export const FeatureFragmentDoc = gql`
    fragment Feature on LandingFeatureFlat {
  title
  description
  link
}
    `;
export const MainFeaturesFragmentDoc = gql`
    fragment MainFeatures on LandingMainFlatFeatures {
  title
  items {
    ...Feature
  }
}
    ${FeatureFragmentDoc}`;
export const CodeStepFragmentDoc = gql`
    fragment CodeStep on LandingCode_stepFlat {
  label
  description
  title
  code
  extraLabel
  extraCode
}
    `;
export const MainCodeSectionFragmentDoc = gql`
    fragment MainCodeSection on LandingMainFlatCodeSection {
  title
  subtitle
  footerText
  footerLink
  footerLinkLabel
  items {
    ...CodeStep
  }
}
    ${CodeStepFragmentDoc}`;
export const UseCaseFragmentDoc = gql`
    fragment UseCase on LandingUse_caseFlat {
  title
  description
  link
  linkLabel
}
    `;
export const MainUseCasesFragmentDoc = gql`
    fragment MainUseCases on LandingMainFlatUseCases {
  title
  items {
    ...UseCase
  }
}
    ${UseCaseFragmentDoc}`;
export const MainQuickStartFragmentDoc = gql`
    fragment MainQuickStart on LandingMainFlatQuickStart {
  title
  standaloneLabel
  standaloneCmd
  cloudLabel
  cloudText
  cloudLink
  cloudLinkLabel
  deployLink
  deployLinkLabel
}
    `;
export const MainOpenSourceFragmentDoc = gql`
    fragment MainOpenSource on LandingMainFlatOpenSource {
  badge
  title
  description
  link
  linkLabel
}
    `;
export const MainPoweredByFragmentDoc = gql`
    fragment MainPoweredBy on LandingMainFlatPoweredBy {
  title
  description
  link
  linkLabel
}
    `;
export const MainCtaFragmentDoc = gql`
    fragment MainCta on LandingMainFlatCta {
  title
  description
  ctaLabel
  ctaLink
}
    `;
export const MainFooterLinkFragmentDoc = gql`
    fragment MainFooterLink on LandingMainFlatFooterLinksItems {
  label
  url
}
    `;
export const MainFooterFragmentDoc = gql`
    fragment MainFooter on LandingMainFlatFooter {
  copyright
  links {
    ...MainFooterLink
  }
}
    ${MainFooterLinkFragmentDoc}`;
export const MainPageDocument = gql`
    query mainPage {
  mainFlat(id: "main") {
    hero {
      ...MainHero
    }
    image {
      ...MainImage
    }
    header {
      ...MainHeader
    }
    features {
      ...MainFeatures
    }
    codeSection {
      ...MainCodeSection
    }
    useCases {
      ...MainUseCases
    }
    quickStart {
      ...MainQuickStart
    }
    openSource {
      ...MainOpenSource
    }
    poweredBy {
      ...MainPoweredBy
    }
    cta {
      ...MainCta
    }
    footer {
      ...MainFooter
    }
  }
}
    ${MainHeroFragmentDoc}
${MainImageFragmentDoc}
${MainHeaderFragmentDoc}
${MainFeaturesFragmentDoc}
${MainCodeSectionFragmentDoc}
${MainUseCasesFragmentDoc}
${MainQuickStartFragmentDoc}
${MainOpenSourceFragmentDoc}
${MainPoweredByFragmentDoc}
${MainCtaFragmentDoc}
${MainFooterFragmentDoc}`;

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