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
  cases: LandingMainCases;
  cloud: LandingMainCloud;
  code: LandingMainCode;
  docs: LandingMainDocs;
  features: LandingMainFeatures;
  github: Scalars['String']['output'];
  preview: LandingMainPreview;
  texts: LandingMainTexts;
};

export type LandingMainCases = {
  items: Array<LandingCaseNode>;
  title: Scalars['String']['output'];
};

export type LandingMainCloud = {
  label: Scalars['String']['output'];
  link: Scalars['String']['output'];
};

export type LandingMainCode = {
  docker: LandingCodeNode;
  dockerCompose: LandingCodeNode;
};

export type LandingMainConnection = {
  edges: Array<LandingMainEdge>;
  pageInfo: LandingPageInfo;
  totalCount: Scalars['Int']['output'];
};

export type LandingMainDocs = {
  label: Scalars['String']['output'];
  link: Scalars['String']['output'];
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
  cases: LandingMainFlatCases;
  cloud: LandingMainFlatCloud;
  code: LandingMainFlatCode;
  docs: LandingMainFlatDocs;
  features: LandingMainFlatFeatures;
  github: Scalars['String']['output'];
  preview: LandingMainFlatPreview;
  texts: LandingMainFlatTexts;
};

export type LandingMainFlatCases = {
  items: Array<LandingCaseFlat>;
  title: Scalars['String']['output'];
};

export type LandingMainFlatCloud = {
  label: Scalars['String']['output'];
  link: Scalars['String']['output'];
};

export type LandingMainFlatCode = {
  docker: LandingCodeFlat;
  dockerCompose: LandingCodeFlat;
};

export type LandingMainFlatConnection = {
  edges: Array<LandingMainFlatEdge>;
  pageInfo: LandingPageInfo;
  totalCount: Scalars['Int']['output'];
};

export type LandingMainFlatDocs = {
  label: Scalars['String']['output'];
  link: Scalars['String']['output'];
};

export type LandingMainFlatEdge = {
  cursor: Scalars['String']['output'];
  node: LandingMainFlat;
};

export type LandingMainFlatFeatures = {
  items: Array<LandingFeatureFlat>;
  title: Scalars['String']['output'];
};

export type LandingMainFlatPreview = {
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

export type LandingMainFlatTexts = {
  description: Scalars['String']['output'];
  title: Scalars['String']['output'];
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

export type LandingMainPreview = {
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

export type LandingMainTexts = {
  description: Scalars['String']['output'];
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

export type Query = {
  _entities: Array<Maybe<_Entity>>;
  _service: _Service;
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
  feature: LandingFeatureNode;
  featureFlat: LandingFeatureFlat;
  features: LandingFeatureConnection;
  featuresFlat: LandingFeatureFlatConnection;
  main: LandingMainNode;
  mainFlat: LandingMainFlat;
  mains: LandingMainConnection;
  mainsFlat: LandingMainFlatConnection;
};


export type Query_EntitiesArgs = {
  representations: Array<Scalars['_Any']['input']>;
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

export type _Entity = LandingCaseFlat | LandingCaseNode | LandingCodeNode | LandingConstantNode | LandingFeatureFlat | LandingFeatureNode | LandingMainNode;

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
    fragment MainFeatures on LandingMainFlatFeatures {
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
    fragment MainCases on LandingMainFlatCases {
  title
  items {
    ...Case
  }
}
    ${CaseFragmentDoc}`;
export const CodeFragmentDoc = gql`
    fragment Code on LandingMainFlatCode {
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