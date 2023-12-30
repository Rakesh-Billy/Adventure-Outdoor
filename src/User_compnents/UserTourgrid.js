import React from 'react'
import style from "./tourgrid.module.css"
import { Link } from 'react-router-dom'

function User_Tourgrid() {
  return (
    <div>
      <div className={style.main1}>
        <p style={{ fontSize: '60px', fontFamily: 'Playfair Display', fontWeight: 900, color: '#ffffff', textAlign: 'center', marginBottom: '0px' }}>Tours Grid</p><br />
        <p style={{ fontSize: '18px', fontFamily: 'myfont', fontWeight: 500, color: '#ffffff', textAlign: 'center', marginTop: '0px' }}>Discover your next adventure</p><br />
      </div>

      <section id="deals">
        <div className={style.main}>
          <p style={{ fontSize: '50px', lineHeight: '60px', fontFamily: 'Playfair Display', fontWeight: 900, color: '#061a3a', textAlign: 'center' }}>Choose Your Next Adventure</p>
          
          <div className={style.main2}>
                  <div className="container">
                    <div className="row">
                      <div className="col-12 col-md-6 col-lg-4">
                        <div className="card" style={{ width: '20rem',margin:'20px auto' }}>
                          <img src="Images/ananthagiri.png" className="card-img-top" alt="..." />
                          <div className="card-body">
                            <h1 className="card-title">Ananthagiri Hills</h1>
                            <p><p1>₹ 1350.00</p1> <s>₹ 1600.00</s> / Per person</p>
                            <ul className="info clearfix" style={{position: 'relative',display: 'block',background: '#f5f7f8', padding: '10px 10px 9px 14px',  borderRadius: '5px',  marginBottom: '22px',}}>
                              <li><i className="far fa-clock"></i>1Night - 2Days</li>
                              <li><i className="far fa-map"></i>
                                Hyderabad
                              </li>
                            </ul>
                            <p style={{ textAlign: 'justify' }}>Coorg & Chikmagalur, located in the Western Ghats of Karnataka, is known for its scenic beauty, coffee plantations, trekking trails, wildlife sanctuaries, waterfalls, and historical sites.</p>
                            <div className="btn-flx" style={{display: 'flex', justifyContent: 'space-between'}}> <Link to='/user_ananthagiri' className="btn " style={{ backgroundColor: '#54bce4', color: 'white' }}>See Details&nbsp;<i className="fa fa-binoculars"></i></Link>
                              <Link to='/checkout'  className="btn " style={{ backgroundColor: '#228b22', color: 'white' }}>Book Trip&nbsp;<i className="fa fa-shopping-cart"></i></Link></div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-lg-4">
                        <div className="card" style={{ width: '20rem',margin:'20px auto' }}>
                          <img src="Images/goa.png" className="card-img-top" alt="..." />
                          <div className="card-body">
                            <h1 className="card-title">Goa</h1>
                            <p><p1>₹ 8499.00</p1> <s>₹ 9999.00</s> / Per person</p>
                            <ul className="info clearfix" style={{position: 'relative',display: 'block',background: '#f5f7f8', padding: '10px 10px 9px 14px',  borderRadius: '5px',  marginBottom: '22px',}}>
                              <li><i className="far fa-clock"></i>2Nights - 3Days</li>
                              <li><i className="far fa-map"></i>
                                Hyderabad, Bangalore
                              </li>
                            </ul>
                            <p style={{ textAlign: 'justify' }}>One of the most adored hill stations of Tamil Nadu situated in the Nilgiri Hills of the Western Ghats of southern India, Ooty, is often visited by innumerable tourists to enjoy the peace and calm.</p>
                            <div className="btn-flx" style={{display: 'flex', justifyContent: 'space-between'}}>
                               <Link to='/user_goa' className="btn " style={{ backgroundColor: '#54bce4', color: 'white' }}>See Details&nbsp;<i className="fa fa-binoculars"></i></Link>
                              <Link to='/checkout' className="btn " style={{ backgroundColor: '#228b22', color: 'white' }}>Book Trip&nbsp;<i className="fa fa-shopping-cart"></i></Link>
                              </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-lg-4">
                        <div className="card" style={{ width: '20rem',margin:'20px auto'  }}>
                          <img src="Images/coorg.png" className="card-img-top" alt="..." />
                          <div className="card-body">
                            <h1 className="card-title">Coorg and Chilkmangulur</h1>
                            <p><p1>₹ 6999.00</p1> <s>₹ 7500.00</s> / Per person</p>
                            <ul className="info clearfix" style={{position: 'relative',display: 'block',background: '#f5f7f8', padding: '10px 10px 9px 14px',  borderRadius: '5px',  marginBottom: '22px',}}>
                              <li><i className="far fa-clock"></i>2Nights - 3Days</li>
                              <li><i className="far fa-map"></i>
                                Hyderabad, Bangalore
                              </li>
                            </ul>
                            <p style={{ textAlign: 'justify' }}>Coorg & Chikmagalur, located in the Western Ghats of Karnataka, is known for its scenic beauty, coffee plantations, trekking trails, wildlife sanctuaries, waterfalls, and historical sites.</p>
                            <div className="btn-flx" style={{display: 'flex', justifyContent: 'space-between'}}> <Link to='/user_coorg' className="btn " style={{ backgroundColor: '#54bce4', color: 'white' }}>See Details&nbsp;<i className="fa fa-binoculars"></i></Link>
                              <Link to='/checkout' className="btn " style={{ backgroundColor: '#228b22', color: 'white' }}>Book Trip&nbsp;<i className="fa fa-shopping-cart"></i></Link></div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-lg-4">
                        <div className="card" style={{ width: '20rem',margin:'20px auto' }}>
                          <img src="Images/ooty.png" className="card-img-top" alt="..." />
                          <div className="card-body">
                            <h1 className="card-title">Ooty Kodaikanal</h1>
                            <p><p1>₹ 7999.00</p1> <s>₹ 8500.00</s> / Per person</p>
                            <ul className="info clearfix" style={{position: 'relative',display: 'block',background: '#f5f7f8', padding: '10px 10px 9px 14px',  borderRadius: '5px',  marginBottom: '22px',}}>
                              <li><i className="far fa-clock"></i>3Nights - 4Days</li>
                              <li><i className="far fa-map"></i>
                                Hyderabad, Chennai
                              </li>
                            </ul>
                            <p style={{ textAlign: 'justify' }}>One of the most adored hill stations of Tamil Nadu situated in the Nilgiri Hills of the Western Ghats of southern India, Ooty, is often visited by innumerable tourists to enjoy the peace and calm.</p>
                            <div className="btn-flx" style={{display: 'flex', justifyContent: 'space-between'}}> <Link to='/user_ooty' className="btn " style={{ backgroundColor: '#54bce4', color: 'white' }}>See Details&nbsp;<i className="fa fa-binoculars"></i></Link>
                              <Link to='/checkout' className="btn " style={{ backgroundColor: '#228b22', color: 'white' }}>Book Trip&nbsp;<i className="fa fa-shopping-cart"></i></Link></div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-lg-4">
                        <div className="card" style={{ width: '20rem',margin:'20px auto' }}>
                          <img src="Images/kerala.png" className="card-img-top" alt="..." />
                          <div className="card-body">
                            <h1 className="card-title">Kerala</h1>
                            <p><p1>₹ 14999.00</p1> <s>₹ 16599.00</s> / Per person</p>
                            <ul className="info clearfix" style={{position: 'relative',display: 'block',background: '#f5f7f8', padding: '10px 10px 9px 14px',  borderRadius: '5px',  marginBottom: '22px',}}>
                              <li><i className="far fa-clock"></i>4Nights - 5Days</li>
                              <li><i className="far fa-map"></i>
                                Hyderabad, Vijayawada
                              </li>
                            </ul>
                            <p style={{ textAlign: 'justify' }}>One of the most adored hill stations of Tamil Nadu situated in the Nilgiri Hills of the Western Ghats of southern India, Ooty, is often visited by innumerable tourists to enjoy the peace and calm.</p>
                            <div className="btn-flx" style={{display: 'flex', justifyContent: 'space-between'}}> <Link to='/user_kerala' className="btn " style={{ backgroundColor: '#54bce4', color: 'white' }}>See Details&nbsp;<i className="fa fa-binoculars"></i></Link>
                              <Link to='/checkout' className="btn " style={{ backgroundColor: '#228b22', color: 'white' }}>Book Trip&nbsp;<i className="fa fa-shopping-cart"></i></Link></div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-lg-4">
                        <div className="card" style={{ width: '20rem',margin:'20px auto' }}>
                          <img src="Images/Rajasthan-2.png" className="card-img-top" alt="..." />
                          <div className="card-body">
                            <h1 className="card-title">Royal Rajasthan</h1>
                            <p><p1>₹ 17999.00</p1> <s>₹ 17999.00</s> / Per person</p>
                            <ul className="info clearfix" style={{position: 'relative',display: 'block',background: '#f5f7f8', padding: '10px 10px 9px 14px',  borderRadius: '5px',  marginBottom: '22px',}}>
                              <li><i className="far fa-clock"></i>5Nights - 6Days</li>
                              <li><i className="far fa-map"></i>
                                Hyderabad, Delhi</li></ul>
                            
                            <p style={{ textAlign: 'justify' }}>The unique thing about the Ladakh terrain is that it has mountains, forests, deserts, lakes, rivers, waterfalls in one of the beautiful and dynamic geography. On a journey to the top of the world.</p>
                            <div className="btn-flx" style={{display: 'flex', justifyContent: 'space-between'}}> <Link to='/user_rajasthan' className="btn " style={{ backgroundColor: '#54bce4', color: 'white' }}>See Details&nbsp;<i className="fa fa-binoculars"></i></Link>
                              <Link to='/checkout' className="btn " style={{ backgroundColor: '#228b22', color: 'white' }}>Book Trip&nbsp;<i className="fa fa-shopping-cart"></i></Link></div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-lg-4">
                        <div className="card" style={{ width: '20rem',margin:'20px auto' }}>
                          <img src="Images/leh.png" className="card-img-top" alt="..." />
                          <div className="card-body">
                            <h1 className="card-title">Leh Ladakh</h1>
                            <p><p1>₹ 14999.00</p1> <s>₹ 15999.00</s> / Per person</p>
                            <ul className="info clearfix" style={{position: 'relative',display: 'block',background: '#f5f7f8', padding: '10px 10px 9px 14px',  borderRadius: '5px',  marginBottom: '22px',}}>
                              <li><i className="far fa-clock"></i>6Nights - 7Days</li>
                              <li><i className="far fa-map"></i>
                                Hyderabad, Delhi
                              </li>
                            </ul>
                            <p style={{ textAlign: 'justify' }}>The unique thing about the Ladakh terrain is that it has mountains, forests, deserts, lakes, rivers, waterfalls in one of the beautiful and dynamic geography. On a journey to the top of the world.</p>
                            <div className="btn-flx" style={{display: 'flex', justifyContent: 'space-between'}}> <Link to='/user_leh' className="btn " style={{ backgroundColor: '#54bce4', color: 'white' }}>See Details&nbsp;<i className="fa fa-binoculars"></i></Link>
                              <Link to='/checkout' className="btn " style={{ backgroundColor: '#228b22', color: 'white' }}>Book Trip&nbsp;<i className="fa fa-shopping-cart"></i></Link></div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-lg-4">
                        <div className="card" style={{ width: '20rem',margin:'20px auto' }}>
                          <img src="Images/manali.png" className="card-img-top" alt="..." />
                          <div className="card-body">
                            <h1 className="card-title">Manali</h1>
                            <p><p1>₹ 13999.00</p1> <s>₹ 15500.00</s> / Per person</p>
                            <ul className="info clearfix" style={{position: 'relative',display: 'block',background: '#f5f7f8', padding: '10px 10px 9px 14px',  borderRadius: '5px',  marginBottom: '22px',}}>
                              <li><i className="far fa-clock"></i>4Night - 5Days</li>
                              <li><i className="far fa-map"></i>
                                Hyderabad
                              </li>
                            </ul>
                            <p style={{ textAlign: 'justify' }}>Coorg & Chikmagalur, located in the Western Ghats of Karnataka, is known for its scenic beauty, coffee plantations, trekking trails, wildlife sanctuaries, waterfalls, and historical sites.</p>
                            <div className="btn-flx" style={{display: 'flex', justifyContent: 'space-between'}}> <Link to='/user_manali' className="btn " style={{ backgroundColor: '#54bce4', color: 'white' }}>See Details&nbsp;<i className="fa fa-binoculars"></i></Link>
                              <Link to='/checkout' className="btn " style={{ backgroundColor: '#228b22', color: 'white' }}>Book Trip&nbsp;<i className="fa fa-shopping-cart"></i></Link></div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-lg-4">
                        <div className="card" style={{ width: '20rem',margin:'20px auto' }}>
                          <img src="Images/meghalaya.png" className="card-img-top" alt="..." />
                          <div className="card-body">
                            <h1 className="card-title">Meghalaya</h1>
                            <p><p1>₹ 12499.00</p1> <s>₹ 14499.00</s> / Per person</p>
                            <ul className="info clearfix" style={{position: 'relative',display: 'block',background: '#f5f7f8', padding: '10px 10px 9px 14px',  borderRadius: '5px',  marginBottom: '22px',}}>
                              <li><i className="far fa-clock"></i>4Nights - 5Days</li>
                              <li><i className="far fa-map"></i>
                                Hyderabad, Bangalore, Delhi
                              </li>
                            </ul>
                            <p style={{ textAlign: 'justify' }}>The unique thing about the Ladakh terrain is that it has mountains, forests, deserts, lakes, rivers, waterfalls in one of the beautiful and dynamic geography. On a journey to the top of the world.</p>
                            <div className="btn-flx" style={{display: 'flex', justifyContent: 'space-between'}}> <Link to='/user_meghalaya' className="btn " style={{ backgroundColor: '#54bce4', color: 'white' }}>See Details&nbsp;<i className="fa fa-binoculars"></i></Link>
                              <Link to='/checkout' className="btn " style={{ backgroundColor: '#228b22', color: 'white' }}>Book Trip&nbsp;<i className="fa fa-shopping-cart"></i></Link></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>




            
        </div>
      </section>
    </div>

    )
}

export default User_Tourgrid