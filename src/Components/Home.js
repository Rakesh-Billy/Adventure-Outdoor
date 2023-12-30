import React from 'react';
import style from "./Home.module.css"
import { Link } from 'react-router-dom';
function showAlert() {
  alert('Login to Continue');
}

function Home() {
  return (
    <div>
        
     


      {/* Main page START */}

      <div className={style.main1}>
        {/* <div className="main1gradient"></div> */}
        <div className={style.pattern_layer} style={{ backgroundImage: "url(shape-1.png)" }}></div>
        <h2
          style={{
            fontSize: '30px',
            lineHeight: '60px',
            fontFamily: 'Playfair Display, serif',
            fontWeight: 900,
            color: '#ffffff',
            textAlign: 'center',
          }}
        >
          Welcome to Adventure Outdoor
        </h2>
        <br />
        <h1
          style={{
            fontSize: '70px',
            lineHeight: '60px',
            fontFamily: 'Playfair Display, serif',
            fontWeight: 900,
            color: '#ffffff',
            textAlign: 'center',
          }}
        >
          THE WORLD IS WAITING
        </h1>
        <Link to='/tours'><button>Explore Trips</button></Link>
      </div>

      {/* Main page END */}


      {/* Our Best Deals START */}

      <section id="deals">
        <div className={style.main2}>
          <p
            style={{
              fontSize: '50px',
              fontFamily: 'Playfair Display, serif',
              fontWeight: 900,
              color: '#061a3a',
              textAlign: 'center',
              marginBottom: '40px',
            }}
          >
            Our Most Popular Adventures
          </p>
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6 col-lg-4 ">
                <div className={style.card}>
                <div className="card" style={{ width: '20rem', margin: '20px auto' }}>
                  <img src="Images/goa.png" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h1 className="card-title">Goa</h1>
                    <p>
                      <p1>₹ 8499.00</p1> <s>₹ 9999.00</s> / Per person
                    </p>
                    <div className={style.info }>
                    <ul className="info clearfix" >
                      <li>
                        <i className="far fa-clock"></i> 2 Nights - 3 Days
                      </li>
                      <li>
                        <i className="far fa-map"></i> Hyderabad, Banglore
                      </li>
                    </ul>
                    </div>
                    
                    <p style={{ textAlign: 'justify' }}>
                    Goa is a state in western India with coastlines stretching along the Arabian Sea. Its long history as a Portuguese colony prior to 1961 is evident in its preserved 17th-century churches.                    </p>
                    <div className={style.btn}>
                      <Link to='/ananthagiri' className="btn" style={{ backgroundColor: '#54bce4', color: 'white' }}>
                        See Details <i className="fa fa-binoculars"></i>
                      </Link>
                      <a onClick={showAlert} className="btn "  style={{ backgroundColor: '#228b22', color: 'white' }} >
                        Book Trip <i className="fa fa-shopping-cart"></i>
                      </a>
                    </div>
                  </div>
                </div>
                </div>
                
              </div>
              <div className="col-12 col-md-6 col-lg-4 ">
              <div className={style.card}>

                <div className="card" style={{ width: '20rem',margin: '20px auto' }}>
                  <img src="Images/leh.png" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h1 className="card-title">Leh Ladakh</h1>
                    <p>
                      <p1>₹ 14999.00</p1> <s>₹ 15999.00</s> / Per person
                    </p>
                    <div className={style.info }>

                    <ul className="info clearfix">
                      <li>
                        <i className="far fa-clock"></i> 6 Nights - 7  Days
                      </li>
                      <li>
                        <i className="far fa-map"></i> Hyderabad, Delhi
                      </li>
                    </ul>
                    </div>
                    <p style={{ textAlign: 'justify' }}>
                      The unique thing about the Ladakh terrain is that it has mountains, forests, deserts, lakes, rivers, waterfalls in one of the beautiful and dynamic geography. On a journey to the top of the world.
                    </p>
                    <div className={style.btn}>
                      <Link to='/leh' className="btn" style={{ backgroundColor: '#54bce4', color: 'white' }}>
                        See Details <i className="fa fa-binoculars"></i>
                      </Link>
                      <a onClick={showAlert} className="btn"  style={{ backgroundColor: '#228b22', color: 'white' }}>
                        Book Trip <i className="fa fa-shopping-cart"></i>
                      </a>
                    </div>
                  </div>
                </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
               <div className={style.card}>

                <div className="card" style={{ width: '20rem', margin: '20px auto' }}>
                  <img src="Images/manali.png" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h1 className="card-title">Manali</h1>
                    <p>
                      <p1>₹ 13999.00</p1> <s>₹ 15500.00</s> / Per person
                    </p>
                    <div className={style.info }>

                    <ul className="info clearfix">
                      <li>
                        <i className="far fa-clock"></i> 4 Nights - 5 Days
                      </li>
                      <li>
                        <i className="far fa-map"></i> Hyderabad, Delhi
                      </li>
                    </ul>
                    </div>
                    <p style={{ textAlign: 'justify' }}>
                    Manali is a town, near Kullu town in Kullu district in the Indian state of Himachal Pradesh.[2] It is situated in the northern end of the Kullu Valley, formed by the Beas River. </p>
                    <div className={style.btn}>
                      <Link to='manali' className="btn" style={{ backgroundColor: '#54bce4', color: 'white' }}>
                        See Details <i className="fa fa-binoculars"></i>
                      </Link>
                      <a onClick={showAlert} className="btn" style={{ backgroundColor: '#228b22', color: 'white' }}>
                        Book Trip <i className="fa fa-shopping-cart"></i>
                      </a>
                    </div>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Best Deals END */}

        {/* Fact Start */}

    <section>
      <div className={style.main3}>
        <p
          style={{
            fontSize: '50px',
            fontFamily: 'Playfair Display, serif',
            fontWeight: 900,
            color: '#061a3a',
            textAlign: 'center',
            marginBottom: '40px',
          }}
        >
          Explore Yourself
        </p>


        <div className="container-fluid faqt py-6">
          <div className="container">
            <div className="row g-4 align-items-center">
              <div className="col-lg-7">
                <div className="row g-4">
                  <div className="col-sm-4 wow bounceInUp" data-wow-delay="0.3s">
                    <div className="faqt-item rounded p-4 text-center" style={{ backgroundColor: '#54bce4' }}>
                      <i className="fas fa-users fa-4x mb-4 text-white"></i>
                      <h1 className="display-4 fw-bold" data-toggle="counter-up">
                        689
                      </h1>
                      <p className="text-dark text-uppercase fw-bold mb-0">Happy Customers</p>
                    </div>
                  </div>
                  <div className="col-sm-4 wow bounceInUp" data-wow-delay="0.5s">
                    <div className="faqt-item rounded p-4 text-center" style={{ backgroundColor: '#54bce4' }}>
                      <i className="fas fa-users-cog fa-4x mb-4 text-white"></i>
                      <h1 className="display-4 fw-bold" data-toggle="counter-up">
                        107
                      </h1>
                      <p className="text-dark text-uppercase fw-bold mb-0">Expert Chefs</p>
                    </div>
                  </div>
                  <div className="col-sm-4 wow bounceInUp" data-wow-delay="0.7s">
                    <div className="faqt-item rounded p-4 text-center" style={{ backgroundColor: '#54bce4' }}>
                      <i className="fas fa-check fa-4x mb-4 text-white"></i>
                      <h1 className="display-4 fw-bold" data-toggle="counter-up">
                        153
                      </h1>
                      <p className="text-dark text-uppercase fw-bold mb-0">Events Complete</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 wow bounceInUp" data-wow-delay="0.1s">
                <div className={style.video}>
                  <button
                    type="button"
                    className="btn btn-play"
                    data-bs-toggle="modal"
                    data-src="https://www.youtube.com/watch?v=35npVaFGHMY"
                    data-bs-target="#videoModal"
                  >
                    <span></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Modal Video */}
        <div className="modal fade" id="videoModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content rounded-0">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Youtube Video
                </h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                {/* 16:9 aspect ratio */}
                <div className="ratio ratio-16x9">
                  <iframe
                    className="embed-responsive-item"
                    src=""
                    id="video"
                    allowFullScreen
                    allowScriptAccess="always"
                    allow="autoplay"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
       
      </div>
    </section>

     {/* Fact End */}


    {/*     Why Travel With Us START */}
    <div className={style.main4}>
            <div className="container-fluid blog py-6">
                <div className="container">
                    <div className="text-center wow bounceInUp" data-wow-delay="0.1s">
                        <p style={{ fontSize: '50px', fontFamily: 'Playfair Display', fontWeight: 900, color: '#061a3a', textAlign: 'center', marginBottom: '40px' }}>Why Travel With Us ?</p>
                    </div>
                    <div className="row gx-4 justify-content-center">
                        <div className="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.1s">
                            <div className={style.blog_item}>
                                <div className="overflow-hidden rounded">
                                    <img src="Images/budget-friendly.png" className="img-fluid w-100" alt="" />
                                </div>
                                <div className={style.blog_content}>
                                <div className="blog-content mx-4 d-flex rounded bg-light">
                                    <p1>Budget Friendly</p1>
                                </div>
                                </div>
                                
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.3s">
                            <div className={style.blog_item}>
                                <div className="overflow-hidden rounded">
                                    <img src="Images/customized-trip.png" className="img-fluid w-100" alt="" />
                                </div>
                                <div className={style.blog_content}>
                                <div className="blog-content mx-4 d-flex rounded bg-light">
                                    <p1>Budget Friendly</p1>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.5s">
                            <div className={style.blog_item}>
                                <div className="overflow-hidden rounded">
                                    <img src="Images/safe-for-women.png" className="img-fluid w-100" alt="" />
                                </div>
                                <div className={style.blog_content}>
                                <div className="blog-content mx-4 d-flex rounded bg-light">
                                    <p1>Budget Friendly</p1>
                                </div>
                                </div>
                            </div>
                        </div>
                        {/* 2nd */}
                        <div className="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.5s">
                            <div className={style.blog_item}>
                                <div className="overflow-hidden rounded">
                                    <img src="Images/new-areas.png" className="img-fluid w-100" alt="" />
                                </div>
                                <div className={style.blog_content}>
                                <div className="blog-content mx-4 d-flex rounded bg-light">
                                    <p1>Budget Friendly</p1>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.5s">
                            <div className={style.blog_item}>
                                <div className="overflow-hidden rounded">
                                    <img src="Images/meet-new-people.png" className="img-fluid w-100" alt="" />
                                </div>
                                <div className={style.blog_content}>
                                <div className="blog-content mx-4 d-flex rounded bg-light">
                                    <p1>Budget Friendly</p1>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.5s">
                            <div className={style.blog_item}>
                                <div className="overflow-hidden rounded">
                                    <img src="Images/trek-lead.png" className="img-fluid w-100" alt="" />
                                </div>
                                <div className={style.blog_content}>
                                <div className="blog-content mx-4 d-flex rounded bg-light">
                                    <p1>Budget Friendly</p1>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    {/*     Why Travel With Us END */}


