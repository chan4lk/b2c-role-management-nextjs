import { createGraphClient } from "../graph-provider/GraphClient";

// Make sure app id does not have '-' in between.
const ROLE_PROP = `extension_${process.env.AZURE_AD_B2C_BACKEND_EXTENTSION_APP_ID}_Roles`;

export async function GET() {
    const client = createGraphClient();
    const res = await client.api("/users/").get();
    console.log(res);
    const users = res.value.map((u:any) => ({...u, role: u[ROLE_PROP]}));
    return Response.json({ data: users })
}

export async function PATCH(req: Request) {
    const { email, role, displayName } = await req.json();
    const client = createGraphClient();
    const res = await client.api(`/users/${email}`).patch({
        [ROLE_PROP]: role,
        displayName
    });
    return Response.json({ err: null })
}