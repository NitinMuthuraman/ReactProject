import { TextField } from "@mui/material"
import {Eye} from 'lucide-react';
import {EyeOff} from 'lucide-react';
import {useState} from'react'
import '../Assets/Signin.css'
import { Link,useNavigate } from "react-router-dom";
import { Input,InputLabel,InputAdornment } from '@mui/icons-material';
export const Signin =()=>{
    const Navigate=useNavigate 
    const[pass,setpass]=useState(true)
    // const[status,setstatus]=useState(true)
    const visib=()=>{
        setpass(!pass);
    }
    return(
        <div className="divi">
       <div id="ch2"className="division" >
            <TextField variant="outlined" label="Mail ID" className="tf" required/><br/>
            <TextField
          id="filled-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
        /><br/>
            <Link to="/signup">Don't Have an Account? Sign Up</Link><br/>
            <button className="submit">Sign In</button>
        </div>
        </div>
        )
}
   