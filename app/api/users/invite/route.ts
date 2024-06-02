

export async function GET() {

    const data = [
        { fullname: 'Chandima Ranaweera', email: 'chandima@b2cdevroles.onmicrosoft.com', role: 'admin' },
        { fullname: '', email: '', role: '' },
    ];
    return Response.json({ data })
}