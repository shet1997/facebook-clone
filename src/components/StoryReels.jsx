import React from 'react';
import "../css/storyreels.css";

function StoryReels({ image, userprofile, titile }) {
    return (
        <div className="storyreel">
                <img src={image} alt="images" height="184px" width="103px" className="story" />
                <span className="story_profile">{userprofile}</span>
                <span className="story_title"><b>{titile}</b></span>
        </div>
    )
}

export default StoryReels
