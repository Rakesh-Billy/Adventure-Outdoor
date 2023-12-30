import React from 'react'
import style from "./checkout.module.css"

function showAlert() {
  alert('Tour Booked Sucessfully');
}


function Checkout() {
  return (
    <div className={style.container} >
      <main>
        <div className={style.form_container}>
          <h2>Card Details</h2>
          <p style={{ fontSize: '18px' }}>Accepted Cards</p>
          <span style={{ marginTop: '20px', marginBottom: '20px' }}>
            <i className="fa-brands fa-cc-visa fa-xl" style={{ marginTop: '20px', marginBottom: '30px' }}>&nbsp;</i>
            <i className="fa-brands fa-cc-mastercard fa-xl">&nbsp;</i>
            <i className="fa-brands fa-cc-paypal fa-xl">&nbsp;</i>
            <i className="fa-brands fa-cc-amazon-pay fa-xl">&nbsp;</i>
          </span>

          <form action="#" method="post">
            <div className={style.form_group}>
              <input
                type="name"
                id="email"
                name="email"
                style={{ fontSize: '15px' }}
                placeholder="Cardholder's Name"
                required
              />
            </div>
            <div className={style.form_group}>
              <input
                type="text"
                id="mobile"
                name="mobile"
                placeholder="Card Number"
                style={{ fontSize: '15px' }}
                required
              />
            </div>
            <div className={style.form_group}>
              <input
                type="text"
                id="mobile"
                name="mobile"
                placeholder="Expiration"
                style={{ fontSize: '15px' }}
                required
              />
            </div>
            <div className={style.form_group}>
              <input
                type="text"
                id="mobile"
                name="mobile"
                placeholder="CVV"
                style={{ fontSize: '15px' }}
                required
              />
            </div>
            <hr />
            <div className="amount">
              <p>Subtotal</p>
              <span id="sub-total"></span>
            </div>
            <div className="amount">
              <p>Total(Incl.taxes)</p>
              <span id="total-amount"></span>
            </div>
            <button type="submit"  onClick={showAlert}>
              CHECKOUT <i className="fa-solid fa-arrow-right"></i>
            </button>
          </form>
        </div>
      </main>
    </div>  )
}

export default Checkout