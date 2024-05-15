import { useEffect, useState } from "react";
import { PostTerrariaMessage, getAllUsers, getUser } from "../Managers/UserProfileManager";
import { getTerrariaProfile } from "../Managers/terrariamanager";
import "../Styles/Terraria.css"


export const Terraria = () =>
{
    const [profile, getCurrentUser] = useState(null);
    const [messageInput, setMessageInput] = useState("");
    const [allUsers, setAllUsers] = useState([]);
    const [terrariaUser, setTerrariaUser] = useState([]);

    useEffect(() => {
        getAllUsers().then((allProfiles) => {
            setAllUsers(allProfiles);
        });

        getUser().then((userProfile) => {
            getCurrentUser(userProfile);
        });

        getTerrariaProfile().then((tUser) => {
            setTerrariaUser(tUser);
        });

    }, []);

    const handlePost = async () => {
        await PostTerrariaMessage(messageInput);
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

            <div className="terrariaLogo">
                <img className="terraria" src="d6r6e7d-3aa7ddfc-7628-4442-8541-1fe1dc3844c2.png" ></img> 
            </div>

            <div className="postArea">
                {allUsers.map((user) => (
                    <div className="mClass" key={user.id}>
                        <p className="UserName"></p>
                        {user.terrariaMessages && user.terrariaMessages.length > 0 ? (
                            sortMessages(user.terrariaMessages).map((message) => (
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