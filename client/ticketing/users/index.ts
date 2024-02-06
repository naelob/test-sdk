/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createUnifiedUserOutputFromDiscriminatorValue, deserializeIntoApiResponse, serializeApiResponse, serializeUnifiedUserOutput, type ApiResponse, type UnifiedUserOutput } from '../../models/';
import { type UsersItemRequestBuilder, UsersItemRequestBuilderRequestsMetadata, UsersItemRequestBuilderUriTemplate } from './item/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns a usersGetResponse
 */
export function createUsersGetResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoUsersGetResponse;
}
/**
 * The deserialization information for the current model
 * @returns a Record<string, (node: ParseNode) => void>
 */
export function deserializeIntoUsersGetResponse(usersGetResponse: Partial<UsersGetResponse> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoApiResponse(usersGetResponse),
        "data": n => { usersGetResponse.data = n.getObjectValue<UnifiedUserOutput>(createUnifiedUserOutputFromDiscriminatorValue); },
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeUsersGetResponse(writer: SerializationWriter, usersGetResponse: Partial<UsersGetResponse> | undefined = {}) : void {
    serializeApiResponse(writer, usersGetResponse)
    writer.writeObjectValue<UnifiedUserOutput>("data", usersGetResponse.data, serializeUnifiedUserOutput);
}
export interface UsersGetResponse extends ApiResponse, Parsable {
    /**
     * The data property
     */
    data?: UnifiedUserOutput;
}
/**
 * Builds and executes requests for operations under /ticketing/users
 */
export interface UsersRequestBuilder extends BaseRequestBuilder<UsersRequestBuilder> {
    /**
     * Gets an item from the ApiSdk.ticketing.users.item collection
     * @param id id of the user you want to retrieve.
     * @returns a UsersItemRequestBuilder
     */
     byId(id: string) : UsersItemRequestBuilder;
    /**
     * List a batch of Users
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UsersGetResponse
     */
     get(requestConfiguration?: RequestConfiguration<UsersRequestBuilderGetQueryParameters> | undefined) : Promise<UsersGetResponse | undefined>;
    /**
     * List a batch of Users
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<UsersRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
/**
 * List a batch of Users
 */
export interface UsersRequestBuilderGetQueryParameters {
    /**
     * Set to true to include data from the original Ticketing software.
     */
    remoteData?: boolean;
}
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const UsersRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "remoteData": "remote_data",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const UsersRequestBuilderNavigationMetadata: Record<Exclude<keyof UsersRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byId: {
        uriTemplate: UsersItemRequestBuilderUriTemplate,
        requestsMetadata: UsersItemRequestBuilderRequestsMetadata,
        pathParametersMappings: ["id"],
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const UsersRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createUsersGetResponseFromDiscriminatorValue,
        queryParametersMapper: UsersRequestBuilderGetQueryParametersMapper,
    },
};
/**
 * Uri template for the request builder.
 */
export const UsersRequestBuilderUriTemplate = "{+baseurl}/ticketing/users{?remote_data*}";
/* tslint:enable */
/* eslint-enable */
