import './styles.css';
import React from 'react'
import Product from "../product/index";

function Home() {
    return (
        <div className="home">
            <img className="home_image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
            alt=""/>

            {/* Product id, title, price, rating, image */}
            <Product 
            id="123456"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
            />
            {/* Product */}
            
        </div>
    )
}

export default Home;