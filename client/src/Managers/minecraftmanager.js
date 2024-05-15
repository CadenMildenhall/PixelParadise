const apiUrl = "/api/Minecraft"

export const getMinecraftProfile = () =>
{
    return fetch(apiUrl + "/getMinecraftProfile").then((res) => res.json())
}