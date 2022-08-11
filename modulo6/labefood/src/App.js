import React from 'react';
import Router from '../src/routes/Router';
import GlobalState from './context/GlobalState';


function App() {
  return (
    <div>
      <GlobalState>
        <Router/>
      </GlobalState>
    </div>
  );
}

export default App;
