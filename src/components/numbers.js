import React from "react";

export class numbers extends React.Component {
  render() {
    return (
      <div id="numbers" className="text-center">
        <div className="container">
          <div className="col-md-10 col-md-offset-1 section-title">
            <h2>N u m b e r s</h2>
          </div>
          <input type="number" id="pred_num" name="pred_num"></input>
          <input type="number" id="backlog_num" name="backlog_num"></input>
          <input type="number" id="current_ord_num" name="current_ord_num"></input>
          <a id = "pred_label_a">
              PREDICTED SALES FOR THE WEEK
          </a>        
          <a id = "backlog_label_a">
              BACKLOG ORDERS
          </a>       
          <a id = "current_label_a">
              CURRENT ORDERS
          </a>

          <button id = "compute_button" 
                    className="btn btn-custom btn-lg page-scroll">C O M P U T E</button>
          <div className="row">
              
          </div>
        </div>
      </div>
    );
  }
}

export default numbers;
