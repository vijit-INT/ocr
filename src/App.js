import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import Logout from './Components/Logout';
import Navbar from './Components/Navbar';
import Register from './Components/Register';
import UserList from './Components/UserList';
import Scanner from './Components/Scanner';

function App() {
  let arr = [{
    id: "24631317-105c-4e03-a464-2add09e0a26a",
    Name: 'vijit',
    Address: 'Devgarh',
    Phone: '7905597148',
    Email: 'vijit@gmail.com',
    Password: '123'
  }]
  const lolStatus = localStorage.getItem('status');
  const lolData = localStorage.getItem('userRegisterArray');
  if (lolStatus && lolData === null) {
    localStorage.setItem('status', JSON.stringify(false))
    localStorage.setItem('userRegisterArray', JSON.stringify(arr))
  } else if (lolStatus === null) {
    localStorage.setItem('status', JSON.stringify(false))
  } else if (lolData === null) {
    localStorage.setItem('userRegisterArray', JSON.stringify(arr))
  }
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/login' element={<Login />}/>
        <Route path='/' element={<Register />}/>
        <Route path='/userList' element={<UserList />}/>
        <Route path='/logout' element={<Logout />}/>
        <Route path="/scanner" element={<Scanner />} />
      </Routes>
    </div>
  );
}

export default App;
