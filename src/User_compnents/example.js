import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../NavabarMain/Navabar';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBRow,
  MDBInput,
  MDBCheckbox,
  MDBIcon
}
from 'mdb-react-ui-kit';

function Login() {
  const[name,setName]=useState("");
  const[password,setPassword]=useState("");
  const[email,setEmail]=useState("");
  const navigate = useNavigate();
  const login=async(event)=>{
    event.preventDefault();
    setName("");
    setEmail("");
    setPassword("");

    try{
      const response=await axios.get(http://localhost:3008/LoginData/${name}/${email}/${password},{
          name,
          email,
          password,
          
      })
      if(response.data.message==="1 document found"){
        navigate('/recipes');
       
    }
    else if(response.data.message==="owner found"){
      navigate('/adminNav');

    } 
      else{
          alert("login not succeful")
      } 
    }
      catch(e){
          console.log(e)
      }
    }
    
  return (
    <>
    {/* <div style={{position:"absolute",position:"fixed", width:"1450px",zIndex:3}}> */}
   {/* <Navbar></Navbar> */}
   {/* </div> */}
    <form action='' onSubmit={login}>
    <MDBContainer fluid>
      
      <div className="p-5 bg-image" style={{backgroundImage: 'url(https://st3.depositphotos.com/1585301/15175/i/450/depositphotos_151757568-stock-photo-herbs-and-spices-at-table.jpg)', height: '300px',backgroundRepeat:'no-repeat',backgroundSize:'cover'}}></div>

      <MDBCard className='mx-5 mb-5 p-5 shadow-5' style={{marginTop: '-100px', background: 'hsla(0, 0%, 100%, 0.8)', backdropFilter: 'blur(30px)'}}>
        <MDBCardBody className='p-5 text-center'>

          <h2 className="fw-bold mb-5">Sign up now</h2>

          <MDBRow>
            <MDBCol col='6'>
              <MDBInput wrapperClass='mb-4' label='First name' id='form1' type='text' required onChange={(e)=>setName(e.target.value)} value={name}/>
            </MDBCol>
          </MDBRow>

          <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email' required onChange={(e)=>setEmail(e.target.value)} value={email}/>
          <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password' required onChange={(e)=>setPassword(e.target.value)} value={password}/>

          <div className='d-flex justify-content-center mb-4'>
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' required />
          </div>

          <MDBBtn className='w-100 mb-4' size='md'>sign in</MDBBtn>

          <div className="text-center">

            <p>or sign up with:</p>

            <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
              <MDBIcon fab icon='facebook-f' size="sm"/>
            </MDBBtn>

            <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
              <MDBIcon fab icon='twitter' size="sm"/>
            </MDBBtn>

            <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
              <MDBIcon fab icon='google' size="sm"/>
            </MDBBtn>

            <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
              <MDBIcon fab icon='github' size="sm"/>
            </MDBBtn>

          </div>

        </MDBCardBody>
      </MDBCard>

    </MDBContainer>
    </form>
    </>
  );
}

export default Login;
