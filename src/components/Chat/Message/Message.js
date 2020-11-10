import React from 'react';
import './Message.elements.css';

const Message = ({message}) => {
    return (
        <div className="message">
            <div className="profile__photo">
                <img src={message?.userImage} alt={message?.userName} />
            </div>
            <div className="message__details">
                <h3>{message?.userName} <span>{new Date(message?.timestamp?.toDate()).toUTCString()}</span></h3>
                <p>{message?.message}</p>
            </div>
        </div>
    );
};

export default Message;
