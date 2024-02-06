/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createUnifiedTagOutputFromDiscriminatorValue, deserializeIntoApiResponse, serializeApiResponse, serializeUnifiedTagOutput, type ApiResponse, type UnifiedTagOutput } from '../../models/';
import { TagsItemRequestBuilderRequestsMetadata, TagsItemRequestBuilderUriTemplate, type TagsItemRequestBuilder } from './item/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns a tagsGetResponse
 */
export function createTagsGetResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoTagsGetResponse;
}
/**
 * The deserialization information for the current model
 * @returns a Record<string, (node: ParseNode) => void>
 */
export function deserializeIntoTagsGetResponse(tagsGetResponse: Partial<TagsGetResponse> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoApiResponse(tagsGetResponse),
        "data": n => { tagsGetResponse.data = n.getObjectValue<UnifiedTagOutput>(createUnifiedTagOutputFromDiscriminatorValue); },
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeTagsGetResponse(writer: SerializationWriter, tagsGetResponse: Partial<TagsGetResponse> | undefined = {}) : void {
    serializeApiResponse(writer, tagsGetResponse)
    writer.writeObjectValue<UnifiedTagOutput>("data", tagsGetResponse.data, serializeUnifiedTagOutput);
}
export interface TagsGetResponse extends ApiResponse, Parsable {
    /**
     * The data property
     */
    data?: UnifiedTagOutput;
}
/**
 * Builds and executes requests for operations under /ticketing/tags
 */
export interface TagsRequestBuilder extends BaseRequestBuilder<TagsRequestBuilder> {
    /**
     * Gets an item from the ApiSdk.ticketing.tags.item collection
     * @param id id of the tag you want to retrieve.
     * @returns a TagsItemRequestBuilder
     */
     byId(id: string) : TagsItemRequestBuilder;
    /**
     * List a batch of Tags
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of TagsGetResponse
     */
     get(requestConfiguration?: RequestConfiguration<TagsRequestBuilderGetQueryParameters> | undefined) : Promise<TagsGetResponse | undefined>;
    /**
     * List a batch of Tags
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<TagsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
/**
 * List a batch of Tags
 */
export interface TagsRequestBuilderGetQueryParameters {
    /**
     * Set to true to include data from the original Ticketing software.
     */
    remoteData?: boolean;
}
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const TagsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "remoteData": "remote_data",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const TagsRequestBuilderNavigationMetadata: Record<Exclude<keyof TagsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byId: {
        uriTemplate: TagsItemRequestBuilderUriTemplate,
        requestsMetadata: TagsItemRequestBuilderRequestsMetadata,
        pathParametersMappings: ["id"],
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const TagsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createTagsGetResponseFromDiscriminatorValue,
        queryParametersMapper: TagsRequestBuilderGetQueryParametersMapper,
    },
};
/**
 * Uri template for the request builder.
 */
export const TagsRequestBuilderUriTemplate = "{+baseurl}/ticketing/tags{?remote_data*}";
/* tslint:enable */
/* eslint-enable */