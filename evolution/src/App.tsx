import React, { useState, Fragment } from 'react';
import './App.scss';

import Counter from './Components/Counter';
import Name from './Components/Name';
import Navbar from './Components/Navbar';

const App: React.FC = () => {
  return (
    <Fragment>
      <Navbar/>
      {/* <Counter /> */}
      <Name />
    </Fragment>
  );
};

export default App;
