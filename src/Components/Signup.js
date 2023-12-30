import React, { useState } from 'react'
import axios from 'axios';
import style from "./Signup.module.css"
import { Link } from 'react-router-dom'


function Signup() {

    const [firstname, setFirtsname] = useState('');
    const [lastname, setLastname] = useState('');
    const [e_mail, setE_mail] = useState('');
    const [ph_no, setPh_no] = useState('');
    const [key, setKey] = useState('');
    
    
    const handleRegister = async (event) => {
    event.preventDefault();
    setFirtsname("");
    setLastname("");
    setE_mail("");
  
    setPh_no("");
    setKey("")
    
    try {
    const response = await axios.post('http://localhost:5005/insert1', {
    firstname,
    lastname,
    e_mail,
    ph_no,
    key
    });
    
    
    if (response.data.message === '1 document inserted') {
    alert('Registration successful');
    } else {
    alert('Registration failed');
    }
    } catch (error) {
    console.error(error);
    }
    };
  

  return (
    <div className={style.container}>
    <main onSubmit={handleRegister}>
        <div className={style.form_container}>
            <h1 style={{ color: '#061a3a', fontFamily: 'Franklin Gothic Medium, Arial Narrow, Arial, sans-serif', fontSize: '40px', textAlign: 'center' }}> SIGN UP</h1>
            <h2>Add Your Details</h2>
            <form action="#" method="post">
                <div className={style.form_group}>
                    <label htmlFor="fname">First Name:</label>
                    <input type="text" id="fname" name="fname"  value={firstname} onChange={(e) =>setFirtsname(e.target.value)}  required />
                </div>
                <div className={style.form_group}>
                    <label htmlFor="lname">Last Name:</label>
                    <input type="text" id="lname" name="lname"  value={lastname} onChange={(e) =>setLastname(e.target.value)} required />
                </div>
                <div className={style.form_group}>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={e_mail} onChange={(e) =>setE_mail(e.target.value)}  required />
                </div>
                <div className={style.form_group}>
                    <label htmlFor="mobile">Mobile Number:</label>
                    <input type="text" id="mobile" name="mobile" value={ph_no} onChange={(e) =>setPh_no(e.target.value)} required />
                </div>
                <div className={style.form_group}>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password"  value={key} onChange={(e) =>setKey(e.target.value)} required />
                </div>
                <div className={style.checkbox_container} style={{ marginTop: '20px', marginBottom: '20px' }}>
                    <input type="checkbox" id="agree" name="agree" />
                    <label htmlFor="agree"> &nbsp;I agree to receive promotional communication.</label>
                </div>
                <button type="submit">Sign Up</button>
                <br />
                <br />
                <label htmlFor="terms">Already Have an account? <Link style={{ textDecoration: 'dashed' }} to='/login'>Login now</Link></label>
            </form>
        </div>
    </main>
</div>  )
}

export default Signup