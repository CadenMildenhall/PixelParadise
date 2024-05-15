const apiUrl = "/api/Finals"

export const getFinalsProfile = () =>
{
    return fetch(apiUrl + "/getFinalsProfile").then((res) => res.json())
}