import React from 'react'
import  {connect} from 'react-redux'


export class layout extends React.Component {
  constructor(props){
    super(props)
    this.toggleClass1 = this.toggleClass1.bind(this);
    this.toggleClass2 = this.toggleClass2.bind(this);
    this.toggleClass3 = this.toggleClass3.bind(this);
    this.toggleClass4 = this.toggleClass4.bind(this);
    this.toggleClass5 = this.toggleClass5.bind(this);
    this.toggleClass6 = this.toggleClass6.bind(this);
    this.toggleClass7 = this.toggleClass7.bind(this);
    this.state = {
      active1: true,
      active2: false,
      active3: false,
      active4: false, 
      active5: false,
      active6: false,
      active7: false,     
    }
    
  }

  toggleClass1(){
    
    const currentState = this.state.active1;
    console.log("1-----------------------------------------");
    //console.log(this.state);
    this.setState({ active1: !currentState });
    this.setState({ active2: false });
    this.setState({ active3: false });
    this.setState({ active4: false });
    this.setState({ active5: false });
    this.setState({ active6: false });
    this.setState({ active7: false });
  }
  
  toggleClass2(){
    
    const currentState = this.state.active2;
    console.log("2-----------------------------------------");
    //console.log(this.state);
    this.setState({ active1: false });
    this.setState({ active2: !currentState });
    this.setState({ active3: false });
    this.setState({ active4: false });
    this.setState({ active5: false });
    this.setState({ active6: false });
    this.setState({ active7: false });
  }
  toggleClass3(){
    
    const currentState = this.state.active3;
    console.log("3-----------------------------------------");
    //console.log(this.state);
    this.setState({ active1: false });
    this.setState({ active2: false });
    this.setState({ active3: !currentState });
    this.setState({ active4: false });
    this.setState({ active5: false });
    this.setState({ active6: false });
    this.setState({ active7: false });
  }
  toggleClass4(){
    
    const currentState = this.state.active4;
    console.log("4-----------------------------------------");
    //console.log(this.state);
    this.setState({ active1: false });
    this.setState({ active2: false });
    this.setState({ active3: false });
    this.setState({ active4: !currentState });
    this.setState({ active5: false });
    this.setState({ active6: false });
    this.setState({ active7: false });
  }
  toggleClass5(){
    
    const currentState = this.state.active5;
    //console.log(this.state);
    console.log("5-----------------------------------------");
    this.setState({ active1: false });
    this.setState({ active2: false });
    this.setState({ active3: false });
    this.setState({ active4: false });
    this.setState({ active5: !currentState });
    this.setState({ active6: false });
    this.setState({ active7: false });
  }
  toggleClass6(){
    
    const currentState = this.state.active6;
    console.log("6-----------------------------------------");
    this.setState({ active1: false });
    this.setState({ active2: false });
    this.setState({ active3: false });
    this.setState({ active4: false });
    this.setState({ active5: false });
    this.setState({ active6: !currentState });
    this.setState({ active7: false });
  }
  toggleClass7(){
    
    const currentState = this.state.active7;
    //console.log(this.state);
    console.log("7-----------------------------------------");
    this.setState({ active1: false });
    this.setState({ active2: false });
    this.setState({ active3: false });
    this.setState({ active4: false });
    this.setState({ active5: false });
    this.setState({ active6: false });
    this.setState({ active7: !currentState });
  }

  render() {

    //console.log(this.props.optimized)
    //if(!this.props.optimized)return null;
    return (
        <div id="layout">
        <div className="container">
             <h2>Layout</h2>
             
            <ul id="weekdays">
            <li className= {this.state.active1 ? 'active': null} 
                onClick={this.toggleClass1}>
              M  
            </li>
            <li className= {this.state.active2 ? 'active': null} 
                onClick={this.toggleClass2}>
              T  
            </li>
            <li className= {this.state.active3 ? 'active': null} 
                onClick={this.toggleClass3}>
              W
            </li>            
            <li className= {this.state.active4 ? 'active': null} 
                onClick={this.toggleClass4}>             
             T  
            </li>           
            <li className= {this.state.active5 ? 'active': null} 
                onClick={this.toggleClass5}>
            F
            </li>            
            <li  className= {this.state.active6 ? 'active': null} 
                onClick={this.toggleClass6}>
            S 
            </li>            
            <li className= {this.state.active7 ? 'active': null} 
                onClick={this.toggleClass7}>
             S   
            </li> 

            </ul> 
            <div className="list-style">
                  
          </div>
        </div>
        
        <div id = "layout_img">
        <div className="overlay">
              <div className="col-md-4 tab1">
                <button className= "assembly  c_one" >ASSEMBLY</button>
                <button className= "packaging  c_one_p" >PACKAGING</button>
                <button className= "qual_check  c_one_qc" >QUALITY CHECK</button>
              </div>
              <div className="col-md-4 tab1">
                <button className= "assembly  c_two" >ASSEMBLY</button>
                <button className= "packaging  c_two_p" >PACKAGING</button>
                <button className= "qual_check  c_two_qc" >QUALITY CHECK</button>
              </div>
              <div className="col-md-4 tab1">
                <button className= "assembly  c_three" >ASSEMBLY</button>
                <button className= "packaging  c_three_p" >PACKAGING</button>
                <button className= "qual_check  c_three_qc" >QUALITY CHECK</button>
              </div>
              
          </div>
            
        </div>

        <a className = "layout_labels">LINE 1</a>
        <a className = "layout_labels">LINE 2</a>
        <a className = "layout_labels">LINE 3</a>


        <div id = "layout_img2">
            
        <div className="overlay">
              <div className="col-md-4 tab1">
                <button className= "assembly  c_one" >ASSEMBLY</button>
                <button className= "packaging  c_one_p" >PACKAGING</button>
                <button className= "qual_check  c_one_qc" >QUALITY CHECK</button>
              </div>
              <div className="col-md-4 tab1">
                <button className= "assembly  c_two" >ASSEMBLY</button>
                <button className= "packaging  c_two_p" >PACKAGING</button>
                <button className= "qual_check  c_two_qc" >QUALITY CHECK</button>
              </div>
              <div className="col-md-4 tab1">
                <button className= "assembly  c_three" >ASSEMBLY</button>
                <button className= "packaging  c_three_p" >PACKAGING</button>
                <button className= "qual_check  c_three_qc" >QUALITY CHECK</button>
              </div>
          </div>
            
        </div>

        
        <a className = "layout_labels">LINE 4</a>
        <a className = "layout_labels">LINE 5</a>
        <a className = "layout_labels">LINE 6</a>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
   optimized : state.optimized[0]
  };
};


export default connect(mapStateToProps,null) (layout)
