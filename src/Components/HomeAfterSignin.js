import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Popover, Button, AppBar, Toolbar, IconButton} from '@mui/material';
import '../Assets/Home.css';
import image1 from '../Components/pngwing.com.png';
import Avatar from '@mui/material/Avatar';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
export const HomeAfterSignin=()=>{
  useEffect(()=>{
    document.title='Home';
  })
  const navigate=useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorEl2, setAnchorEl2] = useState(null);
  const [anchorEli, setAnchorEli] = useState(null);
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClick12 = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  const openmenu = (event) => {
    setAnchorEli(event.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClose1 = () => {
    setAnchorEl2(null);
  };
  const closemenu = () => {
    setAnchorEli(null);
  };
  const open = Boolean(anchorEl);
  const open1 = Boolean(anchorEl2);
  const open2 = Boolean(anchorEli);
  return (
    <div className='homepage'>
    <AppBar position="static">
      <Toolbar style={{ justifyContent: 'space-between' ,backgroundColor:'#333'}}>
          <h1>Digital Markteing Agency</h1>
      <div className='btn'>
      <Button
        sx={{borderRadius:'10px',backgroundColor:'transparent',color:'white','&:hover':{backgroundColor:'white',color:'black'}}}
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={()=>navigate('/analytics')}
          style={{ textTransform: 'none',cursor:'pointer' }}
          >
          Analytics
        </Button>
      <Button
        sx={{borderRadius:'10px',backgroundColor:'transparent',color:'white','&:hover':{backgroundColor:'white',color:'black'}}}
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
          // onMouseOver={handleClick}
          style={{ textTransform: 'none',cursor:'pointer' }}
          >
          Solutions
        </Button>
        <Popover
        id="grid-menu"
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
            vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        style={{ marginTop:'08px'}}
        >
         <div className='navbarele'onMouseLeave={handleClose} >
            <div className='one1'>
                <h2>By use case</h2> 
                <div>
                  <b>Manage Social Media</b>
                  <p>Bolster your marketing effects with intutive,assistive tools</p>
                  </div> 
                <div>
                  <b>Gather Intelligence</b>
                  <p>Distill large-scale data into actionable insights to inform your social strategy</p>
                  </div> 
                <div>
                  <b>Personalize customer care</b>
                  <p>Create positive brand experiences with quick, tailored responsess</p>
                  </div> 
            </div>
            <div className='one1'> 
                <div>
                  <b>Drive more sales</b>
                  <p>Sell more efficiently with product and customer information in one place</p>
                  </div> 
                <div>
                  <b>Amplify brand awareness</b>
                  <p>Maximize the impact and reach of your social efforts to drive better results</p>
                  </div> 
            </div>
            <div className='one1'>
                <h2>By Service</h2>
                <h4>Enterprise</h4>
                <h4>Professional Service</h4>
                <h4>Agencies</h4>
            </div>
         </div>
      </Popover>
      <Button
        sx={{borderRadius:'10px',backgroundColor:'transparent',color:'white','&:hover':{backgroundColor:'white',color:'black'}}}
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick12}
          // onMouseOver={handleClick12}
          style={{ textTransform: 'none' ,cursor:'pointer'}}
          >
          Resources
        </Button>
        <Popover
        id="grid-menu"
        open={open1}
        anchorEl={anchorEl}
        onClose={handleClose1}
        anchorOrigin={{
            vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right ',
        }}
        style={{ marginTop:'08px'}}
        >
         <div className='navbarele' onMouseLeave={handleClose1}>
            <div className='one1'>
                <h2>Learn</h2> 
                <div>
                  <b>Blog</b>
                  <p>Explore social media tips, best practices and strategic guidance</p>
                  </div> 
                <div>
                  <b>Certification Program</b>
                  <p>Become an expert in the Sprout platform with specialized courses</p>
                  </div> 
                <div>
                  <b>Case Studies</b>
                  <p>Discover the tangible results customers received by partnering with Sprout</p>
                  </div> 
            </div>
            <div className='one1'> 
            <h2>Connect</h2> 
                <div>
                  <b>Community</b>
                  <p>Connect and grow with other professionals in The Arboretum, Sprout’s online forum</p>
                  </div> 
                <div>
                  <b>Webinars</b>
                  <p>Learn how to improve your social media efforts on demand</p>
                  </div> 
                <div>
                  <b>Events</b>
                  <p>Meet Sprout in person at meetups, conferences and events around the world</p>
                  </div> 
            </div>
            <div className='one1'>
                <h2>Product Resources</h2>
                <div>
                  <b>Product Updates</b>
                  <p>Keep up to date with new feature releases and improvements across the platformx</p>
                  </div> 
                <div>
                  <b>Learning portal</b>
                  <p>Explore on-demand courses to help you get the most from Sprout</p>
                  </div> 
                <div>
                  <b>Help Center</b>
                  <p>Get step-by-step product walkthroughs and feature breakdowns</p>
                  </div> 
                  </div>
            </div>
        </Popover>
        <div>
          <IconButton onClick={openmenu}>
          <Avatar src="/broken-image.jpg" />
          </IconButton>
          <Popover
        open={open2}
        anchorEl={anchorEli}
        onClose={closemenu}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
         This is Your Profile
        </Popover>
        </div>
      </div>
      </Toolbar>
    </AppBar>
    <div className='Container2'>
    <div className='item1'>
      <p>
        <h1>Empower Your<br></br> Brand's Impact <br></br>with a strategic <br></br>Social Presence<br></br></h1>
        <h6>In the digital agora, where conversations never sleep, our social management app is your vigilant guardian, ensuring your brand is heard.</h6>
      </p>
    </div>
    <div className='item2'>
    <img src={image1}/>
  </div>
  </div>
  <Footer/>
  </div>
  );
};
