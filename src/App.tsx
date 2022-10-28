import React, { useState } from 'react';
import Colors from './components/Colors';
import Counter from './components/Counter';
import Form from './components/Form';
import Header from './components/Header';
import Login from './components/Login';
import User from './components/User';

const fullname: string = 'Osman Bashirov'
// const isLoggedIn: boolean = false;

const user: User = {
  name: 'Osman',
  city: "Kocaeli",
  age: 21

}

const myFriends = ['osman', 'elsen', 'memmed']


function App() {

  const [isVisible, setIsVisible] = useState(true)

  return (
    <div className="App">
      {/* <Form/> */}
      {/* <Colors /> */}

      {isVisible && <Counter /> || null}
      <button onClick={() => setIsVisible(!isVisible)}>Show/Hide</button>

      {/* <User firends={myFriends} data={user} /> */}

      {/* first letter always is must be Uppercase */}
      {/* {isLoggedIn ? fullname : 'Sign in'} */}
      {/* {isLoggedIn && fullname || <Login/>} */}
      {/* <Header /> */}
    </div>
  );
}

export default App;
