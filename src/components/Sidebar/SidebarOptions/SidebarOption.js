import React from 'react';
import './SidebarOption.elements.css';

const SidebarOption = ({Icon, title}) => {
    return (
        <div className="sidebar__option">
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
