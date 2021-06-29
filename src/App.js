import React from 'react'
import {Switch, Route} from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Components/Navbar';
import ProductList from './Components/ProductList';
import Details from './Components/Details'
import Cart from './Components/Cart'
import Default from './Components/Default'
import Modal from './Components/Modal'

const App = () => {
  return (
    // React.Fragment is just like adding a div and section
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ProductList}>
          <ProductList />
        </Route>
        <Route path="/details" component={Details}>
          <Details />
        </Route>
        <Route path="/cart" component={Cart}>
          <Cart />
        </Route>
        <Route component={Default}>
          <Default />
        </Route>
      </Switch>
      <Modal />
    </React.Fragment>
  )
}

export default App
