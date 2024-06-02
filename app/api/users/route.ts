import { createGraphClient } from "../graph-provider/GraphClient";

export async function GET() {
    const client = createGraphClient();
    const res = await client.api("/users/").get();
    console.log(res.value);
    return Response.json({ data: res.value })
}