export const handler = async (event) => {

    const items = [
        { id: 1, name: "item1" },
        { id: 2, name: "item2" }
    ];

    return {
        statusCode: 200,
        body: JSON.stringify(items)
    };
};