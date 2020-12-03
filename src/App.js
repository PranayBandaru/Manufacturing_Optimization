import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Header from './components/header';
import React from 'react'
import Numbers from './components/numbers';

export class App extends React.Component {
  
  render() {
    return (
      <div>
        <Navbar /> 
        <Header />
        <Numbers data = "C O M P U T E"/>
      </div>
    )
  }
}

export default App;
