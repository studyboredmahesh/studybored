import { Button } from '@material-ui/core';
import React from 'react';
import Popup from './Popup'
import './style.css';


class Popprofile extends React.Component {
    constructor(props){
        super(props);
        this.state = { showPopup: false };
        }
      
        togglePopup() {
         this.setState({
           showPopup: !this.state.showPopup
         });
       }
      
  render() {
    return (
      <div className='popup'>
        <div className='popup_inner2'><br/>
        &nbsp;&nbsp; 
        <button onClick={this.props.closePopup}>X</button>
        <div >
            <br/>
            &nbsp;&nbsp;&nbsp;&nbsp;
        <img width="35px" height="35px"src={"./profilepic.jpg"} />
        &nbsp;&nbsp;&nbsp;
        <label>Jobin K Thomas</label>
        &nbsp;&nbsp;&nbsp;
        <Button variant="outlined" size="small" onClick={this.togglePopup.bind(this)}>View Profile</Button>
        {this.state.showPopup ?
         <Popup
          closePopup={this.togglePopup.bind(this)}
         />
         : null
       }
        &nbsp;&nbsp;&nbsp;
        <Button variant="outlined" size="small">Message</Button>
        <br/>
            &nbsp;&nbsp;&nbsp;&nbsp;
        <img width="35px" height="35px"src={"./profilepic.jpg"} />
        &nbsp;&nbsp;&nbsp;
        <label>Jobin K Thomas</label>
        &nbsp;&nbsp;&nbsp;
        <Button variant="outlined" size="small" onClick={this.togglePopup.bind(this)}>View Profile</Button>
        {this.state.showPopup ?
         <Popup
          closePopup={this.togglePopup.bind(this)}
         />
         : null
       }
        &nbsp;&nbsp;&nbsp;
        <Button variant="outlined" size="small">Message</Button>
        <br/>
            &nbsp;&nbsp;&nbsp;&nbsp;
        <img width="35px" height="35px"src={"./profilepic.jpg"} />
        &nbsp;&nbsp;&nbsp;
        <label>Jobin K Thomas</label>
        &nbsp;&nbsp;&nbsp;
        <Button variant="outlined" size="small" onClick={this.togglePopup.bind(this)}>View Profile</Button>
        {this.state.showPopup ?
         <Popup
          closePopup={this.togglePopup.bind(this)}
         />
         : null
       }
        &nbsp;&nbsp;&nbsp;
        <Button variant="outlined" size="small">Message</Button>
        <br/>
            &nbsp;&nbsp;&nbsp;&nbsp;
        <img width="35px" height="35px"src={"./profilepic.jpg"} />
        &nbsp;&nbsp;&nbsp;
        <label>Jobin K Thomas</label>
        &nbsp;&nbsp;&nbsp;
        <Button variant="outlined" size="small" onClick={this.togglePopup.bind(this)}>View Profile</Button>
        {this.state.showPopup ?
         <Popup
          closePopup={this.togglePopup.bind(this)}
         />
         : null
       }
        &nbsp;&nbsp;&nbsp;
        <Button variant="outlined" size="small">Message</Button>
        <br/>
            &nbsp;&nbsp;&nbsp;&nbsp;
        <img width="35px" height="35px"src={"./profilepic.jpg"} />
        &nbsp;&nbsp;&nbsp;
        <label>Jobin K Thomas</label>
        &nbsp;&nbsp;&nbsp;
        <Button variant="outlined" size="small" onClick={this.togglePopup.bind(this)}>View Profile</Button>
        {this.state.showPopup ?
         <Popup
          closePopup={this.togglePopup.bind(this)}
         />
         : null
       }
        &nbsp;&nbsp;&nbsp;
        <Button variant="outlined" size="small">Message</Button>
        <br/>
            &nbsp;&nbsp;&nbsp;&nbsp;
        <img width="35px" height="35px"src={"./profilepic.jpg"} />
        &nbsp;&nbsp;&nbsp;
        <label>Jobin K Thomas</label>
        &nbsp;&nbsp;&nbsp;
        <Button variant="outlined" size="small" onClick={this.togglePopup.bind(this)}>View Profile</Button>
        {this.state.showPopup ?
         <Popup
          closePopup={this.togglePopup.bind(this)}
         />
         : null
       }
        &nbsp;&nbsp;&nbsp;
        <Button variant="outlined" size="small">Message</Button>
        <br/>
            &nbsp;&nbsp;&nbsp;&nbsp;
        <img width="35px" height="35px"src={"./profilepic.jpg"} />
        &nbsp;&nbsp;&nbsp;
        <label>Jobin K Thomas</label>
        &nbsp;&nbsp;&nbsp;
        <Button variant="outlined" size="small" onClick={this.togglePopup.bind(this)}>View Profile</Button>
        {this.state.showPopup ?
         <Popup
          closePopup={this.togglePopup.bind(this)}
         />
         : null
       }
        &nbsp;&nbsp;&nbsp;
        <Button variant="outlined" size="small">Message</Button>
        </div>
        </div>
      </div>
    );
  }
} 

export default Popprofile; 