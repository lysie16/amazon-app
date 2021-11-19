import React from 'react'
import './styles.css';

function CheckoutProduct({ id, title, image, price, rating}) {

    console.log({ id, title, image, price, rating});
    
    const removeFromBasket = () => {
        //remove item
    }
    return (
        <div className="checkoutProduct">
           <img className="checkoutProduct_image" src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-11-select-wifi-silver-202104_FMT_WHH?wid=940&hei=1112&fmt=p-jpg&qlt=95&.v=1617126626000" alt=""/>

            <div className="checkoutProduct__info">
                <p className="checkoutProduct_title">New Apple Ipad Pro (12.9-inch, Wi-Fi, 128GB
                -Silver (4th Generation)</p>

                <p className="checkoutProduct_price">
                    <small>$</small>
                    <strong>11.95</strong>
                </p>
                <div className="checkoutProduct_rating">
                   {Array(rating)
                   .fill()
                   .map((_, i) => (
                       <p>⭐</p>
                   ))} 
                </div>

                <button onclick={removeFromBasket}>Remove from basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct;
