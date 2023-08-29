import React, { useEffect, useState } from 'react'
import './Conversation.css'
import axios from 'axios';

const Conversation = ({conversation,currentUser}) => {
  const [user, setUser] = useState([]);

  const fetchUsers = async () => {
    const { data } = await axios.get('http://localhost:5000/api/user/all');
    setUser(data);
  };

  useEffect(() => {
    fetchUsers();
  },[conversation,currentUser]);


    //  useEffect(()=>{
    //      const friendId = conversation.member.find( m => m !== currentUser._id);

    //     const getUser = async ()=>{
    //         try {
    //             const res = await axios('http://localhost:5000/api/user/all'+friendId);
    //             console.log(res);
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     };
    //     getUser();
    // },[currentUser,conversation]);

    const handleUserClick = (u)=>{
      console.log();
    }

  return (
    <>
    
    <div className='conversation' >
    <span className="conversationName">
    {user.map((u) => (
            <li key={u._id} onClick={() => handleUserClick(u)}>
              {u.name}
            </li>
          ))}
      </span>
      <hr />
    </div>
    </>
  )
}

export default Conversation
