import React from 'react'

export class layout extends React.Component {
  render() {
    return (
        <div id="layout">
        <div className="container">
             <h2>Layout</h2>
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

export default layout
