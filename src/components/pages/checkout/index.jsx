import React from 'react'
import './styles.css';
import CheckoutProduct from '../../checkoutproduct/index';
import Subtotal from '../../subtotal/index';

function Checkout() {

    const basket = [""];


    return (
        <div className="checkout">
         <div className="checkout_left">
            <img className="checkout_ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" 
            alt=""
            />
            {/* <div>
                <h2>Your Shopping Basket is Empty</h2>
                <p>You have no items in your basekt. To buy one or more items,
                     click "Add to basket" next to the item.</p>
            </div> */}
        <div>
            <h2 className="checkout_title"> Your Shopping Basket:</h2>
            {/*List out all of the Checkout Products*/}
            {basket?.map((item) => (
            <CheckoutProduct 
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.image}
                rating={item.rating}
            />
            ))}
        </div>
        </div>
        <div className="checkout_right">
            <Subtotal /> 
        </div>
     </div>
    );
}

export default Checkout;

