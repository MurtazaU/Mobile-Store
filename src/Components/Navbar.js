import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../setup-filese-react-phone-e-commerce-project-master/logo.svg'
import styled from 'styled-components'

export default class Navbar extends Component {
 render() {
  return (
   <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">

    <Link to="/">
         {/* https://www.iconfinder.com/icons/1243689/call_phone_icon
Creative Commons (Attribution 3.0 Unported);
https://www.iconfinder.com/Makoto_msk */}
<img src={logo} alt="store" className="navbar-brand" />
    </Link>
    <ul className="navbar-nav align-items-center">
     <li className="nav-item ml-5">
      <Link to="/" className="nav-link">
       products
      </Link>
     </li>
    </ul>
    <Link to="/cart" className="ml-8">
     <ButtonContainer>
       <span className="text-right">
      <i className="fas fa-cart-plus" />
      </span>
        My Cart
     </ButtonContainer>
    </Link>
   </NavWrapper>
  )
 }
 
}

const NavWrapper = styled.nav`
background: var(--mainBlue);
.nav-link{
  color:var(--mainWhite)!important;
  font-size:1.3rem;
  text-transform: capitalize;
}
`
const ButtonContainer = styled.button `
text-transform:capitalize;
font-size:1.4rem;
background: transparent;
border: 0.05rem solid var(--lightBlue);
color: var(--lightBlue);
border-radius: 0.5rem;
padding: 0.2rem 0.5rem;
cursor:pointer;
margin:0.2rem 0.5rem 0.2rem 0;

transition:all 0.5s ease-in-out;
&:hover{
  background: var(--lightBlue);
  color: var(--mainBlue);
}
&:focus{
  outline: none;
}


`