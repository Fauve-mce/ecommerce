import React, { useState } from 'react'
import './Navbar.css'

import logofarmer from '../Assets/logo-farmer.png'
import basket from '../Assets/basket.png'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [menu,setMenu] =useState("shop");

  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logofarmer} alt="" />
            <p>FARMER</p>
        </div>
        <ul className="nav-menu">
            <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration: 'none'}} to='/shop'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("fruits")}}><Link style={{textDecoration: 'none'}} to='/fruits'>Fruits</Link>{menu==="fruits"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("légumes")}}><Link style={{textDecoration: 'none'}} to='/légumes'>Légumes</Link>{menu==="légumes"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("viandes")}}><Link style={{textDecoration: 'none'}} to='/viandes'>Viandes</Link>{menu==="viandes"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("laitier")}}><Link style={{textDecoration: 'none'}} to='/laitier'>Laitier</Link>{menu==="laitier"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
            <Link to='/login'><button>Login</button></Link>
            <Link to='/cart'><img src={basket} alt=""/></Link>
            <div className="nav-cart-count">0</div>
        </div>
    </div>
  )
}

export default Navbar
