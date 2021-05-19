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
import { Checkbox } from "@material-ui/core";




function Login() {
  
  return (
    <div className="main_div2">
    <div className='main_divs'>
    <div className='log_back'>
          Hello world
    </div>
     <div className='login_main'>
     <img style={{alignContent: 'center', alignItems:'center'}} width="130px" height="50px"src={"./Logo_studybored.png"} />
         <br/><br/><Button>Login</Button>
         <Button> Sign Up</Button> <br/>
         <input type="text" placeholder="User name" /> <br/> <br/>
         <input type="text" placeholder="Password"/>
         <br/><Button style={{left:"20%"}}>Forgot Password</Button><br/>
         <Checkbox/><Typography>Remember me</Typography><br/>
         <Button className='root'>Login</Button> <br/>
    </div>
    </div>
    </div>
  );
}

export default Login;