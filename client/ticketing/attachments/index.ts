/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createUnifiedAttachmentOutputFromDiscriminatorValue, deserializeIntoApiResponse, serializeApiResponse, serializeUnifiedAttachmentInput, serializeUnifiedAttachmentOutput, type ApiResponse, type UnifiedAttachmentInput, type UnifiedAttachmentOutput } from '../../models/';
import { BatchRequestBuilderRequestsMetadata, BatchRequestBuilderUriTemplate, type BatchRequestBuilder } from './batch/';
import { AttachmentsItemRequestBuilderNavigationMetadata, AttachmentsItemRequestBuilderRequestsMetadata, AttachmentsItemRequestBuilderUriTemplate, type AttachmentsItemRequestBuilder } from './item/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

export interface AttachmentsGetResponse extends ApiResponse, Parsable {
    /**
     * The data property
     */
    data?: UnifiedAttachmentOutput;
}
export interface AttachmentsPostResponse extends ApiResponse, Parsable {
    /**
     * The data property
     */
    data?: UnifiedAttachmentOutput;
}
/**
 * Builds and executes requests for operations under /ticketing/attachments
 */
export interface AttachmentsRequestBuilder extends BaseRequestBuilder<AttachmentsRequestBuilder> {
    /**
     * The batch property
     */
    get batch(): BatchRequestBuilder;
    /**
     * Gets an item from the ApiSdk.ticketing.attachments.item collection
     * @param id id of the attachment you want to retrive.
     * @returns a AttachmentsItemRequestBuilder
     */
     byId(id: string) : AttachmentsItemRequestBuilder;
    /**
     * List a batch of Attachments
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AttachmentsGetResponse
     */
     get(requestConfiguration?: RequestConfiguration<AttachmentsRequestBuilderGetQueryParameters> | undefined) : Promise<AttachmentsGetResponse | undefined>;
    /**
     * Create a attachment in any supported Ticketing software
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AttachmentsPostResponse
     */
     post(body: UnifiedAttachmentInput, requestConfiguration?: RequestConfiguration<AttachmentsRequestBuilderPostQueryParameters> | undefined) : Promise<AttachmentsPostResponse | undefined>;
    /**
     * List a batch of Attachments
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<AttachmentsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create a attachment in any supported Ticketing software
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: UnifiedAttachmentInput, requestConfiguration?: RequestConfiguration<AttachmentsRequestBuilderPostQueryParameters> | undefined) : RequestInformation;
}
/**
 * List a batch of Attachments
 */
export interface AttachmentsRequestBuilderGetQueryParameters {
    /**
     * Set to true to include data from the original Ticketing software.
     */
    remoteData?: boolean;
}
/**
 * Create a attachment in any supported Ticketing software
 */
export interface AttachmentsRequestBuilderPostQueryParameters {
    /**
     * Set to true to include data from the original Ticketing software.
     */
    remoteData?: boolean;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns a attachmentsGetResponse
 */
export function createAttachmentsGetResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoAttachmentsGetResponse;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns a attachmentsPostResponse
 */
export function createAttachmentsPostResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoAttachmentsPostResponse;
}
/**
 * The deserialization information for the current model
 * @returns a Record<string, (node: ParseNode) => void>
 */
export function deserializeIntoAttachmentsGetResponse(attachmentsGetResponse: Partial<AttachmentsGetResponse> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoApiResponse(attachmentsGetResponse),
        "data": n => { attachmentsGetResponse.data = n.getObjectValue<UnifiedAttachmentOutput>(createUnifiedAttachmentOutputFromDiscriminatorValue); },
    }
}
/**
 * The deserialization information for the current model
 * @returns a Record<string, (node: ParseNode) => void>
 */
export function deserializeIntoAttachmentsPostResponse(attachmentsPostResponse: Partial<AttachmentsPostResponse> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoApiResponse(attachmentsPostResponse),
        "data": n => { attachmentsPostResponse.data = n.getObjectValue<UnifiedAttachmentOutput>(createUnifiedAttachmentOutputFromDiscriminatorValue); },
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeAttachmentsGetResponse(writer: SerializationWriter, attachmentsGetResponse: Partial<AttachmentsGetResponse> | undefined = {}) : void {
    serializeApiResponse(writer, attachmentsGetResponse)
    writer.writeObjectValue<UnifiedAttachmentOutput>("data", attachmentsGetResponse.data, serializeUnifiedAttachmentOutput);
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeAttachmentsPostResponse(writer: SerializationWriter, attachmentsPostResponse: Partial<AttachmentsPostResponse> | undefined = {}) : void {
    serializeApiResponse(writer, attachmentsPostResponse)
    writer.writeObjectValue<UnifiedAttachmentOutput>("data", attachmentsPostResponse.data, serializeUnifiedAttachmentOutput);
}
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const AttachmentsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "remoteData": "remote_data",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const AttachmentsRequestBuilderNavigationMetadata: Record<Exclude<keyof AttachmentsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byId: {
        uriTemplate: AttachmentsItemRequestBuilderUriTemplate,
        requestsMetadata: AttachmentsItemRequestBuilderRequestsMetadata,
        navigationMetadata: AttachmentsItemRequestBuilderNavigationMetadata,
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
const AttachmentsRequestBuilderPostQueryParametersMapper: Record<string, string> = {
    "remoteData": "remote_data",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const AttachmentsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createAttachmentsGetResponseFromDiscriminatorValue,
        queryParametersMapper: AttachmentsRequestBuilderGetQueryParametersMapper,
    },
    post: {
        responseBodyContentType: "application/json",
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createAttachmentsPostResponseFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeUnifiedAttachmentInput,
        requestInformationContentSetMethod: "setContentFromParsable",
        queryParametersMapper: AttachmentsRequestBuilderPostQueryParametersMapper,
    },
};
/**
 * Uri template for the request builder.
 */
export const AttachmentsRequestBuilderUriTemplate = "{+baseurl}/ticketing/attachments{?remote_data*}";
/* tslint:enable */
/* eslint-enable */
