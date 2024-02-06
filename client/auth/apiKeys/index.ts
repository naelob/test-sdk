/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /auth/api-keys
 */
export interface ApiKeysRequestBuilder extends BaseRequestBuilder<ApiKeysRequestBuilder> {
    /**
     * Retrieve API Keys
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ArrayBuffer
     */
     get(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<ArrayBuffer | undefined>;
    /**
     * Retrieve API Keys
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Metadata for all the requests in the request builder.
 */
export const ApiKeysRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        adapterMethodName: "sendPrimitiveAsync",
        responseBodyFactory:  "ArrayBuffer",
    },
};
/**
 * Uri template for the request builder.
 */
export const ApiKeysRequestBuilderUriTemplate = "{+baseurl}/auth/api-keys";
/* tslint:enable */
/* eslint-enable */
