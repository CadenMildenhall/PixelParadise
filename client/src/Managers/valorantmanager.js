const apiUrl = "/api/Valorant"

export const getValorantProfile = () =>
{
    return fetch(apiUrl + "/getValorantProfile").then((res) => res.json())
}