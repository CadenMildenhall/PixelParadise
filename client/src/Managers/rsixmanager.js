const apiUrl = "/api/RSix"

export const getRSixProfile = () =>
{
    return fetch(apiUrl + "/getRSixProfile").then((res) => res.json())
}