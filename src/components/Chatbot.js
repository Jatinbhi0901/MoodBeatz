import ChatBot from 'react-simple-chatbot';
import React from 'react';
 

function Chatbot() {
    const steps = [
        {
          id: '0',
          message: 'Welcome to react chatbot!',
          trigger: '1',
        },
        {
          id: '1',
          message: 'Bye!',
          end: false,
        },
      ];
  return (
    
       
     
        <div >
          <ChatBot steps={steps} />
        </div>
       
    
  )
}

export default Chatbot