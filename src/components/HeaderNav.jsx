import React from 'react';
import "../css/header.css";
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import HomeWorkRoundedIcon from '@material-ui/icons/HomeWorkRounded';
import GroupWorkOutlinedIcon from '@material-ui/icons/GroupWorkOutlined';
import Avatar from '@material-ui/core/Avatar';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import QuestionAnswerRoundedIcon from '@material-ui/icons/QuestionAnswerRounded';
import NotificationsRoundedIcon from '@material-ui/icons/NotificationsRounded';
import ArrowDropDownRoundedIcon from '@material-ui/icons/ArrowDropDownRounded';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';



function HeaderNav(props) {
    return (
        <div className="header">
            <div className="header_left">
                <img src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512" alt="facebook_logo" className="facebook_logo" />
                <div className="header_search">
                    <SearchIcon />
                    <input type="text"className="header_input" placeholder="Search Facebook" />  
                </div>
            </div>
            <div className="header_center">
                <Tooltip title="Home">
                    {/* <IconButton > */}
                        <HomeIcon />
                    {/* </IconButton> */}
                </Tooltip>
                <Tooltip title="Friends">
                    {/* <IconButton > */}
                        <PeopleOutlineIcon/>
                    {/* </IconButton> */}
                </Tooltip>
                <Tooltip title="Watch">
                    {/* <IconButton > */}
                        <OndemandVideoIcon/>
                    {/* </IconButton> */}
                </Tooltip>
                <Tooltip title="Marketplace">
                    {/* <IconButton > */}
                        <HomeWorkRoundedIcon />
                    {/* </IconButton> */}
                </Tooltip>
                <Tooltip title="Groups">
                    {/* <IconButton > */}
                        <GroupWorkOutlinedIcon />
                    {/* </IconButton> */}
                </Tooltip>
            </div>
            <div className="header_right">
                <div className="header_userProfile">
                    <Avatar alt="profile" src="https://www.w3mirchi.com/images/picture/MzI0NDk%20-barbie-doll-image-for-dp-and-whats-app.jpg" className="profile_info" />
                    <p><b>Prajwala</b></p>
                </div>
                <div className="header_notifications">
                    <Tooltip title="Create">
                        <IconButton aria-label=""> 
                            <AddRoundedIcon /> 
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Messenger">
                        <IconButton aria-label=""> 
                            <QuestionAnswerRoundedIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Notifications">
                        <IconButton aria-label=""> 
                            <NotificationsRoundedIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Account">
                        <IconButton aria-label=""> 
                            <ArrowDropDownRoundedIcon />
                        </IconButton>
                    </Tooltip>
                </div>
            </div>
        </div>
    );
}

export default HeaderNav;