

import { useEffect, useState } from "react";
import { PostStarCraftMessage, getAllUsers, getUser } from "../Managers/UserProfileManager";
import "../Styles/StarCraft.css"

export const StarCraft = () =>
{

    const [profile, getCurrentUser] = useState(null);
    const [messageInput, setMessageInput] = useState("");
    const [allUsers, setAllUsers] = useState([]);

    useEffect(() => {
        getAllUsers().then((allProfiles) => {
            setAllUsers(allProfiles);
        });

        getUser().then((userProfile) => {
            getCurrentUser(userProfile);
        });
    }, []);

    const handlePost = async () => {
        await PostStarCraftMessage(messageInput);
        // After posting, update the messages by fetching all users again
        getAllUsers().then((allProfiles) => {
            setAllUsers(allProfiles);
        });
        // Clear the message input field after posting
        setMessageInput("");
    }
    // Sort messages by TimeStamp in descending order
    const sortMessages = (messages) => {
        return messages.sort((a, b) => new Date(b.TimeStamp) - new Date(a.TimeStamp));
    }

    return (
        <>

        <div className="SCLOGO">
            <img className="sc" src="starCraft2.png" ></img>
        </div>

        <div className="postArea">
                {allUsers.map((user) => (
                    <div className="mClass" key={user.id}>
                        <p className="UserName">{user.name}</p>
                        {user.starCraftMessages && user.starCraftMessages.length > 0 ? (
                            sortMessages(user.starCraftMessages).map((starcraftmessages) => (
                                <div key={starcraftmessages.id} className="Message">
                                    <span className="usersName">{user.identityUser.userName}</span>
                                    <span>: </span>
                                    <span>{starcraftmessages.text}</span>
                                    <span className="time">{new Date(starcraftmessages.timeStamp).toLocaleString()}</span>
                                </div>
                            ))
                        ) : (
                            <span></span>
                        )}
                    </div>
                ))}
            </div>

            <div className="TextBox">
                <textarea
                    onChange={(e) => setMessageInput(e.target.value)}
                    className="Text"
                    value={messageInput}
                />
            </div>

            <div className="buttons">
                <button onClick={handlePost} className="postButton">Post</button>
            </div>

        </>
    )
}