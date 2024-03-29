/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createUnifiedDealOutputFromDiscriminatorValue, deserializeIntoApiResponse, serializeApiResponse, serializeUnifiedDealOutput, type ApiResponse, type UnifiedDealOutput } from '../../../models/';
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns a DealsGetResponse
 */
export function createDealsGetResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoDealsGetResponse;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns a DealsPatchResponse
 */
export function createDealsPatchResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoDealsPatchResponse;
}
export interface DealsGetResponse extends ApiResponse, Parsable {
    /**
     * The data property
     */
    data?: UnifiedDealOutput;
}
/**
 * Builds and executes requests for operations under /crm/deals/{id}
 */
export interface DealsItemRequestBuilder extends BaseRequestBuilder<DealsItemRequestBuilder> {
    /**
     * Retrieve a deal from any connected Crm software
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DealsGetResponse
     */
     get(requestConfiguration?: RequestConfiguration<DealsItemRequestBuilderGetQueryParameters> | undefined) : Promise<DealsGetResponse | undefined>;
    /**
     * Update a Deal
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DealsPatchResponse
     */
     patch(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<DealsPatchResponse | undefined>;
    /**
     * Retrieve a deal from any connected Crm software
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<DealsItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update a Deal
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPatchRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Retrieve a deal from any connected Crm software
 */
export interface DealsItemRequestBuilderGetQueryParameters {
    /**
     * Set to true to include data from the original Crm software.
     */
    remoteData?: boolean;
}
export interface DealsPatchResponse extends ApiResponse, Parsable {
    /**
     * The data property
     */
    data?: UnifiedDealOutput;
}
/**
 * The deserialization information for the current model
 * @returns a Record<string, (node: ParseNode) => void>
 */
export function deserializeIntoDealsGetResponse(dealsGetResponse: Partial<DealsGetResponse> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoApiResponse(dealsGetResponse),
        "data": n => { dealsGetResponse.data = n.getObjectValue<UnifiedDealOutput>(createUnifiedDealOutputFromDiscriminatorValue); },
    }
}
/**
 * The deserialization information for the current model
 * @returns a Record<string, (node: ParseNode) => void>
 */
export function deserializeIntoDealsPatchResponse(dealsPatchResponse: Partial<DealsPatchResponse> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoApiResponse(dealsPatchResponse),
        "data": n => { dealsPatchResponse.data = n.getObjectValue<UnifiedDealOutput>(createUnifiedDealOutputFromDiscriminatorValue); },
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeDealsGetResponse(writer: SerializationWriter, dealsGetResponse: Partial<DealsGetResponse> | undefined = {}) : void {
    serializeApiResponse(writer, dealsGetResponse)
    writer.writeObjectValue<UnifiedDealOutput>("data", dealsGetResponse.data, serializeUnifiedDealOutput);
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeDealsPatchResponse(writer: SerializationWriter, dealsPatchResponse: Partial<DealsPatchResponse> | undefined = {}) : void {
    serializeApiResponse(writer, dealsPatchResponse)
    writer.writeObjectValue<UnifiedDealOutput>("data", dealsPatchResponse.data, serializeUnifiedDealOutput);
}
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const DealsItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "remoteData": "remote_data",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const DealsItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createDealsGetResponseFromDiscriminatorValue,
        queryParametersMapper: DealsItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        responseBodyContentType: "application/json",
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createDealsPatchResponseFromDiscriminatorValue,
    },
};
/**
 * Uri template for the request builder.
 */
export const DealsItemRequestBuilderUriTemplate = "{+baseurl}/crm/deals/{id}{?remote_data*}";
/* tslint:enable */
/* eslint-enable */
