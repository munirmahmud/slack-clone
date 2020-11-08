import React from 'react';
import { useHistory } from 'react-router-dom';
import './SidebarOption.elements.css';

const SidebarOption = ({Icon, title, channelId, addChannelOption, addChannel}) => {
    const history  = useHistory();
    
    const selectChannel = () => {
        if(channelId) {
            history.push(`/channel/${channelId}`);
        } else {
            history.push(title);
        }
    };

    return (
        <div className="sidebar__option" onClick={addChannelOption ? addChannel : selectChannel}>
            {Icon && <Icon className="sidebar__option-icon" />}
            {Icon ? (
                <h3>{title}</h3>
            ) : (
                <h3 className="sidebar__option-channel">
                    <span className="sidebar__hash">#</span> {title}
                </h3>
            )}
        </div>
    );
};

export default SidebarOption;