{/*     Gallery START */}

    <section id="gallery">
            <div className={style.main5}>
                {/* Commented out h1 tag */}
                {/* <h1 style={{ fontFamily: 'Brush Script MT', color: '#e7272d', textAlign: 'center' }}>Special Combos</h1> */}
                <p style={{ fontSize: '50px', fontFamily: 'Playfair Display', fontWeight: 900, color: '#061a3a', textAlign: 'center', marginBottom: '40px' }}>Our Gallery</p>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-3 mt-4">
                            <div className="card" style={{ width: '18rem' }}>
                                <img src="Images/gallery-1.png" className="card-img-top" alt="..." />
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 mt-4">
                            <div className="card" style={{ width: '18rem' }}>
                                <img src="Images/gallery-2.png" className="card-img-top" alt="..." />
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 mt-4">
                            <div className="card" style={{ width: '18rem' }}>
                                <img src="Images/gallery-3.png" className="card-img-top" alt="..." />
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 mt-4">
                            <div className="card" style={{ width: '18rem' }}>
                                <img src="Images/gallery-4.png" className="card-img-top" alt="..." />
                            </div>
                        </div>
                        {/* 2nd column */}
                        <div className="col-12 col-md-6 col-lg-3 mt-4">
                            <div className="card" style={{ width: '18rem' }}>
                                <img src="Images/gallery-5.png" className="card-img-top" alt="..." />
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 mt-4">
                            <div className="card" style={{ width: '18rem' }}>
                                <img src="Images/gallery-6.png" className="card-img-top" alt="..." />
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 mt-4">
                            <div className="card" style={{ width: '18rem' }}>
                                <img src="Images/gallery-7.png" className="card-img-top" alt="..." />
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 mt-4">
                            <div className="card" style={{ width: '18rem' }}>
                                <img src="Images/gallery-8.png" className="card-img-top" alt="..." />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

