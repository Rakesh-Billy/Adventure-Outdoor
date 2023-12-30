import React from 'react'
import axios from 'axios'
import { useState,useEffect,useRef } from 'react'
import styles from './contactus.module.css'
import { Link } from 'react-router-dom'

function Contactus() {

  return (
    <div className= {styles.cont}  >
    <main>
        <div className={styles.form}>
            <h1 style={{ color: '#061a3a', fontFamily: "'myfont',  sans-serif", fontSize: '30px', textAlign: 'center', fontWeight: 'bold', marginBottom: '20px' }}>Request a Call Back</h1>
            
            <form action="#" method="post" >
                <div className={styles.grp}>
                    <input type="email" id="email" name="email" style={{ fontSize: '15px' }} placeholder="Name" required />
                </div>
                <div className={styles.grp}>
                    <input type="password" id="password" name="password" placeholder="E-Mail"  style={{ fontSize: '15px' }} required />
                </div>
                <div className={styles.grp}>
                    <input type="password" id="password" name="password" placeholder="Phone Number"  style={{ fontSize: '15px' }} required />
                </div>
                <div className={styles.grp}>
                    <input type="password" id="password" name="password" placeholder="Message"  style={{ fontSize: '15px' }} required />
                </div>
                
                
                <button type="submit" >SEND</button>
                <br />
                
            </form>
        </div>
    </main>
</div>
  )
}

export default Contactus