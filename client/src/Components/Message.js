import { useEffect, useState } from "react";
import { PostDirectMessage, getAllUsers, getUser } from "../Managers/UserProfileManager";
import "../Styles/Message.css"

export const Message = () => {
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
      await PostDirectMessage(messageInput);
      // After posting, update the messages by fetching all users again
      getAllUsers().then((allProfiles) => {
        setAllUsers(allProfiles);
        // Sort the messages again after updating the data
        setAllUsers((prevUsers) =>
          prevUsers.map((user) => ({
            ...user,
            directMessages: sortMessages(user.directMessages),
          }))
        );
      });
      // Clear the message input field after posting
      setMessageInput("");
    };
  
    // Sort messages by TimeStamp in ascending order (oldest to newest)
    const sortMessages = (messages) => {
      return messages.sort((a, b) => new Date(a.timeStamp) - new Date(b.timeStamp));
    };
  
    return (
      <>
        <div className="MessagesPostArea">
       
          {allUsers.map((user) => (
            <div key={user.id}>
              {user.directMessages && user.directMessages.length > 0 ? (
                sortMessages(user.directMessages).map((message) => (
                  <div
                    key={message.id}
                    className={`usersMessages ${
                      message.userProfileId === profile?.id ? "CurrentUserMessage" : "OtherUserMessage"
                    }`}
                  >
                    <span>{message.message}</span>
                    <span className="time">{new Date(message.timeStamp).toLocaleString()}</span>
                  </div>
                ))
              ) : (
                <span></span>
              )}
            </div>
          ))}
        </div>
        <div className="TextArea">
          <textarea
            onChange={(e) => setMessageInput(e.target.value)}
            value={messageInput}
            className="typeHere"
            placeholder="type here"
          ></textarea>
        </div>
        <div className="DMbuttons">
          <button onClick={handlePost} className="sendButton">
            send
          </button>
        </div>
      </>
    );
  };
  
  