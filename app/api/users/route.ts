export async function GET() {

    const data = [
        { name: 'Chandima Ranaweera', email: 'chandima@b2cdevroles.onmicrosoft.com', role: 'Admin' },
        { name: 'Nadeera Kodithuwakku', email: 'nadeera@b2cdevroles.onmicrosoft.com', role: 'User' },
    ];
    return Response.json({ data })
}