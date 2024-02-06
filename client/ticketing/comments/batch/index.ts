/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createUnifiedCommentOutputFromDiscriminatorValue, deserializeIntoApiResponse, serializeApiResponse, serializeUnifiedCommentInput, serializeUnifiedCommentOutput, type ApiResponse, type UnifiedCommentInput, type UnifiedCommentOutput } from '../../../models/';
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

export interface BatchPostResponse extends ApiResponse, Parsable {
    /**
     * The data property
     */
    data?: UnifiedCommentOutput;
}
/**
 * Builds and executes requests for operations under /ticketing/comments/batch
 */
export interface BatchRequestBuilder extends BaseRequestBuilder<BatchRequestBuilder> {
    /**
     * Add a batch of Comments
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of BatchPostResponse
     */
     post(body: UnifiedCommentInput[], requestConfiguration?: RequestConfiguration<BatchRequestBuilderPostQueryParameters> | undefined) : Promise<BatchPostResponse | undefined>;
    /**
     * Add a batch of Comments
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: UnifiedCommentInput[], requestConfiguration?: RequestConfiguration<BatchRequestBuilderPostQueryParameters> | undefined) : RequestInformation;
}
/**
 * Add a batch of Comments
 */
export interface BatchRequestBuilderPostQueryParameters {
    /**
     * Set to true to include data from the original Ticketing software.
     */
    remoteData?: boolean;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns a batchPostResponse
 */
export function createBatchPostResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoBatchPostResponse;
}
/**
 * The deserialization information for the current model
 * @returns a Record<string, (node: ParseNode) => void>
 */
export function deserializeIntoBatchPostResponse(batchPostResponse: Partial<BatchPostResponse> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoApiResponse(batchPostResponse),
        "data": n => { batchPostResponse.data = n.getObjectValue<UnifiedCommentOutput>(createUnifiedCommentOutputFromDiscriminatorValue); },
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeBatchPostResponse(writer: SerializationWriter, batchPostResponse: Partial<BatchPostResponse> | undefined = {}) : void {
    serializeApiResponse(writer, batchPostResponse)
    writer.writeObjectValue<UnifiedCommentOutput>("data", batchPostResponse.data, serializeUnifiedCommentOutput);
}
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const BatchRequestBuilderPostQueryParametersMapper: Record<string, string> = {
    "remoteData": "remote_data",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const BatchRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        responseBodyContentType: "application/json",
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createBatchPostResponseFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeUnifiedCommentInput,
        requestInformationContentSetMethod: "setContentFromParsable",
        queryParametersMapper: BatchRequestBuilderPostQueryParametersMapper,
    },
};
/**
 * Uri template for the request builder.
 */
export const BatchRequestBuilderUriTemplate = "{+baseurl}/ticketing/comments/batch{?remote_data*}";
/* tslint:enable */
/* eslint-enable */
