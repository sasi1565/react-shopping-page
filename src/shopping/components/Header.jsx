import React from 'react'

const Header = () => {
  return (
    <div className='headerSection'>
        <div className='left'>
            <div className="title">
                <h2>Shopping Mall</h2>
            </div>
        </div>
        <div className="center">
            <ul>
                <li>Women</li>
                <li><i className='bx bxs-t-shirt'></i>Men</li>
                <li>Kids</li>
                <li>Beauty</li>
            </ul>
        </div>
        <div className="search">
            <div className='row'>
                <span className='bx bx-search-alt'></span>
                <span><input type="text" placeholder='Search Here.....'/></span>
            </div>
        </div>
        <div className="right">
            <div className="signIn">
                SignIn / SignUp
            </div>
            <div className="cart">
                Cart
            </div>
        </div>
        
    </div>
  )
}

export default Header