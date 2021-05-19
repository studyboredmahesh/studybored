import React from "react";
//import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { makeStyles } from '@material-ui/core/styles';
import Popup from "./Popup";
import Popmain from "./Popmain";
import './style.css';
import './Settings.css';


const useStyles = makeStyles({
  root: { 
    background: 'linear-gradient(45deg, #3742BE 30%, #02C2FC 90%)',
    border: 3,
    borderRadius: 30,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'black',
    height: 38,
    padding: '0 30px',
    
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
  width: "1200px"
  

  },
  label1: {
    height: "180px",
    width: "600px",
    left: "700px",
    border: 1,
    padding: 80,
    boxShadow: '3px 8px 6px 8px #888888',
  },
 
});

function Directmessage() {
  const classes = useStyles();
  return (
    <div className="home">
        
      <div className="container">
        <div className={classes.container} >
        <Popmain/>
        <div style={{fontFamily: "sans-serif", fontStyle: "inherit "}}>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            
            
          </div>
          
        <div class="row align-items-center my-3">
          <div class="col-lg-3">
            
          <br/><br/>
          <Button className={classes.edge} variant="outlined">GENERAL</Button><br/><br/>
          <Button className={classes.edge} variant="outlined">REPORT</Button><br/><br/>
          <Button className={classes.edge} variant="outlined">WEB DEVELOPMENT</Button><br/><br/>
          

          </div>
          
          
          </div>
          
          <Box className="report" boxShadow={2} style={{left: 250}}>
             
               <div>
                 <textarea style={{height: 150, width: 800}} > Type here</textarea>
               </div>
             <Box className="date" style={{bottom: 170}}><div className="date1">
             Tuesday, March 9th
               </div></Box>  
             </Box>
        </div>
      </div>
    </div>
  );
}

export default Directmessage;