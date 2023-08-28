import './App.css';
import { BrowserRouter as Router,Routes, Route  } from 'react-router-dom';
import Chat from './Pages/Chat';
import Home from './Pages/Home';
import Login from './Components/Auth/Login/Login';
import Sign from './Components/Auth/Sign/Sign';
import Users from './Components/Users/Users';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/chats" element={<Chat/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/sign" element={<Sign/>} />
        <Route path="/user" element={<Users/>} />
      </Routes>
    </Router>
  );
}

export default App;
