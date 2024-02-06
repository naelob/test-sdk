/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createUnifiedContactOutputFromDiscriminatorValue, deserializeIntoApiResponse, serializeApiResponse, serializeUnifiedContactInput, serializeUnifiedContactOutput, type ApiResponse, type UnifiedContactInput, type UnifiedContactOutput } from '../../models/';
import { BatchRequestBuilderRequestsMetadata, BatchRequestBuilderUriTemplate, type BatchRequestBuilder } from './batch/';
import { ContactsItemRequestBuilderRequestsMetadata, ContactsItemRequestBuilderUriTemplate, type ContactsItemRequestBuilder } from './item/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

export interface ContactsGetResponse extends ApiResponse, Parsable {
    /**
     * The data property
     */
    data?: UnifiedContactOutput;
}
export interface ContactsPostResponse extends ApiResponse, Parsable {
    /**
     * The data property
     */
    data?: UnifiedContactOutput;
}
/**
 * Builds and executes requests for operations under /crm/contacts
 */
export interface ContactsRequestBuilder extends BaseRequestBuilder<ContactsRequestBuilder> {
    /**
     * The batch property
     */
    get batch(): BatchRequestBuilder;
    /**
     * Gets an item from the ApiSdk.crm.contacts.item collection
     * @param id id of the `contact` you want to retrive.
     * @returns a ContactsItemRequestBuilder
     */
     byId(id: string) : ContactsItemRequestBuilder;
    /**
     * List a batch of CRM Contacts
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ContactsGetResponse
     */
     get(requestConfiguration?: RequestConfiguration<ContactsRequestBuilderGetQueryParameters> | undefined) : Promise<ContactsGetResponse | undefined>;
    /**
     * Update a CRM Contact
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UnifiedContactOutput
     */
     patch(requestConfiguration?: RequestConfiguration<ContactsRequestBuilderPatchQueryParameters> | undefined) : Promise<UnifiedContactOutput | undefined>;
    /**
     * Create a contact in any supported CRM
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ContactsPostResponse
     */
     post(body: UnifiedContactInput, requestConfiguration?: RequestConfiguration<ContactsRequestBuilderPostQueryParameters> | undefined) : Promise<ContactsPostResponse | undefined>;
    /**
     * List a batch of CRM Contacts
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<ContactsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update a CRM Contact
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPatchRequestInformation(requestConfiguration?: RequestConfiguration<ContactsRequestBuilderPatchQueryParameters> | undefined) : RequestInformation;
    /**
     * Create a contact in any supported CRM
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: UnifiedContactInput, requestConfiguration?: RequestConfiguration<ContactsRequestBuilderPostQueryParameters> | undefined) : RequestInformation;
}
/**
 * List a batch of CRM Contacts
 */
export interface ContactsRequestBuilderGetQueryParameters {
    /**
     * Set to true to include data from the original CRM software.
     */
    remoteData?: boolean;
}
/**
 * Update a CRM Contact
 */
export interface ContactsRequestBuilderPatchQueryParameters {
    id?: string;
}
/**
 * Create a contact in any supported CRM
 */
export interface ContactsRequestBuilderPostQueryParameters {
    /**
     * Set to true to include data from the original CRM software.
     */
    remoteData?: boolean;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns a contactsGetResponse
 */
export function createContactsGetResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoContactsGetResponse;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns a contactsPostResponse
 */
export function createContactsPostResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoContactsPostResponse;
}
/**
 * The deserialization information for the current model
 * @returns a Record<string, (node: ParseNode) => void>
 */
export function deserializeIntoContactsGetResponse(contactsGetResponse: Partial<ContactsGetResponse> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoApiResponse(contactsGetResponse),
        "data": n => { contactsGetResponse.data = n.getObjectValue<UnifiedContactOutput>(createUnifiedContactOutputFromDiscriminatorValue); },
    }
}
/**
 * The deserialization information for the current model
 * @returns a Record<string, (node: ParseNode) => void>
 */
export function deserializeIntoContactsPostResponse(contactsPostResponse: Partial<ContactsPostResponse> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoApiResponse(contactsPostResponse),
        "data": n => { contactsPostResponse.data = n.getObjectValue<UnifiedContactOutput>(createUnifiedContactOutputFromDiscriminatorValue); },
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeContactsGetResponse(writer: SerializationWriter, contactsGetResponse: Partial<ContactsGetResponse> | undefined = {}) : void {
    serializeApiResponse(writer, contactsGetResponse)
    writer.writeObjectValue<UnifiedContactOutput>("data", contactsGetResponse.data, serializeUnifiedContactOutput);
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeContactsPostResponse(writer: SerializationWriter, contactsPostResponse: Partial<ContactsPostResponse> | undefined = {}) : void {
    serializeApiResponse(writer, contactsPostResponse)
    writer.writeObjectValue<UnifiedContactOutput>("data", contactsPostResponse.data, serializeUnifiedContactOutput);
}
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const ContactsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "remoteData": "remote_data",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const ContactsRequestBuilderNavigationMetadata: Record<Exclude<keyof ContactsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byId: {
        uriTemplate: ContactsItemRequestBuilderUriTemplate,
        requestsMetadata: ContactsItemRequestBuilderRequestsMetadata,
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
const ContactsRequestBuilderPostQueryParametersMapper: Record<string, string> = {
    "remoteData": "remote_data",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const ContactsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createContactsGetResponseFromDiscriminatorValue,
        queryParametersMapper: ContactsRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        responseBodyContentType: "application/json",
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createUnifiedContactOutputFromDiscriminatorValue,
    },
    post: {
        responseBodyContentType: "application/json",
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createContactsPostResponseFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeUnifiedContactInput,
        requestInformationContentSetMethod: "setContentFromParsable",
        queryParametersMapper: ContactsRequestBuilderPostQueryParametersMapper,
    },
};
/**
 * Uri template for the request builder.
 */
export const ContactsRequestBuilderUriTemplate = "{+baseurl}/crm/contacts?id={id}{&remote_data*}";
/* tslint:enable */
/* eslint-enable */