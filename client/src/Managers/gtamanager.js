const apiUrl = "/api/GTA"

export const getGTAProfile = () =>
{
    return fetch(apiUrl + "/getGTAProfile").then((res) => res.json())
}