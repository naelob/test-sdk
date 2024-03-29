/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /connections/oauth/callback
 */
export interface CallbackRequestBuilder extends BaseRequestBuilder<CallbackRequestBuilder> {
    /**
     * Capture oAuth callback
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ArrayBuffer
     */
     get(requestConfiguration?: RequestConfiguration<CallbackRequestBuilderGetQueryParameters> | undefined) : Promise<ArrayBuffer | undefined>;
    /**
     * Capture oAuth callback
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<CallbackRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
/**
 * Capture oAuth callback
 */
export interface CallbackRequestBuilderGetQueryParameters {
    code?: string;
    location?: string;
    state?: string;
}
/**
 * Metadata for all the requests in the request builder.
 */
export const CallbackRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        adapterMethodName: "sendPrimitiveAsync",
        responseBodyFactory:  "ArrayBuffer",
    },
};
/**
 * Uri template for the request builder.
 */
export const CallbackRequestBuilderUriTemplate = "{+baseurl}/connections/oauth/callback?code={code}&location={location}&state={state}";
/* tslint:enable */
/* eslint-enable */
