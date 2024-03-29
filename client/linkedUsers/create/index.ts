/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { serializeCreateLinkedUserDto, type CreateLinkedUserDto } from '../../models/';
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /linked-users/create
 */
export interface CreateRequestBuilder extends BaseRequestBuilder<CreateRequestBuilder> {
    /**
     * Add Linked User
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
     post(body: CreateLinkedUserDto, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Add Linked User
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: CreateLinkedUserDto, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Metadata for all the requests in the request builder.
 */
export const CreateRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        adapterMethodName: "sendNoResponseContentAsync",
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeCreateLinkedUserDto,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const CreateRequestBuilderUriTemplate = "{+baseurl}/linked-users/create";
/* tslint:enable */
/* eslint-enable */
