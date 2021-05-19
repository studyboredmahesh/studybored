import React from "react";
import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input'
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Popmain from "./Punchbar";
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';

import CardContent from '@material-ui/core/CardContent';

import Avatar from '@material-ui/core/Avatar';
import './style.css';
import './Settings.css';
import Punchbar from "./Punchbar";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { blue } from "@material-ui/core/colors";




function Sirprofile() {
  
  return (
   <div className='main_div'>
      <br/>
          <Punchbar/>
        <div className='side_bar'>
        
           
          
           <Button className='root_edge' variant="outlined">Genaral</Button><br/><br/>
           <Button className='root_edge' variant="outlined" >Report</Button><br/><br/>
           <Button className='root_edge' variant="outlined" >Web Development</Button><br/><br/>
        </div>
        
          
        <div className='profile_img'>
        <img width="150px" height="150px"src={"./profilepic.jpg"} /><br/>
        <Button>Upload</Button>
        <Button>Delete</Button>
        </div>
            
             
             <div className='event_edit' style={{fontStyle:"initial", fontSize: "14px"}}>
             <Typography>USER NAME</Typography>
                <Input
                            type="text"
                            name="name"
                            placeholder="Enter your User name."
                  />
                  <Typography>PASSWORD</Typography>
                  <Input
                            type="password"
                            name="password"
                            placeholder="Enter your Password."
                  />
                  <Typography>EMPLOY ID</Typography>
                  <Input
                            type="text"
                            name="id"
                            placeholder="Enter your Employ ID."
                  />
                  <Typography>EMAIL ID</Typography>
                  <Input
                            type="email"
                            name="email"
                            placeholder="Enter your email address."
                  /><br/><br/>
                <Button  variant="outlined" >Save</Button>
                <Button  variant="outlined" >Cancel</Button>
               
             </div>

        </div>
    
  );
}

export default Sirprofile;