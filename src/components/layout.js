import React from 'react'
import  {connect} from 'react-redux'


export class layout extends React.Component {
  constructor(props){
    super(props)
    this.state = {size: 3}
    
  }
  render() {
    
    let rows = [
      'Setting One',
      'Setting Two',
      'Setting Three',
      'Setting Four',];
    for (var i = 0; i < this.state.size; i++){
      let rowID = `row${i}`
      let cell = []
      for (var idx = 0; idx < this.state.size; idx++){
        let cellID = `cell${i}-${idx}`
        cell.push(<td key={cellID} id={cellID}></td>)
      }
      rows.push(<tr key={i} id={rowID}>{cell}</tr>)
    }
    //console.log(this.props.optimized)
    if(!this.props.optimized)return null;
    return (
        <div id="layout">
        <div className="container">
             <h2>Layout</h2>
             <div className="row">
                <div className="col s12 board">
                  <table id="simple-board">
                    <tbody>
                      {rows}
                    </tbody>
                  </table>
                </div>
              </div>

            <ul id="weekdays">
            <li className= "active">
              M  
            </li>
            <li>
              T  
            </li>
            <li>
              W
            </li>            
            <li>             
             T  
            </li>           
            <li>
            F
            </li>            
            <li>
            S 
            </li>            
            <li>
             S   
            </li> 

            </ul> 

            <div className="list-style">
                  
          </div>
        </div>
        
        <div id = "layout_img">
            
        </div>
        <a className = "layout_labels">LINE 1</a>
        <a className = "layout_labels">LINE 2</a>
        <a className = "layout_labels">LINE 3</a>
        <div id = "layout_img2">
            
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
