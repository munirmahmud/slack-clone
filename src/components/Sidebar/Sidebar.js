// import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import AdjustIcon from '@material-ui/icons/Adjust';
import AppsIcon from '@material-ui/icons/Apps';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import CreateIcon from '@material-ui/icons/Create';
import DraftsIcon from '@material-ui/icons/Drafts';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import InboxIcon from '@material-ui/icons/Inbox';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import React from 'react';
import './Sidebar.elements.css';
import SidebarOption from './SidebarOptions/SidebarOption';

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__info">
                    <h2>Gain Solutions</h2>
                    {/* <h3>
                        <FiberManualRecordIcon />
                        Munir
                    </h3> */}
                </div>
                <CreateIcon />
            </div>

            <div className="sidebar__body">
                <SidebarOption Icon={AdjustIcon} title="Threads" />
                <SidebarOption Icon={InboxIcon} title="Mentions & reactions" />
                <SidebarOption Icon={DraftsIcon} title="Saved items" />
                <SidebarOption Icon={BookmarkBorderIcon} title="Channel browser" />
                <SidebarOption Icon={PeopleAltIcon} title="People & user groups" />
                <SidebarOption Icon={AppsIcon} title="Apps" />
                <SidebarOption Icon={FileCopyIcon} title="File browser" />
                <SidebarOption Icon={ExpandLessIcon} title="Shwo less" />
            </div>
        </aside>
    );
};

export default Sidebar;
