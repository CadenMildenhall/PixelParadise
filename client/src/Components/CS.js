
import { useEffect, useState } from "react";
import { PostCS2Message, getAllUsers, getUser } from "../Managers/UserProfileManager";
import "../Styles/CS.css"

export const CS = () =>
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
        await PostCS2Message(messageInput);
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
                <div className="CsLogo">
            <img className="cs" src="Counter-Strike_2_logo.svg.png" ></img>
        </div>

        <div className="postArea">
                {allUsers.map((user) => (
                    <div className="mClass" key={user.id}>
                        <p className="UserName">{user.name}</p>
                        {user.cS2Messages && user.cS2Messages.length > 0 ? (
                            sortMessages(user.cS2Messages).map((cs2messages) => (
                                <div key={cs2messages.id} className="Message">
                                    <span className="usersName">{user.identityUser.userName}</span>
                                    <span>: </span>
                                    <span>{cs2messages.text}</span>
                                    <span className="time">{new Date(cs2messages.timeStamp).toLocaleString()}</span>
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