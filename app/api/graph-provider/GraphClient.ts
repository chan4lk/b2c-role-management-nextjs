import { ClientSecretCredential } from "@azure/identity";
import { Client } from "@microsoft/microsoft-graph-client";
import { TokenCredentialAuthenticationProvider } from "@microsoft/microsoft-graph-client/authProviders/azureTokenCredentials";

const tenantId = process.env.AZURE_AD_B2C_BACKEND_TENANT_ID!;
const clientId = process.env.AZURE_AD_B2C_BACKEND_CLIENT_ID!;
const clientSecret = process.env.AZURE_AD_B2C_BACKEND_SECRET!;
const scopes = process.env.AZURE_AD_B2C_BACKEND_SCOPES!.split(' ');

export function createGraphClient() {
	const credential = new ClientSecretCredential(tenantId, clientId, clientSecret);
	const authProvider = new TokenCredentialAuthenticationProvider(credential, { scopes: scopes });
	const client = Client.initWithMiddleware({
		debugLogging: true,
		authProvider,
	});
    return client;
	// const res = await client.api("/users/").get();
	// console.log(res);
}