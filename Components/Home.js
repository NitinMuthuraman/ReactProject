import * as React from 'react';
import { Link } from 'react-router-dom';
import { Signin } from './Signin';
import { Signup } from './Signup';
import '../Assets/Home.css';
// const CustomLink = ({ to, children, className }) => (
//   <Link to={to} className={className}>
//     {children}
//   </Link>
// );
export const Home=()=>{
  return (
    <div className="navbar">
      <div className='navbar-left'>
          <h1>Digital Markteing Agency</h1>
      </div>
      <div className="navbar-right">
      <Link to="/" className="custom-link">Home</Link>
      <Link to="/signin" className="custom-link">Sign in</Link>
      <Link to="/signup"className="custom-link">Signup</Link>
      </div>
    </div>
  )
}
