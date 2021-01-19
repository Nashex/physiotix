import { Avatar } from '@material-ui/core'
import React, { forwardRef } from 'react'
import "./Post.css"

import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';
import ShareIcon from '@material-ui/icons/Share';

const Post = forwardRef(({
    timestamp,
    displayName,
    username,
    verified,
    text,
    attachment,
    avatar}, ref) => {

    return (
        <div className="post">
            <div className="post__avatar">
                <Avatar src={avatar} />
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>
                            {displayName}
                             <span className="post__headerSpecial">
                                {verified && <CheckCircleIcon className="post__badge" />}
                                {" "}@{username}{" "}
                                <span className="post__timeStamp">
                                    {new Date(timestamp?.toDate()).toUTCString()}
                                </span>
                            </span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>{text}</p>
                    </div>
                </div>
                <img className="post__attachment"
                 src={attachment}
                 alt=""
                 />
                 <div className="post__footer">
                     <ChatBubbleOutlineIcon fontSize="small" />
                     <LibraryAddIcon fontSize="small" />
                     <ShareIcon fontSize="small" />
                 </div>
            </div>
        </div>
    )
});

export default Post
