const apiUrl = "/api/Roblox"

export const getRobloxProfile = () =>
{
    return fetch(apiUrl + "/getRobloxProfile").then((res) => res.json())
}