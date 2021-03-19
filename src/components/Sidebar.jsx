import React from 'react'
import SidebarRow from './SidebarRow';
import Avatar from '@material-ui/core/Avatar'; 
import GroupIcon from '@material-ui/icons/Group';
import HistoryIcon from '@material-ui/icons/History';
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import HouseIcon from '@material-ui/icons/House';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import LocalActivityIcon from '@material-ui/icons/LocalActivity';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import InfoIcon from '@material-ui/icons/Info';
import "../css/sidebar.css";

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow icon={<Avatar src="https://www.w3mirchi.com/images/picture/MzI0NDk%20-barbie-doll-image-for-dp-and-whats-app.jpg" className="sidebar_profile" />} title="prajwala"/>
            <SidebarRow icon={<InfoIcon />} title="COVID-19 Information Centre"/>
            <SidebarRow icon={<GroupIcon />} title="Friends"/>
            <SidebarRow icon={<HistoryIcon />} title="Memories"/>
            <SidebarRow icon={<GroupWorkIcon />} title="Groups"/>
            <SidebarRow icon={<HouseIcon />} title="Marketplace"/>
            <SidebarRow icon={<OndemandVideoIcon />} title="Watch"/>
            <SidebarRow icon={<LocalActivityIcon />} title="Events"/>
            <SidebarRow icon={<BookmarkIcon />} title="Saved"/>
        </div>
    )
}

export default Sidebar
