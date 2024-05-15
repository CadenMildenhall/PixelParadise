const apiUrl = "/api/Destiny"

export const getDestinyProfile = () =>
{
    return fetch(apiUrl + "/getDestinyProfile").then((res) => res.json())
}