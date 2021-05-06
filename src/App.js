
import {ChatEngine} from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

const App= ()=>{
  //if not logged in any user
  if (!localStorage.getItem('username')) return <LoginForm />;

  return(
    <ChatEngine
    height="100vh"
    projectID="1afc6638-76c4-4208-ad8d-422e00d0f9f4"
    userName={localStorage.getItem('username')}
    userSecret={localStorage.getItem('password')}
    renderChatFeed={(chatAppProps)=> <ChatFeed {...chatAppProps}/>}
    onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />

  )
}
export default App

