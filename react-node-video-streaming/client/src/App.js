import React from 'react';
import './App.css';

// Single video element where src is the route on our server that serves the sample video file
/* The terminal command yarn start (or npm start) starts a web server and opens the React
   application in your browser */
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <video controls muted>
        <source src="http://localhost:4000/video" type="video/mp4"></source>
      </video>
      </header>
    </div>
  );
}

export default App;