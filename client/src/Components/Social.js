import { useNavigate } from "react-router-dom"
import "../Styles/Social.css"
import { useEffect, useState } from "react";
import { getAllUsers, getUser, removeFriend } from "../Managers/UserProfileManager";
import { getFriends } from "../Managers/friendsmanager";

export const Social = () => {
    const [profile, getCurrentUser] = useState(null);
    const [allUsers, setAllUsers] = useState([]);
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        getAllUsers().then((allProfiles) => {
            setAllUsers(allProfiles);
        });

        getUser().then((userProfile) => {
            getCurrentUser(userProfile);
        });

        getFriends().then((friends) =>{
            setFriends(friends)
        })
    }, []);

    const navigate = useNavigate();

    const toFriendSearch = () => {
        navigate("/friendsearch");
    }

    const toDM = () =>
    {
        navigate("/message")
    }

    const handleRemoveFriend = (friendIdToRemove) => {
        removeFriend(friendIdToRemove)
          .then((response) => {
            console.log(response); // Log the response from the server
            // Update the state or perform any other actions as needed
          })
          .catch((error) => {
            console.error('Error removing friend:', error);
          });
      };
      
    
      // Usage example: call handleRemoveFriend with the friend's ID
      

    return (
        <>
            <div className="buttons">
                <button onClick={toFriendSearch} className="findFriends">find friends</button>
            </div>

            <div className="friendsListHeader">
                <h1 className="freindsListTitle">Friends List:</h1>
            </div>

            <div className="friendsList">
                {profile?.friend?.map((friend) => (
                    <>
                    <div className="friends" key={friend.id}>{friend.friendsName}</div>

                    <div className="friendButtons">
                    <button onClick={toDM} className="messageButton">message</button>
                    <button onClick={() => handleRemoveFriend(friend.friendsId)} className="removeFriendButton">remove</button>
                    </div>

                    </>
                ))}
            </div>
        </>
    )
}
