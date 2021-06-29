import React, { Component } from 'react'
import {ProductConsumer} from '../Context'
import {Link} from 'react-router-dom'
import {ButtonContainer} from './Button'

export default class Details extends Component {
 render() {
  return (
   <ProductConsumer>
    {value => {
    const {id, company, img, info, price, title, inCart} = value.detailProduct;
    return (
     <div className="container py-5">
      {/* Title */}
      <div className="row">
       <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
        <h1>{title}</h1>
       </div>
      </div>
      {/* End Title */}
      {/* product Info */}
      <div className="row">
       {/* img */}
       <div className="col-10 mx-auto col-md-6 my3 text-capitalize">
        <img src={img} alt={title} className="img-fluid" />
       </div>
       {/* img end */}
       {/* Product text */}
       <div className="col-10 mx-auto col-md-6 my3 text-capitalize">
        <h1>model : {title}</h1>
        <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
         made by: 
         <span className="text-uppercase">
          {company}
          </span>
        </h4>
        <h4 className="text-blue">
         <strong> price: <span>$</span> {price} </strong>
        </h4>
        <p className="text-capitalize font-weight-bold mt-3 mb-0">
         Info:
        </p>
        <p className="text-muted">
         {info}
        </p>
        {/* button */}
        <div>
         <Link to='/'>
          <ButtonContainer>Back to Products</ButtonContainer>
         </Link>
         <ButtonContainer cart
          disabled={inCart ? true : false} onClick={()=>{
          value.addToCart(id)
          value.openModal(id)

         }}>
          {inCart ? 'In Cart' : 'Add to Cart'}
         </ButtonContainer>
        </div>
        {/* end of buttons */}
       </div>
       {/* end of product text */}
      </div>
      {/* End of Product Info */}
     </div>
    )
    }}
   </ProductConsumer>
  )
 }
}
