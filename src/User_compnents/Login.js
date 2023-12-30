import React from 'react'
import axios from 'axios'
import { useState,useEffect,useRef } from 'react'
import styles from './login.module.css'
import { Link, useNavigate } from 'react-router-dom'

function Login() {

    const [e_mail, setE_mail] = useState('');
    const [key, setKey] = useState('');
    const navigate = useNavigate();

    

    const login=async(event)=>{
      event.preventDefault();
      setE_mail("");
      setKey("")

      try{
        const response=await axios.get(`http://localhost:5005/login/${e_mail}/${key}`,{
            e_mail,
            key
        })
        if(response.data.message==="1 document found"){
            alert("Login Successful.");

            navigate('/user');

        }
        else{
            alert("Login Unsuccessful.")
        }  
        }
        catch(e){
            console.log(e)
        }
      }

  return (
    <div className= {styles.cont}  >
    <main>
        <div className={styles.form}>
            <h1 style={{ color: '#061a3a', fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif", fontSize: '40px', textAlign: 'center', marginBottom: '20px' }}>LOGIN</h1>
            <h2>Enter Your Details</h2>
            <form action="#" method="post" onSubmit={login}>
                <div className={styles.grp}>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={e_mail} onChange={(e) =>setE_mail(e.target.value)}  style={{ fontSize: '15px' }} placeholder="your-email@gmail.com" required />
                </div>
                <div className={styles.grp}>
                 <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" placeholder="Your Password" value={key} onChange={(e) =>setKey(e.target.value)} style={{ fontSize: '15px' }} required />
                </div>
                <div className={styles.checkbox}>
                    <input type="checkbox" id="agree" name="agree"  />
                    <label htmlFor="agree">&nbsp;Remember me</label>
                    <a href="">Forgot Password?</a>
                </div>
                <br />
                <button type="submit">Login</button>
                <br />
                <br />
                <label htmlFor="terms">Don't have an account? <Link style={{ textDecoration: 'dashed' }} to='/signup'>Signup now</Link></label>
            </form>
        </div>
    </main>
</div>
  )
}

export default Login