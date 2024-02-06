import { AnonymousAuthenticationProvider } from '@microsoft/kiota-abstractions';
import { FetchRequestAdapter } from '@microsoft/kiota-http-fetchlibrary';
import { Client, createClient } from './client/client';

// API requires no authentication, so use the anonymous
// authentication provider
const authProvider = new AnonymousAuthenticationProvider();
// Create request adapter using the fetch-based implementation
const adapter = new FetchRequestAdapter(authProvider);
//adapter.baseUrl = "https://api-demo.panora.dev"
// Create the API client
const client: Client = createClient(adapter);

async function main(): Promise<void> {
    try {
        const res = await client.get();
        //console.log("res is " + JSON.stringify(res))
    } catch(error) {
        console.log(error);
    }
}
main()