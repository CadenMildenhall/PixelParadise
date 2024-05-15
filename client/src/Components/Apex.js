import { useEffect, useState } from "react";
import { PostMessage, getAllUsers, getUser } from "../Managers/UserProfileManager";
import "../Styles/Apex.css"
import { getApexProfile } from "../Managers/apexmanager";

export const Apex = () => {

    const [profile, getCurrentUser] = useState(null);
    const [messageInput, setMessageInput] = useState("");
    const [allUsers, setAllUsers] = useState([]);
    const [apexUser, setApexUser] = useState([])

    useEffect(() => {
        getAllUsers().then((allProfiles) => {
            setAllUsers(allProfiles);
        });

        getUser().then((userProfile) => {
            getCurrentUser(userProfile);
        });

        getApexProfile().then((apexProfile) => {
            setApexUser(apexProfile);
        });

    }, []);

    const handlePost = async () => {
        await PostMessage(messageInput);
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

            <div className="apexLogo">
                <img className="apex" src="apex-logo-C3478A4601-seeklogo.com.png" ></img>
            </div>

            <div className="postArea">
                {allUsers.map((user) => (
                    <div className="mClass" key={user.id}>
                        <p className="UserName"></p>
                        {user.messages && user.messages.length > 0 ? (
                            sortMessages(user.messages).map((message) => (
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
