const apiUrl = "/api/StarCraft"

export const getStarCraftProfile = () =>
{
    return fetch(apiUrl + "/getStarCraftProfile").then((res) => res.json())
}