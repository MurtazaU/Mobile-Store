import React from 'react'
import {Link} from 'react-router-dom'
import PayPalButton from './paypal'

export default function CartTotals({value}) {
 const {cartSubtotal, cartTax, cartTotal, clearCart, history } = value;
 return (
  <div>
   <React.Fragment>
    <div className="container">
     <div className="row">
      <div className="col-6 mt-4 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
       <Link to="/">
        <button className="btn btn-outline-danger text-uppercase b-3 px-5" type="button" onClick={()=> clearCart()}>
         Clear Cart
        </button>
       </Link>
       <h5>
        <span className="text-title">
        Subtotal :
        </span>
        <strong> ${cartSubtotal}</strong>
        </h5>
       <h5>
        <span className="text-title">
        Tax :
        </span>
        <strong> ${cartTax}</strong>
        </h5>
       <h5>
        <span className="text-title">
        Cart Total :
        </span>
        <strong> ${cartTotal}</strong>
        </h5>
        <PayPalButton total={cartTotal} clearCart={clearCart} history={history} />
      </div>
     </div>
    </div>
   </React.Fragment>
  </div>
 )
}
