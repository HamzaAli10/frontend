import React, { useEffect, useState } from "react";
import axios from "axios";
import './Chat.css';
import Conversation from "../../Components/Conversations/Conversation";
import Message from "../../Components/Message/Message";
import Users from "../../Components/Users/Users";

const user = JSON.parse(localStorage.getItem("userInfo"));

const Chat = () => {
  // const [users, setUsers] = useState([]);
  const [conversation, setConversation] = useState([]);
  const [currentChat,setCurrentChat] = useState(null);
  const [messages,setMessages] = useState([]);
  const [newMessages,setNewMessages] = useState("");
  // console.log("conv", conversation );

  // const fetchUsers = async () => {
  //   const { data } = await axios.get('http://localhost:5000/api/user/all');
  //   setConversation(data);
  // };

  // useEffect(() => {
  //   fetchUsers();
  // },[user._id]);

  const fetchUsers = async () => {
    console.log(localStorage.getItem("userInfo"));
    console.log("user = ", user._id);
    try {
      const resp = await axios.get(
        `http://localhost:5000/api/conversation/${user._id}`
      );
      setConversation(resp.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, [user._id]);

  // console.log(conversation);

  useEffect(()=>{
    const getMessages = async()=>{
      try {
        const res = await axios.get(`http://localhost:5000/api/messages/${currentChat._id}`);
        
         setMessages(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    getMessages();
  },[currentChat])

  //  console.log(JSON.stringify(messages)+"ddsdsdfjj");

  const handleSubmit = ()=>{
    
  }


  return (
    <div className="messenger">
      <div className="chatMenue">
        <div className="chatMenueWraper">
          {conversation.map((c)=>(
            <div onClick={()=> setCurrentChat(c)} >
              <Users conversation={c} />
              {/* <Conversation conversation={c} currentUser={user}/> */}
            </div>
          ))}
          
        </div>
      </div>
      <div className="chatBox">
      <div className="chatBoxWraper">
        {
          currentChat ? 
        <>
        <div className="chatBoxTop">
          {messages.map((m)=>(
              <Message message={m} own={m.senderId===user._id} />
          ))}
            
            
        </div>
        <div className="chatBoxBottom">
            <textarea name="" className="chatMessageInput" placeholder="write here...">
              onChange={(e)=>setNewMessages(e.target.value)}
              value={newMessages}
            </textarea>
            <button className="chatSubmitButon" onClick={handleSubmit} >Send</button>
        </div></>: <span>select a user to start conversation</span> }
        
      </div>
      </div>
    {/* <div>
      {conversation.map((c)=>( <div key={c._id} > {c.members} </div>  ))}
    </div> */}
    </div>
  );
};

export default Chat;
