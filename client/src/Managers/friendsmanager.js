

const apiUrl = "/api/Friend"

export const getFriends = () =>{
    return fetch(apiUrl + "/getFriends").then((res) => res.json());
}