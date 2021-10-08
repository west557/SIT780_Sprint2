// Other React Components and Routers.
import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Importing React Pages.
import HomePage from './Components/HomePage';
import LoginForm from './Components/LoginForm';
import Contact from './Contact/Contact';
import Accordian from './Components/Accordian';

function App() {

  // Defining some users with credentials. 
  const adminUser = {
    email: 'admin@admin.com',
    password: 'admin123',
  };
  const scottUser = {
    name: 'Scott West',
    email: 'west55721@gmail.com',
    password: 'admin123',
  };

  const [user, setUser] = useState({ name: '', email: '' });
  const [error, setError] = useState('');


  // Login and Logout Functions. 
  const Login = (details) => {
    console.log(details);

    if (
      details.email == adminUser.email &&
      details.password == adminUser.password
    ) {
      console.log('Logged In');
      setUser({
        name: details.name,
        email: details.email,
      });
    } else if (
      details.email == scottUser.email &&
      scottUser.password == scottUser.password
    ) {
      console.log('Hello Scott - you are logged in');
      setUser({
        name: details.name,
        email: details.email,
      });
    } else {
      console.log('Details do not match');
      setError(
        <h3>
          Login not successful.<br></br>Details do not match!
        </h3>
      );
    }
  };

  const Logout = () => {
    console.log('Logout');
    console.log('You have been logged out successfully');
    setUser({ name: '', email: '' });
  };

  return (

    // Implementing React Browser Router. 
    <BrowserRouter forceRefresh>
      <div className='App'>
        <Switch>
          <Route path='/' component={HomePage} exact />
          <Route path='/LoginForm' component={LoginForm} />
          <Route path='/Contact' component={Contact} />
          <Route path='/About' component={Accordian} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
