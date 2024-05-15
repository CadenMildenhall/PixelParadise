import { useEffect, useState } from "react";
import { PostEldenMessage, getAllUsers, getUser } from "../Managers/UserProfileManager";
import { getEldenProfile } from "../Managers/eldenmanager";
import "../Styles/Elden.css"

export const EldenRing = () =>
{
    const [profile, getCurrentUser] = useState(null);
    const [messageInput, setMessageInput] = useState("");
    const [allUsers, setAllUsers] = useState([]);
    const [eldenProfile, setEldenProfile] = useState([]);

    useEffect(() => {
        getAllUsers().then((allProfiles) => {
            setAllUsers(allProfiles);
        });

        getUser().then((userProfile) => {
            getCurrentUser(userProfile);
        });

        getEldenProfile().then((rUser) => {
            setEldenProfile(rUser);
        });

    }, []);

    const handlePost = async () => {
        await PostEldenMessage(messageInput);
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

            <div className="eldenLogo">
                <img className="elden" src="Elden-Ring-Logo-PNG-File.png" ></img> 
            </div>

            <div className="postArea">
                {allUsers.map((user) => (
                    <div className="mClass" key={user.id}>
                        <p className="UserName"></p>
                        {user.eldenRingMessages && user.eldenRingMessages.length > 0 ? (
                            sortMessages(user.eldenRingMessages).map((message) => (
                                <div key={message.id} className="Message">
                                    <span className="usersName">{user.identityUser.userName}</span>
                                    <span>{message.userProfiles}</span>
                                    <span>: </span>
                                    <span>{message.text}</span>
                                    <span className="time">{new Date(message.timeStamp).toLocaleString()}</span>
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