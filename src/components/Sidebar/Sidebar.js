// import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import AddIcon from '@material-ui/icons/Add';
import AppsIcon from '@material-ui/icons/Apps';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import CreateIcon from '@material-ui/icons/Create';
import DraftsIcon from '@material-ui/icons/Drafts';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import InboxIcon from '@material-ui/icons/Inbox';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import React, { useEffect, useState } from 'react';
import db from '../../firebase';
import './Sidebar.elements.css';
import SidebarOption from './SidebarOptions/SidebarOption';

const Sidebar = () => {
    const [channels, setChannels] = useState([]);

    const addChannelOption = () => {
        
    };

    const addChannel = () => {
        const channelName = prompt('Please enter the channel name');

        if(channelName) {
            db.collection('channels').add({ name: channelName.toLocaleLowerCase() });
        }
    };

    useEffect(() => {
        db.collection('channels').onSnapshot(snapshot => {
            setChannels(snapshot.docs.map(doc => ({
                id: doc.id,
                channelName: doc.data().name
            })));
        });
    }, []);

    return (
        <aside className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__info">
                    <h2>Gain Solutions</h2>
                </div>
                <CreateIcon />
            </div>

            <div className="sidebar__body">
                <SidebarOption Icon={InboxIcon} title="Mentions & reactions" />
                <SidebarOption Icon={DraftsIcon} title="Saved items" />
                <SidebarOption Icon={BookmarkBorderIcon} title="Channel browser" />
                <SidebarOption Icon={PeopleAltIcon} title="People & user groups" />
                <SidebarOption Icon={AppsIcon} title="Apps" />
                <SidebarOption Icon={FileCopyIcon} title="File browser" />
                <SidebarOption Icon={ExpandLessIcon} title="Shwo less" />
                <SidebarOption Icon={AddIcon} title="Add channel" addChannelOption={addChannelOption} addChannel={addChannel} />
                
                <div className="channels overflow-hidden">
                    <h3 className="channel__heading">
                        <ArrowDropDownIcon className="arrow__dropdown" />
                        Channels
                    </h3>
                    
                    {channels.length > 0 && channels.map(channel => (
                        <SidebarOption key={channel.id} title={channel.channelName} channelId={channel.id} />
                    ))}
                    <h3 className="add__channel" onClick={addChannel}>
                        <AddIcon className="add__icon" />
                        Add Channels
                    </h3>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
