const apiUrl = "/api/PalWorld"

export const getPalWorldProfile = () =>
{
    return fetch(apiUrl + "/getPalWorldProfile").then((res) => res.json())
}