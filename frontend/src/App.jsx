import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import History from './components/History';
import './styles/main.css'; 


function App() {
  return (
    <Router>
      <div className="App">
          <Route path="/" exact component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/history" component={History} />
      </div>
    </Router>
  );
}

export default App;