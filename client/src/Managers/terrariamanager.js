const apiUrl = "/api/Terraria"

export const getTerrariaProfile = () =>
{
    return fetch(apiUrl + "/getTerrariaProfile").then((res) => res.json())
}