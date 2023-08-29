import React from 'react'
import './Message.css';
import {format} from 'timeago.js'
const Message = ({own,message}) => {
  return (
    <div className={own?"message own":"message"} >
        <div className="messaeTop">
            <p className='messageText' >{message.text}</p>
        </div>
        <div className="messageBottom">{format(message.createdAt)}</div>
      
    </div>
  )
}

export default Message
