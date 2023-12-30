import React from 'react'
import "./profile.css"

function Profile() {
  return (
    <div className='profile_background'>
      <main>
      <div className='container_profile'>
<div className="container">
      <div className="main_body_profile">
        <div className="row gutters-sm">
          <div className="col-md-4 mb-3">
            <div className='card_profile'>
            <div className="card card123" style={{width: '250px',height:'355px', marginRight: '200px'}}>
              <div className="card-body">
                <div className="d-flex flex-column align-items-center text-center">
                  <img src="Images/avatar.png" alt="Admin" className="rounded-circle" width="150" />
                  <div className="mt-3">
                    <h4>Rakesh Billy</h4>
                    <p className="text-secondary mb-1">Traveller</p>
                    <p className="text-muted font-size-sm">Hyderabad, Telangana, IND.</p>
                  </div>
                </div>
              </div>
            </div>
            </div>
            
          </div>
          <div className="col-md-8">
          <div className='card_profile'>
          <div className="card card_details">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Full Name</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    Rakesh Billy
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Email</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    rakeshbilly@gmail.com
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Phone</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    +91 7095851164
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Mobile</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    +91 7095851164
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Address</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                  Hyderabad, Telangana, IND.
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-12">
                    <a className="btn btn-info" target="__blank" href="https://www.bootdey.com/snippets/view/profile-edit-data-and-skills">Edit</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

            
          </div>
        </div>
      </div>
    </div>  
    </div>
      </main>

    </div>
    
    )
    
}

export default Profile