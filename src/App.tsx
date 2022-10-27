import React from 'react';
import Header from './components/Header';
import Login from './components/Login';

const fullname: string = 'Osman Bashirov'
const isLoggedIn: boolean = false;


function App() {
  return (
    <div className="App">
      {/* first letter always is must be Uppercase */}
      {/* {isLoggedIn ? fullname : 'Sign in'} */}
      {isLoggedIn && fullname || <Login/>}
      <Header />
    </div>
  );
}

export default App;
