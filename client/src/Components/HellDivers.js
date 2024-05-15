import { useEffect, useState } from "react";
import { PostHellDiversMessage, PostMessage, getAllUsers, getUser } from "../Managers/UserProfileManager";
import { getApexProfile } from "../Managers/apexmanager";
import "../Styles/HellDivers.css"
import { getHellDiversProfile } from "../Managers/helldiversmanager";


export const HellDivers = () =>
{
    

    const [profile, getCurrentUser] = useState(null);
    const [messageInput, setMessageInput] = useState("");
    const [allUsers, setAllUsers] = useState([]);
    const [helldiversUser, setHellDiversUser] = useState([])

    useEffect(() => {
        getAllUsers().then((allProfiles) => {
            setAllUsers(allProfiles);
        });

        getUser().then((userProfile) => {
            getCurrentUser(userProfile);
        });

        getHellDiversProfile().then((hUser) => {
            setHellDiversUser(hUser);
        });

    }, []);

    const handlePost = async () => {
        await PostHellDiversMessage(messageInput);
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

            <div className="hellDiversLogo">
                <img className="hellDivers" src="HellDivers.png" ></img>
            </div>

            <div className="postArea">
                {allUsers.map((user) => (
                    <div className="mClass" key={user.id}>
                        <p className="UserName"></p>
                        {user.hellDiversMessages && user.hellDiversMessages.length > 0 ? (
                            sortMessages(user.hellDiversMessages).map((message) => (
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