
import { Routes,Route } from 'react-router-dom';
import { Signin } from './Components/Signin';
import { Signup } from './Components/Signup';
import { Home } from './Components/Home';
import './Assets/Home.css'
import { HomeAfterSignin } from './Components/HomeAfterSignin'; 
import AnalyticsPage from './Components/Analytics';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<HomeAfterSignin/>}/>
        <Route path='/Signin' element={<Signin/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/analytics' element={<AnalyticsPage/>}/>
        <Route path='/footer' element={<Footer/>}/>
      </Routes>
    </div>
  );
}

export default App;
