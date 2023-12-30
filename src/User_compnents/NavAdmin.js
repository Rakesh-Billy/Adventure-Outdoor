import React from 'react'
import { useNavigate,Link } from 'react-router-dom';
function showAlert() {
    alert('Logged Out');
  }

function NavAdmin() {
  return (
    <nav className="navbar fixed-top navbar-expand-lg" style={{ backgroundColor: '#54bce4' }}>
    <div className="container-fluid">
      <Link className="navbar-brand" to='/admin_Home' style={{ fontSize: '25px' }}>
        <img src="LogoMain.jpg.png" alt="Logo" width="" height="40" className="d-inline-block align-text-top" />
      </Link>
      {/* <Link className="navbar-brand" to='/' style={{ fontSize: '25px' }}>
        <img src="LogoMain.jpg.png" alt="Logo" width="" height="40" marginLeft="30px" className="d-inline-block align-text-top" />
      </Link> */}
      {/* <p>assa</p> */}
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
              <Link className="nav-link active" aria-current="page" to='/admin_Home'>
                Home
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link active" to='/admin_userprofile'>
                My Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to='/admin_tours'>
                Tours
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                About Us
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link to='/admin_aboutus' className="dropdown-item" >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to='/admin_gallery'>
                    Gallery
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link to='/admin_contactus' className="dropdown-item" href="#">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </li>
            
          </ul>
        </div>
      </form>
      <form className="d-flex" role="search">
      <Link to='/user_details' className="login"  >
<button style={{  border: 'none',borderRadius: '5px',  backgroundColor: '#228b22',  color: 'white',  fontSize: '20px',  height: '40px',  width: '100px', marginRight:'10px'}}  > Admin</button></Link>
        <Link to='/' className="login"  >
          <button style={{  border: 'none',borderRadius: '5px',  backgroundColor: '#e7272d',  color: 'white',  fontSize: '20px',  height: '40px',  width: '100px', marginRight:'0px'}} onClick={showAlert}>Logout</button>
        </Link>
      </form>
    </div>
  </nav>  )
}

export default NavAdmin