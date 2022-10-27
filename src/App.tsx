import React from 'react';
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


function App() {
  return (
    <div className="App">
      <User firends={['osman', 'elsen', 'memmed']} data={user} />

      {/* first letter always is must be Uppercase */}
      {/* {isLoggedIn ? fullname : 'Sign in'} */}
      {/* {isLoggedIn && fullname || <Login/>} */}
      {/* <Header /> */}
    </div>
  );
}

export default App;
