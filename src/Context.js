import React, { Component } from 'react';
import { storeProducts, detailProduct } from './setup-filese-react-phone-e-commerce-project-master/data';
import Axios from 'axios'

const ProductContext = React.createContext();
//Whenever we create a context it comes with two things
// 1- Provider
// 2-Consumer

class ProductProvider extends Component {
   state = {
      product: [],
      detailProduct: detailProduct,
      cart: [],
      modalOpen: false,
      modalProduct: detailProduct,
      cartSubtotal: 0,
      cartTax: 0,
      cartTotal: 0,
   };
   componentDidMount() {
      this.setProduct()
   }
   setProduct = () => {
      let tempProduct = [];
      storeProducts.forEach(item => {
         const singleItem = { ...item };
         tempProduct = [...tempProduct, singleItem];
         this.setState(() => {
            return { product: tempProduct }
         })
      })
   }


   getItem = (id) => {
      const products = this.state.product.find(item => item.id === id);
      return products;
   }

   handleDetail = (id) => {
      const products = this.getItem(id);
      this.setState(() => {
         return { detailProduct: products }
      })
   }
   addToCart = id => {
      let tempProduct = [...this.state.product]
      const index = tempProduct.indexOf(this.getItem(id))
      const product = tempProduct[index]
      product.inCart = true;
      product.count = 1;
      const price = product.price;
      product.total = price;
      this.setState(() => {
         return { product: tempProduct, cart: [...this.state.cart, product] }
      }, () => {
         console.log(this.state)
         this.addTotal()
         const localData = localStorage.getItem('cart');
         this.addToStorage();
         return localData ? JSON.parse(localData) : [];


      })
   }
   addToStorage = () => {
      const cart = this.state.cart
      localStorage.setItem('cart', JSON.stringify(cart))
   }

   openModal = (id) => {
      const product = this.getItem(id);
      this.setState(() => {
         return { modalProduct: product, modalOpen: true }
      })
   }

   closeModal = () => {
      this.setState(() => {
         return { modalOpen: false }
      })
   }

   increment = (id) => {
      let tempCart = [...this.state.cart]
      const selectedProduct = tempCart.find(item => item.id === id)
      const index = tempCart.indexOf(selectedProduct)
      const product = tempCart[index];
      product.count = product.count + 1
      product.total = product.count * product.price

      this.setState(() => {
         return {
            cart: [...tempCart],
         }
      }, () => {
         this.addTotal()
      })
   }
   decrement = (id) => {
      let tempCart = [...this.state.cart]
      const selectedProduct = tempCart.find(item => item.id === id)
      const index = tempCart.indexOf(selectedProduct)
      const product = tempCart[index];
      product.count = product.count - 1

      if (product.count === 0) {
         this.removeItem(id)
      }
      else {
         product.total = product.count * product.price
      }

      this.setState(() => {
         return {
            cart: [...tempCart],
         }
      }, () => {
         this.addTotal()
      })
   }
   removeItem = (id) => {
      let tempProduct = [...this.state.product];
      let tempCart = [...this.state.cart];

      tempCart = tempCart.filter(item => item.id !== id)
      const index = tempProduct.indexOf(this.getItem(id))
      let removedProduct = tempProduct[index];
      removedProduct.inCart = false;
      removedProduct.count = 0
      removedProduct.total = 0
      this.setState(() => {
         return {
            cart: [...tempCart],
            product: [...tempProduct],
         }
      }, () => {
         this.addTotal()
      })
   }
   clearCart = () => {
      this.setState(() => {
         return {
            cart: []
         }
      }, () => {
         this.setProduct();
         this.addTotal();
      })
   }
   addTotal = () => {
      let subTotal = 0;
      this.state.cart.map(item => (subTotal += item.total))
      const tempTax = subTotal * 0.2;
      const tax = parseFloat(tempTax.toFixed(2));
      //  Making the no. only 2 decimals
      const total = subTotal + tax
      this.setState(() => {
         return {
            cartSubtotal: subTotal,
            cartTotal: total,
            cartTax: tax,
         }
      })
   }



  
   render() {
      return (
         <ProductContext.Provider value={{
            ...this.state,
            handleDetail: this.handleDetail,
            addToCart: this.addToCart,
            closeModal: this.closeModal,
            openModal: this.openModal,
            clearCart: this.clearCart,
            increment: this.increment,
            decrement: this.decrement,
            removeItem: this.removeItem,
            
         }}>
            {this.props.children}
         </ProductContext.Provider>
      )
   }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer }