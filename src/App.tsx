import { useState } from 'react';
import './App.css';
import Message from './Message';

const greet = "HI All!"
let count = 0

function App() {
  const [messages, setMessages] = useState<string[]>([])

  const addMessage = (message: string): void => {
    message = `${message} ${count}`
    count++
    setMessages([message, ...messages])
  }

  return (
    <div className="App">
      <button type="button" onClick={()=>addMessage(greet)}>Add!</button>
      <ul>
        {messages.map((item, index)=> <Message id={index} message={item}/>)}
      </ul>
      
    </div>
  );
}

export default App;
