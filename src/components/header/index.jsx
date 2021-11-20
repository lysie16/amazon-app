import React from 'react'
import './styles.css';
import { Link } from "react-router-dom";
// import useStateValue from '../../StateProvider';
//import { SearchIcon } from '@mui/icons-material/Search';
import { HiOutlineShoppingCart } from "react-icons/hi";
import { AiOutlineSearch } from "react-icons/ai";



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
         <AiOutlineSearch className="header_searchIcon" />  
        </div>

        {/* 5 links */}
        <div className="header_nav">
            {/*1st Link*/}
            <div className="header_link">
            <div className="header_option">
                    <img className="header_optionFlag" src="https://images.emojiterra.com/twitter/v12.1.5/512px/1f1e8-1f1e6.png" height="25px" width="30px" alt="" />
               </div>
            </div>

            <Link to="/login" className="header_link">
            <div className="header_option">
                <span className="header_optionLineOne">Hello, Sign In</span>
                <span className="header_optionLineTwo">Accounts & Lists </span>
            </div>
            </Link>
            {/*2nd Link*/}
            <Link to="/" className="header_link">
            <div className="header_option">
                <span className="header_optionLineOne">Returns</span>
                <span className="header_optionLineTwo">& Orders</span>
            </div>
            </Link>

        </div>

        {/*Basket icon with number */}
        <Link to="/checkout">
         <div className="header_optionBasket">
             {/* Shopping Basket Icon */}
                <HiOutlineShoppingCart  /> 
             {/* Number of items in the basket */}
             <span className="header_optionLineTwo header_basketCount">0</span>
         </div>
        </Link>
      </nav>

    );
}

export default Header
