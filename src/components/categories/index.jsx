import React from 'react'
import './styles.css';

const Categories = () => {
    return (
        <div class="navbar">
  <a href="#home"> ≡ All</a>
  <a href="#news">Best Sellers</a>
  <a href="#home">Deals Store</a>
  <a href="#news">New Releases</a>

  
  <div class="dropdown">
    <button class="dropbtn">Prime ▼
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
      <img src="https://i.ytimg.com/vi/MFPg04jAfcY/maxresdefault.jpg" width="500" height="300" alt="" />
    </div>
  </div> 

  <a href="#news">Customer Service</a>
  <a href="#home">Gift Ideas</a>
  <a href="#news">Electronics</a>
  <a href="#home">Fashion</a>
  <a href="/">Home</a>
  <a href="#news">Books</a>
  <a href="#home">Toys & Games</a>
</div>
    )
}

export default Categories;