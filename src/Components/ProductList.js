import React, { Component } from 'react'
import Product from './Product'
import Title from './Title'
import {ProductConsumer} from '../Context'

export default class ProductList extends Component {
  
 render() {
  return (
   <React.Fragment>
    <div className="py-5">
     <div className="container">
      <Title name="our" title="products" />
      <div className="row">
       <ProductConsumer>
        {value => {
          return value.product.map(product => {
              return <Product key={product.id} product={product} />
            });
          // return (
          //   <div>
          //     <h1>{value.product.title}</h1>
          //     <img src={value.product.img} alt="" />
          //   </div>
          // )
         }}
       </ProductConsumer>
      </div>
     </div>
    </div>
   </React.Fragment>
    // <Product />
  )
 }
}
