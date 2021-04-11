import React from 'react'
import './App.css';
import Profile from './profile/Profile'
import me from './me.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from 'react-bootstrap';



function App() {
 var username = "Sahbi Noureddine"

function handleName(){
  alert("The profile user is :" + username)
}
return (
  <div className="App">
    <Nav class="navbar navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Hello !</a>
</Nav>
    <Profile fullName ={username}
    bio = "Hi i'm sahbi from sousse"
    profession = "Full stack JS developer"
    handleName={handleName} >
      <img src={me} alt="mypic" />
    </Profile>
    </div>
);
}
    



export default App;

