import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Home } from './pages/home/Home';

function App() {
  return (
    <React.Fragment>
      <Home/>
      <Toaster />
    </React.Fragment>
  );
}

export default App;
