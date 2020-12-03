import React from "react";

export class dashboard extends React.Component {
  render() {
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
          </div>

          <div className="row">
            {this.props.data.graph
              ? this.props.data.graph.map((d, i) => (
                <div>
                  <div  key={`${d.gname}-${i}`} className="col-md-6">
                    {" "}
                    <i className="grph">{d.graph} 
                      <div className="service-desc">
                        <h3>{d.gname}</h3>
                      </div>
                    </i>
                  </div>
                  </div>
                  
                  
                ))
              : "loading"}
          </div>
        </div>
      </div>
    );
  }
}

export default dashboard;
