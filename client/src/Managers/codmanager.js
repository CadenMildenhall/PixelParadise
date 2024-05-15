const apiUrl = "/api/Cod"

export const getCodProfile = () =>
{
    return fetch(apiUrl + "/getCodProfile").then((res) => res.json())
}