/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { AuthRequestBuilderNavigationMetadata, AuthRequestBuilderUriTemplate, type AuthRequestBuilder } from './auth/';
import { ConnectionsRequestBuilderNavigationMetadata, ConnectionsRequestBuilderRequestsMetadata, ConnectionsRequestBuilderUriTemplate, type ConnectionsRequestBuilder } from './connections/';
import { CrmRequestBuilderNavigationMetadata, CrmRequestBuilderUriTemplate, type CrmRequestBuilder } from './crm/';
import { EventsRequestBuilderRequestsMetadata, EventsRequestBuilderUriTemplate, type EventsRequestBuilder } from './events/';
import { FieldMappingRequestBuilderNavigationMetadata, FieldMappingRequestBuilderUriTemplate, type FieldMappingRequestBuilder } from './fieldMapping/';
import { HealthRequestBuilderRequestsMetadata, HealthRequestBuilderUriTemplate, type HealthRequestBuilder } from './health/';
import { LinkedUsersRequestBuilderNavigationMetadata, LinkedUsersRequestBuilderRequestsMetadata, LinkedUsersRequestBuilderUriTemplate, type LinkedUsersRequestBuilder } from './linkedUsers/';
import { MagicLinkRequestBuilderNavigationMetadata, MagicLinkRequestBuilderRequestsMetadata, MagicLinkRequestBuilderUriTemplate, type MagicLinkRequestBuilder } from './magicLink/';
import { OrganisationsRequestBuilderNavigationMetadata, OrganisationsRequestBuilderRequestsMetadata, OrganisationsRequestBuilderUriTemplate, type OrganisationsRequestBuilder } from './organisations/';
import { PassthroughRequestBuilderRequestsMetadata, PassthroughRequestBuilderUriTemplate, type PassthroughRequestBuilder } from './passthrough/';
import { ProjectsRequestBuilderNavigationMetadata, ProjectsRequestBuilderRequestsMetadata, ProjectsRequestBuilderUriTemplate, type ProjectsRequestBuilder } from './projects/';
import { ProtectedRequestBuilderRequestsMetadata, ProtectedRequestBuilderUriTemplate, type ProtectedRequestBuilder } from './protected/';
import { TicketingRequestBuilderNavigationMetadata, TicketingRequestBuilderUriTemplate, type TicketingRequestBuilder } from './ticketing/';
import { type WebhookRequestBuilder, WebhookRequestBuilderNavigationMetadata, WebhookRequestBuilderRequestsMetadata, WebhookRequestBuilderUriTemplate } from './webhook/';
import { apiClientProxifier, registerDefaultDeserializer, registerDefaultSerializer, type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestAdapter, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';
import { FormParseNodeFactory, FormSerializationWriterFactory } from '@microsoft/kiota-serialization-form';
import { JsonParseNodeFactory, JsonSerializationWriterFactory } from '@microsoft/kiota-serialization-json';
import { MultipartSerializationWriterFactory } from '@microsoft/kiota-serialization-multipart';
import { TextParseNodeFactory, TextSerializationWriterFactory } from '@microsoft/kiota-serialization-text';

/**
 * The main entry point of the SDK, exposes the configuration and the fluent API.
 */
export interface Client extends BaseRequestBuilder<Client> {
    /**
     * The auth property
     */
    get auth(): AuthRequestBuilder;
    /**
     * The connections property
     */
    get connections(): ConnectionsRequestBuilder;
    /**
     * The crm property
     */
    get crm(): CrmRequestBuilder;
    /**
     * The events property
     */
    get events(): EventsRequestBuilder;
    /**
     * The fieldMapping property
     */
    get fieldMapping(): FieldMappingRequestBuilder;
    /**
     * The health property
     */
    get health(): HealthRequestBuilder;
    /**
     * The linkedUsers property
     */
    get linkedUsers(): LinkedUsersRequestBuilder;
    /**
     * The magicLink property
     */
    get magicLink(): MagicLinkRequestBuilder;
    /**
     * The organisations property
     */
    get organisations(): OrganisationsRequestBuilder;
    /**
     * The passthrough property
     */
    get passthrough(): PassthroughRequestBuilder;
    /**
     * The projects property
     */
    get projects(): ProjectsRequestBuilder;
    /**
     * The protected property
     */
    get protected(): ProtectedRequestBuilder;
    /**
     * The ticketing property
     */
    get ticketing(): TicketingRequestBuilder;
    /**
     * The webhook property
     */
    get webhook(): WebhookRequestBuilder;
    /**
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of String
     */
     get(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<string | undefined>;
    /**
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Instantiates a new Client and sets the default values.
 * @param requestAdapter The request adapter to use to execute the requests.
 */
export function createClient(requestAdapter: RequestAdapter) {
    registerDefaultSerializer(JsonSerializationWriterFactory);
    registerDefaultSerializer(TextSerializationWriterFactory);
    registerDefaultSerializer(FormSerializationWriterFactory);
    registerDefaultSerializer(MultipartSerializationWriterFactory);
    registerDefaultDeserializer(JsonParseNodeFactory);
    registerDefaultDeserializer(TextParseNodeFactory);
    registerDefaultDeserializer(FormParseNodeFactory);
    if (requestAdapter.baseUrl === undefined || requestAdapter.baseUrl === "") {
        requestAdapter.baseUrl = "https://api-demo.panora.dev";
    }
    const pathParameters: Record<string, unknown> = {
        "baseurl": requestAdapter.baseUrl,
    };
    return apiClientProxifier<Client>(requestAdapter, pathParameters, ClientUriTemplate, ClientNavigationMetadata, ClientRequestsMetadata);
}
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const ClientNavigationMetadata: Record<Exclude<keyof Client, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    auth: {
        uriTemplate: AuthRequestBuilderUriTemplate,
        navigationMetadata: AuthRequestBuilderNavigationMetadata,
    },
    connections: {
        uriTemplate: ConnectionsRequestBuilderUriTemplate,
        requestsMetadata: ConnectionsRequestBuilderRequestsMetadata,
        navigationMetadata: ConnectionsRequestBuilderNavigationMetadata,
    },
    crm: {
        uriTemplate: CrmRequestBuilderUriTemplate,
        navigationMetadata: CrmRequestBuilderNavigationMetadata,
    },
    events: {
        uriTemplate: EventsRequestBuilderUriTemplate,
        requestsMetadata: EventsRequestBuilderRequestsMetadata,
    },
    fieldMapping: {
        uriTemplate: FieldMappingRequestBuilderUriTemplate,
        navigationMetadata: FieldMappingRequestBuilderNavigationMetadata,
    },
    health: {
        uriTemplate: HealthRequestBuilderUriTemplate,
        requestsMetadata: HealthRequestBuilderRequestsMetadata,
    },
    linkedUsers: {
        uriTemplate: LinkedUsersRequestBuilderUriTemplate,
        requestsMetadata: LinkedUsersRequestBuilderRequestsMetadata,
        navigationMetadata: LinkedUsersRequestBuilderNavigationMetadata,
    },
    magicLink: {
        uriTemplate: MagicLinkRequestBuilderUriTemplate,
        requestsMetadata: MagicLinkRequestBuilderRequestsMetadata,
        navigationMetadata: MagicLinkRequestBuilderNavigationMetadata,
    },
    organisations: {
        uriTemplate: OrganisationsRequestBuilderUriTemplate,
        requestsMetadata: OrganisationsRequestBuilderRequestsMetadata,
        navigationMetadata: OrganisationsRequestBuilderNavigationMetadata,
    },
    passthrough: {
        uriTemplate: PassthroughRequestBuilderUriTemplate,
        requestsMetadata: PassthroughRequestBuilderRequestsMetadata,
    },
    projects: {
        uriTemplate: ProjectsRequestBuilderUriTemplate,
        requestsMetadata: ProjectsRequestBuilderRequestsMetadata,
        navigationMetadata: ProjectsRequestBuilderNavigationMetadata,
    },
    protected: {
        uriTemplate: ProtectedRequestBuilderUriTemplate,
        requestsMetadata: ProtectedRequestBuilderRequestsMetadata,
    },
    ticketing: {
        uriTemplate: TicketingRequestBuilderUriTemplate,
        navigationMetadata: TicketingRequestBuilderNavigationMetadata,
    },
    webhook: {
        uriTemplate: WebhookRequestBuilderUriTemplate,
        requestsMetadata: WebhookRequestBuilderRequestsMetadata,
        navigationMetadata: WebhookRequestBuilderNavigationMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const ClientRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        adapterMethodName: "sendPrimitiveAsync",
        responseBodyFactory:  "string",
    },
};
/**
 * Uri template for the request builder.
 */
export const ClientUriTemplate = "{+baseurl}";
/* tslint:enable */
/* eslint-enable */