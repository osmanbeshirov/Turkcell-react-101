import React from 'react';
import Counter from './components/Counter';
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
  return (
    <div className="App">
      <Counter />
      {/* <User firends={myFriends} data={user} /> */}

      {/* first letter always is must be Uppercase */}
      {/* {isLoggedIn ? fullname : 'Sign in'} */}
      {/* {isLoggedIn && fullname || <Login/>} */}
      {/* <Header /> */}
    </div>
  );
}

export default App;
