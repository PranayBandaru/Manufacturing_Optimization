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
    this.initialise = this.initialise.bind(this);
    this.initialise_o = this.initialise_o.bind(this);
    this.daywise_initialize = this.daywise_initialize.bind(this);
    //this.daywise_fill = this.daywise_fill.bind(this);
    this.state = {
      active1: true,
      active2: false,
      active3: false,
      active4: false, 
      active5: false,
      active6: false,
      active7: false,
      check: 0
    }
    
  }

  initialise(arr){
    for(var i=0 ; i<48;i++){
        arr[i] = 0;
    }
    return arr; 
}
  initialise_o(arr, len){
  for(var i=0 ; i<len;i++){
      arr.push(new Object());
  }
  return arr; 
}

  daywise_initialize(){
    /*
    this.state.daywise_nums = this.initialise_o(new Array(7),7);
    console.log(this.state.daywise_nums);
    for(var i = 0; i<7; i++){      
         this.state.daywise_nums[i].line1 = new Object();
         this.state.daywise_nums[i].line2 = new Object();
         this.state.daywise_nums[i].line3 = new Object();
         this.state.daywise_nums[i].line4 = new Object();
         this.state.daywise_nums[i].line5 = new Object();
         this.state.daywise_nums[i].line6 = new Object();
         this.state.daywise_nums[i].line1.step1 = this.initialise(new Array(48),48);
         this.state.daywise_nums[i].line1.step2 = this.initialise(new Array(48),48);
         this.state.daywise_nums[i].line1.step3 = this.initialise(new Array(48),48);
         this.state.daywise_nums[i].line2.step1 = this.initialise(new Array(48),48);
         this.state.daywise_nums[i].line2.step2 = this.initialise(new Array(48),48);
         this.state.daywise_nums[i].line2.step3 = this.initialise(new Array(48),48);
         this.state.daywise_nums[i].line3.step1 = this.initialise(new Array(48),48);
         this.state.daywise_nums[i].line3.step2 = this.initialise(new Array(48),48);
         this.state.daywise_nums[i].line3.step3 = this.initialise(new Array(48),48);
         this.state.daywise_nums[i].line4.step1 = this.initialise(new Array(48),48);
         this.state.daywise_nums[i].line4.step2 = this.initialise(new Array(48),48);
         this.state.daywise_nums[i].line4.step3 = this.initialise(new Array(48),48);
         this.state.daywise_nums[i].line5.step1 = this.initialise(new Array(48),48);
         this.state.daywise_nums[i].line5.step2 = this.initialise(new Array(48),48);
         this.state.daywise_nums[i].line5.step3 = this.initialise(new Array(48),48);
         this.state.daywise_nums[i].line6.step1 = this.initialise(new Array(48),48);
         this.state.daywise_nums[i].line6.step2 = this.initialise(new Array(48),48);
         this.state.daywise_nums[i].line6.step3 = this.initialise(new Array(48),48);
         }
      */
     var line1 = {step1 : this.initialise(new Array(48)),step2 : this.initialise(new Array(48)), step3 : this.initialise(new Array(48)) };
     var line2 = {step1 : this.initialise(new Array(48)),step2 : this.initialise(new Array(48)), step3 : this.initialise(new Array(48)) };
     var line3 = {step1 : this.initialise(new Array(48)),step2 : this.initialise(new Array(48)), step3 : this.initialise(new Array(48)) };
     var line4 = {step1 : this.initialise(new Array(48)),step2 : this.initialise(new Array(48)), step3 : this.initialise(new Array(48)) };
     var line5 = {step1 : this.initialise(new Array(48)),step2 : this.initialise(new Array(48)), step3 : this.initialise(new Array(48)) };
     var line6 = {step1 : this.initialise(new Array(48)),step2 : this.initialise(new Array(48)), step3 : this.initialise(new Array(48)) };
     var day1 = {line1, line2, line3, line4, line5, line6};
     var day2 = {line1, line2, line3, line4, line5, line6};
     var day3 = {line1, line2, line3, line4, line5, line6};
     var day4 = {line1, line2, line3, line4, line5, line6};
     var day5 = {line1, line2, line3, line4, line5, line6};
     var day6 = {line1, line2, line3, line4, line5, line6};
     var day7 = {line1, line2, line3, line4, line5, line6};

     //this.state.daywise_nums.setState([day1,day2,day3,day4,day5,day6,day7]);
     var daywise_nums_ = [day1,day2,day3,day4,day5,day6,day7];
     this.setState({daywise_nums: [day1,day2,day3,day4,day5,day6,day7]});
     console.log("INSIDE INITIALISE");
     console.log(this.state.daywise_nums);

    
  }

  daywise_fill(){
    if(this.state.check>0){
    console.log("INSIDE FILL------------------------------------")
    console.log(this.state.daywise_nums[0]);
    for(var i = 0; i<7; i++){
      for(var j = i* 48; j<(i+1)*48; j++){
        /*
        console.log(i);
        console.log("---------------------------------------------");
        console.log(j- 48*i);
        console.log("/////////////////////////////////////////////");
        console.log(j);
        */
        this.state.daywise_nums[i].line1.step1[j- 48*i] = this.props.optimized[0].step1[j];
        console.log(this.props.optimized[0].step1[j]);
        this.state.daywise_nums[i].line1.step2[j- 48*i] = this.props.optimized[0].step2[j];
        this.state.daywise_nums[i].line1.step3[j- 48*i] = this.props.optimized[0].step3[j];
        
        this.state.daywise_nums[i].line2.step1[j- 48*i] = this.props.optimized[1].step1[j];
        this.state.daywise_nums[i].line2.step2[j- 48*i] = this.props.optimized[1].step2[j];
        this.state.daywise_nums[i].line2.step3[j- 48*i] = this.props.optimized[1].step3[j];
        
        this.state.daywise_nums[i].line3.step1[j- 48*i] = this.props.optimized[2].step1[j];
        this.state.daywise_nums[i].line3.step2[j- 48*i] = this.props.optimized[2].step2[j];
        this.state.daywise_nums[i].line3.step3[j- 48*i] = this.props.optimized[2].step3[j];
        
        this.state.daywise_nums[i].line4.step1[j- 48*i] = this.props.optimized[3].step1[j];
        this.state.daywise_nums[i].line4.step2[j- 48*i] = this.props.optimized[3].step2[j];
        this.state.daywise_nums[i].line4.step3[j- 48*i] = this.props.optimized[3].step3[j];
        
        this.state.daywise_nums[i].line5.step1[j- 48*i] = this.props.optimized[4].step1[j];
        this.state.daywise_nums[i].line5.step2[j- 48*i] = this.props.optimized[4].step2[j];
        this.state.daywise_nums[i].line5.step3[j- 48*i] = this.props.optimized[4].step3[j];
        
        this.state.daywise_nums[i].line6.step1[j- 48*i] = this.props.optimized[5].step1[j];
        this.state.daywise_nums[i].line6.step2[j- 48*i] = this.props.optimized[5].step2[j];
        this.state.daywise_nums[i].line6.step3[j- 48*i] = this.props.optimized[5].step3[j];
        
      }
    }
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
    if(!this.props.optimized)return null;
    if(this.state.check < 4)
    {
    this.daywise_initialize();
    this.daywise_fill();
    console.log("INSIDE RENDER");
    console.log(this.state.check);
    console.log(this.state.daywise_nums);
    this.setState( {check: this.state.check+1});
    }
    
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
