import React from 'react';
import Sidebar from './Sidebar';
import "../css/facebookbody.css";
import Message from './Message';
import Widget from './Widget';


function FacebookBody() {
    return (
        <div className="facebook_body">
            <Sidebar />
            <Message />
            <Widget />
        </div>
    )
}

export default FacebookBody
