import NextAuth from "next-auth"
import AzureADB2CProvider from "next-auth/providers/azure-ad-b2c";

export const { auth, handlers, signIn, signOut }  = NextAuth({
    providers: [
        AzureADB2CProvider({
          tenantId: process.env.AZURE_AD_B2C_TENANT_NAME,
          clientId: process.env.AZURE_AD_B2C_CLIENT_ID!,
          clientSecret: '',
          primaryUserFlow: process.env.AZURE_AD_B2C_PRIMARY_USER_FLOW,
          authorization: { params: { scope: "offline_access openid" } },
          checks:["pkce"],
        }),
      ],
})