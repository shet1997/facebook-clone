import React from 'react';
import StoryReels from './StoryReels';
import Avatar from '@material-ui/core/Avatar'; 
import "../css/message.css";
import Messenger from './Messenger';
import Posts from './Posts';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import ScreenShareIcon from '@material-ui/icons/ScreenShare';

function Message() {
    return (
        <div className="message">
            <div className="story_reels">
                <StoryReels 
                    image="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80" 
                    userprofile={<Avatar src="https://wallpapercave.com/wp/wp2190018.jpg" />} 
                    titile="dogg1" />
                <StoryReels 
                    image="https://media.nature.com/lw800/magazine-assets/d41586-020-01430-5/d41586-020-01430-5_17977552.jpg" 
                    userprofile={<Avatar src="https://miro.medium.com/max/500/0*jG9A5z0tXeHMu6lP.jpg" />} 
                    titile="dogg2" />
                <StoryReels 
                    image="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg?crop=1.00xw:0.756xh;0,0.0756xh&resize=980:*" 
                    userprofile={<Avatar src="https://images.unsplash.com/photo-1545724149-1d8de3baa55c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" />} 
                    titile="dogg3" />
                <StoryReels 
                    image="https://www.cdc.gov/healthypets/images/pets/cute-dog-headshot.jpg" 
                    userprofile={<Avatar src="https://images.unsplash.com/photo-1458239920096-bffee8aba36f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80" />} 
                    titile="dogg4" />
                <StoryReels 
                    image="https://i.insider.com/5484d9d1eab8ea3017b17e29?width=1200" 
                    userprofile={<Avatar src="https://images-na.ssl-images-amazon.com/images/I/81E0VRuY5IL.png" />} 
                    titile="dogg5" />
                <StoryReels 
                    image="https://media.gettyimages.com/photos/cute-puppy-celebrating-christmas-picture-id526806585?s=2048x2048" 
                    userprofile={<Avatar src="https://www.itl.cat/pngfile/big/41-417569_awesome-barbie-doll-wallpaper-hd-pics-download-mystic.jpg" />} 
                    titile="dogg6" />
            </div>
            <Messenger />
            <Posts 
                postProfile={<Avatar src="https://www.w3mirchi.com/images/picture/MzI0NDk%20-barbie-doll-image-for-dp-and-whats-app.jpg" />}
                title="prajwala"
                serverTime="yesterday"
                decription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
                image="https://wallpapercave.com/wp/wp2634222.jpg"
                loveIcon={<FavoriteBorderOutlinedIcon />}
                likeIcon={<ThumbUpAltOutlinedIcon />}
                careIcon={<SentimentVerySatisfiedIcon />}
                comments=""
                share=""
                commentIcon={<ChatBubbleOutlineOutlinedIcon />}
                shareIcon={<ScreenShareIcon />}
                like="like"
                comment="comment"
                sharepost="share"
            />
        </div>
    )
}

export default Message
