import React, { useState, useEffect } from 'react'
import MessageBox from "../Components/MessageBox.js"
import Post from "../Components/Post.js"
import "./Feed.css"
import db from "../Components/firebase.js"
import FlipMove from "react-flip-move"

function Feed() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts').orderBy("timestamp", "asc").onSnapshot(snapshot => (
          setPosts(snapshot.docs.map(doc => doc.data()))  
        ))
    }, []);

    return (
        <div className = "feed">
            <div className = "feed__header">
                <h2>
                    Home
                </h2>
            </div>
        
            <div className="feed__posts">
                <FlipMove>
                    {posts.map(post => (
                        <Post 
                        timestamp = {post.timestamp}
                        displayName={post.displayName}
                        username ={post.username}
                        verified ={post.verified}
                        text={post.text}
                        avatar={post.avatar}
                        attachment={post.attachment}
                        />
                    ))}
                </FlipMove>
                
            </div>

            {/* Workout */}
            {/* Workout */}
            {/* Workout */}
            {/* Workout */}

            <div className="feed__messageBox">
                <MessageBox />
            </div>

        </div>
    )
}

export default Feed
