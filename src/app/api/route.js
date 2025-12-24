export const feedback = [
    {   
        id: 1,
        message: "The food was delicious"
    },
    {   
        id: 2,
        message: "Waiter services improvement needed"
    }
]

export async function GET(request) {
    return Response.json({
        status: 200,
        message: 'Yantun Khaijan API Created'
    });
}