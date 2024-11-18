import React, { useState, useEffect } from 'react';

function App() {
  
  

  useEffect(() => {
    // Connect to WebSocket server
    const socket = new WebSocket('ws://localhost:8080/');

    socket.onopen = () => {
      console.log('WebSocket connection established');
      setWs(socket);
    };

    socket.onmessage = (event) => {
      console.log('Message received from server:', event.data);
    };

    socket.onclose = () => {
      console.log('WebSocket connection closed');
    };

    socket.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    // Cleanup on component unmount
    return () => {
      socket.close();
    };
  }, []);

  const sendMessage = () => {
    if (ws && ws.readyState === WebSocket.OPEN) {
      ws.send(message);
     
    }
  };

  return (
    <div>
     </div>
  );
}

export default App;
