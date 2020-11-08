import { Avatar } from '@material-ui/core';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import db from '../../firebase';
import './Chat.elements.css';
import Message from './Message/Message';

function Chat() {
    const { channelId } = useParams();
    const [channelDetails, setChannelDetails] = useState(null);
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        if(channelId) {
            db.collection('channels').doc(channelId).onSnapshot(snapshot => {
                setChannelDetails(snapshot.data());
            });
        }

        db.collection('channels').doc(channelId).collection('messages').orderBy('timeStamp', 'asc').onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => doc.data()));
        })
    }, [channelId]);
    
    return (
        <main className="chat__body">
            <div className="chat__body-header">
                <div className="chat__headerLeft">
                    <div className="channel__name">
                        <strong># {channelDetails?.name}</strong>
                        <StarBorderOutlinedIcon className="star__icon" />
                    </div>
                    <div className="channel__topic">
                        <p>Company-wide announcements and work-based matters</p>
                    </div>
                </div>

                <div className="chat__headerRight">
                    <Avatar className="icon" />
                    <PersonAddOutlinedIcon className="icon" />
                    <HelpOutlineOutlinedIcon className="icon" />
                </div>
            </div>

            <div className="message__body">
                {messages.length > 0 && (
                    messages.map(({message, user, timeStamp, userImage}, index) => 
                        <Message key={index} message={message} user={user} timeStamp={timeStamp} userImage={userImage} />
                    )
                )}
            </div>      
        </main>
    );
};

export default Chat;
