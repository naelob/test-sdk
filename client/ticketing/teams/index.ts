/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createUnifiedTeamOutputFromDiscriminatorValue, deserializeIntoApiResponse, serializeApiResponse, serializeUnifiedTeamOutput, type ApiResponse, type UnifiedTeamOutput } from '../../models/';
import { TeamsItemRequestBuilderRequestsMetadata, TeamsItemRequestBuilderUriTemplate, type TeamsItemRequestBuilder } from './item/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns a teamsGetResponse
 */
export function createTeamsGetResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoTeamsGetResponse;
}
/**
 * The deserialization information for the current model
 * @returns a Record<string, (node: ParseNode) => void>
 */
export function deserializeIntoTeamsGetResponse(teamsGetResponse: Partial<TeamsGetResponse> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoApiResponse(teamsGetResponse),
        "data": n => { teamsGetResponse.data = n.getObjectValue<UnifiedTeamOutput>(createUnifiedTeamOutputFromDiscriminatorValue); },
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeTeamsGetResponse(writer: SerializationWriter, teamsGetResponse: Partial<TeamsGetResponse> | undefined = {}) : void {
    serializeApiResponse(writer, teamsGetResponse)
    writer.writeObjectValue<UnifiedTeamOutput>("data", teamsGetResponse.data, serializeUnifiedTeamOutput);
}
export interface TeamsGetResponse extends ApiResponse, Parsable {
    /**
     * The data property
     */
    data?: UnifiedTeamOutput;
}
/**
 * Builds and executes requests for operations under /ticketing/teams
 */
export interface TeamsRequestBuilder extends BaseRequestBuilder<TeamsRequestBuilder> {
    /**
     * Gets an item from the ApiSdk.ticketing.teams.item collection
     * @param id id of the team you want to retrieve.
     * @returns a TeamsItemRequestBuilder
     */
     byId(id: string) : TeamsItemRequestBuilder;
    /**
     * List a batch of Teams
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of TeamsGetResponse
     */
     get(requestConfiguration?: RequestConfiguration<TeamsRequestBuilderGetQueryParameters> | undefined) : Promise<TeamsGetResponse | undefined>;
    /**
     * List a batch of Teams
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<TeamsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
/**
 * List a batch of Teams
 */
export interface TeamsRequestBuilderGetQueryParameters {
    /**
     * Set to true to include data from the original Ticketing software.
     */
    remoteData?: boolean;
}
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const TeamsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "remoteData": "remote_data",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const TeamsRequestBuilderNavigationMetadata: Record<Exclude<keyof TeamsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byId: {
        uriTemplate: TeamsItemRequestBuilderUriTemplate,
        requestsMetadata: TeamsItemRequestBuilderRequestsMetadata,
        pathParametersMappings: ["id"],
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const TeamsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createTeamsGetResponseFromDiscriminatorValue,
        queryParametersMapper: TeamsRequestBuilderGetQueryParametersMapper,
    },
};
/**
 * Uri template for the request builder.
 */
export const TeamsRequestBuilderUriTemplate = "{+baseurl}/ticketing/teams{?remote_data*}";
/* tslint:enable */
/* eslint-enable */
