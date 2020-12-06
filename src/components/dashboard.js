import React from "react";
import {connect} from 'react-redux';
import {Pie} from 'react-chartjs-2';


export class dashboard extends React.Component {
  constructor(props){
    super(props);
    this.total_manus = this.total_manus.bind(this);
    this.state ={
      total_xps: 0,
      total_gseries: 0,
      total_vostro: 0,
      total_inspiron: 0,
      count: 0,
      
    }
  }
  
  

  total_manus(){
  var total_xps_temp = 0;
  var total_inspiron_temp = 0;
  var total_gseries_temp = 0;
  var total_vostro_temp = 0;
  if(this.state.count<3){
    //console.log(this.props.optimized);
    for(var i = 0; i<6; i++){
      for(var j = 0; j<336; j++){
        //console.log(this.props.optimized[i].step3[j]);
        if(this.props.optimized[i].step3[j] == "XPS"){
          //this.setState({total_xps: this.state.total_xps+1})
          total_xps_temp++;
          //console.log("______________________________________________");
          //console.log(this.state.total_xps);
        }
        if(this.props.optimized[i].step3[j] == "Vostro"){
          //this.setState({total_vostro: this.state.total_vostro+1});
          total_vostro_temp++;
        }
        if(this.props.optimized[i].step3[j] == "Inspiron"){
          //this.setState({total_inspiron: this.state.total_inspiron+1});
          total_inspiron_temp++;
        }
        if(this.props.optimized[i].step3[j] == "GSeries"){
          //this.setState({total_gseries: this.state.total_gseries+1});
          total_gseries_temp++;
        }
      }
    }
    
    this.setState({count: this.state.count+1});
    this.setState({total_gseries: total_gseries_temp});
    this.setState({total_xps: total_xps_temp});
    this.setState({total_inspiron: total_inspiron_temp});
    this.setState({total_vostro: total_vostro_temp});

  }
}

  render() {

    const hubbabubba = {
      labels: ['XPS','VOSTRO','G-SERIES','INSPIRON'],
      datasets: [
        {
          label: 'WEEKLY PRODUCTION DATA',
          backgroundColor: [
            '#044e87',
            '#820157',
            '#025e03',
            '#ad3103'
          ],
          hoverBackgroundColor: [
          '#501800',
          '#4B5000',
          '#175000',
          '#003350'
          ],
          data: [this.state.total_xps/2,this.state.total_vostro,this.state.total_gseries,this.state.total_inspiron/2]
        }
      ]
    }


    if(!this.props.optimized)return null;
    this.total_manus();
    return (
      <div id="dashboard" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>Dashboard</h2>
            <p>
              All your statistics at one glance
            </p>
          </div>
          <div className="row">
            {this.props.data.dat
              ? this.props.data.dat.map((d, i) => (
                <div>
                  <div  key={`${d.name}-${i}`} className="col-md-3">
                    {" "}
                    <i className="stat">{d.icon} 
                      <div className="service-desc">
                        <h3>{d.name}</h3>
                      </div>
                    </i>
                  </div>
                </div>
                  
                  
                  
                ))
              : "loading"}
              
              <div className="col-md-3">
              
              <i className="stat">{this.state.total_gseries + this.state.total_inspiron/2 + this.state.total_vostro + this.state.total_xps/2}
                <div className="service-desc">
                  <h3>Total Estimated Production for the week</h3>
                </div>
              </i>
            </div>
          </div>

          <div className="row">
                <div>
                  <div className="col-md-6">
                    
                    <i className="grph"
                    ><iframe width="500" height="270" src="https://datastudio.google.com/embed/reporting/a3624847-e9e3-40c3-bb22-a599cd01a4c3/page/Rn0rB" frameborder="0" allowFullScreen></iframe>
                      <div className="service-desc">
                        <h3>Sales statistics(In thousands)</h3>
                      </div>
                    </i>
                  </div>
                  <div className="col-md-6">
                  <i className="grph">
                      <Pie
                        data={hubbabubba}
                        options={{
                          title:{
                            
                          },
                          legend:{
                            display:true,
                            position:'right'
                          }
                        }}
                      /><div className="service-desc" id="graph_2"> 
                      <h3>Ratios of models manufactured</h3>
                    </div>

                      </i>
                    
                  </div>
                </div>


                  
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
   optimized : state.optimized[0]
  };
};

export default connect(mapStateToProps,null) (dashboard);
//export default dashboard;
