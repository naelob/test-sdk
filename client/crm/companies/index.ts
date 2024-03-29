/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createUnifiedCompanyOutputFromDiscriminatorValue, deserializeIntoApiResponse, serializeApiResponse, serializeUnifiedCompanyInput, serializeUnifiedCompanyOutput, type ApiResponse, type UnifiedCompanyInput, type UnifiedCompanyOutput } from '../../models/';
import { BatchRequestBuilderRequestsMetadata, BatchRequestBuilderUriTemplate, type BatchRequestBuilder } from './batch/';
import { CompaniesItemRequestBuilderRequestsMetadata, CompaniesItemRequestBuilderUriTemplate, type CompaniesItemRequestBuilder } from './item/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

export interface CompaniesGetResponse extends ApiResponse, Parsable {
    /**
     * The data property
     */
    data?: UnifiedCompanyOutput;
}
export interface CompaniesPatchResponse extends ApiResponse, Parsable {
    /**
     * The data property
     */
    data?: UnifiedCompanyOutput;
}
export interface CompaniesPostResponse extends ApiResponse, Parsable {
    /**
     * The data property
     */
    data?: UnifiedCompanyOutput;
}
/**
 * Builds and executes requests for operations under /crm/companies
 */
export interface CompaniesRequestBuilder extends BaseRequestBuilder<CompaniesRequestBuilder> {
    /**
     * The batch property
     */
    get batch(): BatchRequestBuilder;
    /**
     * Gets an item from the ApiSdk.crm.companies.item collection
     * @param id id of the company you want to retrieve.
     * @returns a CompaniesItemRequestBuilder
     */
     byId(id: string) : CompaniesItemRequestBuilder;
    /**
     * List a batch of Companies
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of CompaniesGetResponse
     */
     get(requestConfiguration?: RequestConfiguration<CompaniesRequestBuilderGetQueryParameters> | undefined) : Promise<CompaniesGetResponse | undefined>;
    /**
     * Update a Company
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of CompaniesPatchResponse
     */
     patch(requestConfiguration?: RequestConfiguration<CompaniesRequestBuilderPatchQueryParameters> | undefined) : Promise<CompaniesPatchResponse | undefined>;
    /**
     * Create a company in any supported Crm software
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of CompaniesPostResponse
     */
     post(body: UnifiedCompanyInput, requestConfiguration?: RequestConfiguration<CompaniesRequestBuilderPostQueryParameters> | undefined) : Promise<CompaniesPostResponse | undefined>;
    /**
     * List a batch of Companies
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<CompaniesRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update a Company
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPatchRequestInformation(requestConfiguration?: RequestConfiguration<CompaniesRequestBuilderPatchQueryParameters> | undefined) : RequestInformation;
    /**
     * Create a company in any supported Crm software
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: UnifiedCompanyInput, requestConfiguration?: RequestConfiguration<CompaniesRequestBuilderPostQueryParameters> | undefined) : RequestInformation;
}
/**
 * List a batch of Companies
 */
export interface CompaniesRequestBuilderGetQueryParameters {
    /**
     * Set to true to include data from the original Crm software.
     */
    remoteData?: boolean;
}
/**
 * Update a Company
 */
export interface CompaniesRequestBuilderPatchQueryParameters {
    id?: string;
}
/**
 * Create a company in any supported Crm software
 */
export interface CompaniesRequestBuilderPostQueryParameters {
    /**
     * Set to true to include data from the original Crm software.
     */
    remoteData?: boolean;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns a companiesGetResponse
 */
export function createCompaniesGetResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoCompaniesGetResponse;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns a companiesPatchResponse
 */
export function createCompaniesPatchResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoCompaniesPatchResponse;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns a companiesPostResponse
 */
export function createCompaniesPostResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoCompaniesPostResponse;
}
/**
 * The deserialization information for the current model
 * @returns a Record<string, (node: ParseNode) => void>
 */
export function deserializeIntoCompaniesGetResponse(companiesGetResponse: Partial<CompaniesGetResponse> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoApiResponse(companiesGetResponse),
        "data": n => { companiesGetResponse.data = n.getObjectValue<UnifiedCompanyOutput>(createUnifiedCompanyOutputFromDiscriminatorValue); },
    }
}
/**
 * The deserialization information for the current model
 * @returns a Record<string, (node: ParseNode) => void>
 */
export function deserializeIntoCompaniesPatchResponse(companiesPatchResponse: Partial<CompaniesPatchResponse> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoApiResponse(companiesPatchResponse),
        "data": n => { companiesPatchResponse.data = n.getObjectValue<UnifiedCompanyOutput>(createUnifiedCompanyOutputFromDiscriminatorValue); },
    }
}
/**
 * The deserialization information for the current model
 * @returns a Record<string, (node: ParseNode) => void>
 */
export function deserializeIntoCompaniesPostResponse(companiesPostResponse: Partial<CompaniesPostResponse> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoApiResponse(companiesPostResponse),
        "data": n => { companiesPostResponse.data = n.getObjectValue<UnifiedCompanyOutput>(createUnifiedCompanyOutputFromDiscriminatorValue); },
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeCompaniesGetResponse(writer: SerializationWriter, companiesGetResponse: Partial<CompaniesGetResponse> | undefined = {}) : void {
    serializeApiResponse(writer, companiesGetResponse)
    writer.writeObjectValue<UnifiedCompanyOutput>("data", companiesGetResponse.data, serializeUnifiedCompanyOutput);
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeCompaniesPatchResponse(writer: SerializationWriter, companiesPatchResponse: Partial<CompaniesPatchResponse> | undefined = {}) : void {
    serializeApiResponse(writer, companiesPatchResponse)
    writer.writeObjectValue<UnifiedCompanyOutput>("data", companiesPatchResponse.data, serializeUnifiedCompanyOutput);
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeCompaniesPostResponse(writer: SerializationWriter, companiesPostResponse: Partial<CompaniesPostResponse> | undefined = {}) : void {
    serializeApiResponse(writer, companiesPostResponse)
    writer.writeObjectValue<UnifiedCompanyOutput>("data", companiesPostResponse.data, serializeUnifiedCompanyOutput);
}
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const CompaniesRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "remoteData": "remote_data",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const CompaniesRequestBuilderNavigationMetadata: Record<Exclude<keyof CompaniesRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byId: {
        uriTemplate: CompaniesItemRequestBuilderUriTemplate,
        requestsMetadata: CompaniesItemRequestBuilderRequestsMetadata,
        pathParametersMappings: ["id"],
    },
    batch: {
        uriTemplate: BatchRequestBuilderUriTemplate,
        requestsMetadata: BatchRequestBuilderRequestsMetadata,
    },
};
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const CompaniesRequestBuilderPostQueryParametersMapper: Record<string, string> = {
    "remoteData": "remote_data",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const CompaniesRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createCompaniesGetResponseFromDiscriminatorValue,
        queryParametersMapper: CompaniesRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        responseBodyContentType: "application/json",
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createCompaniesPatchResponseFromDiscriminatorValue,
    },
    post: {
        responseBodyContentType: "application/json",
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createCompaniesPostResponseFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeUnifiedCompanyInput,
        requestInformationContentSetMethod: "setContentFromParsable",
        queryParametersMapper: CompaniesRequestBuilderPostQueryParametersMapper,
    },
};
/**
 * Uri template for the request builder.
 */
export const CompaniesRequestBuilderUriTemplate = "{+baseurl}/crm/companies?id={id}{&remote_data*}";
/* tslint:enable */
/* eslint-enable */
