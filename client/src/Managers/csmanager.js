const apiUrl = "/api/CS2"

export const getCSProfile = () =>
{
    return fetch(apiUrl + "/getCSProfile").then((res) => res.json())
}