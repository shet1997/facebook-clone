import React from 'react';
import "../css/posts.css";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { borders } from '@material-ui/system';
import Box from '@material-ui/core/Box';

function Posts({ postProfile, title, serverTime, decription, image, loveIcon, likeIcon, careIcon, comments, share, commentIcon, shareIcon, like, comment, sharepost }) {
    return (
        <div className="posts">
            <Card style={{ boxShadow: "0 1px 2px rgb(0 0 0 / 20%", borderRadius: "10px" }}>
                <CardHeader 
                    avatar={postProfile}
                    title={title}
                    subheader={serverTime} 
                    action={
                        <IconButton>
                            <MoreHorizIcon />
                        </IconButton>
                    }
                    style={{ paddingBottom: 0 }} 
                />
                <CardContent style={{ paddingTop: "5px" }}>
                    <Typography variant="body2" component="p">
                        {decription}
                    </Typography>
                </CardContent>
                <CardMedia 
                    image={image}
                    title="image"
                    component="img"
                    className="post_img"
                />
                <CardContent className="post_desc">
                    <Typography component="p" style={{ fontSize: "17px", fontWeight: "600" }}>
                        hello 
                    </Typography>
                </CardContent>
                <CardActions disableSpacing={true}>
                    <IconButton style={{ padding: 0, marginLeft: "15px" }}>
                        {loveIcon} 
                    </IconButton>
                    <IconButton style={{ padding: 0 }}>
                        {likeIcon}
                    </IconButton>
                    <IconButton style={{ padding: 0 }}>
                        {careIcon}
                    </IconButton>
                    <Box borderBottom={1} />
                </CardActions>
                <CardActions className="post_like_comment_share">
                    <IconButton>
                        {likeIcon}
                        <Typography style={{ paddingLeft: "8px" }}>
                            {like}
                        </Typography>
                    </IconButton>
                    <IconButton>
                        {commentIcon}
                        <Typography style={{ paddingLeft: "8px" }}>
                            {comment}
                        </Typography>
                    </IconButton>
                    <IconButton>
                        {shareIcon}
                        <Typography style={{ paddingLeft: "8px" }}>
                            {sharepost}
                        </Typography>
                    </IconButton>
                </CardActions>
            </Card>
        </div>
    )
}

export default Posts
