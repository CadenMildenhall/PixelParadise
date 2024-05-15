const apiUrl = "/api/Apex"

export const getApexProfile = () =>
{
    return fetch(apiUrl + "/getApexProfile").then((res) => res.json())
}