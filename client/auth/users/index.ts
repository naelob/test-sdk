/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /auth/users
 */
export interface UsersRequestBuilder extends BaseRequestBuilder<UsersRequestBuilder> {
    /**
     * Get users
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ArrayBuffer
     */
     get(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<ArrayBuffer | undefined>;
    /**
     * Get users
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Metadata for all the requests in the request builder.
 */
export const UsersRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        adapterMethodName: "sendPrimitiveAsync",
        responseBodyFactory:  "ArrayBuffer",
    },
};
/**
 * Uri template for the request builder.
 */
export const UsersRequestBuilderUriTemplate = "{+baseurl}/auth/users";
/* tslint:enable */
/* eslint-enable */
