import React from 'react'
import { useNavigate,Link } from 'react-router-dom';
// import './Navbar.css'

function showAlert() {
    alert('Logged Out');
  }

function Navuser() {
  return (
    <nav className="navbar fixed-top navbar-expand-lg" style={{ backgroundColor: '#54bce4' }}>
    <div className="container-fluid">
      <Link className="navbar-brand" to='/user_home' style={{ fontSize: '25px' }}>
        <img src="LogoMain.jpg.png" alt="Logo" width="" height="40" className="d-inline-block align-text-top" />
      </Link>
      <form className="d-flex" role="search">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item" style={{marginLeft:'120px'}}>
              <Link className="nav-link active" aria-current="page" to='/user_home'>
                Home
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link active" to='/user_userprofile'>
                My Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to='/user_tours'>
                Tours
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                About Us
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link to='/user_aboutus' className="dropdown-item" >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to='/user_gallery' className="dropdown-item" >
                    Gallery
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link to='/user_contactus' className="dropdown-item" >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </li>
            
          </ul>
        </div>
      </form>
      <form className="d-flex" role="search">
        <Link to='/' className="login"  >
          <button style={{  border: 'none',borderRadius: '5px',  backgroundColor: '#e7272d',  color: 'white',  fontSize: '20px',  height: '40px',  width: '100px', marginRight:'0px'}} onClick={showAlert}>Logout</button>
        </Link>
      </form>
    </div>
  </nav>
  )
}

export default Navuser