import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

import '../App.css';
import Header from './Header';
import Menu from './Menu';
import Routes from './router/routes';

function App() {
  library.add(fab, fas);
  return (
    <Router>
      <div className="">
        <Header />
        <Routes />
        <Menu />
      </div>
    </Router>
  );
}

export default App;
