/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /field-mapping/properties
 */
export interface PropertiesRequestBuilder extends BaseRequestBuilder<PropertiesRequestBuilder> {
    /**
     * Retrieve Custom Properties
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ArrayBuffer
     */
     get(requestConfiguration?: RequestConfiguration<PropertiesRequestBuilderGetQueryParameters> | undefined) : Promise<ArrayBuffer | undefined>;
    /**
     * Retrieve Custom Properties
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<PropertiesRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
/**
 * Retrieve Custom Properties
 */
export interface PropertiesRequestBuilderGetQueryParameters {
    linkedUserId?: string;
    providerId?: string;
}
/**
 * Metadata for all the requests in the request builder.
 */
export const PropertiesRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        adapterMethodName: "sendPrimitiveAsync",
        responseBodyFactory:  "ArrayBuffer",
    },
};
/**
 * Uri template for the request builder.
 */
export const PropertiesRequestBuilderUriTemplate = "{+baseurl}/field-mapping/properties?linkedUserId={linkedUserId}&providerId={providerId}";
/* tslint:enable */
/* eslint-enable */
