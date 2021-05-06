import { useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import background from "../img/kk.jpg";

const projectID = '1afc6638-76c4-4208-ad8d-422e00d0f9f4';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = { 'Project-ID': projectID, 'User-Name': username, 'User-Secret': password };

    try {
      await axios.get('https://api.chatengine.io/chats', { headers: authObject });

      //localstoraage like session
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);

      window.location.reload();
      setError('');
    } 
    catch (err) {
        swal('Oops, Incorrect Login Details.Please check your details once more','error');
      //setError('Oops, incorrect credentials.');
    }
  };

  return (
  
    <div className="wrapper" style={{ backgroundImage: `url(${background})` ,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '100vh'}}>
      <div className="form">
        <h1 className="title">Chat Application</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
          <div align="center">
            <button type="submit" className="button">
              <span>Start</span>
            </button>
          </div>
        </form>
        <h1>{error}</h1>
      </div>
    </div>
 

  );
};

export default LoginForm;