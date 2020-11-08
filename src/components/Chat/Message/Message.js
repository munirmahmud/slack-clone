import React from 'react';
import './Message.elements.css';

const Message = ({timeStamp, user, message, userImage}) => {
    return (
        <div className="message">
            <div className="profile__photo">
                <img src={userImage} alt={user} />
            </div>
            <div className="message__details">
                {console.log(new Date(timeStamp?.toDate()))}
                <h3>{user} <span>{new Date(timeStamp?.toDate()).toUTCString()}</span></h3>
                <p>{message}</p>
            </div>
            
        </div>
    );
};

export default Message;
