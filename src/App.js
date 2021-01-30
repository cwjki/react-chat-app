import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () => {
  return (
    <ChatEngine 
      height="100vh"
      projectID="9a579d0e-3cde-444a-bda9-3fb2ebe8dd19"
      userName="cwjki97"
      userSecret="123456"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
}

export default App;