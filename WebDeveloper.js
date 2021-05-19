import React from "react";
//import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #3742BE 30%, #02C2FC 90%)',
    border: 0,
    borderRadius: 30,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 32,
    padding: '0 30px',
  },
  edge: {

    borderWidth: "1px",
    borderRadius: 30,
    color: '#02c2fc',
    borderColor:  '#02c2fc',
    width: 190,
    
  },
  container: {
    position: "relative",
    marginRight: "50px"
  }
});
function WebDeveloper() {
  const classes = useStyles();
  return (
    <div className="home">
        
      <div class="container" >
      <div >
          
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            PROFILE
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <img width="35px" height="35px"src={"./bell_blue.png"} />&nbsp;&nbsp;
            <img width="35px" height="35px"src={"./image.png"} />&nbsp;&nbsp;
            <img width="35px" height="35px"src={"./setting.png"} />&nbsp;&nbsp;
            </div>
        <div class="row align-items-center my-3">
            
          <div class="col-lg-3">
          <br/><br/>
          <Button className={classes.edge} variant="outlined" >GENERAL</Button><br/><br/>
          <Button className={classes.edge} variant="outlined" >REPORT</Button><br/><br/>
          <Button className={classes.edge} variant="outlined" >WEB DEVELOPMENT</Button><br/><br/>
          
          </div>
          <div className={classes.container} >
        <div>
            
        
          <Avatar aria-label="recipe" style={{backgroundColor: "#FF0000"}}>
            M
          </Avatar>
        
        <label>MEGHA</label><br/>
        <label>WEB DEVELOPER </label><br/>
        <label>EMPLOY ID</label><br/>
        <label>EMAIL ID</label>
        </div>
    
          </div>
          <div class="col-lg-8 left:50% align-center " style={{left: 300 }}>
            <br/> <br/>
          
          <Button className={classes.edge} variant="outlined" >PUNCH IN</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Button className={classes.root}>PUNCH OUT</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Button className={classes.edge} variant="outlined" >LEAVE</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </div>
        </div>
      </div>
    </div>
  );
}

export default WebDeveloper;