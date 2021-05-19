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


const useStyles = makeStyles({
  root: { 
    background: 'linear-gradient(45deg, #3742BE 30%, #02C2FC 90%)',
    border: 3,
    borderRadius: 30,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 38,
    width: 200,
    padding: '0 30px',
    
  },
  punch: { 
    background: 'linear-gradient(45deg, #3742BE 30%, #02C2FC 90%)',
    border: 3,
    borderRadius: 30,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 38,
    width: 140,
    padding: '0 30px',
    
  },
  punch2: {

    borderWidth: "1px",
    borderRadius: 30,
    color: '#02c2fc',
    borderColor:  '#02c2fc',
    width: 140,
    
  },
  edge: {

    borderWidth: "1px",
    borderRadius: 30,
    color: '#02c2fc',
    borderColor:  '#02c2fc',
    width: 200,
    
  },
  container: {
    
  border: 1,
  padding: 80,
  boxShadow: '3px 8px 6px 8px #888888',
  height: "620px",
  width: "1200px",
  top: 0,
  

  },
  label1: {
    height: "200px",
    width: "500px",
    border: 1,
    padding: 80,
    boxShadow: '3px 8px 6px 8px #888888',
  },
 
});

function ProjectComp() {
  const classes = useStyles();
  return (
    <div className="home">
        
      <div className="container" style={{top: 0}}>
        <div className={classes.container}>
        
        <div style={{fontFamily: "sans-serif", fontStyle: "inherit "}}>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            
            
        
          </div>
          
          
        <div class="row align-items-center my-3" >
        <Punchbar/>
          <div class="col-lg-3">
           
          
          <Button className={classes.edge} variant="outlined">GENERAL</Button><br/><br/>
          <Button className={classes.root} variant="outlined">JOSEPH VARGHESE</Button><br/><br/>
          <Button className={classes.root} variant="outlined">AISWARYA</Button><br/><br/>
          <Button className={classes.edge} variant="outlined">WEB DEVELOPMENT</Button><br/><br/>
          <Button className={classes.edge} variant="outlined">DATA ANALYST</Button><br/><br/>
          

          </div>
          
          <div class="col-lg-5">
          
          <div style={{fontFamily: "sans-serif", fontStyle: "inherit "}}>
           
          </div>
          
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
            <div className='date' >
               <h6>DECEMBER 2020</h6>
               <div style={{width: 300}}>
               Sun &nbsp;&nbsp; Mon&nbsp;&nbsp; Tue&nbsp;&nbsp; Wed&nbsp;&nbsp; Thu&nbsp;&nbsp; Fri&nbsp;&nbsp; Sat<br/>
               &nbsp;&nbsp; 1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 6&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 7
               </div>
               
             </div>
             <br/><br/>
             
             <div className={classes.label1}>
             &nbsp;&nbsp;&nbsp;
                <Button className={classes.punch} variant="outlined">PUNCH IN</Button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Button className={classes.punch2} variant="outlined">PUNCH OUT</Button>

                

             </div>
          
          </div>
          </div>
          
          
          
        </div>
      </div>
    </div>
    //<Popup trigger={<button> Trigger</button>} position="right center">
    //<div style={{height: 189, width: 200}}>Popup content here !!
      //  <Button>Hello</Button>
    //</div>
//</Popup>
  );
}

export default ProjectComp;