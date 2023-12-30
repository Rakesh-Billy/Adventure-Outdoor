import React from 'react';
import { Provider } from 'react-redux';
 import {BrowserRouter as Router, Routes, Route, useNavigate} from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Tourgrid from './Components/Tourgrid'
import Tour1 from './Components/Tour1';
import Tour_2 from './Components/Tour_2';
import Tour_3 from './Components/Tour_3';
import Tour_4 from './Components/Tour_4';
import Tour_5 from './Components/Tour_5';
import Tour_6 from './Components/Tour_6';
import Tour_7 from './Components/Tour_7';
import Tour_8 from './Components/Tour_8';
import Tour_9 from './Components/Tour_9';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Profile from './Components/Profile';
import Contactus from './Components/Contactus';
import store from './store';
import Navuser from './Components/NavUser';
import Checkout from './Components/Checkout';
import Gallery from './Components/Gallery';
import Aboutus from './Components/Aboutus';
import Userdetails from './Components/Userdetails';

// User

import User_Home from './User_compnents/UserHome';
import User_Tourgrid from './User_compnents/UserTourgrid';
import User_Tour1 from './User_compnents/UserTour_1';
import User_Tour_2 from './User_compnents/UserTour_2';
import User_Tour_3 from './User_compnents/UserTour_3';
import User_Tour_4 from './User_compnents/UserTour_4';
import User_Tour_5 from './User_compnents/UserTour_5';
import User_Tour_6 from './User_compnents/UserTour_6';
import User_Tour_7 from './User_compnents/UserTour_7';
import User_Tour_8 from './User_compnents/UserTour_8';
import User_Tour_9 from './User_compnents/UserTour_9';
import NavAdmin from './User_compnents/NavAdmin';

function App() {
  return (
<Provider store={store}>
   <Router>
    
   <>
   
   <Routes>
    <Route exact path='/' element={<><Navbar/><Home/></>} />
   <Route exact path='/login' element={<><Navbar/><Login/></>} />
    <Route exact path='/signup' element={<><Navbar/><Signup/></> } /> 
    <Route exact path='/tours' element={<><Navbar/><Tourgrid/></> } /> 
    <Route exact path='/ananthagiri' element={<><Navbar/><Tour1/></> } /> 
    <Route exact path='/goa' element={<><Navbar/><Tour_2/></> } /> 
    <Route exact path='/coorg' element={<><Navbar/><Tour_3/></> } /> 
    <Route exact path='/ooty' element={<><Navbar/><Tour_4/></> } /> 
    <Route exact path='/kerala' element={<><Navbar/><Tour_5/></>} /> 
    <Route exact path='/rajasthan' element={<><Navbar/><Tour_6/></>} /> 
    <Route exact path='/leh' element={<><Navbar/><Tour_7/></> } /> 
    <Route exact path='/manali' element={<><Navbar/><Tour_8/></> } /> 
    <Route exact path='/meghalaya' element={<><Navbar/><Tour_9/></> } /> 
    <Route exact path='/contactus' element={<><Navbar/><Contactus/></>} /> 
    <Route exact path='/userprofile' element={<><Navbar/><Profile/></> } /> 
    <Route exact path='/checkout' element={<><Navuser/><Checkout/></> } /> 
    <Route exact path='/gallery' element={<><Navbar/><Gallery/></> } /> 
    <Route exact path='/aboutus' element={<><Navbar/><Aboutus/></> } /> 




    {/* User */}

    <Route exact path='/user_home' element={<><Navuser/><User_Home/></>} />
    {/* <Route exact path='/user_login' element={<><Navuser/><Login/></>} />
    <Route exact path='/signup' element={<><Navuser/><Signup/></> } />  */}
    <Route exact path='/user_tours' element={<><Navuser/><User_Tourgrid/></> } /> 
    <Route exact path='/user_ananthagiri' element={<><Navuser/><Tour1/></> } /> 
    <Route exact path='/user_goa' element={<><Navuser/><Tour_2/></> } /> 
    <Route exact path='/user_coorg' element={<><Navuser/><Tour_3/></> } /> 
    <Route exact path='/user_ooty' element={<><Navuser/><Tour_4/></> } /> 
    <Route exact path='/user_kerala' element={<><Navuser/><Tour_5/></>} /> 
    <Route exact path='/user_rajasthan' element={<><Navuser/><Tour_6/></>} /> 
    <Route exact path='/user_leh' element={<><Navuser/><Tour_7/></> } /> 
    <Route exact path='/user_manali' element={<><Navuser/><Tour_8/></> } /> 
    <Route exact path='/user_meghalaya' element={<><Navuser/><Tour_9/></> } /> 
    <Route exact path='/user_contactus' element={<><Navuser/><Contactus/></>} /> 
    <Route exact path='/user_userprofile' element={<><Navuser/><Profile/></> } /> 
    <Route exact path='/user_gallery' element={<><Navuser/><Gallery/></> } />  
    <Route exact path='/user_aboutus' element={<><Navuser/><Aboutus/></> } /> 


    {/* Admin */}
    <Route exact path='/admin_Home' element={<><NavAdmin/><User_Home/></> } /> 
    <Route exact path='/admin_tours' element={<><NavAdmin/><User_Tourgrid/></> } /> 
    <Route exact path='/admin_ananthagiri' element={<><NavAdmin/><Tour1/></> } /> 
    <Route exact path='/admin_goa' element={<><NavAdmin/><Tour_2/></> } /> 
    <Route exact path='/admin_coorg' element={<><NavAdmin/><Tour_3/></> } /> 
    <Route exact path='/admin_ooty' element={<><NavAdmin/><Tour_4/></> } /> 
    <Route exact path='/admin_kerala' element={<><NavAdmin/><Tour_5/></>} /> 
    <Route exact path='/admin_rajasthan' element={<><NavAdmin/><Tour_6/></>} /> 
    <Route exact path='/admin_leh' element={<><NavAdmin/><Tour_7/></> } /> 
    <Route exact path='/admin_manali' element={<><NavAdmin/><Tour_8/></> } /> 
    <Route exact path='/admin_meghalaya' element={<><NavAdmin/><Tour_9/></> } /> 
    <Route exact path='/admin_contactus' element={<><NavAdmin/><Contactus/></>} /> 
    <Route exact path='/admin_userprofile' element={<><NavAdmin/><Profile/></> } /> 
    <Route exact path='/admin_gallery' element={<><NavAdmin/><Gallery/></> } />  
    <Route exact path='/user_details' element={<><NavAdmin/><Userdetails/></> } />  
    <Route exact path='/admin_aboutus' element={<><NavAdmin/><Aboutus/></> } /> 




   
   </Routes>
   <Footer/>

   </>   

   </Router>
   </Provider>
  );
}

export default App;
