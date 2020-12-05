import React from "react";

var button_name = "N E X T";


export class numbers extends React.Component {

    constructor(){
        super();
        this.toggleClass1 = this.toggleClass1.bind(this);
        this.toggleClass2 = this.toggleClass2.bind(this);
        this.toggleClass3 = this.toggleClass3.bind(this);
        this.toggleClass4 = this.toggleClass4.bind(this);
        this.b_click = this.b_click.bind(this);
        this.state = {
            active1: true,
            active2: false,
            active3: false,
            active4: false,
        };
    }

    b_click(){
      
      const currentState1 = this.state.active1;
      const currentState2 = this.state.active2;
      const currentState3 = this.state.active3;
      const currentState4 = this.state.active4;
      console.log(this.state);
      if(currentState1){
        console.log("S1 hit");
        this.setState({ active1:false });
        this.setState({ active2: true });
      }else if(currentState2){
        console.log("S2 hit");
        this.setState({ active2:false });
        this.setState({ active3: true });
      }else if(currentState3){
        console.log("S3 hit");
        this.setState({ active3:false });
        this.setState({ active4: true });
      }
      else if(currentState4){
        console.log("S4 hit");
        //GO FOR PROCESSING
      }
      console.log(this.state);
    }
    

    toggleClass1() {
        const currentState = this.state.active1;
        console.log(this.state);
        this.setState({ active1: !currentState });
        this.setState({ active2: false });
        this.setState({ active3: false });
        this.setState({ active4: false });

        console.log(this.state);
    };


    toggleClass2() {
      const currentState = this.state.active2;
      this.setState({ active1: false });
      this.setState({ active2: !currentState });
      this.setState({ active3: false });
      this.setState({ active4: false });

      console.log(this.state);
  };

  toggleClass3() {
    const currentState = this.state.active3;
    this.setState({ active1: false });
    this.setState({ active2: false });
    this.setState({ active3: !currentState });
    this.setState({ active4: false });

    console.log(this.state);
};

toggleClass4() {
  const currentState = this.state.active4;
  this.setState({ active1: false });
  this.setState({ active2: false });
  this.setState({ active3: false });
  this.setState({ active4: !currentState });
  
  console.log(this.state);
};


  render() {
    return (
      <div id="numbers" className="text-center">
        <div className="container">
          <div className="col-md-10 col-md-offset-1 section-title">
            <h2>N u m b e r s</h2>
          </div>

          <div className= "container">
               <ul className="progressbar">
                    <li
                     className={this.state.active1 ? 'active': null} 
                onClick={this.toggleClass1}>Inspiron</li>
                    <li className={this.state.active2 ? 'active': null} 
                onClick={this.toggleClass2}>Vostro</li>
                    <li className={this.state.active3 ? 'active': null} 
                onClick={this.toggleClass3}>XPS</li>
                    <li className={this.state.active4 ? 'active': null} 
                onClick={this.toggleClass4}>G-Series</li>
                </ul>
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
                    className="btn btn-custom btn-lg page-scroll" onClick={this.b_click.bind(this)}> {this.state.active4 ? "C O M P U T E" : "N E X T"} 
                    </button>
          <div className="row">
              
          </div>
        </div>
      </div>
    );
  }
}

export default numbers;
