/**Base component to host the page sections */

import React from 'react';
import Header from './components/Header/Header';
import Toolbar from './components/Toolbar/Toolbar';

import "./styles.css";



const App = () => {  

  return(
    <div>
      <Header/>
      <Toolbar/>
      <div className='container'>
        
      </div>
    </div>
  )
  
};

export default App;
