import React, { useEffect, useState } from "react";
import { getAllUsers, getUser, addFriend } from "../Managers/UserProfileManager";
import "../Styles/FriendSearch.css";

export const FriendSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [users, setAllUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    getAllUsers().then((allProfiles) => {
      setAllUsers(allProfiles);
    });
    getUser().then((userProfile) => {
      setCurrentUser(userProfile);
    });
  }, []);

  const handleSearchChange = (e) => {
    const searchTerm = e.target.value.trim().toLowerCase();
    setSearchTerm(searchTerm);

    if (searchTerm) {
      const filtered = users.filter((user) =>
        user.identityUser.userName.toLowerCase().includes(searchTerm)
      );
      setFilteredUsers(filtered.filter((user) => user.id !== currentUser.id));
    } else {
      setFilteredUsers([]);
    }
  };

  const handleAddFriend = async (friendsId, friendsName) => {
    try {
      const response = await addFriend(friendsId, friendsName);
      if (response.ok) {
        // Friend added successfully
        console.log("Friend added successfully!");
        // Optionally, update the UI to indicate the friend was added
      } else {
        // Handle other status codes (e.g., BadRequest)
        const errorMessage = await response.text();
        console.error("Error adding friend:", errorMessage);
      }
    } catch (error) {
      console.error("Error adding friend:", error);
    }
  };
  

  return (
    <>
      <div className="searchbarDiv">
        <input
          className="searchbar"
          placeholder="Find friend"
          type="search"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      {filteredUsers.length > 0 && (
        <div className="searchResults">
          {filteredUsers.map((user) => (
            <div className="results" key={user.id}>
              {user.identityUser.userName}
              <button className="add" onClick={() => handleAddFriend(user.id, user.firstName)}>+</button>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
