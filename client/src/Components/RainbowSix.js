
import { useEffect, useState } from "react";
import "../Styles/RainbowSix.css"
import { PostRSixMessage, getAllUsers, getUser } from "../Managers/UserProfileManager";

export const RainbowSix = () =>
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
        await PostRSixMessage(messageInput);
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

    return(
        <>

        <div className="rainbowLogo">
            <img className="rainbow" src="Rainbow-Six-Symbol.png" ></img>
        </div>
    
        <div className="postArea">
                {allUsers.map((user) => (
                    <div className="mClass" key={user.id}>
                        <p className="UserName">{user.name}</p>
                        {user.rSixMessages && user.rSixMessages.length > 0 ? (
                            sortMessages(user.rSixMessages).map((rsixmessages) => (
                                <div key={rsixmessages.id} className="Message">
                                    <span className="usersName">{user.identityUser.userName}</span>
                                    <span>: </span>
                                    <span>{rsixmessages.text}</span>
                                    <span className="time">{new Date(rsixmessages.timeStamp).toLocaleString()}</span>
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