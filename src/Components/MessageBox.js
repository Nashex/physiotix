import { Avatar, Button } from '@material-ui/core'
import React, { useState } from 'react'
import "./MessageBox.css"
import firebase from "firebase"
import db from "./firebase"

function MessageBox() {

    const [message, setMessage] = useState("");

    const sendMessage = e => {
        e.preventDefault();

        db.collection("posts").add({
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            displayName: "Josh Nakka",
            username: "Nashex",
            verified: true,
            text: message,
            attachment: "",
            avatar: "https://images-ext-1.discordapp.net/external/TAs9jVChaBdn-SDHait45taOQOupy819UIQKrJLggGw/https/cdn.discordapp.com/avatars/189853114285817857/a_f38531ac8f9d77198c1a16810244122a.gif"
        })

        setMessage("");

    }

    return (
        <div className="messageBox">
            <form>
                <div className ="messageBox__input">
                    <Avatar src="https://images-ext-1.discordapp.net/external/TAs9jVChaBdn-SDHait45taOQOupy819UIQKrJLggGw/https/cdn.discordapp.com/avatars/189853114285817857/a_f38531ac8f9d77198c1a16810244122a.gif" />
                    <input 
                    onChange={e => setMessage(e.target.value)}
                    value={message} 
                    placeholder="What's on your mind?"/>
                    {/* <input placeholder="Enter image URL"/> */}
                </div>
                <Button onClick={sendMessage} className="messageBox__messageButton">Send</Button>
            </form>
        
        </div>
    )
}

export default MessageBox
