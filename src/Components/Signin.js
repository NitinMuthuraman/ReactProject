import { TextField } from "@mui/material"
import '../Assets/Signin.css'
import { Link,useNavigate } from "react-router-dom";
export const Signin =()=>{
    const navigate=useNavigate();
    
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
            <button className="submit" onClick={()=>navigate('/home')}>Sign In</button>
        </div>
        </div>
        )
}
   