import './App.css';
import React, { useState, useContext, useEffect } from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import SideBar from './SideBar/SideBar';
import ContentRouter from './Content/Content'

const MenuContext = React.createContext();

function App() {

  const [currentMenu, setCurrentMenu] = useState(0)
  const menuItems = ['국내', '세계', '백신', '거리두기', '자주묻는 질문']

  return (
    <div className="App">
      <Router>
        <div className="main-layout">
          {/* Left Sidebar */}
          <SideBar menu={currentMenu} />
          {/* Right Content */}
          <ContentRouter menu={currentMenu} />
        </div>
      </Router>
    </div>
  );
}

export default App;
