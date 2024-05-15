const apiUrl = "/api/EFT"

export const getEFTProfile = () =>
{
    return fetch(apiUrl + "/getEFTProfile").then((res) => res.json())
}