import React from 'react';
import './App.css';
import routes from './routes'
import Nav from './components/Nav/Nav'

function App() {
  return (
    <div className="App">
      <div className="Content">
        <div className='Nav-Bar'>
          <Nav/>
        </div>
        <div className="Main-Content">
          {routes}
        </div>
      </div>
    </div>
  );
}

export default App;
