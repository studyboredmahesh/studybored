import React from "react";
import Button from '@material-ui/core/Button'
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
     <div></div>
          <Punchbar/>
        <div className='side_bar'>
        
           
          
           <Button className='root_edge' variant="outlined">Genaral</Button><br/><br/>
           <Button className='root' variant="outlined" >SHIBIN SHAJAHAN</Button><br/><br/>
           <Button className='root' variant="outlined" >AISWARYA</Button><br/><br/>
           <Button className='root_edge' variant="outlined" >Add team +</Button><br/><br/>
           <Button className='root_edge' variant="outlined" >Web Development</Button><br/><br/>
        </div>
        
          
        <div className='profile_card'>
      <Card style={{maxWidth: 300, minHeight: 150}}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" style={{backgroundColor: "#FF0000"}}>
            J
          </Avatar> 
          
        }
        
        title="SHIBI SHAJAHAN"
        subheader="CEO & FOUNDER"
      />
      
    
    </Card>
     
    </div>
            <div className='report_status' >
            <Card style={{maxWidth: 300}}>
              <CardHeader
        
              
              subheader="PROJECT MANAGER"
                  />
      
            <CardContent>
                  <Typography variant="body2" style={{color: "#02c2fc"}} component="p">
                    PUNCH IN
                  </Typography>
                  <Typography variant="body2" style={{color: "#02c2fc"}} component="p">
                   ON LEAVE
                  </Typography>
                  <Typography variant="body2" style={{color: "#02c2fc"}} component="p">
                    REPORT SUBMITTED
                  </Typography>
                  <Typography variant="body2" style={{color: "#02c2fc"}} component="p">
                   PROJECT COMPLETED
                  </Typography>
               </CardContent>
             </Card>
             </div>
             <br/><br/>
             
             <div className='event_div' style={{fontStyle:"initial", fontSize: "20px"}}>
                <br/>
               Events
               <div style={{paddingLeft: "5rem"}}>
               <br/>
             <div className='event_inside_div'>
             <Button style={{paddingRight: "8rem"}} >EVENTS</Button>
              <Button >DATE</Button>
              <Button  style={{paddingLeft: "8rem"}}>TIME</Button>
             </div>
             <br/>
             <div className='event_inside_div'>
             <Button style={{paddingRight: "8rem"}} >EVENTS</Button>
              <Button >DATE</Button>
              <Button  style={{paddingLeft: "8rem"}}>TIME</Button>
             </div>
             </div>
             </div>

        </div>
    
  );
}

export default Sirprofile;