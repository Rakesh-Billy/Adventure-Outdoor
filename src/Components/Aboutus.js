import React from 'react'
import style from './Aboutus.module.css'

function Aboutus() {
  return (
    <div className={style.cont}>
        <main>
            <div className={style.text}>
            <section className="">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col">
        <div className="card">
          <div className="card-body p-3">
            <div className="row" style={{paddingTop:''}}>
              <div className="col-lg-7">
                <p style={{ fontFamily: "'myfont', sans-serif", fontSize: "18px", color: "#6b6b6b", marginTop:'27px' }}>About US</p>
                <h1 style={{ fontFamily: "'Playfair Display'", fontWeight: "bold", paddingTop: "0px",  }}>India's Best Travel Agency Company Since 2018.</h1>
                <p style={{ fontFamily: "'myfont', sans-serif", fontSize: "18px", color: "#6b6b6b", textAlign: "justify", marginTop:'18px'}}>
                  Adventure Outdoor has started as a community in 2018 with the vision to make people in India and across the world view India as an aesthetic travel destination. India is a home for different landscapes like deserts, mountains, beaches, cliffs, forests, plains, and plateaus. All the different landscapes across the globe are found in India, and hence we want our travelers to explore and appreciate India and its diversity, rich culture, heritage, and cuisines. We are a group of passionate travelers who would like to encourage enthusiastic travelers to explore India with our vision and form a community of travelers to spread awareness about India and its prosperity. We, before entrepreneurs, are a group of passionate travelers who have traveled for an extensive period of time and curated perfect itineraries after extensive research and planning. We, as a community, encourage group traveling to widen your exposure, and we also welcome women solo travelers. We assure women's safety is our topmost priority. Our trip hosts are a group of zealous and passionate travelers who can go to any extent to give beautiful memories to our travelers.
                </p>
              </div>
              <div className="col-lg-5">
              <img src="Images/1_(4).jpg" className="card-img-top" alt="..."  style={{  height: "90%",  borderRadius: "5px",marginTop:'27px' }} />

                <div style={{ backgroundImage: "url(Images/1_(1).jpg)", backgroundSize: "cover", height: "100%", padding: "10px", paddingRight: "0px", borderRadius: "5px" }}>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

            </div>
        </main>

    </div>
  )
}

export default Aboutus