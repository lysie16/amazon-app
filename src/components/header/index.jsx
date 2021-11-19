import React from 'react'
import './styles.css';
import { Link } from "react-router-dom";
// import useStateValue from '../../StateProvider';
// import { SearchIcon } from '@mui/icons-material/Search';
// import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';


function Header() {
    return (
    <nav className="header" >

        {/* Logo on the left -> img */ }
        <Link to="/">
        <img 
        className="header_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt=""
        />
        </Link>


        {/* Search Box */}
        <div className="header_search">
        <input type="text" className="header_searchInput" />
        {/* <SearchIcon className="header_searchIcon" />  */}
        </div>

        {/* 3 links */}
        <div className="header_nav">
            {/*1st Link*/}
            <Link to="/login" className="header_link">
            <div className="header_option">
                <span className="header_optionLineOne">Hello,</span>
                <span className="header_optionLineTwo">Sign In </span>
            </div>
            </Link>
            {/*2nd Link*/}
            <Link to="/" className="header_link">
            <div className="header_option">
                <span className="header_optionLineOne">Returns</span>
                <span className="header_optionLineTwo">& Orders</span>
            </div>
            </Link>

            {/*3rd Link*/}
            <Link to="/" className="header_link">
            <div className="header_option">
                <span className="header_optionLineOne">Your</span>
                <span className="header_optionLineTwo">Prime</span>
            </div>
            </Link>

            {/*4th Link*/}

        </div>

        {/*Basket icon with number */}
        <Link to="/checkout">
         <div className="header_optionBasket">
             {/* Shopping Basket Icon */}
            {/* <ShoppingBasketIcon /> */}
             {/* Number of items in the basket */}
             <span className="header_optionLineTwo header_basketCount">0</span>
         </div>
        </Link>
      </nav>

    );
}

export default Header
