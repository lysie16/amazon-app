import './styles.css';
import React from 'react'
import Product from "../../product/index";

function Home() {
    return (
        <div className="home">
            <img className="home_image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
            alt=""/>

            {/* Product id, title, price, rating, image */}
            <div className="home_row">
            <Product 
            id="123456"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
            />

            <Product 
            id="156738"
            title="Cell Phone Stand Adjustable, Lamicall Phone Stand: Charging Mobile Holder, and Cradle"
            price={16.99}
            rating={5}
            image="https://20fd661yccar325znz1e9bdl-wpengine.netdna-ssl.com/wp-content/uploads/2020/08/lamicall-adjustable-phone-charging-stand-phone-charging-holder.jpg"
            />      
         </div>

         <div className="home_row">
            <Product 
            id="123456"
            title="All-new Echo Dot (4th Gen) | Smart speaker with Alexa | Charcoal"
            price={69.99}
            rating={4}
            image="https://www.thesource.ca/medias/20200925150927-108091083-A.jpg-mediaConversion-640-x-480-mediaConversion-400-x-300-0?context=bWFzdGVyfGltYWdlc3w3MTMxMXxpbWFnZS9qcGVnfGltYWdlcy9oYTgvaGUyLzkyOTk4NTMxODA5NTguanBnfDY1NGVkN2VkODhlNjcxYzUzODdiNDBkNDc5Y2IwMDg4Y2FhY2MxZDBkYjZlMjdlMmM3NWJlOWZkODQ1ZDFjZDg"
            />

            <Product 
            id="123456"
            title="Super Mario Party Superstars - Nintendo Switch - Standard Edition"
            price={78.99}
            rating={3}
            image="https://m.media-amazon.com/images/I/91UnbpngueL._AC_SY445_.jpg"
            />    

            <Product 
            id="123456"
            title="Herschel Supply Co.Alder Crossbody, Black, One Size"
            price={11.96}
            rating={4}
            image="https://m.media-amazon.com/images/I/91Sg-QIS4GS._AC_SL1500_.jpg"
            />   

         </div>

         <div className="home_row">
         <Product 
            id="123456"
            title="Intex Explorer K2 Kayak, 2-Person Inflatable Kayak Set with Aluminum Oars"
            price={254.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/71Gix6EC8hL._AC_SX466_.jpg"
            />   
         </div>
        </div>
    )
}

export default Home;