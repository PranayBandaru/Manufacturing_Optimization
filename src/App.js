import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Header from './components/header';
import React from 'react'
import Numbers from './components/numbers';
import Layout from './components/layout';
import Dashboard from './components/dashboard';
import Connect from './components/connect';

var dat = [{
  "icon": "400",
  "name": "Lorem ipsum dolor"
},
{
  "icon": "63%",
  "name": "Consectetur adipiscing"
},
{
  "icon": "3123",
  "name": "Lorem ipsum dolor",
},
{
  "icon": "321",
  "name": "Consectetur adipiscing",
}


];

var graphs= [{
  "graph": "231",
  "gname": "one"
},
{
  "graph": "531",
  "gname": "two"
}
];

var data = {"dat": dat, "graph": graphs };

export class App extends React.Component {
  
  render() {
    return (
      <div>
        <Navbar /> 
        <Header />
        <Numbers data = "C O M P U T E"/>
        <Layout />
        <Dashboard data = {data}/>
        <Connect /> 
      </div>
    )
  }
}

export default App;
