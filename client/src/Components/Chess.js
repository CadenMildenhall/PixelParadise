import { useEffect, useState } from "react";
import { PostChessMessage, getAllUsers, getUser } from "../Managers/UserProfileManager";
import "../Styles/Chess.css";

export const Chess = () => {
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
        await PostChessMessage(messageInput);
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
            <div className="chessLogo">
                <img className="chess" src="phpkXK09k.png" alt="Chess Logo" />
            </div>

            <div className="postArea">
                {allUsers.map((user) => (
                    <div className="mClass" key={user.id}>
                        <p className="UserName">{user.name}</p>
                        {user.chessMessages && user.chessMessages.length > 0 ? (
                            sortMessages(user.chessMessages).map((chessmessages) => (
                                <div key={chessmessages.id} className="Message">
                                    <span className="usersName">{user.identityUser.userName}</span>
                                    <span>: </span>
                                    <span>{chessmessages.text}</span>
                                    <span className="time">{new Date(chessmessages.timeStamp).toLocaleString()}</span>
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
    );
};
