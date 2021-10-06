import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import { MainPage, AboutPage } from './pages';
import './App.css';


function App() {
  return (
    <main>
      <NavBar />
      <Switch>
        <Route path="/about" component={ AboutPage } />
        <Route path="/" component={ MainPage } />
      </Switch>
    </main>
  );
}

export default App;