{/*     Gallery END*/}


{/* Review START */}

        <section id="reviews">
            <div className={style.main6}>
                {/* Commented out h1 tag */}
                {/* <h1 style={{ fontFamily: 'Brush Script MT', color: '#e7272d', textAlign: 'center' }}>Special Combos</h1> */}
                <p style={{ fontSize: '50px', fontFamily: 'Playfair Display', fontWeight: 900, color: '#061a3a', textAlign: 'center', marginBottom: '40px' }}>Top Reviews For Us</p>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-4">
                          <div className={style.card}>
                            <div className="card" style={{ width: '20rem', margin: '20px auto', padding: '20px' }}>
                                <span style={{ textAlign: 'center' }}>
                                    <i className="fa-solid fa-star" style={{ color: '#f2ae1c' }}></i>
                                    <i className="fa-solid fa-star" style={{ color: '#f2ae1c' }}></i>
                                    <i className="fa-solid fa-star" style={{ color: '#f2ae1c' }}></i>
                                    <i className="fa-solid fa-star" style={{ color: '#f2ae1c' }}></i>
                                    <i className="fa-solid fa-star" style={{ color: '#f2ae1c' }}></i>
                                </span>
                                <p style={{ textAlign: 'justify' }}>
                                    Had a wonderful experience. Swadeshi travellers is a great choice because of their efforts in planning and organizing. Our Trek lead was Shiva Kumar, a fun-loving, multi-talented, hard-working, and a caring guide who had made the trip successful and memorable with lots of games and fun and made us feel comfortable. Our batch was awesome, everyone was friendly, we had good talks and memories. Feeling blessed to visit these places, especially Murudeshward. Just loved the tent stay, the food provided by STC, and the water sports , travel vechiles were also very good. 
                                </p>
                                <h5 style={{ textAlign: 'center' }}>Akhil Koushik</h5>
                                <p style={{ textAlign: 'center' }}>Traveler</p>
                            </div></div>
                            
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="card" style={{ width: '20rem', margin: '20px auto',padding: '20px' }}>
                                <span style={{ textAlign: 'center' }}>
                                    <i className="fa-solid fa-star" style={{ color: '#f2ae1c' }}></i>
                                    <i className="fa-solid fa-star" style={{ color: '#f2ae1c' }}></i>
                                    <i className="fa-solid fa-star" style={{ color: '#f2ae1c' }}></i>
                                    <i className="fa-solid fa-star" style={{ color: '#f2ae1c' }}></i>
                                </span>
                                <p style={{ textAlign: 'justify' }}>
                                    The trip was ecstatic. I was elated and thrilled! No wonder why Coorg is called the Scotland of India. Places which we visited were Mallali falls, Mandalpatti peak (4000 ft.), River rafting, Belur temple, Mullayanagiri Peak (6,300 ft.), Mysore Palace. Well, the places were indeed beautiful but having a safe and cheerful trip was made possible by Swadeshi Travellers and our trek lead Vineeth. He was so energetic, jovial. Vineeth is moreover like a friend now and was responsible while managing the trip and he made sure we were safe and comfortable throughout the trip.
                                </p>
                                <h5 style={{ textAlign: 'center' }}>Sourav Majhi</h5>
                                <p style={{ textAlign: 'center' }}>Traveler</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="card" style={{ width: '20rem',margin: '20px auto',padding: '20px' }}>
                                <span style={{ textAlign: 'center' }}>
                                    <i className="fa-solid fa-star" style={{ color: '#f2ae1c' }}></i>
                                    <i className="fa-solid fa-star" style={{ color: '#f2ae1c' }}></i>
                                    <i className="fa-solid fa-star" style={{ color: '#f2ae1c' }}></i>
                                    <i className="fa-solid fa-star" style={{ color: '#f2ae1c' }}></i>
                                    <i className="fa-solid fa-star" style={{ color: '#f2ae1c' }}></i>
                                </span>
                                <p style={{ textAlign: 'justify' }}>
                                    I had a great experience with Swadeshi travellers. They gave their best in making our trip memorable and a happy one. Everything went very smoothly, the resort was good and the food was also good. Our guide SAI KIRAN is very helpful and friendly. He just made everything so easy for us and has always taken care of our safety throughout the journey. We are glad that we had a great guide and a great team which just made our trip a happy one. I strongly recommend you people to choose. Never had a better experience than this in my life, and it was a joyous moment in my life.
                                </p>
                                <h5 style={{ textAlign: 'center' }}>Rakesh Billy</h5>
                                <p style={{ textAlign: 'center' }}>Traveler</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

 {/* Review END */}




    </div>
  );
}

export default Home;
