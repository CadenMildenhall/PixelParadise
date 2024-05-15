const apiUrl = "/api/HellDivers"

export const getHellDiversProfile = () =>
{
    return fetch(apiUrl + "/getHellDiversProfile").then((res) => res.json())
}