// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import {io} from 'socket.io-client';
// import './Users.css';

// function Users() {
//   const [users, setUsers] = useState([]);
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [socket, setSocket] = useState(null);
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState('');
//   const [userChats, setUserChats] = useState({});

//   const fetchUsers = async () => {
//     const { data } = await axios.get('http://localhost:5000/api/user/all');
//     setUsers(data);
//   };

//   useEffect(() => {
//     fetchUsers();

//     // Initialize Socket.io connection
   
//     const newSocket = io('http://localhost:5000');
//     // setSocket(newSocket);

//     return () => {
//       newSocket.disconnect();
//     };
//   }, []);

//   useEffect(() => {
//     if (socket) {
//       // Listen for private messages from the server
//       socket.on('private-message', (data) => {
//         console.log("data = ", data);
//         // setMessages();
//       });
//     }
//   }, [socket]);

//   const handleUserClick = (user) => {
//     setSelectedUser(user);

//     if (!userChats[user._id]) {
//       setUserChats(prevChats => ({
//         ...prevChats,
//         [user._id]: []
//       }));
//     }

//     // Emit an event to the server to initiate a private chat
//     socket.emit('private-chat', { userId: user._id });

//     // Clear previous messages when selecting a new user
//     // setMessages([]);
//   };
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { io } from 'socket.io-client';
import './Users.css';

function Users() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [socket, setSocket] = useState(null); // Initialize socket state
  const [newMessage, setNewMessage] = useState('');
  const [userChats, setUserChats] = useState({});

  const fetchUsers = async () => {
    const { data } = await axios.get('http://localhost:5000/api/user/all');
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();

    // Initialize Socket.io connection
    // const newSocket = io('http://localhost:5000');
    // setSocket(newSocket); // Set the socket state

    // return () => {
    //   newSocket.disconnect();
    // };
  }, []);

  // useEffect(() => {
  //   if (socket) {
  //     // Listen for private messages from the server
  //     socket.on('private-message', (data) => {
  //       console.log("data = ", data);
  //       setMessages();
  //     });
  //   }
  // }, [socket]);

  // useEffect(() => {
  //   if (selectedUser && socket) {
  //     // Emit an event to the server to initiate a private chat
  //     socket.emit('private-chat', { userId: selectedUser._id });
  //   }
  // }, [selectedUser, socket]); // Emit only when both selectedUser and socket are available

  // const handleUserClick = (user) => {
  //   setSelectedUser(user);

  //   if (!userChats[user._id]) {
  //     setUserChats(prevChats => ({
  //       ...prevChats,
  //       [user._id]: []
  //     }));
  //   }
  // };

  // const sendMessage = () => {
  //   if (newMessage.trim() !== '') {
  //     // Emit the message to the server
  //     socket.emit('private-message', { userId: selectedUser._id, message: newMessage });

  //     // Update the local messages state
  //     setUserChats(prevChats => ({
  //       ...prevChats,
  //       [selectedUser._id]: [
  //         ...prevChats[selectedUser._id],
  //         { text: newMessage, sender: 'me' }
  //       ]
  //     }));
  //     setNewMessage('');
    
  //     setMessages(prevMessages => [...prevMessages, { text: newMessage, sender: 'me' }]);
  //     setNewMessage('');
  //   }
  // };

  return (
    <div className="users-container">
      <div className="sidebar">
        <h2>Members List</h2>
        <ul className="member-list">
          {users.map(user => (
            <li key={user._id}>
              {user.name}
            </li>
          ))}
        </ul>
      </div>
      {/* <div className="chat-container">
        {selectedUser && (
          <div className="private-chat">
            <h3>Chatting with {selectedUser.name}</h3>
            <div className="messages">
              {messages.map((message, index) => (
                <div key={index} className={`message ${message.sender === 'me' ? 'sent' : 'received'}`}>
                  {message.text}
                </div>
              ))}
            </div> */}
            {/* <div className="message-input">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type your message..."
              />
              <button >Send</button>
            </div> */}
          {/* </div>
        )}
      </div> */}
    </div>
  );
}

export default Users;


