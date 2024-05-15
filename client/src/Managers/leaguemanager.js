const apiUrl = "/api/League"

export const getLeagueProfile = () =>
{
    return fetch(apiUrl + "/getLeagueProfile").then((res) => res.json())
}