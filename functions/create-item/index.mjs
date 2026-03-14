export const handler = async (event) => {

    const body = JSON.parse(event.body);

    const item = {
        id: Date.now(),
        name: body.name
    };

    return {
        statusCode: 201,
        body: JSON.stringify(item)
    };
};