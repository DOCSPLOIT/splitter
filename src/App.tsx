import React from 'react';
import './App.css';
import Logo from './assets/images/logo.svg';
import Splitter from './components/Splitter';
function App() {
  return <main>
    <div className='vw-100 min-vh-100 d-flex flex-column bg-light-gray' >
      <img src={Logo} alt="logo" className="mx-auto mt-5 pt-5" />
      <div className="card mx-auto mt-5 p-4 col-md-8 col-sm-10 row col-12">
        <Splitter />
      </div>
    </div>
  </main>
}

export default App;
