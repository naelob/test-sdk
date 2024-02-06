/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createUnifiedCommentOutputFromDiscriminatorValue, deserializeIntoApiResponse, serializeApiResponse, serializeUnifiedCommentInput, serializeUnifiedCommentOutput, type ApiResponse, type UnifiedCommentInput, type UnifiedCommentOutput } from '../../models/';
import { BatchRequestBuilderRequestsMetadata, BatchRequestBuilderUriTemplate, type BatchRequestBuilder } from './batch/';
import { CommentsItemRequestBuilderRequestsMetadata, CommentsItemRequestBuilderUriTemplate, type CommentsItemRequestBuilder } from './item/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

export interface CommentsGetResponse extends ApiResponse, Parsable {
    /**
     * The data property
     */
    data?: UnifiedCommentOutput;
}
export interface CommentsPostResponse extends ApiResponse, Parsable {
    /**
     * The data property
     */
    data?: UnifiedCommentOutput;
}
/**
 * Builds and executes requests for operations under /ticketing/comments
 */
export interface CommentsRequestBuilder extends BaseRequestBuilder<CommentsRequestBuilder> {
    /**
     * The batch property
     */
    get batch(): BatchRequestBuilder;
    /**
     * Gets an item from the ApiSdk.ticketing.comments.item collection
     * @param id id of the `comment` you want to retrive.
     * @returns a CommentsItemRequestBuilder
     */
     byId(id: string) : CommentsItemRequestBuilder;
    /**
     * List a batch of Comments
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of CommentsGetResponse
     */
     get(requestConfiguration?: RequestConfiguration<CommentsRequestBuilderGetQueryParameters> | undefined) : Promise<CommentsGetResponse | undefined>;
    /**
     * Create a comment in any supported Ticketing software
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of CommentsPostResponse
     */
     post(body: UnifiedCommentInput, requestConfiguration?: RequestConfiguration<CommentsRequestBuilderPostQueryParameters> | undefined) : Promise<CommentsPostResponse | undefined>;
    /**
     * List a batch of Comments
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<CommentsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create a comment in any supported Ticketing software
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: UnifiedCommentInput, requestConfiguration?: RequestConfiguration<CommentsRequestBuilderPostQueryParameters> | undefined) : RequestInformation;
}
/**
 * List a batch of Comments
 */
export interface CommentsRequestBuilderGetQueryParameters {
    /**
     * Set to true to include data from the original Ticketing software.
     */
    remoteData?: boolean;
}
/**
 * Create a comment in any supported Ticketing software
 */
export interface CommentsRequestBuilderPostQueryParameters {
    /**
     * Set to true to include data from the original Ticketing software.
     */
    remoteData?: boolean;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns a commentsGetResponse
 */
export function createCommentsGetResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoCommentsGetResponse;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns a commentsPostResponse
 */
export function createCommentsPostResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoCommentsPostResponse;
}
/**
 * The deserialization information for the current model
 * @returns a Record<string, (node: ParseNode) => void>
 */
export function deserializeIntoCommentsGetResponse(commentsGetResponse: Partial<CommentsGetResponse> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoApiResponse(commentsGetResponse),
        "data": n => { commentsGetResponse.data = n.getObjectValue<UnifiedCommentOutput>(createUnifiedCommentOutputFromDiscriminatorValue); },
    }
}
/**
 * The deserialization information for the current model
 * @returns a Record<string, (node: ParseNode) => void>
 */
export function deserializeIntoCommentsPostResponse(commentsPostResponse: Partial<CommentsPostResponse> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoApiResponse(commentsPostResponse),
        "data": n => { commentsPostResponse.data = n.getObjectValue<UnifiedCommentOutput>(createUnifiedCommentOutputFromDiscriminatorValue); },
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeCommentsGetResponse(writer: SerializationWriter, commentsGetResponse: Partial<CommentsGetResponse> | undefined = {}) : void {
    serializeApiResponse(writer, commentsGetResponse)
    writer.writeObjectValue<UnifiedCommentOutput>("data", commentsGetResponse.data, serializeUnifiedCommentOutput);
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeCommentsPostResponse(writer: SerializationWriter, commentsPostResponse: Partial<CommentsPostResponse> | undefined = {}) : void {
    serializeApiResponse(writer, commentsPostResponse)
    writer.writeObjectValue<UnifiedCommentOutput>("data", commentsPostResponse.data, serializeUnifiedCommentOutput);
}
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const CommentsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "remoteData": "remote_data",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const CommentsRequestBuilderNavigationMetadata: Record<Exclude<keyof CommentsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byId: {
        uriTemplate: CommentsItemRequestBuilderUriTemplate,
        requestsMetadata: CommentsItemRequestBuilderRequestsMetadata,
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
const CommentsRequestBuilderPostQueryParametersMapper: Record<string, string> = {
    "remoteData": "remote_data",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const CommentsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createCommentsGetResponseFromDiscriminatorValue,
        queryParametersMapper: CommentsRequestBuilderGetQueryParametersMapper,
    },
    post: {
        responseBodyContentType: "application/json",
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createCommentsPostResponseFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeUnifiedCommentInput,
        requestInformationContentSetMethod: "setContentFromParsable",
        queryParametersMapper: CommentsRequestBuilderPostQueryParametersMapper,
    },
};
/**
 * Uri template for the request builder.
 */
export const CommentsRequestBuilderUriTemplate = "{+baseurl}/ticketing/comments{?remote_data*}";
/* tslint:enable */
/* eslint-enable */
