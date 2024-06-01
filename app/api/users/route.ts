export async function GET() {

    const data = [
        { fullname: 'Chandima Ranaweera', email: 'chandima@b2cdevroles.onmicrosoft.com', role: 'Admin' },
        { fullname: 'Nadeera Kodithuwakku', email: 'nadeera@b2cdevroles.onmicrosoft.com', role: 'User' },
    ];
    return Response.json({ data })
}