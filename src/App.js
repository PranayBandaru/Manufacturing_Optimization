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
  "icon": "6",
  "name": "Manufacturing Lines"
},
{
  "icon": "3",
  "name": "Step production"
},
{
  "icon": "3 * 8",
  "name": "Hour Shifts",
},
{
  "icon": "0",
  "name": "Backlog Orders",
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
