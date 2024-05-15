const apiUrl = "/api/chess"

export const getChessUser = () =>
{
    return fetch(apiUrl + "/getChessUser")
}