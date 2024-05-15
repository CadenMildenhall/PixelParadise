import { useEffect, useState } from "react";
import { PostMinecraftMessage, getAllUsers, getUser } from "../Managers/UserProfileManager";
import "../Styles/Minecraft.css"

export const Minecraft = () =>
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
        await PostMinecraftMessage(messageInput);
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

        <div className="MineLogo">
            <img className="mine" src="new-minecraft-logo.png" ></img>
        </div>

        <div className="postArea">
                {allUsers.map((user) => (
                    <div className="mClass" key={user.id}>
                        <p className="UserName">{user.name}</p>
                        {user.minecraftMessages && user.minecraftMessages.length > 0 ? (
                            sortMessages(user.minecraftMessages).map((minecraftmessages) => (
                                <div key={minecraftmessages.id} className="Message">
                                 <span className="usersName">{user.identityUser.userName}</span>
                                 <span>: </span>
                                    <span>{minecraftmessages.text}</span>
                                    <span className="time">{new Date(minecraftmessages.timeStamp).toLocaleString()}</span>
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
                <button onClick={() => {handlePost()}} className="postButton">Post</button>
            </div>

        </>
    )
}