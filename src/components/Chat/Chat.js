import { Avatar } from '@material-ui/core';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import React from 'react';
import { useParams } from 'react-router-dom';
import './Chat.elements.css';

const Chat = () => {
    const { channelId } =useParams();
    
    return (
        <main className="chat__body">
            <div className="chat__body-header">
                <div className="chat__headerLeft">
                    <div className="channel__name">
                        <strong># general</strong>
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
            <h1>This is chat room id is {channelId}</h1>        
        </main>
    );
};

export default Chat;
