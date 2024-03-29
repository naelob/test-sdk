/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createUnifiedTaskOutputFromDiscriminatorValue, deserializeIntoApiResponse, serializeApiResponse, serializeUnifiedTaskInput, serializeUnifiedTaskOutput, type ApiResponse, type UnifiedTaskInput, type UnifiedTaskOutput } from '../../models/';
import { BatchRequestBuilderRequestsMetadata, BatchRequestBuilderUriTemplate, type BatchRequestBuilder } from './batch/';
import { TasksItemRequestBuilderRequestsMetadata, TasksItemRequestBuilderUriTemplate, type TasksItemRequestBuilder } from './item/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns a tasksGetResponse
 */
export function createTasksGetResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoTasksGetResponse;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns a tasksPatchResponse
 */
export function createTasksPatchResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoTasksPatchResponse;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns a tasksPostResponse
 */
export function createTasksPostResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoTasksPostResponse;
}
/**
 * The deserialization information for the current model
 * @returns a Record<string, (node: ParseNode) => void>
 */
export function deserializeIntoTasksGetResponse(tasksGetResponse: Partial<TasksGetResponse> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoApiResponse(tasksGetResponse),
        "data": n => { tasksGetResponse.data = n.getObjectValue<UnifiedTaskOutput>(createUnifiedTaskOutputFromDiscriminatorValue); },
    }
}
/**
 * The deserialization information for the current model
 * @returns a Record<string, (node: ParseNode) => void>
 */
export function deserializeIntoTasksPatchResponse(tasksPatchResponse: Partial<TasksPatchResponse> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoApiResponse(tasksPatchResponse),
        "data": n => { tasksPatchResponse.data = n.getObjectValue<UnifiedTaskOutput>(createUnifiedTaskOutputFromDiscriminatorValue); },
    }
}
/**
 * The deserialization information for the current model
 * @returns a Record<string, (node: ParseNode) => void>
 */
export function deserializeIntoTasksPostResponse(tasksPostResponse: Partial<TasksPostResponse> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoApiResponse(tasksPostResponse),
        "data": n => { tasksPostResponse.data = n.getObjectValue<UnifiedTaskOutput>(createUnifiedTaskOutputFromDiscriminatorValue); },
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeTasksGetResponse(writer: SerializationWriter, tasksGetResponse: Partial<TasksGetResponse> | undefined = {}) : void {
    serializeApiResponse(writer, tasksGetResponse)
    writer.writeObjectValue<UnifiedTaskOutput>("data", tasksGetResponse.data, serializeUnifiedTaskOutput);
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeTasksPatchResponse(writer: SerializationWriter, tasksPatchResponse: Partial<TasksPatchResponse> | undefined = {}) : void {
    serializeApiResponse(writer, tasksPatchResponse)
    writer.writeObjectValue<UnifiedTaskOutput>("data", tasksPatchResponse.data, serializeUnifiedTaskOutput);
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeTasksPostResponse(writer: SerializationWriter, tasksPostResponse: Partial<TasksPostResponse> | undefined = {}) : void {
    serializeApiResponse(writer, tasksPostResponse)
    writer.writeObjectValue<UnifiedTaskOutput>("data", tasksPostResponse.data, serializeUnifiedTaskOutput);
}
export interface TasksGetResponse extends ApiResponse, Parsable {
    /**
     * The data property
     */
    data?: UnifiedTaskOutput;
}
export interface TasksPatchResponse extends ApiResponse, Parsable {
    /**
     * The data property
     */
    data?: UnifiedTaskOutput;
}
export interface TasksPostResponse extends ApiResponse, Parsable {
    /**
     * The data property
     */
    data?: UnifiedTaskOutput;
}
/**
 * Builds and executes requests for operations under /crm/tasks
 */
export interface TasksRequestBuilder extends BaseRequestBuilder<TasksRequestBuilder> {
    /**
     * The batch property
     */
    get batch(): BatchRequestBuilder;
    /**
     * Gets an item from the ApiSdk.crm.tasks.item collection
     * @param id id of the task you want to retrieve.
     * @returns a TasksItemRequestBuilder
     */
     byId(id: string) : TasksItemRequestBuilder;
    /**
     * List a batch of Tasks
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of TasksGetResponse
     */
     get(requestConfiguration?: RequestConfiguration<TasksRequestBuilderGetQueryParameters> | undefined) : Promise<TasksGetResponse | undefined>;
    /**
     * Update a Task
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of TasksPatchResponse
     */
     patch(requestConfiguration?: RequestConfiguration<TasksRequestBuilderPatchQueryParameters> | undefined) : Promise<TasksPatchResponse | undefined>;
    /**
     * Create a task in any supported Crm software
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of TasksPostResponse
     */
     post(body: UnifiedTaskInput, requestConfiguration?: RequestConfiguration<TasksRequestBuilderPostQueryParameters> | undefined) : Promise<TasksPostResponse | undefined>;
    /**
     * List a batch of Tasks
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<TasksRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update a Task
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPatchRequestInformation(requestConfiguration?: RequestConfiguration<TasksRequestBuilderPatchQueryParameters> | undefined) : RequestInformation;
    /**
     * Create a task in any supported Crm software
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: UnifiedTaskInput, requestConfiguration?: RequestConfiguration<TasksRequestBuilderPostQueryParameters> | undefined) : RequestInformation;
}
/**
 * List a batch of Tasks
 */
export interface TasksRequestBuilderGetQueryParameters {
    /**
     * Set to true to include data from the original Crm software.
     */
    remoteData?: boolean;
}
/**
 * Update a Task
 */
export interface TasksRequestBuilderPatchQueryParameters {
    id?: string;
}
/**
 * Create a task in any supported Crm software
 */
export interface TasksRequestBuilderPostQueryParameters {
    /**
     * Set to true to include data from the original Crm software.
     */
    remoteData?: boolean;
}
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const TasksRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "remoteData": "remote_data",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const TasksRequestBuilderNavigationMetadata: Record<Exclude<keyof TasksRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byId: {
        uriTemplate: TasksItemRequestBuilderUriTemplate,
        requestsMetadata: TasksItemRequestBuilderRequestsMetadata,
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
const TasksRequestBuilderPostQueryParametersMapper: Record<string, string> = {
    "remoteData": "remote_data",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const TasksRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createTasksGetResponseFromDiscriminatorValue,
        queryParametersMapper: TasksRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        responseBodyContentType: "application/json",
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createTasksPatchResponseFromDiscriminatorValue,
    },
    post: {
        responseBodyContentType: "application/json",
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createTasksPostResponseFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeUnifiedTaskInput,
        requestInformationContentSetMethod: "setContentFromParsable",
        queryParametersMapper: TasksRequestBuilderPostQueryParametersMapper,
    },
};
/**
 * Uri template for the request builder.
 */
export const TasksRequestBuilderUriTemplate = "{+baseurl}/crm/tasks?id={id}{&remote_data*}";
/* tslint:enable */
/* eslint-enable */
