import React from 'react';
import './assets/js/script';
import Main from './components/Main Content/Main';
import SideBar from './components/SideBar/Sidebar';

function App(props) {
  return (
    <>
      <SideBar />   
      <Main />
    </>
  );
}

export default App;
