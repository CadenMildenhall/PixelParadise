const apiUrl = "/api/Rust"

export const getRustProfile = () =>
{
    return fetch(apiUrl + "/getRustProfile").then((res) => res.json())
}