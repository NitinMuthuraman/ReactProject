import '../Assets/Signin.css'
import { TextField } from "@mui/material"
import { Link } from 'react-router-dom';
import React from 'react';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
export const Signup=()=>{
    return(
        <div className="divi">
        <div id="ch1" className="division">
        <TextField variant="outlined" id="standard-adornment-password"label="Website Address" required/><br/>
            <TextField variant="outlined" id="standard-adornment-password" label="Your Name" className="tf" required/><br/>
            <TextField variant="outlined" label="Mail ID" id="standard-adornment-password" required/><br/>
            <TextField variant="outlined" label="Contact Number"  required/><br/>
            <TextField
          id="filled-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
        />
            <Link to="/signin ">Already An User? Sign in</Link>
            <button className="submit">Sign Up</button>
            </div>      
        </div>
        
    )
}
