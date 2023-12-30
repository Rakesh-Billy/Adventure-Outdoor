import React from 'react'

function Gallery() {
  return (
    <section id="gallery">
    <div className="main5" style={{border: '1px black',
    backgroundColor: 'white',
    paddingTop: '8%',
    paddingBottom: '10%'}}>
        {/* Commented out h1 tag */}
        {/* <h1 style={{ fontFamily: 'Brush Script MT', color: '#e7272d', textAlign: 'center' }}>Special Combos</h1> */}
        <p style={{ fontSize: '50px', fontFamily: 'Playfair Display', fontWeight: 900, color: '#061a3a', textAlign: 'center', marginBottom: '40px' }}>Gallery</p>
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
</section>  )
}

export default Gallery