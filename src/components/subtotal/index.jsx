import React from 'react'
import './styles.css'
import CurrencyFormat from "react-currency-format";

function Subtotal() {
    return (
        <div className="subtotal">
            {/* Price */}
            <CurrencyFormat
            rendertext={(value) => (
             <>
             <p>
                 Subtotal (0 items)
             </p>
            <small className="subtotal_gift">
                <input type="checkbox" />This order contains a gift
            </small>
            </>
        )}
            decimalScale={2}
            value={0}
            displayType={"text"}
            thousdandSeperator={true}
            prefix={"$"}
             />
            <button>Proceed to Checkout</button>
        </div>
    );
}

export default Subtotal;
