

import { useEffect, useState } from "react";
import "../Styles/CallOfDuty.css"
import { PostCodMessage, getAllUsers, getUser } from "../Managers/UserProfileManager";
import { getCodProfile } from "../Managers/codmanager";

export const CallOfDuty = () =>
{

    const [profile, getCurrentUser] = useState(null);
    const [messageInput, setMessageInput] = useState("");
    const [allUsers, setAllUsers] = useState([]);
    const [codUser, setCodUser] = useState(null);

    useEffect(() => {
        getAllUsers().then((allProfiles) => {
            setAllUsers(allProfiles);
        });

        getUser().then((userProfile) => {
            getCurrentUser(userProfile);
        });

        getCodProfile().then((apexProfile) => {
            setCodUser(apexProfile);
        });

    }, []);

    const handlePost = async () => {
        await PostCodMessage(messageInput);
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

        <div className="codLogo">
            <img className="cod" src="codLOGO.png" ></img>
        </div>

        <div className="postArea">
                {allUsers.map((user) => (
                    <div className="mClass" key={user.id}>
                        <p className="UserName">{user.name}</p>
                        {user.codMessages && user.codMessages.length > 0 ? (
                            sortMessages(user.codMessages).map((codmessages) => (
                                <div key={codmessages.id} className="Message">
                                    <span className="usersName">{user.identityUser.userName}</span>
                                    <span>: </span>
                                    <span>{codmessages.text}</span>
                                    <span className="time">{new Date(codmessages.timeStamp).toLocaleString()}</span>
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