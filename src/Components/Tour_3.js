import React from 'react'
import style from "./tours.module.css"
function showAlert() {
  alert('Login to Continue');
}
function Tour_3() {
  return (
    <> <div className={style.main1} style={{ backgroundImage: 'url(Images/background-coorg.png)' }}>
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-12 col-lg-12">
          <div className={style.text}>
            <span><i className="fa-solid fa-star" style={{ color: '#f2ae1c' }}></i> 4 Super</span>
            <p>Coorg and chikmangulur</p>
            <div className={style.num_back}>
              <span><p1>₹ 6999.00 </p1><p2><s> ₹ 7500.00</s> / Per Person</p2></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className={style.main2}>
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-12 col-lg-8">
          <div className={style.overview}>
            <p1>Overview</p1>
            <p>
              A perfect weekend getaway into the nature from Hyderabad. Also known as Telangana Ooty, it has dense forests in Telangana region which is rich in beautiful flora. This place has some small adventurous activities which are fun to do on a weekend. The scenic beauty and tranquility of the place with some small adventures makes it a perfect getaway.
            </p>
          </div>
          <div className={style.Tour_Details}>
            <ul className="info-list clearfix" style={{display: 'flex', justifyContent: 'space-between', background: '#f5f6f6',  border: '1px solid #e6ebeb',  borderRadius: '8px', paddingTop:'30px',  padding: '15px',}}>
              <li id="tour_duration"><i className="far fa-clock"></i> 3 Days - 2 Nights</li>
              <p>|</p>
              <li id="tour_age_limit"><i className="far fa-user"></i> Age Limit - 18 years</li>
              <p>|</p>
              <li id="tour_starting_points"><i className="far fa-map"></i> Hyderabad</li>
            </ul>
          </div>
          <div className={style.overview_inner}>
            <table className="clearfix table table-bordered">
              <tbody>
                <tr data-aos="fade-up" className="aos-init aos-animate">
                  <td><span>Starting Dates</span></td>
                  <td id="tour_starting_dates">Sorry, There are no trips for a couple of weeks</td>
                </tr>
                <tr data-aos="fade-up" className="aos-init aos-animate">
                  <td><span>Departure Time</span></td>
                  <td id="tour_departure_time" style={{ padding: '35px 0px 24px 10px' }}>16:30</td>
                </tr>
                <tr data-aos="fade-up" className="aos-init aos-animate">
                  <td><span>Return Time</span></td>
                  <td id="tour_return_time" style={{ padding: '35px 0px 24px 10px' }}>12:00</td>
                </tr>
                <tr className="clearfix aos-init aos-animate" data-aos="fade-up">
                  <td><span>Included</span></td>
                  <td id="tour_inclusions">
                    <ul className="included-list clearfix">
                      <li><i className="fa fa-check" style={{ color: 'green', fontSize: '18px' }}></i>&nbsp;&nbsp;&nbsp;&nbsp;food</li>
                      <li><i className="fa fa-check" style={{ color: 'green', fontSize: '18px' }}></i>&nbsp;&nbsp;&nbsp;&nbsp;games</li>
                      <li><i className="fa fa-check" style={{ color: 'green', fontSize: '18px' }}></i>&nbsp;&nbsp;&nbsp;&nbsp;camping</li>
                      <li><i className="fa fa-check" style={{ color: 'green', fontSize: '18px' }}></i>&nbsp;&nbsp;&nbsp;&nbsp;morning trek</li>
                      <li><i className="fa fa-check" style={{ color: 'green', fontSize: '18px' }}></i>&nbsp;&nbsp;&nbsp;&nbsp;trek lead</li>
                    </ul>
                  </td>
                </tr>
                <tr className="clearfix aos-init aos-animate" data-aos="fade-up">
                  <td><span>Excluded</span></td>
                  <td id="tour_exclusions">
                    <ul className="excluded-list clearfix">
                      <li><i className="fa fa-times-circle" style={{ color: 'red', fontSize: '18px' }}></i>&nbsp;&nbsp;&nbsp;&nbsp;Transportation</li>
                      <li><i className="fa fa-times-circle" style={{ color: 'red', fontSize: '18px' }}></i>&nbsp;&nbsp;&nbsp;&nbsp;Personal expenses</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-12 col-md-12 col-lg-4">
          <div className={style.form_container_2}>
            <h2 style={{ margin: '25px 0' }}>Book This Tour</h2>
            <form action="#" method="post">
              <div className="form-group">
                <input type="text" id="fname" name="fname" placeholder="First Name" required />
              </div>
              <div className="form-group">
                <input type="text" id="lname" name="lname" placeholder="Last Name" required />
              </div>
              <div className="form-group">
                <input type="email" id="email" name="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <input type="text" id="mobile" name="mobile" placeholder="Phone" required />
              </div>
              <button type="submit" onClick={showAlert}>Book Tour</button>
            </form>
          </div>
          <div className={style.form_container_3}>
            <p1>Conditions</p1>
            <p>Terms & Conditions</p>
            <p>Cancellation Policy</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className={style.background_color}>
    <div className={style.main3}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-12 col-lg-12">
            <div className="tour-itinery-heading">
              <h1>Tour Itinerary</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className={style.main4}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-12 col-lg-6">
            <div className="tour-itinerary-heading">
              <h1>Day 1</h1>
              <h2>Mysore railway station</h2>
              <p1>Mysore / Karnataka</p1>
              <p>Mysuru Junction railway station. It was later converted into a non-electrified broad-gauge line. It has now been converted to a double-line, electrified route.</p>
              <h2>Kemmangundi</h2>
              <p1>Chikmagalur / Karnataka</p1>
              <p>Kemmanagundi is located at a height of 1434m above sea level and is famous for its beautifully laid-out ornamental gardens, enchanting mountains and valleys views. The picturesque sunset view from the Raj Bhavan is every photographer's delight.</p>
              <h2>Z TREK POINT</h2>
              <p1>Mysore / Karnataka</p1>
              <p>Kemmannugundi (Red Soil Pit) is a hill station in Tarikere taluk of Chikkamagaluru district in the state of Karnataka, India. It is at an elevation of 1434m above sea level, with its peak at 1863m.</p>
              <h2>Hirekolale lake</h2>
              <p1>Chikmagalur / Karnataka</p1>
              <p>This beautiful man-made lake is situated at a distance of 10 km from Chikmagalur and about 50 km from Kemmangundi. It was built as a source of drinking water for the town of Chikmagalur and to supply water for irrigation purposes in the villages nearby.</p>
              <h2>Belur Temple</h2>
              <p1>Chikmagalur / Karnataka</p1>
              <p>The Chennakeshava temple, dedicated to the Hindu god Vishnu, is located in the village of Hullekere, in the Arasikere Taluk, about 22 km from the commercial town Arasikere. It was built in 1163 A.D. by a minister of Hoysala empire king Narasimha I.</p>
              <h2>Chikmagalur Stay</h2>
              <p1>Chikmagalur / Karnataka</p1>
              <p>Overnight stay in Chikmagalur</p>
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-6">
            <div className="tour-itinerary-heading">
              <h1>Day 2</h1>
              <h2>MULANGIRI PEAK POINT</h2>
              <p1>Mysore / Karnataka</p1>
              <p>Mullayyanagiri is the highest peak in Karnataka, India. Mullayyanagiri is located in the Chandra Dhrona Hill Ranges of the Western Ghats of Chikkamagaluru Taluk. With a height of 1,925 meters (6,316 ft), it is the highest peak in Karnataka.</p>
              <h2>JHARI WATER FALLS</h2>
              <p1>Mysore / Karnataka</p1>
              <p>Jhari Waterfalls, also known as the Buttermilk Falls, is situated near Attigundi at a distance of 12 km from Baba Budangiri. It is one of the most famous waterfalls in the Chikmagalur district and one of the best tourist places in the district.</p>
              <h2>Mysore railway station</h2>
              <p1>Mysore / Karnataka</p1>
              <p>Mysuru Junction railway station. It was later converted into a non-electrified broad-gauge line. It has now been converted to a double-line, electrified route.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className={style.Gallery}>
    <div className={style.main5}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-12 col-lg-12">
            <div className="tour-itinery-heading">
              <h1>Photo Gallery</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-3 mt-4">
            <div className="card" style={{ width: '18rem' }}>
              <img src="Images/gallery-1.png" className="card-img-top" alt="..." />
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 mt-4">
            <div className="card" style={{ width: '18rem' }}>
              <img src="Images/gallery-3.png" className="card-img-top" alt="..." />
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 mt-4">
            <div className="card" style={{ width: '18rem' }}>
              <img src="Images/gallery-5.png" className="card-img-top" alt="..." />
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 mt-4">
            <div className="card" style={{ width: '18rem' }}>
              <img src="Images/gallery-7.png" className="card-img-top" alt="..." />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

 </>  )
}

export default Tour_3