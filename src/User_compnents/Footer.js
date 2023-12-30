import React from 'react'
import "./footer.css"

function Footer() {
  return (

       <>
       <div className='footer'>
       <div className="f1">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-3">
                            <img src="LogoMain.jpg.png" alt="" />
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            <h1>GET IN TOUCH</h1>
                            <p>
                                <i className="fa-solid fa-location-dot" style={{ color: '#061a3a' }}></i> Address :- 5th Floor, Nexus Mall,<br />
                                &nbsp; &nbsp; Kukatpally, Hyderabad,<br />
                                &nbsp; &nbsp; T.G, India
                            </p>
                            <p><i className="fa-solid fa-phone" style={{ color: '#061a3a' }}></i> +91 9604041056</p>
                            <p><i className="fa-solid fa-envelope" style={{ color: '#061a3a' }}></i> adventureoutdoor@gmail.com</p>
                        </div>
                        <div className="col-12 col-md-0 col-lg-3">
                            <h1>ABOUT US</h1>
                            <p>About Us</p>
                            <p>Blog</p>
                            <p>Reviews</p>
                            <p>Contact Us</p>
                        </div>
                        <div className="col-12 col-md-0 col-lg-3">
                            <h1> GET SOCIAL</h1>
                            <p>Keep up-to-date with all the latest and breaking social media news. There are lots of exciting things happening this year.</p>
                            <span>
                                <i className="fa-brands fa-twitter" style={{ color: '#ffffff' }}></i>
                                <i className="fa-brands fa-facebook" style={{ color: '#ffffff' }}></i>
                                <i className="fa-brands fa-youtube" style={{ color: '#ffffff' }}></i>
                                <i className="fa-brands fa-instagram"></i>
                                <i className="fa-brands fa-google-plus-g"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

       </div>

       
        </> 



 );
}

export default Footer