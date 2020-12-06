import {Pie} from 'react-chartjs-2';
import React from "react";
import {connect} from 'react-redux';


const state = {
    labels: ['XPS','VOSTRO','G-SERIES','INSPIRON'],
    datasets: [
      {
        label: 'WEEKLY PRODUCTION DATA',
        backgroundColor: [
          '#B21F00',
          '#C9DE00',
          '#2FDE00',
          '#00A6B4'
        ],
        hoverBackgroundColor: [
        '#501800',
        '#4B5000',
        '#175000',
        '#003350'
        ],
        data: [total_xps,total_vostro,total_gseries,total_inspiron]
      }
    ]
  }
  
  export default class App extends React.Component {
    render() {
      return (
        <div>
          <Pie
            data={state}
            options={{
              title:{
                display:true,
                text:'WEEKLY PRODUCTION DATA',
                fontSize:20
              },
              legend:{
                display:true,
                position:'right'
              }
            }}
          />
        </div>
        );
    }
}