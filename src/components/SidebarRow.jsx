import React from 'react';
import "../css/sidebarrow.css";


function SidebarRow({ title, icon }) {
    return (
        <div className="sidebar_row">
            <span>{icon}</span>
            <p className="sidebar_title">{title}</p>
        </div>
    )
}

export default SidebarRow
