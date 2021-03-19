import React from 'react';
import "../css/messenger.css";
import Avatar from '@material-ui/core/Avatar';
import PermMediaOutlinedIcon from '@material-ui/icons/PermMediaOutlined';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import EmojiEmotionsOutlinedIcon from '@material-ui/icons/EmojiEmotionsOutlined';

function Messenger() {
    return (
        <div className="messenger">
            <div className="messenger_text">
                <Avatar src="https://www.w3mirchi.com/images/picture/MzI0NDk%20-barbie-doll-image-for-dp-and-whats-app.jpg" />
                <input type="text" placeholder="whats on your mind?" />
            </div>
            <div className="messenger_upload">
                <div className="messenger_photo_video">
                    <PermMediaOutlinedIcon />
                    <p className="messenger_title">photo/video</p>
                </div>
                <div className="messenger_tag_friend">
                    <PermIdentityIcon />
                    <p className="messenger_title">Tag Friends</p>
                </div>
                <div className="messenger_feeling_activity">
                    <EmojiEmotionsOutlinedIcon />
                    <p className="messenger_title">Feeling/Activity</p>
                </div>
            </div>
        </div>
    )
}

export default Messenger
