import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [loginStatus, setLoginStatus] = useState('');

  const handleSignIn = () => {
    // Form URL Encoded Data
    const params = new URLSearchParams();
    params.append('grant_type', 'password');
    params.append('client_id', 'e276572f504231103efcdacf0f7a595f');
    params.append('client_secret', 'L)T,dMT+:j');
    params.append('username', 'Kavitha');
    params.append('password', 'Disney@90');

    // Post request to your proxy endpoint
    axios.post('http://localhost:3001/proxy/oauth_token.do', params.toString(), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
    .then((response) => {
      // Store tokens in localStorage
      localStorage.setItem('access_token', response.data.access_token);
      localStorage.setItem('refresh_token', response.data.refresh_token);
      setLoginStatus('Successfully Logged in!');
    })
    .catch((error) => {
      setLoginStatus('Error in Login!');
      console.error('Login error', error);
    });
  };

  return (
    <>
      <div className='conat'>
        <button onClick={handleSignIn}>Signin</button>
      </div>
      <div className='conat'>
        {loginStatus && <p>{loginStatus}</p>}
      </div>
    </>
  );
}

export default App;