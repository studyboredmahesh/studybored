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




function ProjectComp() {
  
  return (
   <div className='main_div'>
          <Punchbar/>
        <div className='side_bar'>
        
           
          
           <Button className='root_edge' variant="outlined">GENERAL</Button><br/><br/>
           <Button className='root' variant="outlined" >JOSEPH VARGHESE</Button><br/><br/>
           <Button className='root' variant="outlined" >AISWARYA</Button><br/><br/>
           <Button className='root_edge' variant="outlined" >WEB DEVELOPMENT</Button><br/><br/>
           <Button className='root_edge' variant="outlined" >DATA ANALYST</Button><br/><br/>
        </div>
        
          
        <div className='profile_card'>
      <Card style={{maxWidth: 300}}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" style={{backgroundColor: "#FF0000"}}>
            J
          </Avatar>
        }
        
        title="JOSEPH VARGHESE"
        subheader="PROJECT MANAGER"
      />
      
      <CardContent>
        <Typography variant="body2" style={{color: "#02c2fc"}} component="p">
          In
        </Typography>
        <Typography variant="body2" style={{color: "#02c2fc"}} component="p">
          Out
        </Typography>
      </CardContent>
    </Card>
     
    </div>
            <div className='date_div' >
              <div className='date_inside'>
              <br/>
               <h6>DECEMBER 2020</h6>
               <div style={{width: 300}}>
               Sun &nbsp;&nbsp; Mon&nbsp;&nbsp; Tue&nbsp;&nbsp; Wed&nbsp;&nbsp; Thu&nbsp;&nbsp; Fri&nbsp;&nbsp; Sat<br/>
               &nbsp;&nbsp; 1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 6&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 7
               </div>
               <div>
               &nbsp;&nbsp;&nbsp;&nbsp;
               <Button style={{color: '#02C2FC'}} >PUNCH IN</Button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Button style={{color: 'black'}} >PUNCH OUT</Button>
               </div>

               <div className='date_card'>&nbsp;&nbsp;
               <img style={{borderRadius: "50%"}} width="35px" height="35px"src={"./profilepic.jpg"}  />&nbsp;&nbsp;
                 <h6 style={{display: "inline"}}>AISWARYA DAS</h6><br/>&nbsp;
                 <text style={{position: "relative", right:"0rem"}}>HR Manager</text>
                 <text style={{position: "relative", left: "8rem"}}>10:30 AM</text>
               </div>
               <div className='date_card'>&nbsp;&nbsp;
               <img style={{borderRadius: "50%"}} width="35px" height="35px"src={"./profilepic.jpg"} />&nbsp;&nbsp;
                 <h6 style={{display: "inline"}}>ALEN</h6><br/>&nbsp;
                 <text style={{position: "relative", right:"0rem"}}>Data Analyst</text>
                 <text style={{position: "relative", left: "8rem"}}>10:20 AM</text>
               </div>
               <div className='date_card'>&nbsp;&nbsp;
               <img style={{borderRadius: "50%"}} width="35px" height="35px"src={"./profilepic.jpg"} />&nbsp;&nbsp;
                 <h6 style={{display: "inline"}}>PARVATHY</h6><br/>&nbsp;
                 <text style={{position: "relative", right:"0rem"}}>Data Analyst</text>
                 <text style={{position: "relative", left: "8rem"}}>10:24 AM</text>
               </div>
               <div className='date_card'>&nbsp;&nbsp;
               <img style={{borderRadius: "50%"}} width="35px" height="35px"src={"./profilepic.jpg"} />&nbsp;&nbsp;
                 <h6 style={{display: "inline"}}>SRUTHY</h6><br/>&nbsp;
                 <text style={{position: "relative", right:"0rem"}}>DME</text>
                 <text style={{position: "relative", left: "11.5rem"}}>10:03 AM</text>
               </div>
               <div className='date_card'>&nbsp;&nbsp;
               <img style={{borderRadius: "50%"}} width="35px" height="35px"src={"./profilepic.jpg"} />&nbsp;&nbsp;
                 <h6 style={{display: "inline"}}>SRUTHY</h6><br/>&nbsp;
                 <text style={{position: "relative", right:"0rem"}}>Android Developer</text>
                 <text style={{position: "relative", left: "5.3rem"}}>10:17AM</text>
               </div>
               <div className='date_card'>&nbsp;&nbsp;
               <img style={{borderRadius: "50%"}} width="35px" height="35px"src={"./profilepic.jpg"} />&nbsp;&nbsp;
                 <h6 style={{display: "inline"}}>SRUTHY</h6> <br/>&nbsp;
                 <text style={{position: "relative", right:"0rem"}}>Web Developer</text>
                 <text style={{position: "relative", left: "7rem"}}>10:19 AM</text>
               </div>
               </div>
             </div>
             <br/><br/>
             
             <div className='punching_div'>
             &nbsp;&nbsp;&nbsp;
                <Button className='root1' variant="outlined"  >PUNCH IN</Button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Button className='root2' variant="outlined" >PUNCH OUT</Button>
             </div>
        </div>
    
  );
}

export default ProjectComp;