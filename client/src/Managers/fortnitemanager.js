const apiUrl = "/api/Fortnite"

export const getFortniteProfile = () =>
{
    return fetch(apiUrl + "/getFortniteProfile").then((res) => res.json())
}