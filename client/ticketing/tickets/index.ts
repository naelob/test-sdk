/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createUnifiedTicketOutputFromDiscriminatorValue, deserializeIntoApiResponse, serializeApiResponse, serializeUnifiedTicketInput, serializeUnifiedTicketOutput, type ApiResponse, type UnifiedTicketInput, type UnifiedTicketOutput } from '../../models/';
import { BatchRequestBuilderRequestsMetadata, BatchRequestBuilderUriTemplate, type BatchRequestBuilder } from './batch/';
import { TicketsItemRequestBuilderRequestsMetadata, TicketsItemRequestBuilderUriTemplate, type TicketsItemRequestBuilder } from './item/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns a ticketsGetResponse
 */
export function createTicketsGetResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoTicketsGetResponse;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns a ticketsPostResponse
 */
export function createTicketsPostResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoTicketsPostResponse;
}
/**
 * The deserialization information for the current model
 * @returns a Record<string, (node: ParseNode) => void>
 */
export function deserializeIntoTicketsGetResponse(ticketsGetResponse: Partial<TicketsGetResponse> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoApiResponse(ticketsGetResponse),
        "data": n => { ticketsGetResponse.data = n.getObjectValue<UnifiedTicketOutput>(createUnifiedTicketOutputFromDiscriminatorValue); },
    }
}
/**
 * The deserialization information for the current model
 * @returns a Record<string, (node: ParseNode) => void>
 */
export function deserializeIntoTicketsPostResponse(ticketsPostResponse: Partial<TicketsPostResponse> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoApiResponse(ticketsPostResponse),
        "data": n => { ticketsPostResponse.data = n.getObjectValue<UnifiedTicketOutput>(createUnifiedTicketOutputFromDiscriminatorValue); },
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeTicketsGetResponse(writer: SerializationWriter, ticketsGetResponse: Partial<TicketsGetResponse> | undefined = {}) : void {
    serializeApiResponse(writer, ticketsGetResponse)
    writer.writeObjectValue<UnifiedTicketOutput>("data", ticketsGetResponse.data, serializeUnifiedTicketOutput);
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeTicketsPostResponse(writer: SerializationWriter, ticketsPostResponse: Partial<TicketsPostResponse> | undefined = {}) : void {
    serializeApiResponse(writer, ticketsPostResponse)
    writer.writeObjectValue<UnifiedTicketOutput>("data", ticketsPostResponse.data, serializeUnifiedTicketOutput);
}
export interface TicketsGetResponse extends ApiResponse, Parsable {
    /**
     * The data property
     */
    data?: UnifiedTicketOutput;
}
export interface TicketsPostResponse extends ApiResponse, Parsable {
    /**
     * The data property
     */
    data?: UnifiedTicketOutput;
}
/**
 * Builds and executes requests for operations under /ticketing/tickets
 */
export interface TicketsRequestBuilder extends BaseRequestBuilder<TicketsRequestBuilder> {
    /**
     * The batch property
     */
    get batch(): BatchRequestBuilder;
    /**
     * Gets an item from the ApiSdk.ticketing.tickets.item collection
     * @param id id of the `ticket` you want to retrive.
     * @returns a TicketsItemRequestBuilder
     */
     byId(id: string) : TicketsItemRequestBuilder;
    /**
     * List a batch of Tickets
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of TicketsGetResponse
     */
     get(requestConfiguration?: RequestConfiguration<TicketsRequestBuilderGetQueryParameters> | undefined) : Promise<TicketsGetResponse | undefined>;
    /**
     * Update a Ticket
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UnifiedTicketOutput
     */
     patch(requestConfiguration?: RequestConfiguration<TicketsRequestBuilderPatchQueryParameters> | undefined) : Promise<UnifiedTicketOutput | undefined>;
    /**
     * Create a ticket in any supported Ticketing software
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of TicketsPostResponse
     */
     post(body: UnifiedTicketInput, requestConfiguration?: RequestConfiguration<TicketsRequestBuilderPostQueryParameters> | undefined) : Promise<TicketsPostResponse | undefined>;
    /**
     * List a batch of Tickets
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<TicketsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update a Ticket
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPatchRequestInformation(requestConfiguration?: RequestConfiguration<TicketsRequestBuilderPatchQueryParameters> | undefined) : RequestInformation;
    /**
     * Create a ticket in any supported Ticketing software
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: UnifiedTicketInput, requestConfiguration?: RequestConfiguration<TicketsRequestBuilderPostQueryParameters> | undefined) : RequestInformation;
}
/**
 * List a batch of Tickets
 */
export interface TicketsRequestBuilderGetQueryParameters {
    /**
     * Set to true to include data from the original Ticketing software.
     */
    remoteData?: boolean;
}
/**
 * Update a Ticket
 */
export interface TicketsRequestBuilderPatchQueryParameters {
    id?: string;
}
/**
 * Create a ticket in any supported Ticketing software
 */
export interface TicketsRequestBuilderPostQueryParameters {
    /**
     * Set to true to include data from the original Ticketing software.
     */
    remoteData?: boolean;
}
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const TicketsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "remoteData": "remote_data",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const TicketsRequestBuilderNavigationMetadata: Record<Exclude<keyof TicketsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byId: {
        uriTemplate: TicketsItemRequestBuilderUriTemplate,
        requestsMetadata: TicketsItemRequestBuilderRequestsMetadata,
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
const TicketsRequestBuilderPostQueryParametersMapper: Record<string, string> = {
    "remoteData": "remote_data",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const TicketsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createTicketsGetResponseFromDiscriminatorValue,
        queryParametersMapper: TicketsRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        responseBodyContentType: "application/json",
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createUnifiedTicketOutputFromDiscriminatorValue,
    },
    post: {
        responseBodyContentType: "application/json",
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createTicketsPostResponseFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeUnifiedTicketInput,
        requestInformationContentSetMethod: "setContentFromParsable",
        queryParametersMapper: TicketsRequestBuilderPostQueryParametersMapper,
    },
};
/**
 * Uri template for the request builder.
 */
export const TicketsRequestBuilderUriTemplate = "{+baseurl}/ticketing/tickets?id={id}{&remote_data*}";
/* tslint:enable */
/* eslint-enable */
