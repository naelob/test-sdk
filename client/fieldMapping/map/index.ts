/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { serializeMapFieldToProviderDto, type MapFieldToProviderDto } from '../../models/';
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /field-mapping/map
 */
export interface MapRequestBuilder extends BaseRequestBuilder<MapRequestBuilder> {
    /**
     * Map Custom Field
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
     post(body: MapFieldToProviderDto, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Map Custom Field
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: MapFieldToProviderDto, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Metadata for all the requests in the request builder.
 */
export const MapRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        adapterMethodName: "sendNoResponseContentAsync",
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeMapFieldToProviderDto,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const MapRequestBuilderUriTemplate = "{+baseurl}/field-mapping/map";
/* tslint:enable */
/* eslint-enable */