import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import { useStateValue } from '../../StateProvider'
import logo from '../../Images/logo.png'
import {AiOutlineSearch} from 'react-icons/ai'
import {AiOutlineShoppingCart} from 'react-icons/ai'

 const Navbar = () => {
    const [{ basket }, dispatch] = useStateValue() //array to get multiple things
    console.log(basket)

    return (
        <div className="header">
            <Link to='/' className='logo-con'>
                <img src={logo} alt='logo'/>
            </Link>

            //search  box
            <div className="search">
            <input type="text" className="header-searchInput"/>
            <AiOutlineSearch className="searchIcon"/>
            </div>

            <div className="header-nav">
                //link 1
                <Link to="/login" className="header-link">
                    <div className="header-option">
                        <span className="header-optionLineOne">Hello Qazi</span>
                        <span className="header-optionLineTwo">Sign In</span>
                    </div>
                </Link>

                //link 2
                <Link to="/" className="header-link">
                    <div className="header-option">
                        <span className="header-optionLineOne">Returns</span>
                        <span className="header-optionLineTwo">Orders</span>
                    </div>
                </Link>

                //link 3
                <Link to="/" className="header-link">
                    <div className="header-option">
                        <span className="header-optionLineOne">Your</span>
                        <span className="header-optionLineTwo">Prime</span>
                    </div>
                </Link>

                //4th Link
                <Link to="/cart" className="header-link">
                    <div className="header-optionBasket">
                        <AiOutlineShoppingCart/>
                        {/* <span className="header-optionLineTwo header-basketCount">0</span> */}
                        <span className="header-optionLineTwo header-basketCount">{basket?.length}</span>
                    </div>
                </Link>
            </div>

        </div>
    )
}

export default Navbar;
