

const apiUrl = "/api/DirectMessages"

export const getDirectMessages = () =>
{
    return fetch(apiUrl + "/getDM").then((res) => res.json())
}