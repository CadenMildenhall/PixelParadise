const apiUrl = "/api/UserProfile";

export const getUser = async () => {
  try {
      const response = await fetch(apiUrl + "/getProfile");
      if (!response.ok) {
          throw new Error("Failed to fetch user profile data");
      }
      return await response.json();
  } catch (error) {
      console.error("Error fetching user profile:", error);
      throw error;
  }
};


export const getAllUsers = () =>
{
    return fetch(apiUrl + "/getAllProfiles").then(res => res.json());
}


export const PostMessage = (message) =>
{
    const requestBody = {
        Text: message,
        TimeStamp: new Date().toISOString(),
      };

      fetch(apiUrl + "/postMessage", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });
}

export const PostCS2Message = (message) =>
{
    const requestBody = {
        Text: message,
        TimeStamp: new Date().toISOString(),
      };

      fetch(apiUrl + "/postCSMessage", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });
}

export const PostFortniteMessage = (message) =>
{
    const requestBody = {
        Text: message,
        TimeStamp: new Date().toISOString(),
      };

      fetch(apiUrl + "/postFortniteMessage", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });
}

export const PostCodMessage = (message) =>
{
    const requestBody = {
        Text: message,
        TimeStamp: new Date().toISOString(),
      };

      fetch(apiUrl + "/postCodMessage", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });
}

export const PostChessMessage = (message) =>
{
    const requestBody = {
        Text: message,
        TimeStamp: new Date().toISOString(),
      };

      fetch(apiUrl + "/postChessMessage", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });
}

export const PostFinalsMessage = (message) =>
{
    const requestBody = {
        Text: message,
        TimeStamp: new Date().toISOString(),
      };

      fetch(apiUrl + "/postFinalsMessage", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });
}

export const PostRSixMessage = (message) =>
{
    const requestBody = {
        Text: message,
        TimeStamp: new Date().toISOString(),
      };

      fetch(apiUrl + "/postRSixMessage", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });
}

export const PostMinecraftMessage = (message) =>
{
    const requestBody = {
        Text: message,
        TimeStamp: new Date().toISOString(),
      };

      fetch(apiUrl + "/postMinecraftMessage", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });
}

export const PostValorantMessage = (message) =>
{
    const requestBody = {
        Text: message,
        TimeStamp: new Date().toISOString(),
      };

      fetch(apiUrl + "/postValorantMessage", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });
}

export const PostStarCraftMessage = (message) =>
{
    const requestBody = {
        Text: message,
        TimeStamp: new Date().toISOString(),
      };

      fetch(apiUrl + "/postStarCraftMessage", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });
}

export const addFriend = async (friendsId, friendsName) => {
    try {
      const response = await fetch(apiUrl + "/addFriend", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ friendsId, friendsName }),
      });
  
      if (!response.ok) {
        throw new Error('Failed to add friend');
      }
  
      return await response.json();
    } catch (error) {
      console.error('Error adding friend:', error);
      throw error;
    }
  }
  
  export const PostDirectMessage = (message) =>
{
    const requestBody = {
        Message: message,
        TimeStamp: new Date().toISOString(),
      };

      fetch(apiUrl + "/postDirectMessage", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });
}

export const removeFriend = async (friendId) => {
  try {
    const response = await fetch(`${apiUrl}/RemoveFriend/${friendId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to remove friend');
    }

    return await response.json(); // If your API returns a response, you can parse and return it
  } catch (error) {
    console.error('Error removing friend:', error);
    throw error;
  }
};

////////////////////////////////////////////
///////////////////////////////////////////

export const PostHellDiversMessage = (message) =>
{
    const requestBody = {
        Text: message,
        TimeStamp: new Date().toISOString(),
      };

      fetch(apiUrl + "/postHellDiversMessage", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });
}

export const PostEFTMessage = (message) =>
{
    const requestBody = {
        Text: message,
        TimeStamp: new Date().toISOString(),
      };

      fetch(apiUrl + "/postEFTMessage", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });
}

export const PostGTAMessage = (message) =>
{
    const requestBody = {
        Text: message,
        TimeStamp: new Date().toISOString(),
      };

      fetch(apiUrl + "/postGTAMessage", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });
}

export const PostPalWorldMessage = (message) =>
{
    const requestBody = {
        Text: message,
        TimeStamp: new Date().toISOString(),
      };

      fetch(apiUrl + "/postPalWorldMessage", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });
}

export const PostRobloxMessage = (message) =>
{
    const requestBody = {
        Text: message,
        TimeStamp: new Date().toISOString(),
      };

      fetch(apiUrl + "/postRobloxMessage", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });
}

export const PostRustMessage = (message) =>
{
    const requestBody = {
        Text: message,
        TimeStamp: new Date().toISOString(),
      };

      fetch(apiUrl + "/postRustMessage", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });
}

export const PostLeagueMessage = (message) =>
{
    const requestBody = {
        Text: message,
        TimeStamp: new Date().toISOString(),
      };

      fetch(apiUrl + "/postLeagueMessage", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });
}

export const PostEldenMessage = (message) =>
{
    const requestBody = {
        Text: message,
        TimeStamp: new Date().toISOString(),
      };

      fetch(apiUrl + "/postEldenMessage", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });
}

export const PostDestinyMessage = (message) =>
{
    const requestBody = {
        Text: message,
        TimeStamp: new Date().toISOString(),
      };

      fetch(apiUrl + "/postDestinyMessage", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });
}

export const PostTerrariaMessage = (message) =>
{
    const requestBody = {
        Text: message,
        TimeStamp: new Date().toISOString(),
      };

      fetch(apiUrl + "/postTerrariaMessage", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });
}