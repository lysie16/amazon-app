import React from 'react'
import './styles.css'

 function Product({ id, title, image, price, rating}) {

    const Cart = (a) => {
        alert(a);
      }

    return (
        <div className="product">
        <div className="product_info">
            <p>{title}</p>
            <p className="product_price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="product_rating">
                {Array(rating)
                .fill()
                .map((_) => (
                    <p>⭐</p>
                ))}
         </div>
        </div>
    
            <img src={image}  alt="" />
            <button onClick={() => Cart("Added to Cart")}>Add to basket</button>
        </div>
    );
}

export default Product;
