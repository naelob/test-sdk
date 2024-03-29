/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { serializeCreateUserDto, type CreateUserDto } from '../../models/';
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /auth/register
 */
export interface RegisterRequestBuilder extends BaseRequestBuilder<RegisterRequestBuilder> {
    /**
     * Register
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
     post(body: CreateUserDto, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Register
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: CreateUserDto, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Metadata for all the requests in the request builder.
 */
export const RegisterRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        adapterMethodName: "sendNoResponseContentAsync",
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeCreateUserDto,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const RegisterRequestBuilderUriTemplate = "{+baseurl}/auth/register";
/* tslint:enable */
/* eslint-enable */
