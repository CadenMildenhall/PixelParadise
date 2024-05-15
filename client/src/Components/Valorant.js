
import { useEffect, useState } from "react";
import "../Styles/Valorant.css"
import { PostValorantMessage, getAllUsers, getUser } from "../Managers/UserProfileManager";

export const Valorant = () => {

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
        await PostValorantMessage(messageInput);
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
            <div className="ValLogo">
                <img className="val" src="valorant-logo-valorant-icon-transparent-free-png.webp" ></img>
            </div>

            <div className="postArea">
                {allUsers.map((user) => (
                    <div className="mClass" key={user.id}>
                        <p className="UserName">{user.name}</p>
                        {user.valorantMessages && user.valorantMessages.length > 0 ? (
                            sortMessages(user.valorantMessages).map((valorantmessages) => (
                                <div key={valorantmessages.id} className="Message">
                                  <span className="usersName">{user.identityUser.userName}</span>
                                  <span>: </span>
                                    <span>{valorantmessages.text}</span>
                                    <span className="time">{new Date(valorantmessages.timeStamp).toLocaleString()}</span>
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