const apiUrl = "/api/EldenRing"

export const getEldenProfile = () =>
{
    return fetch(apiUrl + "/getEldenRingProfile").then((res) => res.json())
}